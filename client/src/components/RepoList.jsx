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
    {props.repos.map((repo, id) => {
      return(
        <tr>
          <td key = {repo.id}><a href={repo.url}>{repo.name}</a></td>
          <td key = {repo.id}>{repo.owner.login}</td>
          <td key = {repo.id}>{repo.watchers}</td>
        </tr>
        )
    })}</tbody></table>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;