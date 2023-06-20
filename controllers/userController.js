/*
require:
-all data models
-bcrypt
-jwt

create:
-all route async functions

export:
- all routes with exports.whicheverRoute
*/

/*
ex.
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//new verison they messed up
exports.auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, 'secret');
    const user = await User.findOne({ _id: data._id });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Not Authorized');
  }
};
*/