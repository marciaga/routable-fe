import React, { useState } from 'react';

import { Issues } from './issues';
import { get } from '../utils/http';

const issuesDefaultState = {
  repoId: null,
  data: [],
};

export const Repos = ({ repos = [] }) => {
  const [issue, updateIssue] = useState(issuesDefaultState);
  const handleClick = async (e) => {
    try {
      const { dataset } = e.target;
      const url = dataset?.url;
      const repoId = dataset?.repoid;

      if (!url) {
        // if url data attr isn't set, don't try to fetch. Notify User.
        return;
      }
      // strip {/number} from url
      const cleanedUrl = url.split('{')[0];
      const result = await get(cleanedUrl);
      console.log('result: ', result);
      updateIssue({ repoId, data: result  });
    } catch (error) {
      // TODO - handle
    }
  };

  return (
    <div>
      {repos.map(repo => (
        <div
          key={repo.id}
          onClick={handleClick}
          data-url={repo.issues_url}
          data-repoid={repo.id}
        >
          Name: {repo.name}
          Issue Count: {repo.open_issues_count}
        </div>
      ))}
      <Issues issues={issue.data} repoId={issue.repoId} />
    </div>
  );
};
