import { useState } from 'react'
import Card from './shared/Card'

import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component */}
                <div className='input-group'>
                    <input
                        type='text'
                        placeholder='write a review'
                        onChange={handleChangeText}
                        value={text}
                    />
                    <Button type='submit' isDisabled={false}>
                        Send
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
