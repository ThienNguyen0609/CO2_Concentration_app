import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const concentrationApi = createApi({
  reducerPath: 'concentrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_LINK }),
  endpoints: (builder) => ({
    getConcentration: builder.query({
      query: (request) => ({url: `get/${import.meta.env.VITE_PATH_LINK}/timestamp`, method: "POST", body: request}),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetConcentrationQuery } = concentrationApi