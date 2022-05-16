
const valid = async (req, res, next) => {
    if (req.userId !== req.book.userId.toString())
        return res.status(403).send({ status: false, message: "You'r not authrised to do this task" })
    next();
}

module.exports = { valid }