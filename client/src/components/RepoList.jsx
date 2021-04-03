import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component</h4>
    <table><caption style = {{fontSize: "25px", width: "500px"}}>TOP 25 REPOS BY WATCHERS</caption>
    <tbody>
    <tr style = {{textAlign: "left"}}>
      <th>Name</th>
      <th>Creator</th>
      <th>Watchers</th>
    </tr>
    {props.repos.map((repo, key) => {
      console.log(repo.html_url);
      return(
        <tr key = {repo.id}>
          <td><a href={repo.html_url}>{repo.name}</a></td>
          <td>{repo.owner.login}</td>
          <td>{repo.watchers}</td>
        </tr>
        )
    })}</tbody></table><br></br>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;