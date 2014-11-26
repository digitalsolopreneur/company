var test = require('tape');

var company = require('../SOURCE/company.js');

test('company is a function', function (assert) {
    assert.strictEqual(typeof company, 'function');
    assert.end();
});
