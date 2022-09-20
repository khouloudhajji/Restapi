const mongoose = require ('mongoose');  //importing mongoose in this file

// schema :describe the way how your data that you'll send it into the DB looks :

const postSchema = mongoose.Schema({
    nom :{
        type : String,
        required : true
    },
    prenom :{
        type : String,
        required : true
    },

    id :{
        type : Number,
        required : true
    },
    qcm :{
        type : Boolean,
        required : true
    },

    date :{
        type : Date,
        default : Date.now

    }

});

Etudiant =mongoose.model('Etudiant information',postSchema);                  //export it with the name Etudiant information and the shema to use
module.exports = Etudiant;

