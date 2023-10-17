import { FC, useEffect, useState } from 'react';
import { postAPI } from '../models/services/PostService';
import { PostItem } from '../PostItem';
import { Post } from '../models/types/Post';

export const PostsList: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: posts, isLoading } = postAPI.useFetchPostsQuery(currentPage);
  const [isDown, setIsDown] = useState(false);
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    if (isDown) {
      setTimeout(() => {
        setCurrentPage((prev) => (prev < 90 ? prev + 1 : prev));
        setIsDown(false);
      }, 500);
    }
  }, [isDown]);
  useEffect(() => {
    setTimeout(() => {
      if (isUp) {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
        setIsUp(false);
      }
    }, 500);
  }, [isUp]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const scrollHandler = (event: any): void => {
    if (event.target.documentElement.scrollTop < 100) {
      setIsUp(true);
    }
    if (event.target.documentElement.scrollHeight - event.target.documentElement.scrollTop - window.innerHeight < 100) {
      setIsDown(true);
      window.scrollTo(0, event.target.documentElement.scrollHeight + event.target.documentElement.scrollTop);
    }
  };

  return (
    <div>
      <div className="post-list py-5">
        {posts?.map((post: Post) => (
          <PostItem
            key={post.id}
            post={post}
          />
        ))}
      </div>
      {isLoading && <div>Загрузка...</div>}
    </div>
  );
};
