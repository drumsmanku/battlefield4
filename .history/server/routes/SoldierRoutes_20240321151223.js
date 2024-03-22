const express = require('express');
const router =express.Router()
const Soldier=require('../Models/Soldier')

router.get('/soldier', async(req, res)=>{
  try{
    const data= await Soldier.find()
    res.json(data)
  }
  catch(err){
    console.log(err)
  }
})


