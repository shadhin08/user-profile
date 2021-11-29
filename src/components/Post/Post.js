import React from 'react';
import like from '../../media/icon/like.png'
import comment from '../../media/icon/comment.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'

import './Post.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {username, post}=props;
    const {id}=post;
    // console.log(post);
    return (
        <div className="postBox" >
            <h4 className='postTitle'>{props.post.title}</h4>
            <Link to={"/profile="+ username + "/post="+id}>
                <button className="btn btn-outline-primary ">See Detail</button>
            </Link>
            <br/>
            <div className="likeComment">
                <div className='like'>
                    <button className='like-button'><FontAwesomeIcon icon={ faThumbsUp }/> Like</button>
                </div>

                <div className='comment'>
                    <Link to={"/profile="+ username + "/post="+id}>
                        <button className='comment-button'><FontAwesomeIcon icon={ faComment }/> Comment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;