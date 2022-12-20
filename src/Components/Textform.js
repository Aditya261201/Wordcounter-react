import React, { useState } from 'react'

export default function Textform(props) {

    // here text is a variable , which is in a state having value "Enter your text".
    // we cant change the value of text directly ie. text ="__" ........if we wanna change the value we have to use setText function.
    // we can't change the state directly we must have to use the function.
    const [text, setText] = useState("");



    const handleOnChange = (event) => {
        console.log("on change");
        // here event is occured as text state is changed so we have to change the value of the text as- 
        setText(event.target.value);
        // if we havent done this then we will not be able to change the value of the text. ie in textarea the value is set as {text} which was not changed.
    }
    const UcaseClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','Success');
    }
    const LcaseClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','Success');
    }
    const copy= () => {
        console.log("Copy was clicked");
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','Success');
    }
    const ClearClick = () => {
        console.log("Textbox cleared");
        let newText ="";
        setText(newText);
        props.showAlert('Textbox cleared','Success');
    }




    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'#9e9696':'white',color: props.mode ==='dark'?'white':'black'}} id="textbox" onChange={handleOnChange} value={text} rows="6" placeholder="enter your text here.."></textarea>
                    {/* in textarea we have to listen for onChange function because here value={text} is a state and which is constantly monitored by react so if we want to change the value of text we have to set it on onChange function .otherwise we will not be able to change the value of textfield*/}
                </div>
                <div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={UcaseClick}>Convert to UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={LcaseClick}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copy}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ClearClick}>Clear</button>
                </div>
            </div>
            <h2>YOUR TEXT SUMMARY</h2>
            <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.length>0?text:"Enter something in the above textbox to preview it here.."}</p>
            
        </>
    );
}
