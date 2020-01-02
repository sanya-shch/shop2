import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/Homepage';
import ShopPage from './pages/shop/ShopPage.js';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in_up/SignIn&Up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE </h1>
    </div>
);

const JacketsPage = () => (
    <div>
        <h1>JACKETS PAGE </h1>
    </div>
);

const SneakersPage = () => (
    <div>
        <h1>SNEAKERS PAGE </h1>
    </div>
);

const WomensPage = () => (
    <div>
        <h1>WOMENS PAGE </h1>
    </div>
);

const MensPage = () => (
    <div>
        <h1>MENS PAGE </h1>
    </div>
);

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                    console.log(this.state);
                });
            }

            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
