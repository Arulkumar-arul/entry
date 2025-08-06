import React from 'react'
import './sect.css';

function Sect() {
  return (
    <div>
    <div className='container'>
     <section>
       <form className='froms'>
        <h3>Contact From</h3>
        
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder='arul' required/>
            <label for="fathername">Father Name</label>
            <input type="text" id="fathername" name="fathername"placeholder='fathername' required/>
            <label for="motherrname">Mother Name</label>
            <input type="text" id="mothername" name="mothername"placeholder='mothername' required/>
             <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='arul@gmail.com' required/>
            <label for="phone">Mobile Number</label>
            <input type="tel" name="phone" id="phone" placeholder='123456789' required/>
            <label for="sub">Subject</label>
            <input type="text" name="sub" id="sub" placeholder='subject' required/>
            <label for="mess">Message</label>
            <textarea name="mess" id="mess" required></textarea><br/>
            <button type="submit" className='btn'>Submit</button>
       </form>
     </section>
    </div>
    </div>
  )
}

export default Sect