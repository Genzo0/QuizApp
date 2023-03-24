import { useGetQuestionsQuery } from "./questionApiSlice"
import { useParams } from "react-router-dom"
import Question from "./Question"
import { useEffect, useState } from "react"
import Result from "../../components/Result"

const QuestionList = () => {
    const { id } = useParams()
  
    const {
        data : questions,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetQuestionsQuery(id)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [score, setScore] = useState(0)
    const [active, setActive] = useState(false)

    const buttonClicked = (e) => {
        setActive(true)
        if(questions[currentQuestion].correct_answer === e.currentTarget.value){
            
            setScore(score+1)
        } 
        
        setTimeout(() => {
            nextQuestion()
            setActive(false)
        }, 1000)
    }

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        } else setShowResult(true)

    }

    let content

    if(isLoading) content = <p>Loading...</p>

    if(isSuccess){
        
        content = showResult ? (<Result score={score} length={questions.length}/> ) :
        (
            <Question question={questions[currentQuestion]} buttonClicked={buttonClicked} nextQuestion={nextQuestion} active={active} setActive={setActive}/>
        )
        

    }

    return content
}

export default QuestionList