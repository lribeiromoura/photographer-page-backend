import * as mongoose from 'mongoose';

export const TagSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
});
