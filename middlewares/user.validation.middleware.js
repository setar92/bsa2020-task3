const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation
  let errorMessage = isValidUser(req.body);

  if ( !errorMessage ) {
    next();
  } else {
    res
      .status(400)
      .send(JSON.stringify({
        error: true,
        message: `${errorMessage}`
      }));
  }
}

const updateUserValid = (req, res, next) => {

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
  // TODO: Implement validatior for user entity during update

}

function isValidUser(newUser) {
  if (isEmpty(newUser)) return isEmpty(newUser);
  if (validFields(newUser)) return validFields(newUser);
  if (validFirstName(newUser.firstName)) return validFirstName(newUser.firstName);
  if (validLastName(newUser.lastName)) return validLastName(newUser.lastName);
  if (validEmail(newUser.email)) return validEmail(newUser.email);
  if (validPhoneNumber(newUser.phoneNumber)) return validPhoneNumber(newUser.phoneNumber);
  if (validPassword(newUser.password)) return validPassword(newUser.password);
  return false
}

function isEmpty(newUser) {
  let errorMessage = '';
  let interface = user;
  Object.keys(interface).forEach(key => {
    if (!newUser[key] && key !== 'id') {
      errorMessage += `field ${key} can't be empty \n`
    }
  });
  if (errorMessage) return errorMessage;
  return false
}

function validFields(newUser) {
  if ( newUser.hasOwnProperty('id') ) return 'Request body should not contain "id" field'
  let interfaceLength = Object.keys(user).length;
  let newUserLength = Object.keys(newUser).length;
  if ( newUserLength > (interfaceLength - 1) ) return "Request contain unfamiliar fields" 
  return false
}

function validFirstName(firstName) {
  if (typeof(firstName) !== 'string') return 'Not correct value of First Name field, should be string'
  if (firstName.length >= 15) return 'The First Name field must be shorter than 15 characters';
  return false
}

function validLastName(lastName) {
  if (typeof(lastName) !== 'string') return 'Not correct value of Last Name field, should be string'
  if (lastName.length >= 15) return 'The Last Name field must be shorter than 15 characters';
  return false
}

function validPassword(password) {
  if (password.length < 3) return 'The password field must be longer than 2 and shorter than 15 characters';
  if (password.length >= 15) return 'The password field must be longer than 2 and shorter than 15 characters';
  return false
}

function validPhoneNumber(phoneNumber) {
  if (phoneNumber.length != 13) return 'Not correct length of Phone Number, should be 13 characters, according to pattern +380xxxxxxxxx';
  if (phoneNumber.slice(0, 4) !== '+380') return 'Phone Number should start with characters "+380", according to pattern +380xxxxxxxxx';
  return false
}

function validEmail(email) {
  let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@gmail.com/;
  if (!re.test(String(email).toLowerCase())) return 'Not correct email, fhould be "...gmail.com"'
  return false;
}

function validDataIn(updateUser) {
  if ( updateUser.id || updateUser.firstName || updateUser.lastName || updateUser.email || updateUser.phoneNumber || updateUser.password ) return false;
  return 'for updating user you should fill at least one field'
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;