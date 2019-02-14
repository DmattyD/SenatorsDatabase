import React, { Component } from 'react';

class Party extends Component {
  render() {
    return (
      <div className="Party">
        <form>Choose Party:
          <br></br>
          <select id='party' name='party' label='party'>
            <option value="Democrat">Democrat</option>
            <option value="Repbuclican">Republican</option>
            <option value ="Independent">Independent</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Party;