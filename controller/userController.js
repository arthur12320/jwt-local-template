const JWT = require('jsonwebtoken');

const User = require('../db/model/userModel');


signToken = user => {
  return token = JWT.sign({
    iss: 'arhtur',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, process.env.JWT_SECRET);
}



module.exports = {
  signUp: async (req, res) => {
    //get username, password and data from body
    const { username, password, data } = req.body;
    try {
      //check if user already exists
      const foundUser = await User.findOne({ username });
      if (foundUser) {
        return res.status(403).json({ error: 'this user already exists' });
      } else {
        //create new user
        const newUser = new User({ username, password, data });
        await newUser.save();

        //generate the token
        let token = signToken(newUser);

        //respnd with token 
        res.json({ token });
      }
    } catch (err) {
      res.status(500).json({ message: 'error signing up' });
    }
  },
  logIn: async (req, res) => {
    //generate token
    let token = signToken(req.user);

    //respond with token
    res.status(200).json({ token });
  },
  getData: async (req, res) => {
    res.json({ data: req.user.data });
  },
  updateData: async (req, res) => {
    const newData = req.body.data;
    try {
      await User.updateOne({ _id: req.user.id }, { data: newData });
      res.status(200).send({ data: newData });
    } catch (err) {
      res.status(500).send({ message: 'error updating data' });
    }
  }
}