import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error';


function App() {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  
  const [consultar, guardarConsultar] = useState(false); // Controlar las consultas
  const [resultado, guardarResultado] = useState({}); // Controlar las consultas
  
  const [error, guardarError] = useState(false);
  
  const {ciudad, pais} = busqueda;

  useEffect(() => {
    // other code
    if(consultar){
      const consultarApi = async () =>{
        let appId = 'abd1beadae9364922b2b8143dd38a55b';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        let respuesta = await fetch(url);        
        let resultado = await respuesta.json();
        
        guardarResultado(resultado);
        guardarConsultar(false);

        //Resultado.cod es una propiedad de la api que sale cuando no encuentra la busqueda
        if(resultado.cod ==="404"){ 
          guardarError(true);
        }else{
          guardarError(false)
        }
      }
      consultarApi(); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultar])
  
  let componente;
  if(error){
    componente = <Error mensaje = "No hay resultados"/>
  }else{
    componente = <Clima resultado={resultado}/>
  }

  
  return (
    <Fragment>
      <Header
        titulo = 'Clima App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row"> 
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}                
                guardarConsultar={guardarConsultar}              
              />
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default App;
