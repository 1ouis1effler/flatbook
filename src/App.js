import React, { Component } from 'react'
import './App.css'
import AllProfilesContainer from './components/AllProfilesContainer'
import SelectedProfileContainer from './components/SelectedProfileContainer'
import NavBar from './components/NavBar'

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
        <NavBar />
        {this.state.showChosenProfile ? 
          <SelectedProfileContainer 
            selectedProfile={this.state.selectedProfile}
            comments={this.state.comments}
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