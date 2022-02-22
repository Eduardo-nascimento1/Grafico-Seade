import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css';
import api from "../../Service/Api";

const SearchImput = ({ value, onChange }) => {
    const [input, setInput] = useState('');


   async function pesquisa() {
        if (input === '') {
            alert("pesquise o municipio")
            return;
        }
        try {

            const response = await api.get(`${input}`)
            console.log(response.data.dados)
          
        } catch {
            alert("ops algo deu errado")
            setInput("");
        }

    }


    return (
        <div className="container">
            <input
                type="search"
                value={input}
                placeholder="pesquisa um municipio de são paulo"
                onChange={(e) => setInput(e.target.value)}
            >
            </input>
            <button className="button" onClick={pesquisa}>
                <FiSearch border={0} size={15} color="#000" />
            </button>
        </div>

    )
}

export default SearchImput;