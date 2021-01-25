import React from 'react'

export default function form(props) {
    return (
        <div className="form">
            <input className="form-input" value={props.tempNote} onChange={props.handleChange} />
            <button className="form-save" onClick={props.handleSave}>Save</button>
        </div>
    )
}
