const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    if ( !isEmpty(req.body) ) {
        console.log('Fighter validation пройшла успішно');
        next();
      } else {
        res
        .status(400)
        .send( JSON.stringify ({
          error: true,
          message: `Fighter entity to create isn't valid`
      }));
      }
    // TODO: Implement validatior for fighter entity during creation
    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

// не забудь видалити цю ф-ю
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;