import React, { Component } from "react"
import PropTypes from "prop-types"
import { Formik } from "formik"

//this one will use Formik
class UpdateEmployee extends Component {
  constructor(props) {

    super(props)
    this.state = {
      canSubmit: false,
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    console.log("this.state", this.state)
  }

  render() {
    return (
      <div>
        <h1>Update Employee (Formik)</h1>
        <Formik
          initialValues={{ id: undefined }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          validate={values => {
            let errors = {}
            if (!values.id) {
              errors.id = "ID is Required"
            } else if (! /\d/.test(values.id)) {
              errors.id = "Invalid id"
            }
            return errors
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <label>ID: </label>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.id}
                name="id"
              />
              {props.errors.id && (
                <div id="feedback">{props.errors.id}</div>
              )}
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    )
  }
}
UpdateEmployee.propTypes = {}

export default UpdateEmployee
