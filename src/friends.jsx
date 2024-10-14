import { useEffect, useState } from 'react';
import Friend from './Friend'; // Importing the Friend component
import './friends.css';

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>

            {
                friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />  
                ))
            }
        </div>
    );
}
/**
 * state to hold data
 * 
 * use effect with dependency 
 * 
 * use fetch to load data
 * 
 *  set loded data to state 
 * 
 * 
 * display data on the component 
 */