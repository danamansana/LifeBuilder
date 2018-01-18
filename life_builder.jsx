import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

function toggleFunction(el) {
  return () => {el.classList.toggle('odd');};
}

document.addEventListener('DOMContentLoaded', ()=> {
  console.log('here I am');
  const root = document.getElementById('root');
  let header = document.createElement("div");
  header.classList.add("header");
  root.appendChild(header);
  let middle = document.createElement("div");
  middle.classList.add("middle");
  root.appendChild(middle);
  let options = document.createElement("div");
  options.classList.add("options");
  middle.appendChild(options);
  let grid = document.createElement("div");
  grid.classList.add("grid");
  middle.appendChild(grid);
  let row = 0;
  for(row = 0; row < 50; row++){
    let rowEl = document.createElement("div");
    rowEl.classList.add("row");
    grid.appendChild(rowEl);
    let col = 0;
    for(col = 0; col < 50; col++){
      let colEl = document.createElement("div");
      //colEl.classList.add(((row+col)%2===0 ? "even" : "odd"));
      colEl.classList.add("odd");
      colEl.classList.add("even");
      
      colEl.addEventListener("click", toggleFunction(colEl))
      rowEl.appendChild(colEl);
    }
  }
  let selections = document.createElement("div");
  selections.classList.add("selections");
  middle.appendChild(selections);
  let footer = document.createElement("div");
  footer.classList.add("footer");
  root.appendChild(footer);

});
