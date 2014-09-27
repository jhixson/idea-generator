describe('IdeaModel', function() {

  describe('#create()', function() {
    it('should be invalid without a name', function (done) {
      Idea.create().exec(function(err, idea) {
        should.exist(err);
        should.not.exist(idea);
        done();
      })
    });
  });
});
