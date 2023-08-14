import mongoose from 'mongoose';

const shipSchema = new mongoose.Schema({
  deliveryDays: { type: String },
  carrierName: { type: String },
  trackingNumber: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const Ship = mongoose.model('Ship', shipSchema);
export default Ship;
