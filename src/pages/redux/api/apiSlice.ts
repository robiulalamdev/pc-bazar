import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hostapi = 'https://pc-bazar.vercel.app/api'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: hostapi }),
  tagTypes: ['reviews'],
  endpoints: () => ({}),
});
