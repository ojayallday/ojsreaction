const express = require('express')

const router = express.Router();


// Product Model

const Product = require('../models/Product');


// @route GET /products

// @desc Get ALL products

router.get('/', (req,res)=>{

   // Fetch all products from database

   Product.find({}, (error, products)=>{

       if (error) console.log(error)

       res.json(products)

   })

})




// @route POST /products

// @desc  Create a product

router.post('/', (req,res)=>{

   // Create a product item

   const newProduct = new Product({

       name: req.body.name,

       description: req.body.description,

       price: req.body.price,

       quantity: req.body.quantity,

   });


    //newProduct.save((err, product)=>{

    //   if (err) console.log(err)

   //    res.json(product)

   //})

   //replacement code for the code above it gives MongooseError: Model.prototype.save() no longer accepts a callback

   newProduct.save()
  .then(savedUser => {
    console.log('User saved successfully:', savedUser);
    // Perform additional actions if needed
  })
  .catch(err => {
    console.error('Error saving user:', err);
    // Handle the error appropriately
  });

})

// @route PUT api/products/:id

// @desc  Update a product

router.put('/:id', (req,res)=>{

   // Update a product in the database

   Product.updateOne({_id:req.params.id},{

       name: req.body.name,

       description: req.body.description,

       price: req.body.price,

       quantity: req.body.quantity,

   }, {upsert: true}, (err)=>{

       if(err) console.log(err);

       res.json({success:true})

   })

})

// @route DELETE api/products/:id

// @desc  Delete a product

router.delete('/:id', async(req,res)=>{

   // Delete a product from database

   Product.deleteOne({_id: req.params.id}, (err)=>{

       if (err){

           console.log(err)

           res.json({success:false})

       }else{

           res.json({success:true})

       }

   })

})




module.exports = router;