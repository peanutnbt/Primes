let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/primes/sum/:num', function (req, res, next) {
  if (!req.session.User) {
    return next({ status: 401, message: "Unauthentication" })
  }

  let num = parseInt(req.params.num)
  if (num < 2 || isNaN(num)) return next({ status: 400, message: "Invalid param" })

  var sieve = [], sum = 0, max = num;
  for (var i = 2; i < max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      sum += i;
      for (var j = i << 1; j < max; j += i) {
        // console.log(j + ": " +(j >>> 0).toString(2))
        sieve[j] = true;
      }
    }
  }

  res.json({ sum: sum })
});


module.exports = router;
