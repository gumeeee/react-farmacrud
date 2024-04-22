import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardCategorias/CardCategorias";
import { DNA } from "react-loader-spinner";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {});
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias categoria={categoria} />
              </>
            ))}

            <CardCategorias
              categoria={{ id: 0, nome: "Medicamento Genérico" }}
            />
            <CardCategorias
              categoria={{ id: 1, nome: "Medicamento Manipulado" }}
            />
            <CardCategorias
              categoria={{ id: 3, nome: "Medicamento Similar" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaCategorias;
