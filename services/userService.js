const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    save(user) {
        console.log(user, 'user в userService.save');
        UserRepository.create(user);
    }

    search(search) {
        console.log('шукаємо такого юзера', search)
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();