/**
* Vote.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userId: {
      type: 'string' // this will probably just be a session id of some sort
    },
    idea: {
      model: 'idea'
    }

  }
};

