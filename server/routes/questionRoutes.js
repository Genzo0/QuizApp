const express = require('express')
const router = express.Router()
const questionController = require('../controllers/questionController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(questionController.getAllQuestion)
    .post(questionController.createNewQuestion)
    .patch(questionController.updateQuestion)
    .delete(questionController.deleteQuestion)

router.route('/:id')
    .get(questionController.getAllQuestionByQuiz)

module.exports = router