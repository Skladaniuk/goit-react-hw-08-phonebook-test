import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContactByName: builder.query({
      query: () => 'contacts',
      method: 'GET',
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body:newContact,
      }),
      invalidatesTags: ['contacts'],
    })
   
   
  }),
});

export const {useGetContactByNameQuery, useDeleteContactMutation,useCreateContactMutation} = contactApi;