import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import { Link } from 'react-router-dom'


//Copiar e colar código de App, Explicar uso de rotas, navegação entre páginas com Link x <a>
function Home(){
    return(
        <>
            <div>
                <a href="https://vite.dev" target="_blank"> 
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Meu primeiro projeto React!!</h1>
            <div className="card">
                <Link to="/conferencia" className="button-link">
                    <button>
                        Começar! 🚀
                    </button>
                </Link>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Home;
//Link do React Router é usado para navegação interna entre páginas sem recarregar a página, diferente do elemento <a> que recarrega a página
//Usar Link melhora a experiência do usuário em aplicações de página única (SPA) como as feitas com React
//Página padrão criada para servir como ponto de entrada da aplicação, com links para outras páginas