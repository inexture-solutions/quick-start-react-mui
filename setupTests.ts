import "@testing-library/jest-dom/vitest";
import { server } from "./app/__tests__/msw/server";
import { beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
