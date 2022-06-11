const UserService = require('./userService');

class AuthService {
    login(userData) {
        console.log(userData, 'auth');
        const user = UserService.search(userData);
        if(!user) {
            throw Error('User not found');
        }
        return user;
    }
}

module.exports = new AuthService();