const verbCheck = require('../index.js');

describe('Test for Verbs', () => {
  it('Isnt Verb', () => {
    const testResult = expect(verbCheck.check('vERB')).toEqual(false);
    return testResult;
  });

  it('Is Verb', () => {
    const testResult = expect(verbCheck.check('won')).toEqual(true);
    return testResult;
  });

  it('"Bird" isnt a a verd', () => {
    const testResult = expect(verbCheck.check('bird')).toEqual(false);
    return testResult;
  });
});
