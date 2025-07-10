type GreetProps = {
    name:string;
    messageCount?: number;  //question marks le optional hunxa
    isLoggedIn : boolean;
}

export const Greet = (props:GreetProps)=>{
    return(
        <div>
            {props.isLoggedIn ? <h2>Welcome {props.name}. you have {props.messageCount} messages</h2>:<h1>User not logged in</h1>}
          
        </div>
    )
}