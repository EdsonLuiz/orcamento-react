import React, { useState } from "react";
import { Pergunta } from "./components/Pergunta";
import { Formulario } from "./components/Formulario";
import { Gastos } from "./components/Gastos";
import { ControleOrcamento } from "./components/ControleOrcamento";

function App() {
  const [orcamentoState, setOrcamentoState] = useState(0);
  const [diferencaState, setDiferencaState] = useState(0);
  const [showFormOrcamento, setShowFormOrcamento] = useState(true);
  const [despesasState, setDespesasState] = useState([]);

  const adicionarNovaDespesa = (despesa) => {
    setDespesasState([...despesasState, despesa]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showFormOrcamento && (
            <Pergunta
              setOrcamentoState={setOrcamentoState}
              setDiferencaState={setDiferencaState}
              setShowFormOrcamento={setShowFormOrcamento}
            />
          )}

          <div className="row">
            <div className="one-half column">
              <Formulario adicionarNovaDespesa={adicionarNovaDespesa} />
            </div>
            <div className="one-half column">
              <Gastos despesasState={despesasState} />
              <ControleOrcamento
                orcamentoState={orcamentoState}
                diferencaState={diferencaState}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
