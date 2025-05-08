import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

const Empresa = async () => {
    const empresas = await db.empresa.findMany();

    if (!empresas || empresas.length === 0) {
        return notFound();
    }
    return (
        <div>
            {empresas.map((empresa) => (
            <div key={empresa.id}>{empresa.razao_social}</div>
            ))}
        </div>
    );
}
 
export default Empresa;