import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const mongoose = require('mongoose');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (handle) {
    console.log(`${handle} was searched`);
    //POST REQUEST TO /REPOS
    $.ajax({
      type: 'POST',
      url: ('/repos'),
      dataType: "json",
      data: handle,
      success: function(data) {
        this.state.repos.push[data];
      },
      error: function () {
        console.log('ERROR ON POST REQUEST');
      }
    })
  }


  componentDidMount(repos) {
    $.ajax({
      type: 'GET',
      url: ('/repos'),
      success: function(repos) {
        console.log('GETTING TOP 25 REPOS:', repos.model._doc)
      },
      error: function() {
        console.log('ERROR GETTING TOP 25 REPOS')
      }
    })
  }
  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));