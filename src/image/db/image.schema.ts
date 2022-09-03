import { Schema } from 'mongoose';

export const imageSchema = new Schema({
  name: {type:String, required: true,unique: true},
  img_url: {type:String, required: true,unique: true}
},{timestamps: true});

