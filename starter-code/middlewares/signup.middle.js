const bcrypt = require('bcrypt');
const autheModel = require('../models/auth.model');
module.exports = async (req,res,next)=>{

  console.log(req.body);
    try {
      console.log('inside try',req.body);
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await autheModel.create({
          username : req.body.username,
          password: req.body.password
        });
        console.log('record',record);
        res.status(200).json(record);
      } catch (e) {
        next('error in signup')
    }

}

