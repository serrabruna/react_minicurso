import './ConferenciaPage.css'
import SearchInput from "../../components/SearchInput";
import { useState } from "react";

function ConferenciaPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
    </>
  );
}

export default ConferenciaPage;
