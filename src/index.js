import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './App.css'


import Teste from "./tristeza/teste";
import Contador from "./tristeza/comunicacaocomps/contador";
import Pedido from "./tristeza/comunicacaocomps/finalizarPedido/pedido";
import ConclusaoPedido from "./tristeza/comunicacaocomps/finalizarPedido/conclusao";
import App from './tristeza/home'
import DetalheProduto from './tristeza/detalheproduto'
import Carrinho from './tristeza/carrinho/carrinho-item'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        


        <Route path="/teste" component={Teste} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
        <Route path="/infoX/pedido" component={Pedido} />
        <Route path="/infoX/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
