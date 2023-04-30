import client from "../../api/client";

const advertsURL = "/api/v1/adverts";

export const getLatestAdverts = () => {
  return client.get(advertsURL);
};

export const getAdvert = (id) => {
  const url = `${advertsURL}/${id}`
  return client.get(url)
};

export const createAdvert =  (formData) => {
 const url = advertsURL
 return client.post(url, formData, {});
};


export const deleteAdvert =  (id) =>{
  const url = `${advertsURL}/${id}`
  return client.delete(url)
}