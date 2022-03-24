import { PrismaClient } from "@prisma/client";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menú de ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personalia tu pedido a continuación
      </p>
    </Layout>
  );
}
