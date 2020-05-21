import React from "react";
import { Provider } from "react-redux";
import Jugadores from './components/Jugadores';
import store from './store';
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import './styles/styles.scss';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>React - Team Manager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
