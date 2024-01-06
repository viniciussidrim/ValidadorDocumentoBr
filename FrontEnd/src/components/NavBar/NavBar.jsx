

const NavBar = ({page, func}) =>{
    return <div className="h-20 w-full bg-xdark text-white flex items-center px-5 ">
        <h1 className="font-bold text-xl select-none min-w-fit">Nome do App</h1>
        <div className="flex justify-center w-full gap-10">
            <div className="flex justify-center gap-5">
                <button onClick={()=>{func(1)}} className={`w-auto cursor-pointer select-none ${page === 1 ? 'font-bold' : ''}`}>Validar CPF</button>
                <button onClick={()=>{func(2)}} className={`w-auto cursor-pointer select-none ${page === 2 ? 'font-bold' : ''}`}>Validar CNPJ</button>
            </div>
            <div className="bg-light w-[1px]"></div>
            <div className="flex justify-center gap-5">
                <button onClick={()=>{func(3)}} className={`w-auto cursor-pointer select-none ${page === 3 ? 'font-bold' : ''}`}>Gerar CPF</button>
                <button onClick={()=>{func(4)}} className={`w-auto cursor-pointer select-none ${page === 4 ? 'font-bold' : ''}`}>Gerar CNPJ</button>
            </div>
        </div>
    </div>
}
export default NavBar