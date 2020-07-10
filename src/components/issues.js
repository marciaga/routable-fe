import React from 'react';

export const Issues = ({ issues = [], repoId }) => {
  return (
    <div>
      {issues.map(issue => (
        <div key={issue.id}>
          {issue.title}
        </div>
      ))}
    </div>
  );
};
