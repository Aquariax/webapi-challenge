const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get(){
    return db('actions');
}

function getById(id){
    return db('actions')
    .where({id})
    .first();
}

function insert(action){
    return db('actions')
        .insert(action)
        .then(ids =>{
            return getById(ids[0])
        })
}

function update(id, changes){
    return db('actions')
        .where({id})
        .update(changes);
}

function remove(id){
    return db('posts')
        .where('id', id)
        .del()
}