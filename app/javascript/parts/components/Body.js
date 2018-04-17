import React from 'react';
import jquery from 'jquery'

import AllParts from './AllParts'

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      parts: []
    };
  }

  componentDidMount() {
    jquery.getJSON('/api/parts.json', (response) => {
      this.setState({ parts: response.data })
    });
  }

  render() {
    return (
      <div className='parts'>
        <h3> Parts Cart </h3>
        <AllParts parts={this.state.parts}/>
      </div>
    )
  }
}

export default Body;
