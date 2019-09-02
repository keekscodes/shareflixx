import React, {Component} from "react";


class Dummy extends Component {
  state = {
    room: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    const {room} = this.state;
    return (
      <div>
        <label htmlFor="room">Create A Room</label>
        <input type="text" name="room" value={room} onChange={this.handleChange}/>
        <button className="btn btn-success">Make room</button> 
      </div>
    )
  }
}

export default Dummy;