describe('VoteController', function() {

  describe('#create()', function() {
    it('should return 404 if no idea is found', function (done) {
      request(sails.hooks.http.app)
        .post('/vote')
        .send({ userId: 'xxx', ideaId: 0 })
        .expect(404, done);
    });
  });

  describe('#create()', function() {
    var myIdea;
    var myVote;
    var user = 'xxx';
    before(function(done) {
      Idea.create({ title: 'test idea' }).then(function(idea) {
        myIdea = idea;
        Vote.create({ userId: user, idea: idea.id }).exec(function(err, vote) {
          myVote = vote;
          done();
        });
      });
    });
    after(function(done) {
      Vote.destroy({ id: myVote.id }).then(function(err) {
        Idea.destroy({ id: myIdea.id }).then(function(err) {
          done();
        });
      });
    });
    it('should return 403 if duplicate vote', function(done) {
      request(sails.hooks.http.app)
        .post('/vote')
        .send({ userId: user, idea: myIdea.id })
        .expect(403, done);
    });
  });
});
