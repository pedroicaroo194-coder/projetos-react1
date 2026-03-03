export default function Listagem(){
    const nomes = ["pedro","maria","joao"]
    return(
        <>
            <ul>
                {nomes.map((nome, indice) =>(
                    <li key={indice}>{nome}</li>
                ))}
             </ul>
        </>
    )
}