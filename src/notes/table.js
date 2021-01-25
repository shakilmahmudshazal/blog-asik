import React from 'react'

export default function table(props) {
    return (
             <ul className="data-list">
                {props.notes.map((item,i)=><div key={item.id}><span className="data-item">{item.details}</span><button onClick={props.onEdit} className="btn btn-edit" >Edit</button> <button className="btn btn-delete" onClick={()=>{props.onDelete(item.id)}}>Delete</button></div>)}
            </ul>
    )
}
