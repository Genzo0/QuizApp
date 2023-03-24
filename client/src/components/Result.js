import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({score, length}) => {
  return (
    <div className='flex flex-col items-center gap-y-8'>
        <h1 className='text-9xl text-white font-bold'>Congratulations</h1>
        <h2 className='text-5xl text-white font-bold'>You solved {score} out of {length}</h2>
        <Button gradientDuoTone="purpleToBlue"><Link to='/libraries'>Back to main menu</Link></Button>

    </div>
  )
}

export default Result