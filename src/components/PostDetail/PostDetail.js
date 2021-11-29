import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Comment from '../Comment/Comment';
import like from '../../media/icon/like.png'
import comment from '../../media/icon/comment.png';
import './PostDetail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faThumbsUp, faComment, faUser } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const PostDetail = () => {
    const { postNum, username }=useParams();
    // console.log(username);
    
    //load post data
    const [post, setPost]=useState([]);
        useEffect(()=>
        {
            const url = "https://jsonplaceholder.typicode.com/posts/"+postNum;
            fetch(url)
            .then(res=>res.json())
            .then(data=>setPost(data))
        }, [postNum]);
    //load comment
    const [comments, setComments]=useState([]);
    useEffect(()=>
    {
        const url="https://jsonplaceholder.typicode.com/comments?postId="+postNum;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data));
    }, [postNum])
    // console.log(comments);

    return (
        <div className="container mt-5" >
        <div className='nav-bar'>
                <Link to='/home'>
                    <h1 className='nav-icon'> <FontAwesomeIcon icon={ faHome }/></h1>
                </Link>
                <Link to={"/profile="+username}>
                    <h1 className='nav-icon'> <FontAwesomeIcon icon={ faUser }/></h1>
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                    <div className='postBox'>
                        <h4 className='postTitle'>{post&&post.title}</h4>
                        <p className='postTitle'>{post&&post.body}</p>
                        <div className="likeComment">
                            <div className='like'>
                                <button className='like-button'><FontAwesomeIcon icon={ faThumbsUp }/> Like</button>
                            </div>

                            <div className='comment'>
                                <button className='comment-button'><FontAwesomeIcon icon={ faComment }/> Comment</button>
                            </div>
                        </div>
                    </div>
                    <div className='postBox'>
                        {
                            comments&&comments.map(cmnt=><Comment key={cmnt.id} comment={cmnt}></Comment>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostDetail;