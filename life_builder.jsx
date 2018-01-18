import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

function toggleFunction(el) {
  return () => {
    toggleElement(el);
    };
}

function toggleElement(el) {
  if(el.classList.contains("vacant")){
    el.classList.remove("vacant");
    el.classList.add("occupied");
  }else{
    el.classList.remove("occupied");
    el.classList.add("vacant");
  }
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
  let footer = document.createElement("div");
  footer.classList.add("footer");
  root.appendChild(footer);
  let startButton = document.createElement("div");
  startButton.classList.add("startButton");
  header.appendChild(startButton);
  startButton.addEventListener("click", () => {setInterval(updateCells, 1000);});
});


function sum(pair1, pair2){
  return [(pair1[0]+pair2[0]+50)%50, (pair1[1]+pair2[1]+50)%50];
}

function neighbors(pair){
  let vecs = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
  return vecs.map((vec) => (sum(vec,pair)));
}

function pairParse(pair){
  return [parseInt(pair.split(",")[0]), parseInt(pair.split(",")[1])];
}

function pairCode(pair){
  return `${pair[0]},${pair[1]}`;
}

function codeNeighbors(pair){
  return (neighbors(pairParse(pair))).map((pair) => (pairCode(pair)));
}

function DOMNeighbors(pair){
  return codeNeighbors(pair).map((code) => (document.getElementById(code)));
}

function NeighborsCount(pair){
  return DOMNeighbors(pair).filter((neighbor) => (neighbor.classList.contains("occupied"))).length;
}

function updateCell(pair){
  let cell = document.getElementById(pair);
  if(cell.classList.contains("vacant")){
    if(NeighborsCount(pair) === 3){
      toggleElement(cell);
    }
  } else {
    if(NeighborsCount(pair) < 2 || NeighborsCount(pair) > 3){
      toggleElement(cell);
    }
  }
}

function cellNeedsUpdate(pair){
  let cell = document.getElementById(pair);
  return (cell.classList.contains("vacant") && NeighborsCount(pair) === 3)||(cell.classList.contains("occupied") && NeighborsCount(pair) !== 2 && NeighborsCount(pair) !== 3);
}

function cellsNeedingUpdate(){
  let requireList = [];
  let i = 0;
  for(i=0; i<2500; i++){
    let pair = pairCode([i%50, parseInt(i/50)]);
    if (cellNeedsUpdate(pair)){
      requireList.push(pair);
    }
  }
  return requireList;
}

function updateCells(){
  cellsNeedingUpdate().forEach(
    (cell) => {
    toggleElement(document.getElementById(cell));
    }
  );
}
