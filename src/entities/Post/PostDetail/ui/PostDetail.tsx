import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { postAPI } from '../../models/services/PostService';

export const PostDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  const { data: post } = postAPI.useFetchPostByIdQuery(id);

  return (
    <div>
      <h1>
        {post?.id}. {post?.title}
      </h1>
      <p className="py-3">{post?.body}</p>
    </div>
  );
};
