const handle = (req, res, db) => {
	const { type } = req.query ;
	console.log('Shayari requested') ;

  	if(type)
  	{ 	db('shayari').where('type', 'like', '%' + type + '%')
    	.then ( data => {
		if(data.length)
			res.json(data) ;
		else
			res.status(404).json("error fetching Shayari data") ;
    	})
		.catch(err => res.status(404).json("error fetching Shayari")) ;
	}
 	else
  	{	db.select('*').from('shayari')
		.then( data => {
			if (data.length)
				res.json(data) ;
			else
				res.status(404).json("Error fetching Shayari") ;
		})
		.catch(err => res.status(404).json("error fetching Shayari")) ;
  	}
}

module.exports = {
	handle : handle
} ;