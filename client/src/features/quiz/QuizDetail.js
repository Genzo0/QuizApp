import { useParams } from 'react-router-dom'
import { useGetQuizByIdQuery } from './quizzesApiSlice'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'
import { useGetQuestionsQuery } from '../question/questionApiSlice'

const QuizDetail = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const { data: quiz,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetQuizByIdQuery(id)

  const {
    data: questions
  } = useGetQuestionsQuery(id)
  console.log(questions)

  let content

  if (isLoading) content = <p>Loading...</p>

  if (quiz) {
    const quizClicked = () => navigate(`../play/${id}`)

    content = (
      <>
        <div className="min-w-full">
          <div className='flex justify-between bg-slate-700 rounded-xl items-center gap-x-10 mb-4 overflow-hidden'>
            <img src={quiz.image_url} className="h-64 object-cover w-96" />
            <div className='grow'>
              <h1 className='text-white font-bold text-7xl mb-4'>{quiz.title}</h1>
              <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 fill-white'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                <p className='text-white text-3xl font-medium'>{quiz.author}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 fill-white ml-4'><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" /></svg>
                <p className='text-white text-3xl font-medium'>{questions ? questions.length : 0} questions</p>
              </div>
            </div>
            {questions ? <Button gradientDuoTone="purpleToBlue" className='w-64 mr-8' onClick={quizClicked}>Mainkan</Button> : ""}
          </div>
          <div className='bg-slate-700 rounded-xl p-10'>
            <h2 className='text-white font-bold text-3xl mb-4'>Description</h2>
            <p className='text-white text-xl'>{quiz.description}</p>
          </div>
        </div>
      </>
    )
  } else {
    content = <p>Not found</p>
  }

  return content
}

export default QuizDetail