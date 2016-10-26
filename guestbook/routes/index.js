var express = require('express');
var router = express.Router();



/* GET Userlist page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('index', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});


/* POST to Add User Service */
router.post('/adduser', function(req,res){
	//set our internal db variable
	var db = req.db;

	//get our form values, these rely on the "name attributes"
	var userName = req.body.username;
	var userEmail = req.body.useremail;
	var userMessage = req.body.usermessage;

	//set our collection
	var collection = db.get('usercollection');

	//submit to the db
	collection.insert({
		"username" :userName,
		"email": userEmail,
		"message": userMessage

	}, function(err,doc){
		if(err){
			//if it failed, return error
			res.send("There was a problem adding the information to the database");
		}
		else{
			// forward to success page
			res.redirect("/");
		}
	});
});

// Remove guest from guestbook
router.get('/:id', function(req,res){
    var id = req.params.id;
	  var objectId = require('mongodb').ObjectID(id);

	  var db = req.db;
	  var collection = db.get('usercollection');
	  console.log(collection);
	  collection.remove({_id: objectId});
	  res.redirect('/');

});


// route to message page
router.get('/:id/usermessage', function(req,res){
    var id = req.params.id;
	  var objectId = new ObjectID(id);

	  var db = req.db;
	  var collection = db.get('usercollection');
	  console.log(collection);
	  collection.find({_id: objectId}, function(err, result){
        if(err){
			      res.send("An error has occured.");
		    }
		    else{
		        res.render('message', {
				                    "usermessage" : result
			               });
		        //res.json(result);
		        }
	   });
});

module.exports = router;
