import { PrismaClient } from "@prisma/client";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  console.log(categoriaActual);
  return (
    <Layout pagina={`Menú de ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personalia tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {categoriaActual?.productos?.map((producto) => {
          return <Producto key={producto.id} producto={producto} />;
        })}
      </div>
    </Layout>
  );
}
