import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { toggleElement, sum, neighbors, pairParse, pairCode, codeNeighbors, DOMNeighbors,
  NeighborsCount, updateCell, cellNeedsUpdate, cellsNeedingUpdate, updateCells} from './vector_methods.js';
import { glider, oscillator, gun } from './sample_shapes';
import gridDrawer from './grid_drawer.js';
import gridAdder from './grid_adder';

function toggleFunction(el) {
  return () => {
    toggleElement(el);
    };
}


document.addEventListener('DOMContentLoaded', ()=> {
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
  grid.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  });
  let row = 0;
  for(row = 0; row < 50; row++){
    let rowEl = document.createElement("div");
    rowEl.classList.add("row");
    grid.appendChild(rowEl);
    let col = 0;
    for(col = 0; col < 50; col++){
      let colEl = document.createElement("div");
      //colEl.classList.add(((row+col)%2===0 ? "even" : "odd"));
      colEl.classList.add("vacant");
      //colEl.classList.add("even");
      colEl.id = `${row},${col}`;
      colEl.addEventListener("click", toggleFunction(colEl))
      rowEl.appendChild(colEl);
    }
  }
  let selections = document.createElement("div");
  selections.classList.add("selections");
  middle.appendChild(selections);
  let selectionCount;
  let selected;
  let samples = [glider, oscillator, gun];
  for (selectionCount = 0; selectionCount < 3; selectionCount++){
    let selection = document.createElement("div");
    let localCount = selectionCount;
    selection.classList.add("selection");
    selections.appendChild(selection);
    selection.addEventListener('click', () => {
      debugger
      selected = samples[localCount];
      console.log(selected);
    }
    );
    gridDrawer(selection, samples[selectionCount]);
  }
  let footer = document.createElement("div");
  footer.classList.add("footer");
  root.appendChild(footer);
  let interval;
  let startButton = document.createElement("div");
  startButton.classList.add("startButton");
  header.appendChild(startButton);
  startButton.addEventListener("click", () => {interval = setInterval(updateCells, 1000);});
  let stopButton = document.createElement("div");
  stopButton.classList.add("stopButton");
  header.appendChild(stopButton);
  stopButton.addEventListener("click", () => {clearInterval(interval);});
});
