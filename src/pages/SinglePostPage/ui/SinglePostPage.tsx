import { FC } from 'react';
import { Page } from '../../../widgets/Page';
import { PostDetail } from '../../../entities/Post';

export const SinglePostPage: FC = () => {
  return (
    <Page>
      <PostDetail />
    </Page>
  );
};
