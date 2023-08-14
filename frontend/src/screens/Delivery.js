import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function Delivery() {
  const [ship, setShip] = useState([
    {
      deliveryDays: '',
      carrierName: '',
      trackingNumber: '',
    },
  ]);

  useEffect(() => {
    fetch('/delivery')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setShip(jsonRes));
  });

  return (
    <Container>
      <Helmet>
        <title>Tracking Data</title>
      </Helmet>
      <br />
      <h1 className='box'>Your delivery Information</h1>
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
            {/* we need to map from Shipping screen to Delivery screen using map */}
            {ship.map((ship) => (
              <tr>
                <td>{ship.deliveryDays}</td>
                <td>{ship.carrierName}</td>
                <td>{ship.trackingNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Delivery;
