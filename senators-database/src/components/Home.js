import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component { 

state = {
    senators: []
}

// //This is where your fetch starts

getSenators = async () => {
 await fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
   .then(senData => {
     return senData.json();
   })
  .then(senData => {
    this.setState({senators: senData})
  })
}
  
async  componentWillMount() {
    await this.getSenators()
  }
// //This is where your fetch ends
  render() {
    console.log(this.state)
    return (
      <div className="Home">
        <Link to='/State'>State</Link>
        <p> </p>
      </div>
    );
  }
}
export default Home;