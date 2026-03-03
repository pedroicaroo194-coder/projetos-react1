import { useEffect, useState } from "react"
import "./clima.css"
import {Cloud, Search,} from "lucide-react"

export default function Clima(){
  const [busca,setbusca] = useState("campos sales")
  const [dadosfinal,setdadosfinal] = useState(null)
  const cidades = ["São paulo","Rio de janeiro","Campos Sales", "Fortaleza","Fronteiras"]
  const campo = "campos sales"

  const key = "bf4d560e06656021956714ca1f78ce46";

  useEffect(()=>{
    buscarcidade()
  },[]);

  const penter = (e) =>{
    if (e.key === 'Enter'){
      buscarcidade()
      
    }
  }
  
  const buscarcidade = async (buscacidade) => {
  buscacidade = busca
    if (buscacidade === "") {
    alert(" digite sua cidade")
    return;
    } 

  try {
    const resposta = await fetch (
      `https://api.openweathermap.org/data/2.5/weather?q=${buscacidade}&units=metric&appid=${key}&lang=pt_br`
    )
    const dados = await resposta.json()
    setdadosfinal(dados)
  }catch (erro){
    alert("err")
  }
  } 
  return(
    <>
    <div className="principal">
      
      <h1 style={{marginLeft:'100px'}}>Cloud</h1> <Cloud size={45}/>
      <div className="p">
      <Search  color="#666" size="25px" />
      <input type="text" name="busca" placeholder="Procurar" onKeyUp={penter} onChange={(e) => setbusca(e.target.value)} list="cs" />
      </div>
      <datalist id="cs">
        {
          cidades.map((cidade, index)=>(
            <option key={index} value={cidade}/>
          ))}
      </datalist>
      <button onClick={buscarcidade}>Buscar</button>
      </div>
      {
        dadosfinal  && (
         <div className="caixa">
          <h1 className="nome">{dadosfinal.name}</h1>
           <div>
            <div className="grau">
            <h1 style={{fontSize:"90px",marginTop:"-3px"}}>  {Math.round(dadosfinal.main.temp)} <span style={{fontSize:'30px', marginTop:"-4 0px"}}>°C</span> </h1>
             </div> 
             <div className="outros">
              <ul>
           <li><p><b>Condição:</b> {dadosfinal.weather[0].description}</p></li>
           <li><p><b>Umidade:</b> {dadosfinal.main.humidity}%</p></li>
            <li><p><b>Vento:</b> {dadosfinal.wind.speed} km/h</p></li>
            </ul>
            </div>
            </div>
          </div>  
      )}
    
    </>
  )
}