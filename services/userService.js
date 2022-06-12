const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    delete(id) {
        return UserRepository.delete(id)
    }

    getOne(id) {
        return UserRepository.getOne(id)
    }

    getAll() {
        return UserRepository.getAll();
    }

    save(user) {
        return UserRepository.create(user);
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();