import React, { useState } from 'react';
import { getItem, setItem } from '../../services/localStorageFuncs';
import { BsCartDash } from "react-icons/bs";


const Carrinho = () => {
    const [data, setData] = useState(getItem('carrinhoYT') || []);

    const removeItem = (obj) => {
        const arrFilter = data.filter((item) => item.id !== obj.id);
        setData(arrFilter);
        setItem('carrinhoYT', arrFilter);
    };

    return (
        <div>
            <h1>Carrinho</h1>
            <div>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>{e.price}</h4>
                            <button onClick={() => removeItem(e)}>
                                <BsCartDash />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Carrinho;
