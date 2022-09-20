const express = require ('express') ;    // requiring express another time !
const router = express.Router() ;   // we'll call it later as a function
const Post = require ('../models/Post'); // require it

router.get('/', async (req,res) =>{                          //get back the data!
    try{
           const posts = await Post.find();
           res.json(posts);                                      //returning all the posts for you !
    }catch(err){
        res.json({message : err});

    }
});

router.post('/' , async (req,res)=>{
      const post = new Post({                    // we create a post 
          nom : req.body.nom,                     //requiring data from shema
          prenom : req.body.prenom,
          id : req.body.id,
          qcm : req.body.qcm
          });
 // save the data created to database 
 try{
    if(post.qcm){
      
    const savedPost = await post.save();
    res.json(savedPost);}
        
    else{
    console.log('this student did not succeed in the test !');}
    }catch(err){
        res.json({message : err});            //get back the message of error
    }
});

module.exports = router;   // we are exporting this router