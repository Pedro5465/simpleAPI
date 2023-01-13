const { Doc } = require("../models/docModel")
/*
* 
*
*
*/
async function createDoc({ author, email }) {
    try {
        return await Doc.create({
            author: author,
            email: email
        })
    } catch (error) {
        return false
    }
}
/*
* 
*
*
*/
async function findDocAll() {

    try {
        return await Doc.findAll()
    } catch (error) {
        return false
    }

}
/*
* 
*
*
*/
async function findByIdDoc(id) {
    try {
        return await Doc.findByPk(id)
    } catch (error) {
        return false
    }

}
/*
* 
*
*
*/
async function updateByIdDoc(id, data) {

    try {
        const doc = await Doc.findByPk(id);

        if (!doc) {
            return false;
        }
        const result = await Doc.update(data, { where: { id: id } });
        if (result[0] === 1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false
    }

}
/*
* 
*
*
*/
async function deleteByIdDoc(id) {

    try {
        return await Doc.destroy({
            where: {
                id: id
            }
        })


    } catch (error) {
        return false
    }

}



module.exports = {
    createDoc,
    findDocAll,
    findByIdDoc,
    updateByIdDoc,
    deleteByIdDoc
}