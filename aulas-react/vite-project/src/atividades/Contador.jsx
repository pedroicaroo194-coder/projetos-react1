import { useState } from "react"

export default function Contador(){
const [numero,setnumero] = useState(0)

const mais = () => setnumero(numero + 1);
const menos = () => {
    if (numero <= 0){
        alert("numero nao pode ser menor que zero")
    }
    else {
        setnumero(numero -1)
    }
};
    return(
        <>
        <button onClick={mais} >+</button>
        <button onClick={menos}>-</button>
        <div>
            {
              numero % 2 === 0 ? 
              <p style={{color:'blue'}}>{numero}</p>
              : 
              <p style={{color:'red'}}>{numero}</p>
            }
        </div>
        <div>
            <p>
                {numero >= 0 && numero <=10 && "começe a clicar!!"}
                {numero >10 && numero < 20 && "vc esta bem em"}
                {numero >=20 && numero <=50 && "hard"}
                {numero > 50 && "mestre kk"}
                
            </p>
        </div>
        </>
    )
}