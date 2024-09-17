import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText = ''; 
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
    <h3 className="text-center mt-2">{props.heading}</h3>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea className="form-control" value={text} rows="8" onChange={handleOnChange} id="description"></textarea>
  </div>
  <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Upper Case</button>
  <button type="submit" onClick={handleLowClick} className="btn btn-primary mx-1">Convert to Lower Case</button>
  <button type="submit" onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>

    </div>
    <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>Total Words {text.split(" ").length} and Total Characters {text.length}</p>
        <p>Total Characters without Space: {text.length - text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
