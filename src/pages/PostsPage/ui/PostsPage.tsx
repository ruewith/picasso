import { Page } from '../../../widgets/Page';
import { PostsList } from '../../../entities/Post';

export const PostsPage = () => {
  return (
    <Page>
      <h1>Страница постов</h1>
      <PostsList />
    </Page>
  );
};
