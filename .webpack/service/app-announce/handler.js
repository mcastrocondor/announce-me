/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/token.js":
/*!*************************!*\
  !*** ./config/token.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! dotenv */ "dotenv").config();

module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto"
};

/***/ }),

/***/ "./src/controllers/announceController.js":
/*!***********************************************!*\
  !*** ./src/controllers/announceController.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/melisacastro/Documents/code/announce-me/src/controllers/announceController.js: Unexpected token (65:12)\n\n\u001b[0m \u001b[90m 63 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m 64 |\u001b[39m     }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 65 |\u001b[39m     \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m() {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 66 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 67 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 68 |\u001b[39m     \u001b[36melse\u001b[39m {\u001b[0m\n    at Parser._raise (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:808:17)\n    at Parser.raiseWithData (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:801:17)\n    at Parser.raise (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:762:17)\n    at Parser.unexpected (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:3267:16)\n    at Parser.parseExprAtom (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11556:20)\n    at Parser.parseExprSubscripts (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11125:23)\n    at Parser.parseUpdate (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11105:21)\n    at Parser.parseMaybeUnary (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11083:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10897:77)\n    at Parser.parseExprOps (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10904:23)\n    at Parser.parseMaybeConditional (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10874:23)\n    at Parser.parseMaybeAssign (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10837:21)\n    at Parser.parseExpressionBase (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10777:23)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10771:39\n    at Parser.allowInAnd (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12622:16)\n    at Parser.parseExpression (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10771:17)\n    at Parser.parseHeaderExpression (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13098:22)\n    at Parser.parseIfStatement (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13191:22)\n    at Parser.parseStatementContent (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12874:21)\n    at Parser.parseStatement (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12829:17)\n    at Parser.parseIfStatement (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13193:53)\n    at Parser.parseStatementContent (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12874:21)\n    at Parser.parseStatement (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13418:25)\n    at Parser.parseBlockBody (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13409:10)\n    at Parser.parseBlock (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13393:10)\n    at Parser.parseFunctionBody (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12280:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12264:10)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13551:12\n    at Parser.withSmartMixTopicForbiddingContext (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12599:14)\n    at Parser.parseFunction (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13550:10)\n    at Parser.parseExprAtom (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11400:27)\n    at Parser.parseExprSubscripts (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11125:23)\n    at Parser.parseUpdate (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11105:21)\n    at Parser.parseMaybeUnary (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:11083:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10897:77)\n    at Parser.parseExprOps (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10904:23)\n    at Parser.parseMaybeConditional (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10874:23)\n    at Parser.parseMaybeAssign (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10837:21)\n    at Parser.parseMaybeAssign (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10861:25)\n    at Parser.parseExpressionBase (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10777:23)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10771:39\n    at Parser.allowInAnd (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12622:16)\n    at Parser.parseExpression (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:10771:17)\n    at Parser.parseStatementContent (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12960:23)\n    at Parser.parseStatement (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13418:25)\n    at Parser.parseBlockBody (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:13409:10)\n    at Parser.parseProgram (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12751:10)\n    at Parser.parseTopLevel (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:12742:25)\n    at Parser.parse (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:14482:10)\n    at parse (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/parser/lib/index.js:14534:38)\n    at parser (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/core/lib/transformation/index.js:29:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/melisacastro/Documents/code/announce-me/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:261:32)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:223:11)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:189:28\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/@babel/core/lib/gensync-utils/async.js:73:7\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:113:33\n    at step (/Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:287:14)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:223:11)\n    at /Users/melisacastro/Documents/code/announce-me/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "./src/controllers/userController.js":
/*!*******************************************!*\
  !*** ./src/controllers/userController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

const validateUser = __webpack_require__(/*! ../models/mongodb/validationUser */ "./src/models/mongodb/validationUser.js");

const validateLogin = __webpack_require__(/*! ../models/mongodb/validationLogin */ "./src/models/mongodb/validationLogin.js");

const userRepository = __webpack_require__(/*! ../repository/userRepository */ "./src/repository/userRepository.js");

const service = __webpack_require__(/*! ../service */ "./src/service.js");

exports.createUser = async function (req, res) {
  try {
    const validatedData = validateUser.validate({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    });

    if (!validatedData.error) {
      username = req.body.username.toLowerCase();
      const gotUser = await userRepository.getUser(username);

      if (gotUser) {
        return res.status(409).send({
          msg: "Username really exist"
        });
      } else {
        passwordCrypt = bcrypt.hashSync(req.body.password, 10);
        const user = {
          name: req.body.name,
          username: username,
          password: passwordCrypt
        };
        const newUser = await userRepository.saveUser(user);
        return res.status(201).send({
          createdUser: newUser,
          msg: "Created User"
        });
      }
    } else {
      return res.status(400).send({
        msg: "error invalids data"
      });
    }
  } catch (err) {
    return res.status(500).send({
      msg: err.message
    });
  }
};

exports.authenticateUser = async function (req, res) {
  try {
    const validatedData = validateLogin.validate({
      username: req.body.username,
      password: req.body.password
    });

    if (!validatedData.error) {
      const user = await userRepository.getUser(req.body.username.toLowerCase());

      if (user) {
        const match = await bcrypt.compare(req.body.password, user.password);

        if (match) {
          return res.status(200).send({
            token: service.createToken(user)
          });
        } else {
          return res.status(404).send({
            msg: "Password is incorrect"
          });
        }
      } else {
        return res.status(404).send({
          msg: "User doesn't find, verify your data"
        });
      }
    } else {
      return res.status(400).send({
        msg: "error invalids data"
      });
    }
  } catch (err) {
    return res.status(500).send({
      msg: err.message
    });
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! dotenv */ "dotenv").config();

const express = __webpack_require__(/*! express */ "express");

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const logger = __webpack_require__(/*! @condor-labs/logger */ "@condor-labs/logger");

const config = __webpack_require__(/*! config */ "config");

const app = express();
const db = config.get('mongoURI');
const port = process.env.PORT;

const userController = __webpack_require__(/*! ./controllers/userController */ "./src/controllers/userController.js");

const announceController = __webpack_require__(/*! ./controllers/announceController */ "./src/controllers/announceController.js");

const middleware = __webpack_require__(/*! ./middleware */ "./src/middleware.js"); //const mongoHelper = require("./src/models/mongodb/mongoHelper");


app.use(express.json());
mongoose.connect(db, {}).then(() => logger.log('MongoDB Connected...')).catch(err => logger.err(err));
app.listen(port, () => {
  logger.log(`Server started on port: http://localhost:${port}`); // await  mongoHelper.connect();
});
app.post('/users', userController.createUser);
app.post('/users/auth', userController.authenticateUser);
app.post('/users/:id/announces', middleware.ensureAuthenticated, announceController.createAnnounce);
app.get('/users/:id/announces', middleware.ensureAuthenticated, announceController.getAnnouncesbyUser);
app.get('/users/announces/:id', middleware.ensureAuthenticated, announceController.getAnnouncebyId);
app.delete('/users/:id/announces/:announceId', middleware.ensureAuthenticated, announceController.removeAnnounce);
app.patch('/users/:id/announces/:announceId', middleware.ensureAuthenticated, announceController.updateAnnounce);
module.exports = app;

/***/ }),

/***/ "./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var jwt = __webpack_require__(/*! jwt-simple */ "jwt-simple");

var moment = __webpack_require__(/*! moment */ "moment");

var config = __webpack_require__(/*! ../config/token */ "./config/token.js");

exports.ensureAuthenticated = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: "Your request doesn't have authorization header"
    });
  }

  const token = req.headers.authorization;

  try {
    const payload = jwt.decode(token, config.TOKEN_SECRET);

    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
        message: "Token have expired"
      });
    }

    req.user = payload.sub;
    next();
  } catch (err) {
    return res.status(401).send({
      message: err.message
    });
  }
};

/***/ }),

/***/ "./src/models/mongodb/users.js":
/*!*************************************!*\
  !*** ./src/models/mongodb/users.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//const mongoHelper = require("@condor-labs/mongodb")();
//const mongoose = mongoHelper.mongoose;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const Schema = mongoose.Schema;
let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  token: String,
  password: {
    type: String,
    required: true
  }
});
let userModel = mongoose.model("User", userSchema);
module.exports = userModel;

/***/ }),

/***/ "./src/models/mongodb/validationLogin.js":
/*!***********************************************!*\
  !*** ./src/models/mongodb/validationLogin.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Joi = __webpack_require__(/*! joi */ "joi");

const schemaLogin = Joi.object({
  username: Joi.string().alphanum().min(3).max(60).required(),
  password: Joi.string() // .pattern(new RegExp('^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{4,20}$'))
  .min(3).max(20).required()
});
module.exports = schemaLogin;

/***/ }),

/***/ "./src/models/mongodb/validationUser.js":
/*!**********************************************!*\
  !*** ./src/models/mongodb/validationUser.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Joi = __webpack_require__(/*! joi */ "joi");

const schemaUser = Joi.object({
  name: Joi.string().min(3).max(60).required(),
  username: Joi.string().alphanum().min(3).max(60).required(),
  password: Joi.string() //.pattern(new RegExp('^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{4,20}$'))
  .min(3).max(20).required(),
  token: [Joi.string(), Joi.number()]
});
module.exports = schemaUser;

/***/ }),

/***/ "./src/repository/userRepository.js":
/*!******************************************!*\
  !*** ./src/repository/userRepository.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const User = __webpack_require__(/*! ../models/mongodb/users */ "./src/models/mongodb/users.js");

exports.saveUser = async function (object) {
  const newUser = new User({
    name: object.name,
    username: object.username,
    password: object.password
  });
  const savedUser = await newUser.save();
  const data = {
    name: savedUser.name,
    username: savedUser.username,
    id: savedUser._id
  };
  return data;
};

exports.getUser = async function (username) {
  const login = await User.findOne({
    username: username
  });
  return login;
};

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var jwt = __webpack_require__(/*! jwt-simple */ "jwt-simple");

var moment = __webpack_require__(/*! moment */ "moment");

var config = __webpack_require__(/*! ../config/token */ "./config/token.js");

exports.createToken = function (user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

/***/ }),

/***/ "@condor-labs/logger":
/*!**************************************!*\
  !*** external "@condor-labs/logger" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@condor-labs/logger");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("config");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("joi");

/***/ }),

/***/ "jwt-simple":
/*!*****************************!*\
  !*** external "jwt-simple" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-simple");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("serverless-http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./app-announce/handler.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announceMe": () => (/* binding */ announceMe)
/* harmony export */ });


const ServerlessHttp = __webpack_require__(/*! serverless-http */ "serverless-http");

const app = __webpack_require__(/*! ../src/index */ "./src/index.js");

const announceMe = ServerlessHttp(app); // const updateAnnounce = (event, context, callback) => {
//   const data = JSON.parse(event.body);
//   const id = event.pathParameters.id;
//   return
// };


})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=handler.js.map