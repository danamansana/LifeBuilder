import React from 'react';

class Grid extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let grid = [];
    let row;
    for(row = 0; row < 50; row++){
      let rowBox = [];
      let col;
      for(col = 0; col < 50; col++){
        let name = ((row+col)%2===0 ? "even" : "odd")
        rowBox.push(<div className={`${name}`}/>)
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
