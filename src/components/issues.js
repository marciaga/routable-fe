import React from 'react';
import styled from 'styled-components';
import { DnDVertical } from './dndVertical';
import { formatDistanceToNow } from 'date-fns';

import { ConditionalView } from './styles';

const IssuesContainer = styled.div`
  background-color: #f1f1f1;
  box-sizing: border-box;
  padding: 5px;
`;

const IssueText = styled.p`
  margin: 2px;
`;

const IssueRenderer = ({ data }) => {
  const { title, updated_at, created_at } = data;
  const assignee = data?.assignee ? data.assignee.login : 'None';
  const createdOn = formatDistanceToNow(new Date(created_at), { addSuffix: true });
  const updatedOn = formatDistanceToNow(new Date(updated_at), { addSuffix: true });

  return (
    <div>
      <IssueText>Title: {title}</IssueText>
      <IssueText>Assignee: {assignee}</IssueText>
      <IssueText>Created On: {createdOn}</IssueText>
      <IssueText>Last Updated: {updatedOn}</IssueText>
    </div>
  );
};

export const Issues = ({ issues = [], repoId, repoName, addIssues }) => {
  const handleDragEnd = (items) => {
    addIssues({ [repoId]: items });
  };

  return (
    <ConditionalView show={issues.length > 0}>
      <IssuesContainer>
        Issues for {repoName}
        <DnDVertical
          initialData={issues}
          handleDragEnd={handleDragEnd}
          renderer={IssueRenderer}
        />
      </IssuesContainer>
    </ConditionalView>
  );
};
