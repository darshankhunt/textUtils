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

    const handleLoClick = ()=>{
        let newText1 = Text.toLowerCase();
        setText(newText1);
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleElClick = ()=>{
        const finalSentence = Text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(finalSentence);
    }

    const handleCopy = ()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleRemoveExtraSpace = ()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
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
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleElClick}>Every Word letter Capital</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
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
