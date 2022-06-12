const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {

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