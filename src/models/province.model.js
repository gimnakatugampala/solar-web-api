import mongoose from 'mongoose';

const provinceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      minlength: 2,
      maxlength: 12,
      match: /^[A-Z][A-Z0-9-]*$/,
      unique: true
    }
  },
  {
    collection: 'provinces',
    timestamps: true,
    strict: 'throw'
  }
);

const Province = mongoose.model('Province', provinceSchema);

export default Province;
