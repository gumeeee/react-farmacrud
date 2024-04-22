import homeLogo from "../../assets/homeLogo.png";

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">
              Sua farmacia favorita com preços excelentes!
            </p>

            <div className="flex justify-around gap-4">
              <button className="rounded shadow-2xl bg-white hover:text-white hover:bg-indigo-700 text-blue-800 py-2 px-4">
                Ver Produtos
              </button>
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
    </>
  );
}

export default Home;
