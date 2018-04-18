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
        <AllParts parts={this.state.parts}
                  handleDelete={ this.handleDelete.bind(this) }
                  handleUpdate={ this.handleUpdate.bind(this) }
        />
      </div>
    )
  }

  handleSubmit(part) {
    var newState = this.state.parts.concat(part);
    this.setState({ parts: newState });
  }

  removePart(part_id) {
    var newParts = this.state.parts.filter((part) => {
      return part.id != part_id;
    });

    this.setState({ parts: newParts });
  }

  handleDelete = (part_id) => {
    console.log("Body.handleDelete " + part_id);

    jquery.ajax({
      url: `/api/parts/${part_id}`,
      context: this,
      type: 'DELETE',
      success(response) {
        this.removePart(part_id);
      }
    });
  }

  updateParts(part) {
    var parts = this.state.parts.filter((state_part) => {
      return state_part.id != part.id
    });
    parts.push(part);
    this.setState({parts: this.orderParts(parts) });
  }

  handleUpdate = (part) => {
    console.log("Body.handleUpdate " + part.id);

    jquery.ajax({
      url: `/api/parts/${part.id}`,
      type: 'PUT',
      context: this,
      data: { part: part },
      success: () => { this.updateParts(part);
      }
    })
  }
}

export default Body;
