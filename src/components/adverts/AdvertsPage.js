import Button from "../shared/button";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import classNames from "classnames";
import { logout } from "../auth/service";
import Layout from "../layout/layout";


const AdvertsPage = ({onLogout}) => {
  //se inicia el use state con un array vacio
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts([]));
  }, []);

  const handleClick = async () => {
    await logout();
    onLogout();
  }

  return (
    <Layout title="Anuncios">
    <div className="advertsPage">
     
      {!!adverts.length ? <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>
            {advert.name}, {advert.price}, {advert.sale} {advert.tags}
          </li>
        ))}
      </ul>: <Button variant="relleno">Escribe el primer anuncio</Button>}
    </div>
    </Layout>
  );
};

export default AdvertsPage;
