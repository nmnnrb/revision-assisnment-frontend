import React, { useState } from 'react';

const CommentApp = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, replies: [] },
      ]);
      setNewComment('');
    }
  };

  const handleAddReply = (commentId, replyText) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [...comment.replies, { id: Date.now(), text: replyText }],
            }
          : comment
      )
    );
  };

  return (
    <div style={{ padding: '20px', margin: 'auto' }} className='h-screen w-screen bg-black text-white'>
      <h1>Comment and Reply Section</h1>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          rows="4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          style={{ width: '100%', padding: '10px' , border: '1px solid white'}}
        ></textarea>
        <button onClick={handleAddComment} style={{ marginTop: '10px', padding: '10px 20px' }}>
          Add Comment
        </button>
      </div>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onAddReply={(replyText) => handleAddReply(comment.id, replyText)}
          />
        ))}
      </div>
    </div>
  );
};

const Comment = ({ comment, onAddReply }) => {
  const [newReply, setNewReply] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReply = () => {
    if (newReply.trim() !== '') {
      onAddReply(newReply);
      setNewReply('');
      setShowReplyBox(false);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p>{comment.text}</p>
      <button onClick={() => setShowReplyBox(!showReplyBox)} style={{ marginBottom: '10px' }}>
        {showReplyBox ? 'Cancel' : 'Reply'}
      </button>
      {showReplyBox && (
        <div style={{ marginBottom: '10px' }}>
          <textarea
            rows="2"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Write a reply..."
            style={{ width: '100%', padding: '10px', border: "1px solid white" }}
          ></textarea>
          <button onClick={handleReply} style={{ marginTop: '10px', padding: '5px 10px' }}>
            Add Reply
          </button>
        </div>
      )}
      <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
        {comment.replies.map((reply) => (
          <div key={reply.id} style={{ borderLeft: '2px solid #aaa', paddingLeft: '10px', marginBottom: '5px' }}>
            <p>{reply.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentApp;
