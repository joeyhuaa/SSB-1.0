import React from "react"

function Contact() {
  return (
    <div className="main-container">
      <div className="contain">
        <span className="main-title">CONTACT US</span>
      </div>
      <div className="white-contain">
        <span className="subtitle">Leave us a message!</span>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" /> 
          <input type="text" name="name" className="input" placeholder="Your name" required />
          <input type="text" name="email" className="input" placeholder="Your email" required />
          <input type="text" name="subject" className="input" placeholder="Subject" required />
          <textarea name="message" className="input message-box" placeholder="Your message" required></textarea>
          <button type="submit" name="submit" className="btn-black btn-submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact