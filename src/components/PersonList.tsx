type nameListProps = {
    nameList:{
        first:string
        last:string
    }[]
}

export const PersonList = ({nameList}:nameListProps)=>{
    return <div>
        {nameList.map((names)=>(
            <div>{names.first}      {names.last}</div>
        ))}
    </div>
}