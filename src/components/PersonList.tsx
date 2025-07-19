import { Name } from "./Person.types"
import { ThemeContext } from "./Context/ThemeContext"
import { useContext } from "react"
type nameListProps = {
    nameList: Name[]
}

export const PersonList = ({nameList}:nameListProps)=>{
    const theme = useContext(ThemeContext)
    return <div>
        {nameList.map((names)=>(
            <div style ={{color:theme.secondary.main}}>{names.first}      {names.last}</div>
        ))}
    </div>
}