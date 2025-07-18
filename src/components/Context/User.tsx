import {useContext} from 'react'
import { UserContext } from './UserContext'

export const User = ()=>{
    const userContext = useContext(UserContext)
    const handleLogin = ()=>{
        if(userContext){
            userContext.setUser({
                name:'Roshik',
                email:'Roshik9841@gmail.com',
            })
        }
    }
    const handleLogOut = ()=>{
        if(userContext){
            userContext.setUser(null)
        }
    }

    return(
        <div>
            <button onClick={handleLogin}>
                Login
            </button>
            <button onClick = {handleLogOut}>
                Logout
            </button>
            <div>
                User name is  {userContext?.user?.name}
            </div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}