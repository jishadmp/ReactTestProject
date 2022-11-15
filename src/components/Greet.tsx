type GreetProps={
    name:string
    messageCount:number
    isLoggedin: boolean
}

export const Greet = (props:GreetProps)=>{
    return(
        <div>
        <h1>{props.isLoggedin?'Welcome to the show ${props.name} ,you have ${props.messageCount} messages':'Welcome guest'}</h1>
        </div>
    )
}