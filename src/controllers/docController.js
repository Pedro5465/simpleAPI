const res = require("express/lib/response")
const { createDoc, findDocAll, findByIdDoc, updateByIdDoc, deleteByIdDoc } = require("../services/docServices")
const filterDoc = require("../utils/utilFilter")
/*
* 
*
*
*/
async function addDocController(req, res) {
    const {
        author,
        email
    } = req.body

    const doc = {
        author: author,
        email: email
    }

    const filter = filterDoc(doc)

    if (Object.keys(filter).length > 0) {
        return res.status(400).json(filter)
    }

    const response = await createDoc(doc)

    if (!response) {
        return res.status(400).json({
            error: "Document already registered."
        })
    }

    res.status(200).json({
        success: "Successfully registered."
    })
}
/*
* 
*
*
*/
async function getAllDocController(req, res) {
    const response = await findDocAll()

    if (!response) {
        res.status(404).json({ error: "Internal error" })
    }

    res.status(200).json(response)
}
/*
* 
*
*
*/
async function getByIdDocController(req, res) {
    const id = req.params.id

    const response = await findByIdDoc(id)

    if (!response) {
        return res.status(404).json({error: "Document not found."})
    }

    res.status(200).json(response)
}

async function editByIdDocController(req, res) {

    const id = req.params.id
    const { data } = req.body


    const response = await updateByIdDoc(id, data)

    if (!response) {
        return res.status(304).json({ error: "It was not possible to update." })
    }

    res.status(202).json({ success: "Document successfully updated." })
}

async function delByIdDocController(req, res) {

    const id = req.params.id

    const response = await deleteByIdDoc(id)

    if (!response) {
        return res.status(404).json({ error: "It was not possible to delete." })
    }

    res.status(200).json({ success: "Document successfully deleted." })
}




module.exports = {
    addDocController,
    getAllDocController,
    getByIdDocController,
    editByIdDocController,
    delByIdDocController
}