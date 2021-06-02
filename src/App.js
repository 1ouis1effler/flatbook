import React, { Component } from 'react'
import './App.css'
import AllProfilesContainer from './components/AllProfilesContainer'
import SelectedProfileContainer from './components/SelectedProfileContainer'

class App extends Component {

  state = {
    profiles: [],
    showChosenProfile: false,
    selectedProfile: {} 
  }

  //fetch the backend
  componentDidMount(){
    fetch('http://localhost:3000/profiles')
      .then(response => response.json())
      .then(profiles => this.setState({ profiles }))

  }
    //function that affects state of showChosenProfile and selectedProfile
  toggleSelectedProfile = (profile) => {
    //set state of selectedProfile
    return this.setState({ 
      showChosenProfile: !this.state.showChosenProfile,
      selectedProfile: profile
    })
  }

 
  render() {
    return (
      <div>
        
        Flatbook
        {this.state.showChosenProfile ? 
          <SelectedProfileContainer 
            toggleSelectedProfile={this.toggleSelectedProfile}
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