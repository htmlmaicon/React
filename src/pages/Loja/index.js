import React, { useState, useEffect } from 'react';
import { BsCartPlusFill, BsCartCheckFill } from 'react-icons/bs';
import { getItem, setItem } from '../../services/localStorageFuncs';
import { Link } from 'react-router-dom';


export const Store = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinhoYT') || []);
    
    useEffect(() => {
        const fetchApi = async () => {
            const url = '/api/sites/MLB/search?q=cerveja';
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results);
        };
        fetchApi();
    }, []);

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id);
        if (element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id);
            setCart(arrFilter);
            setItem('carrinhoYT', arrFilter);
        } else {
            const updatedCart = [...cart, obj];
            setCart(updatedCart);
            setItem('carrinhoYT', updatedCart);
        }
    };
    
    return (
        <div className="store-container">
            <div className="store-header">
                <h1>Loja</h1>
                <Link to='/carrinho' className="button-cart">Carrinho</Link>
            </div>
            <div className="store-items">
                {data.map((e) => (
                    <div key={e.id} className="store-item">
                        <h4>{e.title}</h4>
                        <img src={e.thumbnail} alt={e.title} />
                        <h4>{e.price}</h4>
                        <button onClick={() => handleClick(e)}>
                            {cart.some((itemCart) => itemCart.id === e.id) ? (
                                <BsCartCheckFill />
                            ) : (
                                <BsCartPlusFill />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
