import React from 'react';
import './styles/style.css'
const resume = require('./styles/test.docx')

export default function Resume() {
  return (
    <div>
      <main class="flex-container">
      <section class ="sidebar">
          <h2>Resume</h2>
      </section>
      <aside class="main-content">
        <h3>Coding Languages Known</h3>
        <br></br>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <br></br>
        <a href={resume} download>Please click here to view full resume!</a>
        </aside>
        </main>
    </div>
  );
}

