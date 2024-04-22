import { Link } from "react-router-dom";
import homeLogo from "../../assets/homeLogo.png";
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center py-5">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">
              Sua farmacia favorita com preços excelentes!
            </p>

            <div className="flex justify-around gap-4">
              <Link
                to="/categorias"
                className="rounded shadow-2xl shadow-inner bg-white hover:text-white hover:bg-indigo-700 text-blue-800 py-2 px-4"
              >
                Ver Categorias
              </Link>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src={homeLogo}
              alt=""
              className="w-2/3 rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </>
  );
}

export default Home;
