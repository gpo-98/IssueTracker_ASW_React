import React from 'react'

    const Issues = ({ issues }) => {
      return (
        <div>
          <center><h1>Issues List</h1></center>
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
    };
    
    export default Issues