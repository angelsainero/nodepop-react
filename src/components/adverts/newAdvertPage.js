import { useState } from "react";
import Layout from "../layout/layout";
import Button from "../shared/button";
import { createAdvert } from "./service";
import { useNavigate } from "react-router-dom";

import "./newAdvertPage.css";

const NewAdvertPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState({
    name: "",
    price: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };
  const isDisabled = isLoading || !(content.name && content.price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      console.log({
        name: event.target.name.value,
        sale: event.target.sale.value,
        price: event.target.price.value,
        tags: event.target.tags.value,
        file: event.target.photo.files[0],
      });
      const formData = new FormData();
      formData.append("name", event.target.name.value);
      formData.append("sale", event.target.sale.value);
      formData.append("price", event.target.price.value);
      formData.append("tags", event.target.tags.value);
      formData.append("photo", event.target.photo.files[0]);
      const advert = await createAdvert(formData);
      setIsLoading(false);
      navigate(`/adverts/${advert.id}`);
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <Layout title="Sube tu anuncio">
        <form onSubmit={handleSubmit}>
      <div className="newAdvertPage">
          <div>
            <label>Nombre</label>
            <input
              name="name"
              value={content.name}
              required
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Tipo</label>
            <select name="sale">
              <option>Sale</option>
              <option>compra</option>
            </select>
          </div>
          <div>
            <label>Precio</label>
            <input
              name="price"
              value={content.price}
              type="text"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Tags</label>
            <select name="tags">
              <option>Lifestyle</option>
              <option>motor</option>
              <option>mobile</option>
              <option>work</option>
            </select>
          </div>
          <div>
            <label>Foto</label>
            <input type="file" name="photo"></input>
          </div>

          <Button type="submit" variant="relleno" disabled={isDisabled}>
            Enviar
          </Button>
      </div>
        </form>
    </Layout>
  );
};

export default NewAdvertPage;
