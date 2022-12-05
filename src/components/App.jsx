import { usersData } from '../data/users';
import { Component } from 'react';
import { Button } from './Button/Button';
import { UsersList } from './Userslist/UsersList';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: usersData,
    isListShown: false,
    isformShown: false,
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  showUsers = () => {
    this.setState({ isListShown: true });
  };

  openForm = () => {
    this.setState({ isformShown: true });
	};
	
	addUser = (data) => {
		const newUser = { ...data, id: nanoid() };
		this.setState(prevState => ({users:[...prevState.users, newUser]}))
	}

	closeForm = () => {
		this.setState({isformShown: false})
	}

  render() {
    const { users, isListShown, isformShown } = this.state;
    return (
      <>
        {isListShown ? (
          <>
            <UsersList users={users} deleteUser={this.deleteUser} />
            <Button text="Add user" clickHandler={this.openForm} />
          </>
        ) : (
          <Button text="Show users" clickHandler={this.showUsers} />
				)}
				{isformShown && <Form addUser={this.addUser} closeForm={ this.closeForm} />}
				
      </>
    );
  }
}
