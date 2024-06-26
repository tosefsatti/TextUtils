import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor:'black',
        border: '2px solid white'

    })
    const [btnText, setBtnText] =  useState("Enable light mode");

    const toggleStyle = () =>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
        backgroundColor:'white',
       
        })
    
  setBtnText("Enable Dark mode");
  } else {
            setMyStyle({
                color:'white',
        backgroundColor:'black',
        border: '2px solid white'
        })
        setBtnText("Enable Light mode");
        }
    }
  return (
    
    <div className='container' style={myStyle}>
        <h1>About us</h1>
    <div class="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  </div>
<div className="container my-3">


<button type="button" onClick={toggleStyle} class="btn btn-primary">{btnText}</button>
    </div>
    </div>
  )
}
