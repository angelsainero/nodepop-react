import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import classNames from "classnames";
import { Button } from "style-components";
import { logout } from "../auth/service";

const AdvertsPage = ({onLogout}) => {
  //se inicia el use state con un array vacio
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const handleClick = async () => {
    await logout();
    onLogout();
  }

  return (
    <div className="advertsPage">
      <Button onClick={handleClick}>Logout</Button>
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
