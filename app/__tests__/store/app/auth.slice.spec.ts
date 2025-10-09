import { describe, it, expect } from "vitest";
import { authSlice, SET_AUTH_TOKEN, IAuthSlice } from "@/store/app/auth.slice";

// The slice exports only actions and getters, so import reducer from slice
const reducer = authSlice.reducer;

type AnyAction = { type: string };

describe("auth.slice", () => {
  it("should return initial state", () => {
    const state = reducer(undefined, { type: "@@INIT" } as AnyAction);
    expect(state.isLoggedIn).toBe(false);
    expect(state.token.access).toBe("");
  });

  it("SET_AUTH_TOKEN should update token (note: current logic leaves isLoggedIn false when starting empty)", () => {
    const initial = reducer(undefined, {
      type: "@@INIT",
    } as AnyAction) as IAuthSlice;

    const next = reducer(
      initial,
      SET_AUTH_TOKEN({ access: "abc", refresh: "ref", expires: "tomorrow" })
    );

    expect(next.token.access).toBe("abc");
    // Based on the current reducer, isLoggedIn uses previous state's token.access
    // so it remains false if initial was empty
    expect(next.isLoggedIn).toBe(false);
  });
});
