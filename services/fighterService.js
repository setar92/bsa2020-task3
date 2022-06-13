const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {


    update(id, dataToUpdate) {
        //перевіряємо по ід чи така сутність існує
        let data = this.getOne({ 'id': id });
        console.log(data);
        if (!data) return data;
        return FighterRepository.update(id, dataToUpdate);
    }

    getOne(id) {
        return FighterRepository.getOne({ 'id': id })
    }


    delete(id) {
        return FighterRepository.delete(id)
    }

    getAll() {
        return FighterRepository.getAll('fighters');
    }

    create(fighter) {
        if (this.search({ 'name': fighter.name })) {
            throw new Error('this fighter name is already registered');
        }
        return FighterRepository.create(fighter);
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    // TODO: Implement methods to work with fighters
}

module.exports = new FighterService();