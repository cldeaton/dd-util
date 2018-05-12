const {defaults, defaultsDeep, diff} = require('./dd-util');

describe ('defaults', function () {
  var object =  (alpha = {"a":1});
  var sources = [
    beta   = {"b":2, "c":5},
    gamma  = {"g":3},
    delta  = {"d":4}
  ]

  test('sources are converted to an array(def)', () => {

    expect(sources).toEqual([{"b":2},{"g":3},{"d":4}]);
  });

  test('sources key is isolated(def)', () => {
    let source = sources[1];
    let sourceKey = Object.keys(source);
    expect(beta["b"]).toEqual(2);
  });

  test('sources keys are imputed to the original object(def)', () => {

    output = defaults(alpha, beta, gamma, delta);
    expect(output).toEqual({"a": 1, "b": 2, "g": 3, "d": 4});
  });

  test('sources keys are imputed to the original object(def)', () => {

    output = defaults(alpha, beta, gamma, delta, {"a": 2});
    expect(output).toEqual({"a": 1, "b": 2, "g": 3, "d": 4});
  });

  test('sources keys are imputed to the original object(def)', () => {

    output = defaults(alpha, beta, gamma, delta, {"a": 2}, {"name": "chris"});
    expect(output).toEqual({"a": 1, "b": 2, "g": 3, "d": 4, "name": "chris"});
  });
});


describe('defaultsDeep', function(){
  test('sources keys are imputed to the original object(DD)', () => {
    output = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
    expect(output).toEqual( { 'a': { 'b': 2, 'c': 3 } });
  });

  test('sources keys are imputed to the original object(DD)', () => {
    output = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3, 'd': 4 } })
    expect(output).toEqual( { 'a': { 'b': 2, 'c': 3 , 'd': 4 } });
  });

  test('New topKey is added to object', () => {
    output = defaultsDeep({ 'a': 24}, { 'a':3 }, { 'b': 2 } )
    expect(output).toEqual({"a": 24, "b": 2, });
  });
  test('sources keys are imputed to the original object(DD)', () => {
    output = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }, { 'b': { 'b': 2, 'c': 3, 'd':4 } } )
    expect(output).toEqual({"a": {"b": 2, "c": 3}, "b": {"b": 2, "c": 3, 'd':4}});
  });

  test('sources keys are imputed to the original object(DD)', () => {
    output = defaultsDeep(
      { 'a': 
        { 'b': 2 } 
      },
      { 'a': 
        { 'b': 1, 'c': 3 } 
      },
      { 'b': 
        { 'b': 2, 'c': 3 }
      },
      { 'b':
         { 'd': 2}
      }
    )
    expect(output).toEqual({
      "a":
        {"b": 2, "c": 3},
      "b":
        {"b": 2, "c": 3, "d": 2}
    });
  });
});


describe ('diff', function (){
  const a = {
    foo: 20,
    bar: 'hello world',
    buzz: '123456789',
  };

  const b = {
    foo: 25,
    bar: 'hello world',
    buzz: '123',
  };

  test('kdjfsdkjf(diff)', () => {
    output = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
    expect(output).toEqual( { 'a': { 'b': 2, 'c': 3 } });
  });
});
