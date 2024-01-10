import { useState } from "react"

const NavBar = ({page, func}) =>{
  // State to manage the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-xdark text-light p-4">
      <div className=" flex justify-between items-center">
        {/* Logo or brand */}
        <button onClick={()=>{func(1)}} className="font-bold  text-xl select-none min-w-fit">
            Valida BR
        </button>

        {/* Navigation buttons */}
        <div className="hidden sm:flex space-x-4">
            <div className="flex justify-center gap-5">
                <button onClick={()=>{func(1)}} className={`w-auto cursor-pointer select-none ${page === 1 ? 'font-bold' : ''}`}>Validar CPF</button>
                <button onClick={()=>{func(2)}} className={`w-auto cursor-pointer select-none ${page === 2 ? 'font-bold' : ''}`}>Validar CNPJ</button>
            </div>
            <div className="bg-light w-[1px] hidden sm:block"></div>
            <div className="flex justify-center gap-5">
                <button onClick={()=>{func(3)}} className={`w-auto cursor-pointer select-none ${page === 3 ? 'font-bold' : ''}`}>Gerar CPF</button>
                <button onClick={()=>{func(4)}} className={`w-auto cursor-pointer select-none ${page === 4 ? 'font-bold' : ''}`}>Gerar CNPJ</button>
            </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>}
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-xdark flex flex-col gap-2 py-3">
          <button onClick={()=>{func(1)}} className={`w-auto cursor-pointer select-none ${page === 1 ? 'font-bold' : ''}`}>Validar CPF</button>
            <button onClick={()=>{func(2)}} className={`w-auto cursor-pointer select-none ${page === 2 ? 'font-bold' : ''}`}>Validar CNPJ</button>
            <button onClick={()=>{func(3)}} className={`w-auto cursor-pointer select-none ${page === 3 ? 'font-bold' : ''}`}>Gerar CPF</button>
            <button onClick={()=>{func(4)}} className={`w-auto cursor-pointer select-none ${page === 4 ? 'font-bold' : ''}`}>Gerar CNPJ</button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default NavBar