import React from 'react'
import Navbar from './Navbar'
import './global.css'
import Form from './Form'
import DisplayNotes from './DisplayNotes'
import TaskProvider from './TaskProvider'
const App = () => {
  return (
    <>
    <Navbar/>
    <TaskProvider>
    <main className="mainContainer">
        <Form/>
        <DisplayNotes/>
    </main>
    </TaskProvider>
    
    </>
  )
}

export default App