import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Seja Bien venidos</h2>
      <Link to="/search">Buscar CEP</Link>
    </div>
  );
}

export default Home;
