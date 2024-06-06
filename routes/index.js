var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', async(req,res, next)=>{
    try{
        const response = await axios.get("https://random.dog/woof.json");
        const imageUrl = response.data.url;
        res.render('pages/index',{title: 'RandomDog' , imageUrl});
    }
    catch(error){
        next(error);
    }
});

module.exports = router;