import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AdminPage extends Component {
    state = {
        loading: false,
        users: []
    }

    componentDidMount() {
        this.setState({ loading: true });
        // use the users reference from Firebase class to attach a listener
        // on() receives a type and a callback function
        // on() method registers a continuous listener 
        // that triggers every time something has changed
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <div>
                <h1>Admin</h1>

                {loading && <div>Loading...</div>}

                <UserList users={users} />
            </div>
        );
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <p>
                    <strong>ID: </strong>{user.uid}
                </p>
                <p>
                    <strong>E-mail: </strong>{user.email}
                </p>
                <p>
                    <strong>Username: </strong>{user.username}
                </p>
            </li>
        ))}
    </ul>
);


export default withFirebase(AdminPage);