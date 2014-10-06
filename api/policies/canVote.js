/**
 * canVote
 *
 * @module      :: Policy
 * @description :: Simple policy to allow voting
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
var _ = require('lodash-node');

module.exports = function canVote(req, res, next) {

  //var userId = req.session.user.id;
  var userId = req.param('userId');

  var ideaId = req.param('idea');

  Idea.findOne({ id: ideaId }).populate('votes').exec(function(err, idea) {
    if(_.isUndefined(idea))
      return res.notFound();

    var voted = Idea.votedFor({ idea: idea, userId: userId });
    if(voted)
      return res.forbidden('You already voted for this idea!');

    next();
  });
};
