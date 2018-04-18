import React from 'react';
import Part from './Part'

class AllParts extends React.Component {
  render() {
    let parts = this.props.parts.map((part) => {
      return (
        <div key={part.id}>
          <Part part={part}
                handleDelete={this.handleDelete.bind(this, part.id)}
          />
        </div>
      )
    });
    return(
      <div> {parts} </div>
    )
  }

  handleDelete(part_id) {
    this.props.handleDelete(part_id);
  }
}

export default AllParts;
