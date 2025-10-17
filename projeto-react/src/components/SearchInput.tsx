import React from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder = "Buscar"}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <input
            className={styles.searchInput}
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
        />
    )
}

export default SearchInput; 