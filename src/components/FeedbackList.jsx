import FeedbackItem from './FeedbackItem';

function FeedbackList({ list }) {
    if (!list || list.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className='feedback-list'>
            {list.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default FeedbackList;
