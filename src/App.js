import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
  <div class='buttons'>
    <button id="addToButton" class="buttons"> Add Onto </button>
    <button id="deleteButton" class='buttons'> Delete Last</button>
    <button id="changeBackgroundButton" class='buttons'> Change Background</button>
    <button id="changeHeadingButton" class='buttons'> Change Heading</button>
    <button data-toggle-button class = 'buttons'> Toggle Details </button>
  </div>
  
  <div class="outsidediv">
      <img class="hingle" src="https://pbs.twimg.com/profile_images/1288205058585300992/eH8L4MYG_400x400.jpg" />
      <div id='toChange'>
        <h1 class="titleCardHingle" id='title'> Hingle McCringleberry </h1>
        <div class="outside">
          <details class ='details'>
            <summary>Details</summary>
            <ul class="information">
              <p>Hingle McCringleberry is the 2012 Heisman-winning tight end out of Penn State University, selected No. 1 overall by the Rhinos in the 2016 NFL Draft.
              </p>
            </ul>
            </details>
        </div>
      </div>
  </div>
</div>
  );
}

export default App;
