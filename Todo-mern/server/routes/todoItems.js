// const router = require('express').Router();

// const {ItemModel} = require('../models/todoItems');

// // must use async -await we deal with promise and database

// router.post('/api/item' , async (req,res) =>{

//      try{
//           await ItemModel.create({item:req.body.item});
//           res.send(req.body.item);
   
//      }catch(err)
//      {
//       console.log('error')
//         res.send(err.message);
//      }
// })


// module.exports = router;



const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');

// must use async -await we deal with promise and database

router.post('/api/item' , async (req,res) =>{

     try{
          const newItem = new todoItemsModel({
            item: req.body.item
          })
          const saveItem = await newItem.save()
          res.status(200).json(saveItem)
   
     }catch(err){
          res.json(err);
     }
    
})

// 2nd route get data from database
router.get('/api/items', async(req,res) =>{
     try{
          const allTodoItems = await todoItemsModel.find({});
          res.status(200).json(allTodoItems)
     }catch(err){
          res.json(err);
     }
})

// update item
router.put('/api/item/:id', async (req,res)=>{
     try{
          // find item by id and update 
          const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id,{$set: req.body});
          res.status(200).json('item updated')

     }catch(err){
          res.json(err)
     }

})


// delete todo
router.delete('/api/item/:id', async (req,res)=>{
     try{
      const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
      res.status(200).json('item deleted')
     }catch(err)
     {
          res.json(err);
     }
})

module.exports = router;
 