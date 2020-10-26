import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        state = {
            authUser: null
        }
        componentDidMount() {
            // Firebase offers a listener function to get the 
            // authenticated user from Firebase
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null })
            });
        }

        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }
    return withFirebase(WithAuthentication);
}

export default withAuthentication;