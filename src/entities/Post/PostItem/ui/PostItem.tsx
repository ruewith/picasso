import { FC } from 'react';
import { Post } from '../../models/types/Post';
import { useNavigate } from 'react-router-dom';

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  return (
    <div className="post row border rounded p-3 mb-3">
      <div className="col-10">
        <h4>
          {id}. {title}
        </h4>
        <p>{body.length > 120 ? body.substring(0, 120) + '...' : body}</p>
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(`/posts/${id}`)}>
          Подробнее
        </button>
      </div>
    </div>
  );
};
