/**
 * IdeaController
 *
 * @description :: Server-side logic for managing ideas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  list: function(req, res) {
    Idea.find().exec(function(err, ideas) {
      res.view({ ideas: ideas, title: 'Ideas' });
    });
  },
	
};

