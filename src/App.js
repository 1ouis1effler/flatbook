import React, { Component } from 'react'
import './App.css'
import AllProfilesContainer from './components/AllProfilesContainer'
import SelectedProfileContainer from './components/SelectedProfileContainer'

class App extends Component {

  state = {
    profiles: [
      {
      "login": "1ouis1effler",
      "id": 32102536,
      "node_id": "MDQ6VXNlcjMyMTAyNTM2",
      "avatar_url": "https://avatars.githubusercontent.com/u/32102536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/1ouis1effler",
      "html_url": "https://github.com/1ouis1effler",
      "followers_url": "https://api.github.com/users/1ouis1effler/followers",
      "following_url": "https://api.github.com/users/1ouis1effler/following{/other_user}",
      "gists_url": "https://api.github.com/users/1ouis1effler/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/1ouis1effler/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/1ouis1effler/subscriptions",
      "organizations_url": "https://api.github.com/users/1ouis1effler/orgs",
      "repos_url": "https://api.github.com/users/1ouis1effler/repos",
      "events_url": "https://api.github.com/users/1ouis1effler/events{/privacy}",
      "received_events_url": "https://api.github.com/users/1ouis1effler/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Louis Leffler",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 119,
      "public_gists": 0,
      "followers": 3,
      "following": 2,
      "created_at": "2017-09-19T14:48:35Z",
      "updated_at": "2021-06-01T20:51:45Z"
      },
      {
        "login": "Sunset05",
        "id": 77186128,
        "node_id": "MDQ6VXNlcjc3MTg2MTI4",
        "avatar_url": "https://avatars.githubusercontent.com/u/77186128?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Sunset05",
        "html_url": "https://github.com/Sunset05",
        "followers_url": "https://api.github.com/users/Sunset05/followers",
        "following_url": "https://api.github.com/users/Sunset05/following{/other_user}",
        "gists_url": "https://api.github.com/users/Sunset05/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Sunset05/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Sunset05/subscriptions",
        "organizations_url": "https://api.github.com/users/Sunset05/orgs",
        "repos_url": "https://api.github.com/users/Sunset05/repos",
        "events_url": "https://api.github.com/users/Sunset05/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Sunset05/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Keith Funk",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 70,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2021-01-09T06:14:48Z",
        "updated_at": "2021-05-28T15:51:47Z"
      }
    ],
    showChosenProfile: false,
    selectedProfile: {} 
  }

  //function that changes state
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