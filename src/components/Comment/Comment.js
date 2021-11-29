import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import "./Comment.css";
const Comment = (props) => {

    console.log(props);
    const {comment}=props;
    const { name, email, body }=comment;
    return (
        <div>
            <div className='comment-detail'>
                <div className='name-section'>
                    <h6>{name } </h6>
                    <p><small>, ({email})</small></p>
                </div>
                <div>
                    <p>{body}</p>
                </div>
            </div>
            <div className='button-section'>
                <button className='comment-like-button'><FontAwesomeIcon icon={ faThumbsUp } /> Like</button>
            </div>
        </div>
    );
};

export default Comment;