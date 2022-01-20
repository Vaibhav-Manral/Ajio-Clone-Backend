const express = require('express');

const router = express.Router();

const ProductSchema = require('../Schema/project.schema');

//price filters

//under 1000 products

router.get("/under1000", async (req, res) => {
    try {
        const under1000 = await ProductSchema.find({ $and: [{ price: { $gt: 0 } }, { price: { $lte: 1000 } }] });
   
        res.status(200).send(under1000);
    } catch (err) { 
        console.log(err.message);
    }
});

//between 1001 to 1500

router.get("/between1001to1500", async (req, res) => {
try{
    const between1001to1500 = await ProductSchema.find({ $and:[{ price: { $gt: 1000 } },{ price:{$lte: 1500 }}]});
   
    res.status(200).send(between1001to1500);
} catch (err) { 
    console.log(err.message);
}
});


//between 1501 to 2000

router.get("/between1501to2000", async (req, res) => {
try{
    const between1501to2000 = await ProductSchema.find({ $and:[{ price: { $gt: 1500 } },{ price:{$lte: 2000 }}]});
   
    res.status(200).send(between1501to2000);
} catch (err) { 
    console.log(err.message);
}
});


//above 2000

router.get("/above200", async (req, res) => {
try{
    const above200 = await ProductSchema.find({ price: { $gt: 1500 } });
   
    res.status(200).send(above200);
} catch (err) { 
    console.log(err.message);
}
});


module.exports = router;