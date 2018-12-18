import React, { Component } from "react"
import PropTypes from "prop-types"

// this form will use base html forms with controlled components
class CreateEmployee extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit() {
    console.log("this.state", this.state)
  }

  render() {
    return (
      <div className="CreateEmployee">
        Create employee form
        <form>
          <label>First name</label>
          <input
            type="text"
            name="first-name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>Last name</label>
          <input type="text" name="last-name" />
          <br />
          <label>Salary</label>
          <input type="text" name="salary" />
          <br />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}
CreateEmployee.propTypes = {}

export default CreateEmployee
