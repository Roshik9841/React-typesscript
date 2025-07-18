import { Name } from "./Person.types"

type nameListProps = {
    nameList: Name[]
}

export const PersonList = ({nameList}:nameListProps)=>{
    return <div>
        {nameList.map((names)=>(
            <div>{names.first}      {names.last}</div>
        ))}
    </div>
}