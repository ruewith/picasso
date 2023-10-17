import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Post } from '../types/Post';

export const postAPI = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchPosts: build.query<Post[], number>({
      query: (page) => ({
        url: '/posts',
        params: {
          _page: page,
          _limit: 10,
        },
      }),
    }),
    fetchPostById: build.query<Post, string>({
      query: (id: string) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});
