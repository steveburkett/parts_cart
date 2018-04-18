import React from 'react';
import jquery from 'jquery'

class NewPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: ''}
  }

  render() {
    return (
      <div className="part">
        <input className="col-sm-2" type="text" placeholder='New part name'
               onChange={event => this.setState({ name: event.target.value })}/>
        <input className="col-sm-8" type="text" placeholder='New description'
               onChange={event => this.setState({ description: event.target.value })}/>
        <button className="part-button" onClick={(event) => this.handleClick(event) }>Add</button>
      </div>
    )
  }

  handleClick(event) {
    jquery.ajax({ url: '/api/parts',
      type: 'POST',
      data: { part: { name: this.state.name, description: this.state.description } },
      success: (part) => {
        this.props.handleSubmit(part.data);
      }
    });

    event.preventDefault();
  }
}

export default NewPart;
