import { Component } from "react";

export class Form extends Component {
	state = {
		name: '',
		email:'',
	}

	handleChange = ({target:{name, value}}) => {
this.setState({[name]: value})
	}

	handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser({ ...this.state })
        this.setState({ name: '', email: '' })
        this.props.closeForm();
    }

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input onChange={this.handleChange} name='name' type="text" />
					</label>
					<label>
						Email:
						<input onChange={this.handleChange} name='email' type="email" />
					</label>
					<button type="submit">Save</button>
				</form>
			</>
		)
	}
}