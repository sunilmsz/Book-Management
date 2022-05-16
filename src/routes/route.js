const express = require('express');
const router = express.Router();

const auth = require("../middleWare/auth")
const userController = require("../controller/userController")
const bookController = require("../controller/bookController")
const reviewController = require("../controller/reviewController")
const { validBook } = require("../middleWare/bookIdCheck")
const authorisation = require("../middleWare/authorisation")

router.post("/register", userController.createuser)

router.post("/login", userController.loginUser)

router.post("/books", auth.validateToken, bookController.createBook)

router.get("/books", auth.validateToken, bookController.getBooks)

router.get("/books/:bookId", auth.validateToken, validBook, bookController.getBookById)

router.put("/books/:bookId", auth.validateToken, validBook, authorisation.valid, bookController.updateBooks)

router.delete("/books/:bookId", auth.validateToken, validBook, authorisation.valid, bookController.deleteBooks)

router.post("/books/:bookId/review", validBook, reviewController.createReview)

router.put("/books/:bookId/review/:reviewId", validBook, reviewController.updateReview)

router.delete("/books/:bookId/review/:reviewId", validBook, reviewController.deleteReviews)

module.exports = router;