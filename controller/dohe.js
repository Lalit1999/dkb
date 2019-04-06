const handle = (req, res, db) => {
	const { type } = req.query ;
	console.log('dohe requested') ;

  	if(type)
  	{ 	db('dohe').where('type', 'like', '%' + type + '%')
    	.then ( data => {
		if(data.length)
			res.json(data) ;
		else
			res.status(404).json("error fetching dohe data") ;
    	})
		.catch(err => res.status(404).json("error fetching dohe")) ;
	}
 	else
  	{	db.select('*').from('dohe')
		.then( data => {
			if (data.length)
				res.json(data) ;
			else
				res.status(404).json("Error fetching dohe") ;
		})
		.catch(err => res.status(404).json("error fetching dohe")) ;
  	}
}

module.exports = {
	handle : handle
} ;