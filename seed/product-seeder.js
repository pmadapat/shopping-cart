var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products  = [
                new Product({
                    imagepath:'../images/sen.jpg',
                    title:'music',
                    desc:'Headphones',
                    price: 10
                            }),
                new Product({
                    imagepath:'../images/sen.jpg',
                    title:'music',
                    desc:'Headphones',
                    price: 10
                            }),
                    new Product({
                                imagepath:'../images/sen.jpg',
                                title:'music',
                                desc:'Headphones',
                                price: 10
                                        }),
                            new Product({
                                imagepath:'../images/sen.jpg',
                                title:'music',
                                desc:'Headphones',
                                price: 10
                                        }),
                                        new Product({
                                            imagepath:'../images/sen.jpg',
                                            title:'music',
                                            desc:'Headphones',
                                            price: 10
                                                    }),
                                        new Product({
                                            imagepath:'../images/sen.jpg',
                                            title:'music',
                                            desc:'Headphones',
                                            price: 10
                                                    }),
];

var done = 0;
 for (var i = 0; i < products.length; i++) {
   products[i].save(function(err,result){
     done++;
     if(done === products.length) {
       exit();
     }
   });
 }

function exit(){
  mongoose.disconnect();
}
