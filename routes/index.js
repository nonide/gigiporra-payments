
const express = require('express')
var router = express.Router();

const yaml = require('js-yaml')
const fs = require('fs')
const config = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
const stripe = require("stripe")(config.sk_token);


router.post('/pay', function(req, res) {
  const source = req.body.stripeToken
  const amount = 300

  try {
    const charge = stripe.charges.create({
      amount,
      currency: 'eur',
      description: 'Gigiporra payment',
      source
    })
    console.log(`New payment of ${amount/100} EUR with token ${source}`)
    res.status(200).send('Payment done')
  } catch (err) {
    console.log(err)
    res.status(500).send('Error creating charge in Stripe')
  }

})

module.exports = router;
