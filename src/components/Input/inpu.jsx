export default function Input({title, id}) {
    return(
        <div className="flex flex-col">
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} className="border border-[#118dc0] px-4 py-2 outline-none rounded"/>
        </div>
    )
}