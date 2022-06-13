const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user


    update(id, dataToUpdate) {
        //перевіряємо по ід чи така сутність існує

        let data = this.getOne({ 'id': id });
        if (!data) return data;
        return UserRepository.update(id, dataToUpdate);
    }

    delete(id) {
        return UserRepository.delete(id)
    }

    getOne(id) {
        return UserRepository.getOne({ 'id': id })
    }

    getAll() {
        return UserRepository.getAll();
    }

    save(user) {
        if (this.search({ 'email': user.email })) {
            throw new Error('this email is already registered');
        }
        if (this.search({ 'phoneNumber': user.phoneNumber })) {
            throw new Error('this phone Number is already registered');
        }
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