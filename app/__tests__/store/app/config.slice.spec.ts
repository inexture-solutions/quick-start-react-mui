import { describe, it, expect } from "vitest";
import { configSlice, SET_IS_MOBILE } from "@/store/app/config.slice";

type AnyAction = { type: string };

const reducer = configSlice.reducer;

describe("config.slice", () => {
  it("should return initial state", () => {
    const state = reducer(undefined, { type: "@@INIT" } as AnyAction);
    expect(state.isMobile).toBe(false);
  });

  it("SET_IS_MOBILE should toggle flag", () => {
    const state = reducer(undefined, { type: "@@INIT" } as AnyAction);
    const next = reducer(state, SET_IS_MOBILE(true));
    expect(next.isMobile).toBe(true);
  });
});
