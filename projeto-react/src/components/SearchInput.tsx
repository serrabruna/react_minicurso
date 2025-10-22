import React from 'react';
import styles from './SearchInput.module.css';
//importação de estilização com CSS Modules - Por que usar CSS Modules? Evita conflitos de nomes em projetos maiores

//Contrato de peopriedades do componente
interface SearchInputProps {
    value: string; //Valor atual do input
    onChange: (newValue: string) => void; //Função chamada quando o valor muda
    placeholder?: string; //Texto dica, opcional
}

//FC = Função Componente
const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder = "Buscar"}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { //Tipagem de evento do input
        onChange(event.target.value); //Chama a função onChange passada via props com o novo valor
    }

    return (
        <input
            className={styles.searchInput} //Usando CSS Modules para estilização
            type="text" //Tipo do input
            value={value} //Valor controlado do input
            onChange={handleInputChange} //Evento de mudança
            placeholder={placeholder} //Texto dica
        />
    )
}

export default SearchInput; //exporta o componente para uso em outros arquivos
//Componente reutilizavel de input de busca controlado pelo estado do componente pai
//onChange é uma função callback que permite ao componente pai atualizar o estado com o novo valor do input
//componente pai = ConferenciaPage
//placeholder é opcional, com valor padrão "Buscar" se não for fornecido
