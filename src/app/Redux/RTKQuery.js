import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/products' }),
  endpoints: (builder) => ({
    getAllProducts : builder.query({
      query : (id) => "products",
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi