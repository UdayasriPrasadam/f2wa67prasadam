var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var count=Math.floor(Math.random()*10)

    var count1=(Math.random())

    var count2=Math.floor(Math.random()*10)

    var count3=Math.floor(Math.random()*10)

    var acoshFunction=Math.acosh(count);

    var logFunction=Math.log1p(count1);

    var tanFunction=Math.tan(count2);

    var sqrtFunction=Math.sqrt(count3);



    res.render('computation',

    {

        title:'Udayasri Prasadam Computes Functions',

        count:count,

        count1:count1,

        count2:count2,

        count3:count3,

        acosh:acoshFunction,

        log1p:logFunction,

        tan:tanFunction,
        
        sqrt:sqrtFunction,

    });

     

});

module.exports=router;