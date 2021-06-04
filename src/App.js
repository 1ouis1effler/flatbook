import React, { Component } from 'react'
import './App.css'
//component imports
import AllProfilesContainer from './components/AllProfilesContainer'
import SelectedProfileContainer from './components/SelectedProfileContainer'
import Navbar from './components/NavBar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu'
//svg icon imports
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

class App extends Component {
  //initial state before fetch
  state = {
    profiles: [],
    showChosenProfile: false,
    selectedProfile: {},
  }

  //fetch the backend and save to state
  componentDidMount(){
    fetch('http://localhost:3000/profiles')
      .then(response => response.json())
      .then(profiles => this.setState({profiles}))
  }

  //function that affects state of showChosenProfile and selectedProfile
  toggleSelectedProfile = (profile) => {
    //set state of selectedProfile based on profile based on onClick
    return this.setState({ 
      showChosenProfile: !this.state.showChosenProfile,
      selectedProfile: profile
    })
  }


 
  render() {
    return (
      <div>
        {/* Navbar structure */}
        <Navbar> 
            <h1>FLATBÖK</h1>
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<MessengerIcon />} />
            <NavItem icon={<CaretIcon />}>
              
              <DropdownMenu />

            </NavItem>
        </Navbar>

        {/* ternary that references the value of showChosenProfile in state 
        and renders a component for true/false cases  */}
        {this.state.showChosenProfile ? 
          <SelectedProfileContainer 
            selectedProfile={this.state.selectedProfile}
          /> 
          : 
          <AllProfilesContainer 
            profiles={this.state.profiles} 
            toggleSelectedProfile={this.toggleSelectedProfile}
          />
        }

        {/* footer of the page */}
        <body>
          <div class="footer-basic">
              <footer>
                  <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                  <ul class="list-inline">
                      <li class="list-inline-item"><a href="/">Home</a></li>
                      <li class="list-inline-item"><a href="https://github.com/Sunset05/flatbook/blob/main/README.md">README</a></li>
                      <li class="list-inline-item"><a href="https://www.youtube.com/watch?v=Pqsy7V0wphI">Privacy Policy</a></li>
                  </ul>
                  <p class="copyright">Flatbook © 2021</p>
              </footer>
          </div>
      </body>
      </div>
    )
  }
}

export default App;