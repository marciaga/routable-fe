import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { MainContent, CenteredContent } from '../components/styles';
import { Repos } from '../components/repos';
import { get } from '../utils/http';
import { addRepos } from '../redux/actions/repos';

const actionCreators = { addRepos };

const ConnectedPrioritizer = ({
  addRepos,
  apiKey,
  repos,
  username,
}) => {
  useEffect(() => {
    const fetchRepos = async () => {
      if (!username || !apiKey) {
        return; // TODO - add messaging for user
      }

      const qs = `access_token=${apiKey}`;
      const url = `${process.env.REACT_APP_GITHUB_API_URL}/users/${username}/repos?${qs}`;
      try {
        const result = await get(url);

        if (!result) {
          // TODO handle
        }

        addRepos(result);
      } catch (error) {
        console.log('error: ', error);
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
      <Repos repos={repos} />
    </MainContent>
  );
};

const mapState = ({ meta, repos }) => ({
  username: meta.username,
  apiKey: meta.apiKey,
  repos,
});

export const Prioritizer = connect(
  mapState,
  actionCreators,
)(ConnectedPrioritizer);