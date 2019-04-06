const handle = (req, res, db) => {
	const { type } = req.query ;
	console.log('poem requested') ;

  	if(type)
  	{ 	db('poem').where('type', 'like', '%' + type + '%')
    	.then ( data => {
		if(data.length)
			res.json(data) ;
		else
			res.status(404).json("error fetching poem data") ;
    	})
		.catch(err => res.status(404).json("error fetching poem")) ;
	}
 	else
  	{	db.select('*').from('poem')
		.then( data => {
			if (data.length)
				res.json(data) ;
			else
				res.status(404).json("Error fetching poem") ;
		})
		.catch(err => res.status(404).json("error fetching poem")) ;
  	}
}

module.exports = {
	handle : handle
} ;