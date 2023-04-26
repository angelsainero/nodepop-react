import Button from "../shared/button";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";

const AdvertsPage = (props) => {
  //se inicia el use state con un array vacio
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <Layout title="Anuncios" {...props}>
      <div className="advertsPage">
        {!!adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
              <Link to={`/adverts/${advert.id}`}>
                {advert.name}, {advert.price}, {advert.sale} {advert.tags}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Button as={Link} variant="relleno" to="/adverts/new"> Escribe el primer anuncio </Button>
        )}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
