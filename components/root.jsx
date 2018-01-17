import Header from "./Header";
import Selections from "./Selections"
import Grid from "./Grid";
import Options from "./Options";
import Footer from "./Footer";

import React from 'react';

class Root extends React.Component {

render(){
  return(
    <div>
      <Header/>
      <Selections/>
      <Grid/>
      <Options/>
      <Footer/>
    </div>
  );

}
}


export default Root;
