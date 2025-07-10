type StatusProps = {
    status: 'loading' | 'success' | 'error'  //status ma yo 3 wota mtra word pass hunxa

}

export const Status = (props:StatusProps)=>{
    let message
    if(props.status === "loading"){
        message= "loading...";
    }else if(props.status ==="success" ){
        message= "Data fetched";
    }else if(props.status === "error"){
        message = "Error data";
    }
    return(
        <div>
            <h2>{message}</h2>
        </div>
    )
}