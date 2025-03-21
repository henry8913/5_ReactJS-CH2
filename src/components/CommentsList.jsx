
import SingleComment from './SingleComment';

const CommentsList = ({ comments, onCommentUpdated }) => {
  return (
    <div className="comments-list">
      <h4>Recensioni</h4>
      {comments.map(comment => (
        <SingleComment 
          key={comment._id} 
          comment={comment} 
          onCommentUpdated={onCommentUpdated}
        />
      ))}
    </div>
  );
};

export default CommentsList;
