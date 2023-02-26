import { rest } from "msw";
import {
  loginEndpoint,
  registerEndpoint,
  usersEndpoint,
} from "../hooks/useUser/useUser";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${usersEndpoint}${loginEndpoint}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "mocken",
        })
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${usersEndpoint}${registerEndpoint}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: `User 'Manolo' with email manolo@manolito.com created!`,
          username: "Manolo",
          email: "manolo@manolito.com",
        })
      );
    }
  ),
];
