import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Loja from './pages/Loja';
import Erro from './pages/Erro';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/loja" element={<Loja />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
