import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notas from "../Components/Notas"

const AppRoutes=()=>{
	return (
		<BrowserRouter>
      <Routes>
        <Route path="/notas" element={<Notas/>} />
        <Route path="/inserirNotas" element={InserirNotas} />
        <Route path="/visualizarNotas" element={ExibirMedia} />

        <Route path="/faltas" element={Faltas} />
        <Route path="/inserirFaltas" element={InserirFaltas} />
        <Route path="/visualizarFaltas" element={ExibirFaltas} />
      </Routes>
      </BrowserRouter>
	)
}