const express = require('express');
const router =express.Router()
const Soldier=require('../Models/Soldier')

router.get('/get-soldier', async(req, res)=>{
  try{
    const data= await Soldier.find()
    res.json(data)
  }
  catch(err){
    console.log(err)
  }
})

router.post('/soldier', async (req, res) => {
  try {
    const soldier = new Soldier(req.body);
    await soldier.save();
    res.status(201).json(soldier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router

