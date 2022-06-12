const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
  let errorMessage = isValidFighter(req.body);

  if (!errorMessage) {
    next();
  } else {
    res
      .status(400)
      .send(JSON.stringify({
        error: true,
        message: `${errorMessage}`
      }));
  }
  // TODO: Implement validatior for fighter entity during creation
  
}

const updateFighterValid = (req, res, next) => {


  let errorMessage = validDataIn(req.body);

  if (!errorMessage) {
    next();
  } else {
    res
      .status(404)
      .send(JSON.stringify({
        error: true,
        message: `${errorMessage}`
      }));
  }
  // TODO: Implement validatior for fighter entity during update
 
}

function isValidFighter(newFighter) {
  if (isEmpty(newFighter)) return isEmpty(newFighter);
  if (validFields(newFighter)) return validFields(newFighter);
  if (validName(newFighter.name)) return validName(newFighter.name);
  if (validPower(newFighter.power)) return validPower(newFighter.power);
  if (validDefence(newFighter.defense)) return validDefence(newFighter.defense);
  if (validHealth(newFighter.health)) return validHealth(newFighter.health);

}

function isEmpty(newFighter) {
  let errorMessage = '';
  let interface = fighter;
  Object.keys(interface).forEach(key => {
    if (!newFighter[key] && key !== 'id' && key !== 'health') {
      errorMessage += `field ${key} can't be empty \n`
    }
  });
  if (errorMessage) return errorMessage;
  return false
}

function validFields(newFighter) {
  if ( newFighter.hasOwnProperty('id') ) return 'Request body should not contain "id" field'
  let interfaceLength = Object.keys(fighter).length;
  let newFighterLength = Object.keys(newFighter).length;
  if (newFighter.hasOwnProperty('health') && newFighterLength > (interfaceLength - 1) ) return "Request contain unfamiliar fields";
  if (!newFighter.hasOwnProperty('health') && newFighterLength > (interfaceLength - 2) ) return "Request contain unfamiliar fields2";

  return false
}


function validName(name) {
  if (typeof(name) !== 'string') return 'Not correct value of Name field, should be string'
  if (name.length >= 15) return 'The Name of fighter must be shorter than 15 characters';
  return false
}

function validPower(power) {
  if (typeof(power) !== 'number') return 'Not correct value of power field, should be number'
  if ( power <= 1 || power >= 100 ) return 'Power should be more than 1 and less than 100';
  return false
}

function validDefence(defense) {
  if (typeof(defense) !== 'number') return 'Not correct value of defense field, should be number'
  if ( defense <= 1 || defense >= 10 ) return 'Defence should be more than 1 and less than 10';
  return false
}

function validHealth(health) {
  if ( !health ) return false;
  if (typeof(health) !== 'number') return 'Not correct value of health field, should be number'
  if ( health <= 80 || health >= 120 ) return 'Health should be more than 80 and less than 120';
  return false
}

function validDataIn(updateFighter) {
  if ( updateFighter.id || updateFighter.name || updateFighter.health || updateFighter.power || updateFighter.defense ) return false;
  return 'for updating fighter you should fill at least one field'
}


exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;