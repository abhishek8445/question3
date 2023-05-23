import express from 'express';
import mongoose from 'mongoose';

const stu_schema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },

   age: {
      type: Number,
   },

   city: {
      type: String
   },
   
   profile: {
      type: String,
      require: true
   }
})

const createModel = mongoose.model("students", stu_schema)


export default createModel
