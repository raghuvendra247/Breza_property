/*import '../models/connection.js';
import PropertySchemaModel from '../models/property.model'
import rs from 'randomstring'
import jwt from 'jsonwebtoken'
import url from 'url'

export var save=async(req,res,next)=>{
    var propertyDetails=req.body;
    var pList=await PropertySchemaModel.find();
    var l=pList.length;
    var _id=l==0?1:pList[l-1]._id+1;
    propertyDetails={...propertyDetails,"_id":_id};
    try
    {
     var property=await PropertySchemaModel.create(propertyDetails);
     res.status(201).json({"status":"true"});
    }
    catch(err)
    {
        res.status(500).json({"status":"false"});
    }
}
export var login=async(req,res,next)=>{
    var propertyDetails=req.body;
    var pList=await PropertySchemaModel.find(propertyDetails);
    var l=pList.length;
    var _id=l==0?1:pList[l-1]._id+1;
    if(l!=0)
    {
     var payload={"object":pList[0].email}
     var key=rs.generate()
     var token=jwt.sign(payload,key);
     res.status(201).json({"token":token,"propertyDetails":pList[0]});
    }
    else
    {
        res.status(500).json({"token":"error"})
    }
}
export var fetch=async(req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var pList=await PropertySchemaModel.find(condition_object);
    var l=pList.length;
    if(l!=0)
    {
        res.status(201).json({"status":pList})
    }
    else
    {
        res.status(500).json({"status":"error"});
    }
}
export var updateProperty=async(req,res,next)=>{
    var propertyDetails=await PropertySchemaModel.findOne(req.body.condition_obj)
    if(propertyDetails!=0)
    {
      var property=await PropertySchemaModel.updateOne(req.body.condition_object,{$set:req.body.content_obj}) 
      if(property)
      {
         res.status(201).json({"msg":"succes"})
      } 
      else
      {
        res.status(500).json({"status":"server error"})
      }
    }
    else
    {
        res.status(404).json({"starus":"Requested resource not available"})
    }

}
export var deleteProperty=async(req,res,next)=>{
    var propertyDetails=req.body;
    var detail=await PropertySchemaModel.find(propertyDetails);
    if(detail!=0)
    {
      var pdel=await PropertySchemaModel.deleteMany(propertyDetails);
      if(pdel!=0)
      {
        res.status(201).json({"status":"success"})
      }
      else{
        res.status(500).json({"status":"server error"})
      }
    }
    else
    {
        res.status(404).json({"status":"resource not available"});
    }
}*/
