const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation
  let errorMessage = isValidUser(req.body);

  if (!errorMessage) {
    console.log('валідація пройшла успішно');
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
  // TODO: Implement validatior for user entity during update

  next();
}
// перевірка на пусті поля
function isEmpty(newUser) {
  let errorMessage = null;
  let interface = user;
  Object.keys(interface).forEach(key => {
    if (!newUser[key] && key !== 'id') {
      errorMessage += `field ${key} can't be empty \n`
    }
  });
  if (errorMessage) return errorMessage.slice(4);
  return false
}



function isValidUser(user) {
  if (isEmpty(user)) return isEmpty(user);
  if (validFirstName(user.firstName)) return validFirstName(user.firstName);
  if (validLastName(user.lastName)) return validLastName(user.lastName);
  if (validEmail(user.email)) return validEmail(user.email);
  if (validPhoneNumber(user.phoneNumber)) return validPhoneNumber(user.phoneNumber);
  if (validPassword(user.password)) return validPassword(user.password);
  
}

function validFirstName(firstName) {
  if (firstName.length >= 15) return 'The First Name field must be shorter than 15 characters';
  return false
}

function validLastName(lastName) {
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
  if (phoneNumber.slice(0,4) !== '+380') return 'Phone Number should start with characters "+380", according to pattern +380xxxxxxxxx';
  return false
}

function validEmail(email) {
  let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@gmail.com/;
  if ( !re.test(String(email).toLowerCase()) ) return 'Not correct email, fhould be "...gmail.com"'
  return false;
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;