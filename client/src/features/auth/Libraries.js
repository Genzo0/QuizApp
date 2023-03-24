import React from 'react'
import Quiz from '../quiz/Quiz'
import { useGetQuizzesQuery } from '../quiz/quizzesApiSlice'

const Libraries = () => {
    const {
        data : quizzes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetQuizzesQuery()

    let content

    if(isLoading) content = <p>Loading...</p>

    if(isSuccess){
        const { ids } = quizzes

        const cardContent = ids?.length ? 
            ids.map(quizId => <Quiz key={quizId} quizId={quizId}/>) : null

        content = (
            <div className='grid grid-cols-3 gap-4'>
                {cardContent}
            </div>
        )
    }

  return content
}

export default Libraries