import mongoose from 'mongoose';
const url="mongodb://localhost:27017/batch121-01march";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");

//npm install mongoose@6.8.2