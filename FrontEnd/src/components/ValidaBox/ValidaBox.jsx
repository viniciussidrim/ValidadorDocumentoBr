import { useState } from "react"
import CPFinput from "../CPFinput/CPFinput"
import CNPJinput from "../CNPJinput/CNPJinput"

const ValidaBox = ({page}) => {
    return <div className="w-1/2 flex flex-col items-center justify-center p-10 gap-5">
        {page===1?<CPFinput/>:<CNPJinput/>}
        <button className="bg-xdark text-medium px-3 py-1 rounded-md hover:font-bold duration-100">Validar</button>
    </div>
}

export default ValidaBox