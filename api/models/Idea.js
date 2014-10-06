/**
* Idea.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    user: {
      type: 'string'
    },
    ip_address: {
      type: 'string'
    },
    votes: {
      collection: 'vote',
      via: 'idea'
    }
  },

  votedFor: function(options, next) {
    var idea_votes = _.map(options.idea.votes, function(v) { return v.userId });
    var voted = _.contains(idea_votes, options.userId);
    return voted;
  }

};

