import React from 'react';

class Part extends React.Component {
  constructor() {
    super();
    this.state = {
      editable: false
    };
  }

  render() {
    let name = this.state.editable ?
      <input className="col-sm-2" type='text' ref={(input) => this.name = input} defaultValue={this.props.part.name} /> :
      <div className="d-inline-block col-sm-2">{this.props.part.name}</div>;

    let description = this.state.editable ?
      <input className="col-sm-4" type='text' ref={(input) => this.description = input} defaultValue={this.props.part.description} />:
      <div className="d-inline-block col-sm-4">{this.props.part.description}</div>;

    return (
      <div className="item">
        {name}
        {description}
        <button onClick={this.handleEdit.bind(this)}> {this.state.editable ? 'Submit' : 'Edit' } </button>
        <button className="item-button" onClick={this.props.handleDelete} >Delete</button>
      </div>
    )
  }

  handleEdit() {
    if(this.state.editable) {
      let name = this.name.value;
      let id = this.props.part.id;
      let description = this.description.value;
      let part = {id: id , name: name , description: description};
      this.props.handleUpdate(part);
    }
    this.setState({ editable: !this.state.editable })
  }
}

export default Part;
