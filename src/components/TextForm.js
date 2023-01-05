import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const [Text, setText] = useState('Enter Text Here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}
