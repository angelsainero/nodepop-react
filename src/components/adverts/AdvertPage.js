import { Navigate, useNavigate, useParams } from "react-router-dom";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import { getAdvert } from "./service";

import { deleteAdvert } from "./service";

const AdvertPage = () => {
  const navigate = useNavigate() 
  const params = useParams();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);
  const [del, setDel] = useState(null)

  useEffect(() => {
    getAdvert(params.id).then((advert) => setAdvert(advert)).catch((error) => setError(error));
 
  }, [params.id]);

  if (error?.status === 404) {
    return <Navigate to="/404" />;
  }
const delAdvert = (id) => {
  deleteAdvert(params.id);
  navigate("/")
  
}
 

  return (
    <Layout title="Detalle de Anuncio">
      {advert && <div>{advert.name}</div>}
      {advert && <img src={advert.photo}></img>}
      {advert && <div>Precio: {advert.price} euros</div>}
      <br></br>
      <button onClick={delAdvert}>
        Borrar
      </button>
    </Layout>
  );
};

export default AdvertPage;
