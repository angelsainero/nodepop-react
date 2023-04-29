import { Button } from "style-components";
import Layout from "../layout/layout";
import { createAdvert } from "./service";


const NewAdvertPage = () => {
const handleSubmit = (event) => {
  event.preventDefault()
  console.log({name: event.target.name.value,
    sale: event.target.sale.value,
    price: event.target.price.value,
    tags: event.target.tags.value})
  createAdvert({
    name: event.target.name.value,
    sale: event.target.sale.value,
    price: event.target.price.value,
    tags: event.target.tags.value
  })
}
  
  return (
    <Layout title="Sube tu anuncio">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input name="name"></input>
        </div>
        <div>
          <label>Tipo</label>
          <select name="sale">
            <option>Sale</option>
            <option>compra</option>
          </select>
        </div>
        <div>
          <label >Precio</label>
          <input name="price" type="text" ></input>
        </div>
        <div>
          <label>Tags</label>
          <select name="tags" >
            <option>Lifestyle</option>
            <option>motor</option>
            <option>mobile</option>
            <option>work</option>
          </select>
        </div>
        <div>
          <label>Foto</label>
          <input type="file"></input>
        </div>

        <Button type="submit" variant="relleno">
          Enviar
        </Button>
      </form>
    </Layout>
  );
};

export default NewAdvertPage;
