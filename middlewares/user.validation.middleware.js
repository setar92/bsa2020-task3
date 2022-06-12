const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    if ( !isEmpty(req.body) ) {
        console.log('валідація пройшла успішно');
        next();
      } else {
        res
        .status(400)
        .send( JSON.stringify ({
          error: true,
          message: `User entity to create isn't valid`
      }));
      }
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}
// не забудь видалити цю ф-ю
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;