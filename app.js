const express = require('express');
const app = express();
const handelbars = require('express-handlebars');
const fs = require('fs');

app.engine("hbs",handelbars({
    extname:".hbs",
    defaultLayout: "index.hbs",
    layoutsDir:__dirname+"/views/layouts/",
    partialsDir:__dirname+"/views/partials/"
}))


app.use(express.json());

//productos iniciales
let productos = [
    {id:1,
     title:"cuchara",
     price:12000,
     thumbnail:'www.cuachara.com'
    },
    {id:2,
        title:"cuchillo",
        price:10000,
        thumbnail:'www.cuchillo.com'
       },
       {id:3,
        title:"tenedor",
        price:16000,
        thumbnail:'www.tenedor.com'
       },
];

app.get('/',(req,res)=>{
    res.send('hola mundo, ESTOS SON MIS PRODUCTOS😎👍😝')
});

app.get('/productos',(req,res)=>{
    res.json(productos)
});

app.post('/productos',(req,res)=>{
    const {id, title, price, thumbnail} = req.body
    const producto = {
        id:id,
        title:title,
        price:price,
        thumbnail:thumbnail,
    }
    productos.push(producto)
    res.sendStatus(201)
})





app.get('/productos/vista',(req,res)=>{
    res.render("main",{
        title:"hola mundo",
        a1:productos[0].id,
        a2:productos[0].title,
        a3:productos[0].price,
        b1:productos[1].id,
        b2:productos[1].title,
        b3:productos[1].price,
        c1:productos[2].id,
        c2:productos[2].title,
        c3:productos[2].price,
    });
});



app.get('/productos/test',(req,res)=>{
    res.render("cas",{table:'hol'});
});


app.set('views','./views'); 
app.set('view engine','hbs');
app.use(express.static('public'));
app.listen('0808',() =>{
    console.log('el servidor esta arriba')
}) 