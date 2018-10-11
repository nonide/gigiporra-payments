
const express = require('express')
var router = express.Router();

const yaml = require('js-yaml')
const fs = require('fs')
try {
  const config = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
  const stripe = require("stripe")(config.sk_live);
} catch (e) {
  console.log(e)
}


router.post('/pay', function(req) {
  const source = req.body.stripeToken

  try {
    const charge = stripe.charges.create({
      amount: 300,
      currency: 'eur',
      description: 'Gigiporra payment',
      source
    })
    console.log('payment done')
  } catch (err) {
    console.log(err)
  }

})

module.exports = router;
