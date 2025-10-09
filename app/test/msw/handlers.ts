import { http, HttpResponse } from "msw";

// Default handlers for GitHub API used by repo.service
export const handlers = [
  http.get("https://api.github.com/users/:name/repos", ({ params }) => {
    const { name } = params as { name: string };
    return HttpResponse.json([
      {
        id: 1,
        name: `${name}-repo-1`,
        full_name: `${name}/${name}-repo-1`,
        description: "Test repository 1",
        html_url: "https://github.com/example/repo1",
        clone_url: "https://github.com/example/repo1.git",
        ssh_url: "git@github.com:example/repo1.git",
        stargazers_count: 10,
        forks_count: 2,
        language: "TypeScript",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        private: false,
      },
      {
        id: 2,
        name: `${name}-repo-2`,
        full_name: `${name}/${name}-repo-2`,
        description: "Test repository 2",
        html_url: "https://github.com/example/repo2",
        clone_url: "https://github.com/example/repo2.git",
        ssh_url: "git@github.com:example/repo2.git",
        stargazers_count: 5,
        forks_count: 1,
        language: "JavaScript",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        private: false,
      },
    ]);
  }),
];
