import React, {useState} from 'react'
// rfc shortcut

export default function TextForm(props) {
    const handleUpClick = () =>{
      // console.log("uppercase "+ text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "success");
    }
    const handleLowerClick = () =>{
      // console.log("lowercase "+ text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }
    const handlaOnChange = (event) =>{
        // console.log("you change textarea");
        setText(event.target.value);
      }
      const handleOnCopy = () =>{
        var selectText = document.getElementById("myBox");
        selectText.select();
        selectText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(selectText.value);
        props.showAlert("Copied to clipboard", "success");
      } 
      const removeSpaces = () =>{
        let newtxt = text.split(/[ ]+/);
        setText(newtxt.join (" "));
        props.showAlert("Extra spaces removed", "success");
      }
      const countWords = (text) => {
        if (!text.trim()) {
          return 0;
        }
        return text.trim().split(/\s+/).length;
      };
    const [text, setText] = useState('');
    // text = 'fsdgg'  wrong way
    // setText("new text");  correct way to chnage state
  return (
<>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'black'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'? 'grey':'white',
    color:props.mode === 'dark'? 'white':'black'
  }} onChange={handlaOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleOnCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2" style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{countWords(text)} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview"}</p>
    </div>
    </>
  )
}
