import React from 'react';

class Grid extends React.Component {

  constructor(props){
    super(props);
    let backGrid = [];
    let backRow;
    for(backRow = 0; backRow < 50; backRow++){
      let backRowBox = [];
      let backCol;
      for (backCol = 0; backCol < 50; backCol++){
        backRowBox.push([0]);
      }
      backGrid.push(backRowBox);
    }
    this.state = {backGrid: backGrid}
  }

  render(){
    function flip(row, col){
      return () => {
      let backGrid = [];
      let backRow;
      for(backRow = 0; backRow < 50; backRow++){
        let backRowBox = [];
        let backCol;
        for (backCol = 0; backCol < 50; backCol++){
          if(row !== backRow || col !== backCol) {
            backRowBox.push([this.state.backGrid[row][col]]);
          } else {
            backRowBox.push([1- this.state.backGrid[row][col]])
          }
        }
        backGrid.push(backRowBox);
      }
      this.setState({backGrid: backGrid})
    };
  }
    let grid = [];
    let row;
    for(row = 0; row < 50; row++){
      let rowBox = [];
      let col;
      for(col = 0; col < 50; col++){
        let name = (this.state.backGrid[row][col] === 0 ? "even" : "odd")
        rowBox.push(<div className={`${name}`} onClick={flip(row,col)}/>)
      }
      grid.push(<div className='row'>{rowBox}</div>);
    }
    return(
      <div className="grid">
        {grid}
      </div>
    );
  }
}

export default Grid;
