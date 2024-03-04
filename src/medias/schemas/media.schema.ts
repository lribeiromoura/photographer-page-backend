import * as mongoose from 'mongoose';

export const MediaSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    filename: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
