import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { MainContent } from '../components/styles';
import { Repos } from '../components/repos';
import { get } from '../utils/http';
import { addRepos } from '../redux/actions/repos';
import { addIssues } from '../redux/actions/issues';

const actionCreators = { addRepos, addIssues };

const ConnectedPrioritizer = ({
  addIssues,
  addRepos,
  issues,
  meta,
  repos,
}) => {
  const { apiKey, username } = meta;

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username || !apiKey) {
        return; // TODO - add messaging for user
      }

      const url = `${process.env.REACT_APP_GITHUB_API_URL}/users/${username}/repos`;
      const opts = {
        headers: {
          Authorization: `token ${apiKey}`
        },
      };

      try {
        const result = await get(url, opts);

        if (!result) {
          // TODO handle
        }

        addRepos(result);
      } catch (error) {
        // TODO handle
      }
    };
    // TODO - for now, especially given the localStorage rehydration
    // fetch repos only if there aren't any for now
    if (!repos.length) {
      fetchRepos();
    }
  }, [repos.length, username, apiKey, addRepos]);

  return (
    <MainContent>
      <Repos
        addIssues={addIssues}
        initialIssues={issues}
        meta={meta}
        repos={repos}
        />
    </MainContent>
  );
};

const mapState = ({ meta, repos, issues }) => ({
  issues,
  meta,
  repos,
});

export const Prioritizer = connect(
  mapState,
  actionCreators,
)(ConnectedPrioritizer);