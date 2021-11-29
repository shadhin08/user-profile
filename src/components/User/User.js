import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const User = () => {
    //Image from randomuser----------------------------------------//
        const [image, setImage]=useState({});
        useEffect(()=>
        {
            fetch('https://randomuser.me/api/')
            .then(res=>res.json())
            .then(data=>setImage(data))
        }, []);
        const picture=image.results;
        let picUrl="https://i.imgur.com/bDLhJiP.jpg";
        picUrl=picture && picture[0].picture.large;
    //-----------------------------------------------------------------//
    //Comments----------------------------------------------------//
        const [posts, setposts]=useState([]);
        useEffect(()=>
        {
            fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res=>res.json())
            .then(data=>setposts(data))
        }, []);
        // console.log(posts);
    //---------------------------------------------------------//
    const [data, setData]= useState([]);

    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setData(data))
    }, []);
    const {username}=useParams();
    let user, userPost;
    if(data.length>0)
    {
        user=data.find(singleUser=>singleUser.username===username)
        // console.log(user);
        userPost=posts.filter(post=>post.userId===user.id)
    }
    // //find post---------------------------//
    
    //     // console.log(userPost)
    // // console.log(user);
    return (
        <div className="container mt-5">
            <div className='nav-bar'>
                <Link to='/home'>
                    <h1> <FontAwesomeIcon icon={ faHome }/></h1>
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                    <div className="card p-3 py-4">
                        <div className="text-center"> 
                        <img src={picUrl} width="100" className="rounded-circle" alt=''/> 
                        </div>
                        <div className="text-center mt-3"> 
                            <h5 className="mt-2 mb-0">{user&&user.name}</h5> 
                            <div className="px-4 mt-1">
                                <p>{user&&user.company.catchPhrase}</p>
                                <p className="fonts">{user&&user.company.name} </p>
                            </div>
                            <div className="buttons"> <button className="btn btn-outline-primary px-4">Message</button> <button className="btn btn-primary px-4 ms-3">Contact</button> </div>
                        </div>
                    </div>
                    <h1>Posts</h1>
                    <br/>
                    {
                        userPost&&userPost.map(post=><Post post={post} 
                           username={username} key={post.id}></Post>)
                    }
                </div>
            </div>
        </div>
    );
};

export default User;