import { PencilSimple, Trash } from "phosphor-react";

export default function Table({products}) {
    console.log(products)
    return(
        <table className="w-full text-center">
            <thead className="bg-[#f7fbfd] text-gray-400 border-b">
                <tr>
                    <th className="font-normal py-2">ID</th>
                    <th className="font-normal py-2">Nome</th>
                    <th className="font-normal py-2">Preço</th>
                    <th className="font-normal py-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <tr key={product.id} className="border-b">
                            <td className="py-2">{product.id}</td>
                            <td className="py-2">{product.name}</td>
                            <td className="py-2">{product.price},00</td>
                            <td className="py-2">
                            <div className="flex gap-2 items-center justify-center">
                                <div className="bg-[#118dc0] rounded p-2 text-white cursor-pointer hover:bg-[#426b7b] transition-all duration-300"><PencilSimple size={16} /></div>
                                <div className="bg-red-600 rounded p-2 text-white cursor-pointer hover:bg-red-700 duration-300"><Trash size={16} /></div>
                            </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}