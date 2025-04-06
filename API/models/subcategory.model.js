//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category is required"],
    lowercase: true,
   
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true,"subCategory is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  subcaticonnm: {
    type: String,
    required: [true,"subCategory icon is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('subcategory_collection',SubCategorySchema);

export default SubCategorySchemaModel;