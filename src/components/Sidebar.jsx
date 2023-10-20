import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.png';

import '../styles/components/sidebar.sass';



const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Vinicius Viana" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <p>Info Contato</p>
        <a href="" className="btn">Download CV</a>
    </aside>;
}

export default Sidebar
