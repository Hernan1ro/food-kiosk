import { PrismaClient } from "@prisma/client";

export default function Home({ categorias }) {
  console.log(categorias);
  return <h1>Next JS</h1>;
}

// Getting the DB data
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias,
    },
  };
};
