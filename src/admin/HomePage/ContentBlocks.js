import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { ContentBox, useTracking } from '@strapi/helper-plugin';
import { Stack } from '@strapi/design-system/Stack';
import InformationSquare from '@strapi/icons/InformationSquare';
import CodeSquare from '@strapi/icons/CodeSquare';
import PlaySquare from '@strapi/icons/PlaySquare';
import FeatherSquare from '@strapi/icons/FeatherSquare';

const BlockLink = styled.a`
  text-decoration: none;
`;

const ContentBlocks = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();

  const handleClick = eventName => {
    trackUsage(eventName);
  };

  return (
    <Stack spacing={5}>
      <BlockLink
        href=""
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => handleClick('didClickonReadTheDocumentationSection')}
      >
        <ContentBox
          title={formatMessage({
            id: 'global.documentation',
            defaultMessage: 'Documentation',
          })}
          subtitle={formatMessage({
            id: 'app.components.BlockLink.documentation.content',
            defaultMessage: 'Discover the essential concepts, guides and instructions.',
          })}
          icon={<InformationSquare />}
          iconBackground="primary100"
        />
      </BlockLink>
      <BlockLink
      // https://strapi.io/starters
        href=""
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => handleClick('didClickonCodeExampleSection')}
      >
        <ContentBox
          title={formatMessage({
            id: 'app.components.BlockLink.code',
            defaultMessage: 'Code example',
          })}
          subtitle={formatMessage({
            id: 'app.components.BlockLink.code.content',
            defaultMessage: 'Learn by using ready-made starters for your projects.',
          })}
          icon={<CodeSquare />}
          iconBackground="warning100"
        />
      </BlockLink>
    
    </Stack>
  );
};

export default ContentBlocks;
