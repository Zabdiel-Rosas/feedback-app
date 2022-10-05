import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import AboutIconLink from './components/AboutIconLink'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
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
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    list={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </>
                        }
                    />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App
