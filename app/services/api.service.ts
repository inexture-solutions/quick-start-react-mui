import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_SERVER || "https://api.google.com",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState as () => RootState)()?.app?.auth?.token;
    if (token?.access) {
      headers.set("Authorization", `Bearer ${token.access}`);
    } else {
      headers.delete("Authorization");
    }
    return headers;
  },
});

export const apiService = createApi({
  baseQuery: baseQuery,
  tagTypes: ["GET_ALL_REPO"],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
