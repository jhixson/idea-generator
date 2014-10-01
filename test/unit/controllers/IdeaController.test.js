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

  describe('#create()', function() {
    after(function(done) {
      Idea.destroy({ title: 'test idea' }).then(function(err) {
        done();
      });
    });
    it('should have an ip address', function (done) {
      request(sails.hooks.http.app)
        .post('/idea')
        .send({ title: 'test idea' })
        .expect(200)
        .end(function (err, res) {
          res.body.should.have.property('ip_address');
          done();
        });
    });

    it('should prevent ip spoofing', function (done) {
      var bad_ip = '255.255.255.255';
      request(sails.hooks.http.app)
        .post('/idea')
        .send({ title: 'test idea', ip_address: bad_ip })
        .expect(200)
        .end(function (err, res) {
          res.body.should.have.property('ip_address').and.should.not.equal(bad_ip);
          done();
        });
    });
  });
  
});
