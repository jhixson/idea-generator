/**
 * IdeaController
 *
 * @description :: Server-side logic for managing ideas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var _ = require('lodash-node');

module.exports = {

  list: function(req, res) {
    Idea.find().populate('votes').exec(function(err, ideas) {
      if(req.param('userId')) {
        var userId = req.param('userId');
        _.each(ideas, function(idea) {
          idea.voted = Idea.votedFor({ idea: idea, userId: userId });
        });
      }
      //res.view({ ideas: ideas, title: 'Ideas' });
      res.json(ideas);
    });
  }
	
};

