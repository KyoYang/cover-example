var chai = require('chai');
var expect = chai.expect;
var csv = require('./csv');

describe('csv module', function() {
  it('should generate header by properties name of first object', function() {
    var params = [ { firstName: 'Yuren', lastName: 'Ju'}];
    var output = csv(params);
    expect(output.split('\n')[0]).to.be.equal('"firstName","lastName"');
  });
});
