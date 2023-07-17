const db = require('../models/index.js');

const addSubmit = async (data) => {
    const add = await db.submitform.create(data);
    return add;
}

module.exports = {
    addSubmit
}