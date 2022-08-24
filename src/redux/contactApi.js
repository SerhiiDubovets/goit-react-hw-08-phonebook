import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});
export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactApi = createApi({
//   reducerPath: 'contactApi',
//   baseQuery: fetchBaseQuery({
//     // baseUrl: 'https://62f7ecd0ab9f1f8e8905d205.mockapi.io',
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
// fetchContacts: builder.query({
//   query: () => `/contacts`,
//   providesTags: ['Contact'],
// }),

//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),

//     addContact: builder.mutation({
//       query: newContact => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });
// export const {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
// } = contactApi;
