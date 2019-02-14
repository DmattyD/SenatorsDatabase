import React, { Component } from 'react';

class Party extends Component {
  render() {
    return (
      <div className="Name">
        <form>
        <div className="form-group">
    <label htmlFor="exampleInputEmail1">Senator Name:</label>
    <br></br>
    <input type="text" className="form-control-sm" id="senatorName" aria-describedby="senatorName" placeholder="Senator"/>
    
  </div>
  
  
</form>
      </div>
    );
  }
}

export default Party;