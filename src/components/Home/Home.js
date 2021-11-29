import React, { useContext } from 'react';
import { userData } from '../../App';
import Users from '../Users/Users';

const Home = () => {
    const users=useContext(userData);
    // console.log(users);
    return (
        <div>
            {
                users.map(user=><Users user={user} key={user.id}></Users>)
            }
        </div>
    );
};

export default Home;