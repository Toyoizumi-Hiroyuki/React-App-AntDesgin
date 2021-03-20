const jsonwebtoken = require('jsonwebtoken');
const moment = require('moment');

const SESSION_TIME = 60 * 60 * 3;

module.exports = async (req, res, next) => {
  try {
    const userid = 1;

    const token = jsonwebtoken.sign(
      {
        userid,
        exp: moment().add(SESSION_TIME, 'seconds').unix(),
      },
      process.env.JWT_SECRET,
    );

    res.status(200).json({ userid, token });
  } catch (error) {
    next(error);
  }
};
