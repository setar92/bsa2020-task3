const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {


    update(id, dataToUpdate) {
        let data = this.getOne(id);
        if (!data) return data;
        return FighterRepository.update(id, dataToUpdate);
    }

    getOne(search) {
        return FighterRepository.getOne(search)
    }

    delete(id) {
        return FighterRepository.delete(id)
    }

    getAll() {
       return FighterRepository.getAll('fighters');
    }

    create(fighter) {
        console.log('FighterService метод create');
        return FighterRepository.create(fighter);
    }


    // TODO: Implement methods to work with fighters
}

module.exports = new FighterService();