import React, { useState } from 'react';
import styled from 'styled-components';

import { Issues } from './issues';
import { Column, Row } from './styles';
import { get } from '../utils/http';
import { scrollToTop } from '../utils/dom';

const RepoDetail = styled.div`
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;


  &:hover {
    background-color: lightcyan;
  }

  p {
    pointer-events: none;
    width: 100%;
  }
`;

const issuesDefaultState = {
  repoId: null,
  data: [],
};


export const Repos = ({
  addIssues,
  initialIssues,
  meta,
  repos = [], 
}) => {
  const [issue, updateIssue] = useState(issuesDefaultState);
  const handleClick = async (e) => {
    try {
      const { dataset } = e.target;
      const url = dataset?.url;
      const repoId = dataset?.repoid;
      const reponame = dataset?.reponame;

      // check cache for existing issues
      const cachedIssues = initialIssues[repoId];

      if (cachedIssues) {
        const formattedCachedIssues = cachedIssues.map(({ id, data }) => ({
          id,
          data,
        }));

        updateIssue({ repoId, data: formattedCachedIssues, repoName: reponame });
        scrollToTop();
        return;
      }

      if (!url) {
        // if url data attr isn't set, don't try to fetch. Notify User.
        return;
      }
      // strip {/number} from url
      const cleanedUrl = url.split('{')[0];
      const { apiKey } = meta;
      const opts = {
        headers: {
          Authorization: `token ${apiKey}`
        },
      };
      const result = await get(cleanedUrl, opts);

      const formattedIssues = result.map(issue => ({
        id: issue.id?.toString(),
        data: issue,
      }));

      updateIssue({ repoId, data: formattedIssues, repoName: reponame });
      scrollToTop();

    } catch (error) {
      // TODO - handle
    }
  };

  return (
    <Row>
      <Column>
        {repos.map(repo => (
          <RepoDetail
            key={repo.id}
            onClick={handleClick}
            data-url={repo.issues_url}
            data-repoid={repo.id}
            data-reponame={repo.name}
          >
            <p>Repo Name: {repo.name}</p>
            <p>Issue Count: {repo.open_issues_count}</p>
          </RepoDetail>
        ))}
      </Column>
      <Column>
        <Issues
          issues={issue.data}
          repoId={issue.repoId}
          repoName={issue.repoName}
          addIssues={addIssues}
        />
      </Column>
    </Row>
  );
};
