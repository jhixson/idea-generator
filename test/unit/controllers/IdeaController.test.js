describe('IdeaController', function() {

  describe('#list()', function() {
    it('should list ideas', function (done) {
      request(sails.hooks.http.app)
        .get('/idea/list')
        .expect(200)
        .end(function (err, res) {
          res.text.should.contain('Ideas!')
          done();
        });
    });
  });
});
