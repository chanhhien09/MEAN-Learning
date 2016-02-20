var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function(wagner) {

  wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync('./config.json').toString());
  });
  var stripeKey = wagner.invoke(function(Config) {
    return Config.stripeKey;
  })

  var stripe =

  // TODO: Make Stripe depend on the Config service and use its `stripeKey`
  // property to get the Stripe API key.
  wagner.factory('Stripe', function() {
    return Stripe(stripeKey);
  });

  wagner.factory('fx', fx);
};
