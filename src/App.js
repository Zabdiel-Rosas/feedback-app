import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const newState = feedback.filter((item) => {
                return item.id !== id
            })

            setFeedback(newState)
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList list={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App
