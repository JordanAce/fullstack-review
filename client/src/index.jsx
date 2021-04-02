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
        console.log(data);
        this.setState({
          repos: data
        });
      },
      error: function () {
        console.log('ERROR ON POST REQUEST');
      }
    })
  }


  componentDidMount() {
    let that = this;
    $.ajax({
      type: 'GET',
      url: ('/repos'),
      success: function(sortedRepos) {
        console.log('SORTED REPOS OBTAINED BY CLIENT:', sortedRepos);
        that.setState({
          repos: sortedRepos
        });
          sortedRepos.forEach(repo => {
          console.log(repo);
        })
      },
      error: function() {
        console.log('ERROR GETTING TOP 25 REPOS')
      }
    });
  };

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));