import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' required placeholder='Enter your name' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' required placeholder='Enter your Email' />
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <input type="text" id='msg' required placeholder='Tell us about your query...' />
          </div>

          <button type='Submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact