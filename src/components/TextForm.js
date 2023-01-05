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

    const handleloClick = ()=>{
        let newText1 = Text.toLowerCase();
        setText(newText1);
    }

    const [Text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text summary</h2>
            <p>{Text.split(" ").length} words, {Text.length} Characters</p>
            <p>{0.008*Text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{Text}</p>

        </div>
        </>
    )
}
