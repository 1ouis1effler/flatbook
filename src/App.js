import React, { Component } from 'react'
import './App.css'
import AllProfilesContainer from './components/AllProfilesContainer'
import SelectedProfileContainer from './components/SelectedProfileContainer'
import Navbar from './components/NavBar'
import NavItem from './components/NavItem'

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
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
            <NavItem icon={<PlusIcon />} />
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
        
      </div>
    )
  }
}

export default App;