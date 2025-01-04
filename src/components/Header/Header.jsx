import { Plus } from "phosphor-react";

export default function Header({open, setOpen}) {
function handleOpenModal(){
    setOpen(true)
}

console.log(open)

    return(
        <header className="bg-[#f1f1f1] flex justify-between items-center p-4 h-[10%]">
                <div>
                    <h1 className="font-semibold">Detalhes dos produtos</h1>
                </div>
                <div className="space-x-4 flex">
                    <input className="border border-[#118DC0] px-6 py-1 rounded placeholder:text-[#118dc0] outline-none" type="text" placeholder="Pesquisar" />
                    <button onClick={handleOpenModal} className="bg-[#118dc0] py-1 px-4 text-white rounded hover:bg-[#426b7b] transition-all duration-300 flex items-center gap-2"><Plus size={15} /> Novo produto</button>
                </div>
            </header>
    )
}
