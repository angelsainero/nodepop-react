import client, { setAuthorizationHeader } from "../../api/client";

export const login = credentials => {
  return client
    .post("/api/auth/login", credentials)
    .then(response => setAuthorizationHeader(response.accessToken));
};
