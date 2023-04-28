import { useParams } from "react-router-dom";
import Layout from "../layout/layout";

const AdvertPage = () => {
  const params = useParams()
  
  return (
    <Layout title="Detalle de Anuncio" >
      <div>Detalle de anuncio {params.id}</div>
    </Layout>
  );
};

export default AdvertPage;
