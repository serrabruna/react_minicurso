import './ConferenciaPage.css'
import SearchInput from "../../components/SearchInput";
import { useState } from "react";
import Lista from '../../components/lista/Lista';

//Importar useState

//Explicar implementação de componentes com slug
function ConferenciaPage() {
  const [searchText, setSearchText] = useState("");//Estado para armazenar o texto de busca

  
  return (
    <>
    <div className='conference-container'>
        <div className='barra-de-pesquisa'>
            <h2 className='page-title'>WishList - Viagens</h2>
        </div>
            <SearchInput
            value={searchText}
            onChange={(newText) => setSearchText(newText)} //Atualiza o estado com o novo texto
            />

        <div className='lista-container'>
            <Lista
              slug={searchText} //Passa o texto de busca como slug para filtrar os itens
            />
        </div>
    </div>
    </>
  );
}

export default ConferenciaPage;
//Página de conferência que inclui uma barra de pesquisa para filtrar locais de viagem
//useState é usado para gerenciar o estado do texto de busca
//o componente SearchInput é usado para entrada do usuário, e o componente Lista exibe os locais filtrados com base no slig fornecido
//slug é uma string usada para identificar e filtrar itens na lista de locais
