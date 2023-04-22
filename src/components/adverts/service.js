import client from "../../api/client";

const advertsURL = "/api/v1/adverts";

export const getLatestAdverts = () => {
  return client.get(advertsURL);
};
