// server-handlers.js
import { rest } from "msw";
import * as albumDb from "./data/albums";

const handlers = [
  rest.get("https://itunes.apple.com/search", async (req, res, ctx) => {
    ctx.json("sh", albumDb.index());
    return res(ctx.status(200), ctx.json(albumDb.index()));
  }),
];

export { handlers };
