import { Navigate, useParams } from "react-router-dom";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import { getAdvert } from "./service";

const AdvertPage = () => {
  const params = useParams();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    getAdvert(params.id)
      .then((advert) => setAdvert(advert))
      .catch((error) => setError(error));
  }, [params.id]);

  if (error?.status === 404) {
    return <Navigate to="/404" />;
  }
  return (
    <Layout title="Detalle de Anuncio">
      {/* tener en cuenta el primero render {advert && clase 5 2:43:00} */}
      <div>{JSON.stringify(advert)}</div>
    </Layout>
  );
};

export default AdvertPage;
