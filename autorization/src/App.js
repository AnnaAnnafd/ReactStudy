import React, { Component } from 'react';

import {SignIn} from "./pages/sign-in";
import {SignUp} from "./pages/sign-up";
import {Users} from "./pages/user-list";

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SignUp />
      </div>
    );
  }