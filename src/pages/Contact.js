import React from "react"

function Contact() {
  return (
    <div className="main-container">
      <div className="contain">
        <span className="title">CONTACT US</span>
        <span className="subtitle">Leave us a message!</span>
        <form>
          <input type="text" name="name" className="input" placeholder="Your name..."></input>
          <input type="text" name="email" className="input" placeholder="Your email..."></input>
          
          <textarea className="input message-box" placeholder="Your message..." ></textarea>
          <button className="btn-submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact