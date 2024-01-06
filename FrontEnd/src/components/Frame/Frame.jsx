import GeraBox from "../GeraBox/GeraBox"
import ValidaBox from "../ValidaBox/ValidaBox"

const Frame = ({page}) =>{
    switch(page){
        case 1:
            return <div className="h-full flex flex-col justify-center items-center bg-dark">
                <h1 className="font-bold text-2xl">Validar CPF</h1>
                <ValidaBox page={page}/>
            </div>
        case 2:
            return <div className="h-full flex flex-col justify-center items-center bg-dark">
                <h1 className="font-bold text-2xl">Validar CNPJ</h1>
                <ValidaBox page={page}/>
            </div>
        case 3:
            return <div className="h-full flex flex-col justify-center items-center bg-dark">
                <h1 className="font-bold text-2xl">Gerar CPF</h1>
                <GeraBox page={page}/>
            </div>
        case 4:
            return <div className="h-full flex flex-col justify-center items-center bg-dark">
                <h1 className="font-bold text-2xl">Gerar CNPJ</h1>
                <GeraBox page={page}/>
            </div>
    }

}
export default Frame