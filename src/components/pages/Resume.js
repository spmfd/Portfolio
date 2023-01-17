import React from 'react';
import './styles/style.css'
const resume = require('./styles/test.docx')

export default function Resume() {
  return (
    <div class="page">
      <main class="flex-container">
      <section class ="sidebar">
          <h2>Resume</h2>
      </section>
      <aside class="main-content">
        <h3>Coding Languages Known</h3>
        <br></br>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          
        </ul>
        <br></br>
        <a href={resume} download class="info">Please click here to view full resume!</a>
        </aside>
        </main>
    </div>
  );
}

