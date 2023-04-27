import { useParams } from "react-router-dom";
import Layout from "../layout/layout";

const AdvertPage = (props) => {
  const params = useParams()
  
  return (
    <Layout title="Detalle de Anuncio" {...props}>
      <div>Detalle de anuncio {params.id}</div>
    </Layout>
  );
};

export default AdvertPage;
