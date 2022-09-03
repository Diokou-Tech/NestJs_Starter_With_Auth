import  { Document } from 'mongoose';
export interface ImageInterface extends Document {
  name: string;
  img_url:string;
}