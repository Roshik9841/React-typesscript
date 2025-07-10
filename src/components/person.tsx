type Props ={
    names: {
        first: string;
        last: string;
    }
}
export const Person = ({names}:Props)=>{
    return<div>{names.first} {names.last}</div>
}