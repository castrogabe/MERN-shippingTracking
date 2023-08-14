import { useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

export default function Ship() {
  const [deliveryDays, setDeliveryDays] = useState('');
  const [carrierName, setCarrierName] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    let newShip;
    try {
      newShip = {
        deliveryDays,
        carrierName,
        trackingNumber,
      };
      setLoading(false);
      toast.success('Success, delivery message sent!', { autoClose: 1000 }); // Display success message for 1 seconds
    } catch (err) {
      setLoading(false);
      toast.error('Delivery not sent', { autoClose: 1000 }); // Display error message for 1 seconds
    }
    axios.post('/ship', newShip);
  };

  return (
    <Container className='container'>
      <Helmet>
        <title>Shipping Form</title>
      </Helmet>
      <br />
      <div className='box'>
        <h1>Enter Shipping Details</h1>
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='deliveryDays'>
          <Form.Label>Delivery Days</Form.Label>
          <Form.Control
            placeholder='delivery days'
            value={deliveryDays}
            onChange={(e) => setDeliveryDays(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='carrierName'>
          <Form.Label>Carrier Name</Form.Label>
          <Form.Control
            placeholder='carrier name'
            value={carrierName}
            onChange={(e) => setCarrierName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='tackingNumber'>
          <Form.Label>Tracking Number</Form.Label>
          <Form.Control
            placeholder='trackingNumber'
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
        </Form.Group>

        <div>
          <Button variant='primary' disabled={loading} type='submit'>
            {loading ? 'Sending...' : 'Submit'}
          </Button>
        </div>

        <hr />

        <h1 className='box'>Your delivery info posted at a glance</h1>
        <div className='box'>
          <Table responsive striped bordered className='noWrap'>
            <thead>
              <tr>
                <th>DELIVERY DAYS</th>
                <th>CARRIER NAME</th>
                <th>TRACKING NUMBER</th>
              </tr>
            </thead>
            <tbody>
              {/* we do not need to map to display the data in the same screen */}
              <tr>
                <td>{deliveryDays}</td>
                <td>{carrierName}</td>
                <td>{trackingNumber}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
      </Form>
    </Container>
  );
}
