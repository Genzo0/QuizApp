import { Link } from "react-router-dom";
import { Button, Card, Label, TextInput } from "flowbite-react"

import React from 'react'

const Public = () => {
    const content = (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
                <h1 className="font-sans text-6xl mb-20 text-emerald-700">Quizz App</h1>
                <div className="flex gap-x-48">
                    <Link to='login'>
                        <Button
                            size='xl'
                            outline={true}
                            pill={true}
                            gradientDuoTone="cyanToBlue"
                            className="w-48"
                            >
                            Login
                        </Button>
                    </Link>
                    <Link to='register'>
                        <Button
                            size='xl'
                            outline={true}
                            pill={true}
                            gradientDuoTone="cyanToBlue"
                            className="w-48"
                            >
                            Register
                        </Button>
                    </Link>
                </div>
                <div className="mt-20">
                    <Link to='libraries'>
                        <Button
                            size='xl'
                            outline={true}
                            pill={true}
                            gradientDuoTone="cyanToBlue"
                            className="w-64"
                            >
                            Play Games
                        </Button>
                    </Link>
                </div>
        </div>
    )
    return content
}

export default Public