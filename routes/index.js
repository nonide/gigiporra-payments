
const config = require('../lib/utils').getConfig()
const stripe = require("stripe")(config.sk_token)

const router = require('express').Router()

router.post('/pay', function(req, res) {
  const source = req.body.stripeToken
  const amount = config.amount

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
    res.status(500).send('Error creating charge in Stripe' + err)
  }
})

module.exports = router