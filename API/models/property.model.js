import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


var propertySchema=mongoose.Schema=({
    
        _id:Number,
        title:{type:String,
            required:[true,"title is requires"],
            lowercase:true,
            trim:true
            
        },
        pcatnm:{
            type:String,
            required:[true,"catnm is required"],
            trim:true
        },
        psubcatnm:{
            type:String,
            required:[true,"subcatnm is required"],
            trim:true
        },
        pdescription:{
            required:["description is requires",true],
            lowercase:true,
            trim:true 
        },
        paddress:{
            required:["address is requires",true],
            lowercase:true,
            trim:true
        },
        piconnm:{
            type: String,
    required: [true,"piconnm icon is required"],
    trim: true
        }
    
});

 propertySchema.plugin(uniqueValidator);

 var PropertySchemaModel=mongoose.model('property_collection',propertySchema);
 export default PropertySchemaModel;