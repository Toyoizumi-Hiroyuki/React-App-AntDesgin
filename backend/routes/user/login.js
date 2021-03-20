const createError = require('http-errors');
const jsonwebtoken = require('jsonwebtoken');
const moment = require('moment');

const SESSION_TIME = 60 * 60 * 3;

async function verify({ username, password }) {
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === 'admin') {
      resolve({
        valid: true,
        userid: 1,
      });
      return;
    }
    resolve({
      valid: false,
    });
  });
}

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const { valid, userid } = await verify({ username, password });
    if (!valid) {
      next(createError(400));
    }

    const token = jsonwebtoken.sign(
      {
        userid,
        exp: moment().add(SESSION_TIME, 'seconds').unix(),
      },
      process.env.JWT_SECRET,
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
