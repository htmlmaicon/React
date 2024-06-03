import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/Beer Mapper.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/estilo.css';
import imagem1 from '../../assets/imagens/img1.png';
import imagem2 from '../../assets/imagens/img2.png';
import imagem3 from '../../assets/imagens/img3.png';
import facebookIcon from '../../assets/imagens/face.jpeg'; // Importe os ícones necessários
import whatsappIcon from '../../assets/imagens/whats.jpeg';
import instagramIcon from '../../assets/imagens/insta.jpeg';
import { useState, useEffect } from 'react';

function Home() {
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setChanged(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="150" alt="Beer Mapper" />
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div id="nav-principal" className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/loja" className="nav-link nav-link-custom">Loja</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/informacoes" className="nav-link nav-link-custom">Informações</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cadastro" className="nav-link nav-link-custom">Cadastrar-se</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link nav-link-custom">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className={`localizacao ${changed ? 'changed' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 id="titulo-rotas">Conheça as rotas:</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1844560.7784706496!2d-51.6676791750246!3d-25.449702690386122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scervejarias%20em%20guarapuava!5e0!3m2!1spt-BR!2sbr!4v1711928357904!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home" className={`d-flex ${changed ? 'changed' : ''}`}>
                <div className="container align-self-center">
                    <div className="row">
                        <div className="col-md-12 capa">
                            <h3 id="titulo-rotas">Conheça nossos Parceiros:</h3>
                            <div id="carousel-spotify" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={imagem1} height="400" width="500" alt="Parceiro 1" />
                                        <Link to="https://maps.app.goo.gl/dGgWbiUUa6M7vvw5A" className="wrap">
                                            <button className="button">Visite-nos</button>
                                        </Link>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imagem2} height="400" width="500" alt="Parceiro 2" />
                                        <Link to="https://maps.app.goo.gl/AYmdckzUDuevTBaP6" className="wrap">
                                            <button className="button">Visite-nos</button>
                                        </Link>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imagem3} height="400" width="500" alt="Parceiro 3" />
                                        <Link to="https://maps.app.goo.gl/AYmdckzUDuevTBaP6" className="wrap">
                                            <button className="button">Visite-nos</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-servicos">
                    <div className="title">
                        <div className="caixa">
                            <h2>Nossos serviços</h2>
                            <div className="card">
                                <i className="fas fa-truck"></i>
                                <h5>Delivery</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta fugit quae hic. Aperiam magnam illo ipsam, temporibus ratione praesentium laboriosam illum similique impedit, perspiciatis rerum vel earum facere quidem?</p>
                                <button className="btn-leia-mais">Leia mais</button>
                            </div>
                            <div className="card">
                                <i className="fas fa-shopping-cart"></i>
                                <h5>Compras</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta fugit quae hic. Aperiam magnam illo ipsam, temporibus ratione praesentium laboriosam illum similique impedit, perspiciatis rerum vel earum facere quidem?</p>
                                <button className="btn-leia-mais">Leia mais</button>
                            </div>
                            <div className="card">
                                <i className="fas fa-headset"></i>
                                <h5>Atendimento</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta fugit quae hic. Aperiam magnam illo ipsam, temporibus ratione praesentium laboriosam illum similique impedit, perspiciatis rerum vel earum facere quidem?</p>
                                <button className="btn-leia-mais">Leia mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={logo} width="142" alt="Beer Mapper" />
                        </div>
                        <div className="col-md-2">
                            <h4>Início</h4>
                            <ul className="navbar-nav">
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Produtos</Link></li>
                                <li><Link to="#">Downloads</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h4>Informações</h4>
                            <ul className="navbar-nav">
                                <li><Link to="https://redesuldenoticias.com.br/redemais/jordana-bier-expande-e-cria-espaco-de-lazer-para-amantes-de-chopp/">Blog</Link></li>
                                <li><Link to="https://www.brejas.com.br/cervejaria/microcervejaria/jordana-bier#:~:text=Hist%C3%B3rico,do%20propriet%C3%A1rio%20Renato%20Mocellin%20Lopes.">Conteúdo</Link></li>
                                <li><Link to="https://www.jordanacosmeticos.com.br/loja/contato/">Email</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h4>Suporte</h4>
                            <ul className="navbar-nav">
                                <li><Link to="http://prosperdistribuidora.com.br/jordana-bier-aposta-no-chopp-engarrafado/">Como funciona</Link></li>
                                <li><Link to="https://www.brejas.com.br/cervejaria/microcervejaria/jordana-bier#:~:text=As%20cervejas%20Jordana%20Bier%20s%C3%A3o,utilizados%20%C3%A1gua%20malte%20e%20l%C3%BApulo!">Características</Link></li>
                                <li><Link to="https://www.brejas.com.br/cervejaria/microcervejaria/jordana-bier#:~:text=As%20cervejas%20Jordana%20Bier%20s%C3%A3o,utilizados%20%C3%A1gua%20malte%20e%20l%C3%BApulo!">Comunicado</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="https://pt-br.facebook.com/cervejariajordana/"><img src={facebookIcon} width="50" height="50" alt="Facebook" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://wa.me/554236224742?text=Bem+vindo%2C+qual+ser%C3%A1+seu+pedido+hoje%3F"><img src={whatsappIcon} width="50" height="50" alt="WhatsApp" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/cervejariajordana/"><img src={instagramIcon} width="50" height="50" alt="Instagram" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
