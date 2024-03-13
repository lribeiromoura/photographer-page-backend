import * as mongoose from 'mongoose';

export const MediatypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
