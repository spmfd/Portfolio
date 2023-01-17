import React from 'react';
import './styles/style.css'

export default function Contact() {
  return (
    <div class="page">
      <main class="flex-container">

        <section class ="sidebar">
          <h2>Contact Me!</h2>
        </section>

        <aside class="main-content">
            <form>
            <div class="row width">
            <p>Please Provide your name for reference</p>
            <div class="col">
            <input type="text" class="form-control name" placeholder="First name"></input>
            </div>
            <div class="col">
            <input type="text" class="form-control name" placeholder="Last name"></input>
            </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Any message you would like to provide</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br></br>
            <button type="button" class="btn btn-outline-warning">Submit</button>
            </form>
        </aside>
    </main>
  </div>
  );
}
