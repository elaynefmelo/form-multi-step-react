import React from "react";

const StepperControl = () => {
    return <div className="container mt-4 mb-8 flex justify-around">
        {/*botão voltar*/}
        <button className="bg-gray-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer
        hover:text-white hover:bg-slate-700 transition duration-200 ease-in-out">Voltar</button>

        {/*botão proximo*/}
        <button className="bg-blue-700 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer
        hover:text-white hover:bg-blue-900 transition duration-200 ease-in-out">Proximo</button>

        
    </div>;

};

export default StepperControl;