const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user


    update(id, dataToUpdate) {
        let data = this.getOne(id);
        if (!data) return data;
        return UserRepository.update(id, dataToUpdate);
    }

    delete(id) {
        return UserRepository.delete(id)
    }

    getOne(search) {
        return UserRepository.getOne(search)
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