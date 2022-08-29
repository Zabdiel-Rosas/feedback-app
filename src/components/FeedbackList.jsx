import PropTypes from 'prop-types';
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

FeedbackList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
};


export default FeedbackList;
