import { describe, it, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "@/services/api.service";
import { repoApi } from "@/services/repo.service";

describe("repo.service RTK Query integration", () => {
  it("fetches repos via MSW and returns transformed data", async () => {
    const store = configureStore({
      reducer: {
        [apiService.reducerPath]: apiService.reducer,
      },
      middleware: (gdm) => gdm().concat(apiService.middleware),
    });

    const result = await store
      .dispatch(repoApi.endpoints.getRepos.initiate("octocat"))
      .unwrap();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].full_name).toContain("octocat");
  });
});
