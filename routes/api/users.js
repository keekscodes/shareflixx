const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
  const {body: {user}} = req;
  // console.log(req.body);

  if (!user.firstName) {
    return res.status(422).json({
      errors: {
        firstName: 'is required',
      },
    });
  }
  if (!user.lastName) {
    return res.status(422).json({
      errors: {
        lastName: 'is required',
      },
    });
  }
  if (!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({user: finalUser.toAuthJSON()}));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const {body: {user}} = req;

  console.log(req);

  if (!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', {
    session: false
  }, (err, passportUser, info) => {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();
      // res.redirect("/show");
      return res.json({user: user.toAuthJSON()});
    }

    return res.status(400).info;
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const {payload: {id}} = req;

  // console.log(req);

  return Users.findById(id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(400);
      }

      return res.json({user: user.toAuthJSON()});
    });
});

router.post("/profile", auth.required, (req,res,next) => {
  const {payload: {id}} = req;
  const {firstName, lastName, email, username} = req.body;
  console.log(req);
  return Users.findById(id).update({firstName, lastName, email, username}).then((user) => {
    if (!user) {
      return res.sendStatus(400);
    }
    return res.json({user: user.toAuthJSON()});
  });
});

module.exports = router;
