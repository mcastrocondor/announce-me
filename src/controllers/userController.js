const bcrypt = require("bcrypt");
const validateUser = require("../models/mongodb/validationUser");
const validateLogin = require("../models/mongodb/validationLogin");
const userRepository = require("../repository/userRepository");
const service = require("../service");

exports.createUser = async function (req, res) {
  try {
    const {
      body: { name, username, password },
    } = req;
    const validatedData = validateUser.validate({
      name: name,
      username: username,
      password: password,
    });

    if (validatedData.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const username = username.toLowerCase();
    const gotUser = await userRepository.getUser(username);

    if (gotUser) {
      return res.status(409).send({ msg: "Username really exist" });
    }
    const passwordCrypt = bcrypt.hashSync(password, 10);
    const user = {
      name: name,
      username: username,
      password: passwordCrypt,
    };
    const newUser = await userRepository.saveUser(user);

    return res.status(201).send({ createdUser: newUser, msg: "Created User" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

exports.authenticateUser = async function (req, res) {
  try {
    const {
      body: { username, password },
    } = req;
    const validatedData = validateLogin.validate({
      username: username,
      password: password,
    });

    if (validatedData.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const user = await userRepository.getUser(username.toLowerCase());
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return res.status(200).send({ token: service.createToken(user) });
      }
      return res.status(404).send({ msg: "Password is incorrect" });
    }
    return res.status(404).send({ msg: "User doesn't find, verify your data" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};
