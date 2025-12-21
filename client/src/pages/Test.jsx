import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../providers/UserContextProvider';

const Test = () => {

    const userContext = useContext(UserContext);

    if (userContext.isUserLoggedIn) {
        return <div>I AM LOGGED IN</div>
    }
    
    return (
        <div>Error you are not logged in</div>
    )
}

export default Test