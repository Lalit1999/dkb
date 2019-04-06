const handle = (req, res, db) => {
	const { type } = req.query ;
	console.log('quote requested') ;

  	if(type)
  	{ 	db('quote').where('type', 'like', '%' + type + '%')
    	.then ( data => {
		if(data.length)
			res.json(data) ;
		else
			res.status(404).json("error fetching quote data") ;
    	})
		.catch(err => res.status(404).json("error fetching quote")) ;
	}
 	else
  	{	db.select('*').from('quote')
		.then( data => {
			if (data.length)
				res.json(data) ;
			else
				res.status(404).json("Error fetching quote") ;
		})
		.catch(err => res.status(404).json("error fetching quote")) ;
  	}
}

module.exports = {
	handle : handle
} ;