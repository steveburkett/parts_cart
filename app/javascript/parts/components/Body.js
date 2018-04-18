import React from 'react';
import jquery from 'jquery'

import AllParts from './AllParts'
import NewPart from './NewPart'

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      parts: []
    };
  }

  componentDidMount() {
    jquery.getJSON('/api/parts.json', (response) => {
      this.setState({ parts: this.orderParts(response.data) })
    });
  }

  orderParts(parts) {
    return parts.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );
  }

  render() {
    return (
      <div className='parts'>
        <h3> Parts Cart </h3>
        <NewPart handleSubmit={ event => this.handleSubmit(event) } />
        <AllParts parts={this.state.parts}/>
      </div>
    )
  }

  handleSubmit(part) {
    var newState = this.state.parts.concat(part);
    this.setState({ parts: newState });
  }
}

export default Body;
