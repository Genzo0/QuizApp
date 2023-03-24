import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectQuizById } from "./quizzesApiSlice"
import { Button, Card } from "flowbite-react"

const Quiz = ({quizId}) => {
  const quiz = useSelector(state => selectQuizById(state, quizId))

  const navigate = useNavigate()

  if(quiz){
    const quizClicked = () => navigate(`quiz/${quizId}`)

    return (
        <div>
            <Card
            className="bg-slate-700 border-0">
                <img src={quiz.image_url} alt={quiz.image_url} className="h-64 object-cover"/>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mx-auto text-white">{quiz.title}</h5>
                <p className="font-normal text-white text-justify h-8">
                    {`${quiz.description.substring(0, 50)}...`}
                </p>
                <div className="flex place-content-between text-zinc-400 mt-2">
                    <p className="text-right">{quiz.category}</p>
                    <p className="text-right text-zinc-400"> author : {quiz.author}</p>
                </div>
                
                <Button type="submit" onClick={quizClicked} gradientDuoTone='purpleToBlue'>
                    Mainkan
                </Button>
            </Card>
        </div>
    )
  } else return null    
}

export default Quiz