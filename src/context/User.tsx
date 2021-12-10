import {useContext} from 'react';
import { UserContext } from './UserContext';

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        console.log('handleLogin, userContext : ', userContext)
        userContext.setUser({
                    name: 'Vishwas',
                    email: 'vishwas@exmaple.com'
                })
        // if(userContext) {
        //     userContext.setUser({
        //         name: 'Vishwas',
        //         email: 'vishwas@exmaple.com'
        //     })
        // }
    }
    const handleLogout = ()  => {
        console.log('handleLogin, userContext : ', userContext)
        userContext.setUser(null)
        // if (userContext) {
        //     userContext.setUser(null)
        // }
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is{userContext.user?.email}</div>
        </div>
    )
}