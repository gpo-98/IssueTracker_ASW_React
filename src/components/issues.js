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
          <table class="myTable">
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
                    <tr>
                        <td>{issue.title}</td>
                        <td>{issue.type_issue}</td>
                        <td>{issue.priority}</td>
                        <td>{issue.status}</td>
                        <td>{issue.votes}</td>
                        <td>{issue.assignee_id}</td>
                        <td>{issue.created_at}</td>
                        <td>{issue.updated_at}</td>
                    </tr>
                  ))}
                  
                  <script type='text/javascript'>
                    function sortTable(column) {
                      var table, rows, switching, i, x, y, shouldSwitch;
                      table = document.getElementById("myTable");
                      switching = true;
                      /* Make a loop that will continue until
                      no switching has been done: */
                      while (switching) {
                        // Start by saying: no switching is done:
                        switching = false;
                        rows = table.rows;
                        /* Loop through all table rows (except the
                        first, which contains table headers): */
                        for (i = 1; i < (rows.length - 1); i++) {
                          // Start by saying there should be no switching:
                          shouldSwitch = false;
                          /* Get the two elements you want to compare,
                          one from current row and one from the next: */
                          x = rows[i].getElementsByTagName("TD")[column];
                          y = rows[i + 1].getElementsByTagName("TD")[column];
                          // Check if the two rows should switch place:
                          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                            // If so, mark as a switch and break the loop:
                            shouldSwitch = true;
                            break;
                          }
                        }
                        if (shouldSwitch) {
                          /* If a switch has been marked, make the switch
                          and mark that a switch has been done: */
                          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                          switching = true;
                        }
                      }
                    }
                </script>
              </tbody>
          </table>
        </div>
      )
    };
    
    export default Issues