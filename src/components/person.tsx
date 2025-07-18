import { PersonProps } from "./Person.types"

export const Person = ({names}:PersonProps)=>{
    return<div>{names.first} {names.last}</div>
}