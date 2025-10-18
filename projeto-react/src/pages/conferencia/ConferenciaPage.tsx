import './ConferenciaPage.css'
import SearchInput from "../../components/SearchInput";
import { useState } from "react";
import Lista from '../../components/lista/Lista';

function ConferenciaPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
    <div className='conference-container'>
        <div className='barra-de-pesquisa'>
            <h2 className='page-title'>WishList - Viagens</h2>
        </div>
            <SearchInput
            value={searchText}
            onChange={(newText) => setSearchText(newText)}
            />

        <div className='lista-container'>
            <Lista />
        </div>
    </div>
    </>
  );
}

export default ConferenciaPage;
