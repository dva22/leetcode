let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it,
    assert = require('chai').assert,

   // testcasesPath = path.join(path, 'testcases.js'),
 //   programPath = path.join(path, 'index.js'),

    testcases = require('./testcases.js'),
    program = require('./index.js');

  describe('test leetcode', function () {
   
    testcases.forEach(function (testcase) {
      it('testcases should passed', function () {  
        assert.deepEqual(program.apply(null, testcase.input), testcase.output);
      });
    });
  });
