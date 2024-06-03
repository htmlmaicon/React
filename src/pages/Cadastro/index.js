import React from 'react';
import '../../assets/css/estilo.css'

function Login(){
    return (
        <div className="page-container">
            <div className="wrapper">
                <div className="form-box login">
                    <h2>CADASTRE-SE</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="email" required placeholder=" " />
                            <label>NOME</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="email" required placeholder=" " />
                            <label>SOBRENOME</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="email" required placeholder=" " />
                            <label>EMAIL</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="password" required placeholder=" " />
                            <label>SENHA</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="password" required placeholder=" " />
                            <label>REPETIR SENHA</label>
                        </div>
                        
                        <button type="submit" className="btn">Cadastrar</button>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
