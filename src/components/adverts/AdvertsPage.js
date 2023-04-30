import Button from "../shared/button";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";

const AdvertsPage = () => {
  //creamos estado para validar la carga
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [minprice, setMinprice] = useState("")
  const [maxprice, setMaxprice] = useState("100000")
  //se inicia el use state con un array vacio
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getLatestAdverts().then((adverts) => {
      setAdverts(adverts);
      setIsLoading(false);
    });
  }, []);

  const filter = adverts.filter((advert) => (
    advert.name.toUpperCase().startsWith(query.toUpperCase()) && advert.price > minprice && advert.price < maxprice));


  

  return (
    <Layout title="Anuncios">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="advertsPage">
          {!!adverts.length ? (
            <>
              <div>
                <label>
                  Filtro nombre
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  ></input>
                </label>
              </div>
              <div>
                <label>
                  Precio mínimo
                  <input
                    type="text"
                    value={minprice}
                    onChange={(event2) => setMinprice(event2.target.value)}
                  ></input>
                  
                </label>
              </div>
              <div>
                <label>
                  Precio maximo
                  <input
                    type="text"
                    value={maxprice}
                    onChange={(event3) => setMaxprice(event3.target.value)}                    
                  ></input>
                  
                </label>
              </div>
              <ul>
                {filter.map((advert) => (
                  <li key={advert.id}>
                    <div>
                      <img
                        src={advert.photo}
                        height="30px"
                        wheight="30px"
                      ></img>
                      <Link to={`/adverts/${advert.id}`}>
                        Producto: {advert.name}, Precio: {advert.price}, Venta:{" "}
                        {advert.sale.toString()}, Categoría: {advert.tags}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Button as={Link} variant="relleno" to="/adverts/new">
              {" "}
              Escribe el primer anuncio{" "}
            </Button>
          )}
        </div>
      )}
    </Layout>
  );
};

export default AdvertsPage;
