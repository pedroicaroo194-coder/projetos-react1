import { useState } from "react";
import "./carrinho.css"
export default function Carrinho(){
    const produtos = [
        {id:1,nome:"gabinete",preço:420},
        {id:2,nome:"teclado gamer",preço:135},
        {id:3,nome:"mouse",preço:40},
    ]
    const [valor,setvalor] = useState();
    function total(){
        const soma = produtos.reduce((valores,x) =>
            valores + x.preço,0
        
        );
        setvalor(soma)
        
    }
    return(
        <>
            <h1>Carrinho de Compras</h1>
            <div>
                <ul>
                    { 
                        produtos.map((produto) =>(
                        produto.preço >=100 ?
                            
                                <li key={produto.id} >
                                {produto.nome}-<span style={{color:'red'}}>${produto.preço}</span>
                                </li>
                            
                        :  
                                <li >
                                {produto.nome}-<span style={{color:'green'}}>{produto.preço}$</span>
                                </li>
                            
                        
                        ))
                    }
                    
                </ul>
            </div>
            <button onClick={total}>total</button>
            <p>valor total de sua compra é ${valor}</p>
           
                    
        </>
    )
}