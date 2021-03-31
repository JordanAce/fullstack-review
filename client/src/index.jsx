import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    //POST REQUEST TO /REPOS
    $.ajax({
      type: 'POST',
      url: ('/repos'),
      data: this.term,
      success: function() {
        console.log('POST REQUEST SUCCESFUL');
      },
      error: function () {
        console.log('ERROR ON POST REQUEST');
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