import Image from "next/image";
import { formatearDinero } from "../helpers";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={nombre}
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <div className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </div>
      </div>
    </div>
  );
};

export default Producto;
