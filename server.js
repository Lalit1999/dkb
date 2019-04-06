const exp  = require('express') ;
const bp   = require('body-parser') ;
const cors = require('cors') ;
const knex = require('knex') ;

const shayari = require('./controller/shayari.js') ;
const quote = require('./controller/quote.js') ;
const dohe = require('./controller/dohe.js') ;
const poem = require('./controller/poem.js') ;


const app = exp( ) ;

app.use(bp.json()) ;
app.use(cors()) ;

const db = knex({
  client: 'pg',
  connection: {
    // connectionString : process.env.DATABASE_URL,
    // ssl : true ,
    user : 'postgres',
    password : '123456',
    database : 'dkb'
  }
});

app.get('/' , (req , res ) => {
	console.log(req.body) ;
	console.log(req.headers) ;
	console.log(req.params) ;
	console.log(req.url) ; 
	res.json({
		status : 200 ,
		msg : 'ok' ,
	}) ; 
}) ;

app.get('/shayari', (req, res) => shayari.handle(req, res, db) ) ;

app.get('/quote', (req, res) => quote.handle(req, res, db) ) ;

app.get('/dohe', (req, res) => dohe.handle(req, res, db) ) ;

app.get('/poem', (req, res) => poem.handle(req, res, db) ) ;



app.listen(8080 || process.env.PORT, () => {
	console.log('server is online') ;
}) ;