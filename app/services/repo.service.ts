import { apiService } from "@services/api.service.ts";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  ssh_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  private: boolean;
}

const repo = apiService.injectEndpoints({
  endpoints: (build) => ({
    getRepos: build.query<Repository[], string>({
      query: (name) => `/users/${name}/repos`,
      providesTags: [{ type: "GET_ALL_REPO" }],
      transformResponse: (response: Repository[], meta): Repository[] => {
        if (meta?.response?.ok) {
          return response;
        }
        return [];
      },
    }),
  }),
});

export const { useGetReposQuery } = repo;
