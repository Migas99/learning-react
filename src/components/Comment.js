import React from 'react';

const Comment = ({ avatar, author, date, sentence }) => {
    return (
        <div className="ui container comments">
          <div className="comment">
            <a href="/" className="avatar">
              <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
              <a href="/" className="author">
                {author}
              </a>
            </div>
            <div className="metadata">
              <span className="date">{date}</span>
            </div>
            <div className="text">{sentence}</div>
          </div>
        </div>
      );
}

export default Comment;