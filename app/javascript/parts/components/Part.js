import React from 'react';

class Part extends React.Component {
  render() {
    var name = <div className="d-inline-block col-sm-2">{this.props.part.name}</div>;
    var description = <div className="d-inline-block col-sm-8">{this.props.part.description}</div>;

    return (
      <div className="part">
        {name}
        {description}
        <button className="part-button" onClick={this.props.handleDelete} >Delete</button>
      </div>
    )
  }
}

export default Part;
