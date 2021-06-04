import React, { Component } from 'react'
import './App.css'
import AllProfilesContainer from './components/AllProfilesContainer'
import SelectedProfileContainer from './components/SelectedProfileContainer'
import Navbar from './components/NavBar'
import NavItem from './components/NavItem'

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';






import DropdownMenu from './components/DropdownMenu'



class App extends Component {
  //initial state before fetch
  state = {
    profiles: [],
    showChosenProfile: false,
    selectedProfile: {},
  }

  //fetch the backend
  componentDidMount(){
    fetch('http://localhost:3000/profiles')
      .then(response => response.json())
      .then(profiles => this.setState({profiles}))
  }
   
  //function that affects state of showChosenProfile and selectedProfile
  toggleSelectedProfile = (profile) => {
    //set state of selectedProfile based on profile based in onClick
    return this.setState({ 
      showChosenProfile: !this.state.showChosenProfile,
      selectedProfile: profile
    })
  }


 
  render() {
    return (
      <div>

        <Navbar> 
            <h1>FLATBÖK</h1>
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<MessengerIcon />} />
            <NavItem icon={<CaretIcon />}>
              
              <DropdownMenu />

            </NavItem>
        </Navbar>

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
        <body>
          <div class="footer-basic">
              <footer>
                  <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                  <ul class="list-inline">
                      <li class="list-inline-item"><a href="#">Home</a></li>
                      <li class="list-inline-item"><a href="#">About</a></li>
                      <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
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