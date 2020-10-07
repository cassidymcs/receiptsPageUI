const cors= require('cors');
const mysql = require('mysql');

var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')

var certOptions = {
  key: fs.readFileSync(path.resolve('./server.key')),
  cert: fs.readFileSync(path.resolve('./server.crt'))
}

var app = express()

var server = https.createServer(certOptions, app).listen(4000)


const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM Products';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pepper12',
    database: 'sys'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

console.log(connection);

app.use(cors());


app.get('/', (req, res) => {
  res.send('go to /products to see products')
});



app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err,results) => {
        if(err){
            return res.send(err)
        } 
        else {
            return res.json({
              results
            })
        }
    });
});


//app.listen(4000, () => {
   // console.log('Products server listening on port 4000 ')
//});