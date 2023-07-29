import { api } from "../../api/apiSlice";


const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ data }) => ({
        url: `/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ['reviews'],
    }),

  }),
});

export const {
  useGetReviewsQuery,
  usePostReviewMutation,
} = productApi;
