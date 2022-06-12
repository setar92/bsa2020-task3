const { dbAdapter } = require('../config/db');
const { v4 } = require('uuid');


class BaseRepository {
    constructor(collectionName) {
        this.dbContext = dbAdapter.get(collectionName);
        this.collectionName = collectionName;
    }

    generateId() {
        return v4();
    }

    getAll() {
        return this.dbContext.value();
    }

    getOne(id) {
        //змінюю цей метод, щоб шукав по ід       
        return this.dbContext.find({id}).value();
    }

    create(data) {
        console.log('BaseRepository.create створюємо нового юзера', data)
        data.id = this.generateId();
        data.createdAt = new Date();
        const list = this.dbContext.push(data).write();
        return list.find(it => it.id === data.id);
    }

    update(id, dataToUpdate) {
        dataToUpdate.updatedAt = new Date();
        return this.dbContext.find({ id }).assign(dataToUpdate).write();
    }

    delete(id) {
        console.log(id);
        return this.dbContext.remove({ id }).write();
    }
}

exports.BaseRepository = BaseRepository;