import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/ListOfPatients";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  
  useEffect(() => {
    const pacientesLS = JSON.parse(window.localStorage.getItem("pacientes")) ?? [];  
    setPacientes(pacientesLS);
  }, []);
  
  

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]); /*  ===> cada ves que 
  haya un cambio en pacientes es ejecutara este codigo * */
  
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <List
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
