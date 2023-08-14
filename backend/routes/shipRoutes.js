import express from 'express';
import Ship from '../models/shipModel.js';

const router = express.Router();

// info comes from frontend > screens > Shipping.js
router.route('/ship').post((req) => {
  const { deliveryDays, carrierName, trackingNumber } = req.body;
  const ship = new Ship({
    deliveryDays,
    carrierName,
    trackingNumber,
  });
  ship.save();
});

// shipping info gets sent to frontend > screens > Delivery.js
router.route('/delivery').get((req, res) => {
  Ship.find().then((foundShip) => res.json(foundShip));
});

export default router;
