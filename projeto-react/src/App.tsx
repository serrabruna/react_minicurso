import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import ConferenciaPage from "./pages/conferencia/ConferenciaPage.tsx";

//Adaptar para slug
//Explicar uso de rotas, nabegação entre páginas com Route e Routes
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferencia" element={<ConferenciaPage />} />
      </Routes>
    </>
  );
}

export default App;
//É imporante nomear componentes com letra maiúscula no React para diferenciá-los de elementos HTML padrão
//path = '/' é a rota raiz da aplicação, que carrega o componente Home, ou seja, a página inicial ao rodar o projeto
// {<Home />} - Sintaze JSX para renderizar o componente Home quando a rota é acessada
// JSX x TSX - JSX é uma extensão de sintaxe para JavaScript que permite escrever código semelhante a HTML dentro do JavaScript. TSX é a versão do JSX usada em TypeScript, que adiciona tipagem estática em JSX

