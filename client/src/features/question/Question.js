import { Button, Card, Progress } from "flowbite-react"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Question = ({ question, buttonClicked, nextQuestion, active, setActive }) => {

    const [seconds, setSeconds] = useState(question.time * 100)

    let timer
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1)
        }, 10)
        return () => clearInterval(timer)
    })

    useEffect(() => {
        setSeconds(question.time * 100)
    }, [question])

    useEffect(() => {
        if (seconds === 0) {
            clearTimeout(timer)
            setActive(true)
            setTimeout(() => {
                nextQuestion()
                setActive(false)
            }, 1000)
        }
    }, [seconds])

    return (
        <div className="w-full">
            <div className="bg-slate-700 rounded-lg">
                <Progress progress={seconds / 20} color="green" className="bg-slate-700" />
                <h2 className="text-center mb-20 font-semibold text-5xl text-white p-8">{question.questionTitle}</h2>
            </div>
            <div className="grid grid-cols-2 gap-10">

                <Button gradientMonochrome={active ? (question.correct_answer === question.option_1 ? "success" : "failure") : "teal"}
                    onClick={buttonClicked}
                    value={question.option_1}
                    className="h-32">
                    <span className="text-2xl">{question.option_1}</span>
                </Button>
                <Button gradientMonochrome={active ? (question.correct_answer === question.option_2 ? "success" : "failure") : "teal"}
                    onClick={buttonClicked}
                    value={question.option_2}
                    className="h-32">
                    <span className="text-2xl">{question.option_2}</span>
                </Button>


                <Button gradientMonochrome={active ? (question.correct_answer === question.option_3 ? "success" : "failure") : "teal"}
                    onClick={buttonClicked}
                    value={question.option_3}
                    className="h-32">
                    <span className="text-2xl">{question.option_3}</span>
                </Button>
                <Button gradientMonochrome={active ? (question.correct_answer === question.option_4 ? "success" : "failure") : "teal"}
                    onClick={buttonClicked}
                    value={question.option_4}
                    className="h-32">
                    <span className="text-2xl">{question.option_4}</span>
                </Button>

            </div>


        </div>
    )

}

export default Question