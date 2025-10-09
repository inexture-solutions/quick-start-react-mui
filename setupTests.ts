import "@testing-library/jest-dom/vitest";
import { server } from "@/__tests__/msw/server.ts";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
