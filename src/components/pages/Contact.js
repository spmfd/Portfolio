import {React, useState } from 'react';
import './styles/style.css'

export default function Contact() {

    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I will be in contact with you ASAP");
    setFName("");
    setLName("");
    setEmail("");
    setMessage("");
    }


return (
    <div class="page">
      <main class="flex-container">

        <section class ="sidebar">
          <h2>Contact Me!</h2>
        </section>

        <aside class="main-content">
            <form onSubmit={contactSubmit}>
            <div class="row width">
            <p>Please Provide your name for reference</p>
            <div class="col">
            <input type="text" class="form-control name" placeholder="First name" value={FName} onChange={(e) => setFName(e.target.value)}></input>
            </div>
            <div class="col">
            <input type="text" class="form-control name" placeholder="Last name" value={LName} onChange={(e) => setLName(e.target.value)}></input>
            </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Any message you would like to provide</label>
              <textarea class="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <br></br>
            <button type="submit" class="btn btn-outline-warning">Submit</button>
            </form>
        </aside>
    </main>
  </div>
  );
}
