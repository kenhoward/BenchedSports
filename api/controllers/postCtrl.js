var q = require('q');
var Post = require('../models/postSchema')

module.exports = {
    // findOneAndUpdate: function(req, res){
    //     Post.findOne({ id: req.body.id }, function(err, results) {
    //         if (err) {
    //             res.status(401).json(err);
    //         }
    //         if(results){
    //             console.log("The results are: ", results);
    //             Post.update({ id: results.id }, req.body, function(err, results){
    //                 if(err){
    //                     res.status(401).json(err);
    //                 } else {
    //                     res.send(results);
    //                 }
    //             })
    //         } 
    //     });
    // },

    remove: function(req, res) {
        console.log(req.params.id);
        Post.findOne({ id: req.params.id }, function(err, results) {
            if (err) {
                res.status(401).json(err);
            }
            if (results) {
                Post.findOneAndRemove({ id: req.params.id }, function(err, results) {
                    if (err) {
                        console.log(err)
                        res.status(401).json(err);
                    } else {
                        res.send(results);
                    }
                })
            } else {
                console.log("Post does not exist");
                //res.end(); // Not sure if this is necessary to close request if no results
            }
        })
    }
}