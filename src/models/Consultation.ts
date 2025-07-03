import mongoose from 'mongoose';

const ConsultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Prevents overwriting model if it already exists in hot reload
export const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', ConsultationSchema);
