import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                lastName: ''
            }
        }
    }
    render() {
        return (
            <div className="Contact">
                <form>
                    <div>
                        <label htmlFor="firstName">Firat name</label>
                        <input type="text" namre="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" namre="lastName" />
                    </div>

                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
  }

export default Contact
