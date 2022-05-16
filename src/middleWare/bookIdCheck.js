const mongoose = require("mongoose")
const bookModel = require("../model/bookModel")

const validBook = async (req, res, next) => {
    let bookId = req.params.bookId?.trim()
    if (!mongoose.Types.ObjectId.isValid(bookId))
        return res.status(400).send({ status: false, message: "Please Enter valid book Id " })

    const book = await bookModel.findOne({ _id: bookId, isDeleted: false }).lean()
    if (!book)
        return res.status(404).send({ status: false, message: "No Book found" })
    req.book = book;
    next()
}

module.exports = { validBook }