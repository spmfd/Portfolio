import React from 'react';
import './styles/style.css'
const ceecee = require('./assets/ceecee.png');
const eatnsip = require('./assets/eatNsip.png');
const weather = require('./assets/weather.png');
const planner = require('./assets/schedule.png');
const password = require('./assets/password.png');

export default function Portfolio() {
  return (
    <div class="page">
    <main class="flex-container">

    <section class ="sidebar">
        <h2>Projects!</h2>
    </section>

    <aside class="main-content">
      <div class="card-grid"> 
          <div class="card">
            <div class="card-container">
          <img src={ceecee} alt="Salon"></img>
              <div class="centered">
              <div class="links">
                <h5 class="card-title">Full Stack Website</h5>
                <a href="https://arcane-mesa-34792.herokuapp.com/" class="card-link" id="card-text">Cee Cee's Salon</a>
                <a href="https://github.com/blu3bloodedcod3r/CeeCee-s_Salon" class="card-link" id="card-text">GitHub Repo</a>
                </div>
              </div>
              </div>
          </div>

          <div class="card" >
            <div class="card-container">
          <img src={eatnsip} alt="Food and Drink"></img>
            <div class="card-body">
            <div class="centered">
              <div class="links">
              <h5 class="card-title">API Query</h5>
              <a href="https://gulogulo208.github.io/eatnsip/" class="card-link">EatNSip</a>
              <a href="https://github.com/gulogulo208/eatnsip" class="card-link">GitHub Repo</a>
              </div>
              </div>
            </div>
            </div>
          </div>

          <div class="card" >
          <div class="card-container">
          <img src={weather} alt="Weather"></img>
            <div class="card-body">
            <div class="centered">
              <div class="links">
              <h5 class="card-title">API Query</h5>
              <a href="https://github.com/spmfd/Check-the-Weather" class="card-link">Check the Weather</a>
              <a href="https://spmfd.github.io/Check-the-Weather/" class="card-link">GitHub Repo</a>
              </div>
              </div>
            </div>
            </div>
          </div>

          <div class="card" >
          <div class="card-container">
          <img src={planner} alt="Daily Planner"></img>
            <div class="card-body">
            <div class="centered">
            <div class="links">
              <h5 class="card-title">Local Storage/API</h5>
              <a href="https://github.com/spmfd/What-to-do-today" class="card-link">Daily Planner</a>
              <a href="https://spmfd.github.io/What-to-do-today/" class="card-link">GitHub Repo</a>
              </div>
              </div>
            </div>
            </div>
          </div>

          <div class="card" >
          <div class="card-container">
          <img src={password} alt="PW Generator"></img>
            <div class="card-body">
            <div class="centered">
            <div class="links">
              <h5 class="card-title">JavaScript Generator</h5>
              <a href="https://spmfd.github.io/Need-a-password-/" class="card-link">Password Generator</a>
              <a href="https://github.com/spmfd/Need-a-password-" class="card-link">GitHub Repo</a>
              </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </aside>

    </main>
    </div>
  );
}
