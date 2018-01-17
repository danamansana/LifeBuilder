import Header from "./Header";
import Selections from "./Selections"
import Grid from "./Grid";
import Options from "./Options";
import Footer from "./Footer";

import React from 'react';

class Root extends React.Component {

constructor(props){
  super(props);
}


render(){
  return(
    <div className="main">
      <Header/>
      <div className='middle'>
        <Selections/>
        <Grid/>
        <Options/>
      </div>
      <Footer/>
    </div>
  );

}
}


export default Root;
