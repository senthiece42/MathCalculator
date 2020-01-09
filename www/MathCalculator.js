var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

module.exports.add = function(arg0, success, error) {
    //exec(success CallbackFn, error CallbackFn, 'MathCalculator (Plugin Name)', 'add (Mathod Name)', [arg0](Params));
    exec(success, error, 'MathCalculator', 'add', [arg0]);
};

module.exports.substract = function(arg0, success, error) {
    //exec(success CallbackFn, error CallbackFn, 'MathCalculator (Plugin Name)', 'add (Mathod Name)', [arg0](Params));
    exec(success, error, 'MathCalculator', 'substract', [arg0]);
};