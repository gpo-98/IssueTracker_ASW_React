import React from 'react'

    /*const Issues = ({ issues }) => {
      return (
        <div>
          <center><h1>Issue Tracker</h1></center>
          {issues.map((issue) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{issue.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{issue.description}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };*/
    
    const Issues = ({ issues }) => {
      return (
        <div>
          <center><h1>Issue Tracker</h1></center>
          <table>
              <thead>
                <tr>
                    <th onclick="sortTable(0)">Title</th>
                    <th onclick="sortTable(1)">T</th>
                    <th onclick="sortTable(2)">P</th>
                    <th onclick="sortTable(3)">Status</th>
                    <th onclick="sortTable(4)">Votes</th>
                    <th onclick="sortTable(5)">Assignee</th>
                    <th onclick="sortTable(6)"> Created</th>
                    <th onclick="sortTable(7)">Updated</th>
                 </tr>
              </thead>
              <tbody>
                  {issues.map((issue) => (
                    <td>{issue.title}</td>
                    /*<td>{issue.type_issue}</td>
                    <td>{issue.priority}</td>
                    <td>{issue.status}</td>
                    <td>{issue.votes}</td>
                    <td>{issue.assignee_id}</td>
                    <td>{issue.created_at}</td>
                    <td>{issue.updated_at}</td>*/
                  ))}
                  {issues.map((issue) => (
                    //<td>{issue.title}</td>
                    <td>{issue.type_issue}</td>
                    /*<td>{issue.priority}</td>
                    <td>{issue.status}</td>
                    <td>{issue.votes}</td>
                    <td>{issue.assignee_id}</td>
                    <td>{issue.created_at}</td>
                    <td>{issue.updated_at}</td>*/
                  ))}
              </tbody>
          </table>
        </div>
      )
    };
    
    export default Issues