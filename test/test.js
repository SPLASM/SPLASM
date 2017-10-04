var expect = require('chai').expect;
var sinon = require('sinon');

// from: https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
/* The most common scenarios with spies (function wrappers that let you 'spy' on function calls.)
	involve...
Checking how many times a function was called
Checking what arguments were passed to a function

*/

/*Stubs (function replacements. any call to the specific function will instead call the stub)
	have a few common uses:
You can use them to replace problematic pieces of code
You can use them to trigger code paths that wouldn't otherwise trigger - such as error handling
You can use them to help test asynchronous code more easily
*/


/*
	shortly-express test setup: 
		beforeEach test:
			connect to DB.
			clear DB tables.
			create DB tables based on config file schema.
			curious how the async works on the beforeeach.
				how does it know when it's done?
				Answer: done passed into BeforeEach function is called
				as callback to app.listen.
		Database Schema Tests: 
			test that tables exist.
			test for correct columns
			test insertion and retrieval of tables.

	Note: Test deletes the database. In this case it should
	be ok since it's only deleting the local/test db.

	Todo: Learn basics of mongo. Setup some tests just verifying
	what's already there. Use similar specs from shortly express.
	Same for SQL.
*/
describe('Mongo DB', function() {
  describe('#indexOf()', function() {
    it('contains a user table', function() {
      var queryString = ""
    });
  });
});
