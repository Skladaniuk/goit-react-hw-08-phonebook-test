import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63021d10c6dda4f287b30ee2.mockapi.io/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContactByName: builder.query({
      query: () => `contacts`,
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body:newContact,
      }),
      invalidatesTags: ['contacts'],
    })
   
   
  }),
});

export const {useGetContactByNameQuery, useDeleteContactMutation,useCreateContactMutation} = contactApi;