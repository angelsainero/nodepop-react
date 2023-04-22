import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import classNames from "classnames";

const AdvertsPage = () => {
  //se inicia el use state con un array vacio
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <div className="advertsPage">
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>
            {advert.name}, {advert.price}, {advert.sale} {advert.tags}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertsPage;
