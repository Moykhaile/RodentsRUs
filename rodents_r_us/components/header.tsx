import Image from 'next/image';
import Logo from '../public/logo/logo.png';
import header from '@/styles/header.module.css';

export default function Header() {
    return (
        <header className={header.header}>
            <nav>
                <div className={header.wrap}>
                    <div className={header.navbar}>
                        <a className={header.img} href="#Home">
                            <Image src={Logo} alt="Logo - Home page" />
                        </a>
                        <a className={header.title} href="#Home">
                            Rodents R Us
                        </a>
                        <div className={header.itemsWrap}>
                            <div className={header.items}>
                                <a href="#Espécies">Espécies</a>
                                <a href="#Favoritos">Favoritos</a>
                                <a href="#Perfil">
                                    <ProfileNavBar />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </header>
    );
}

function ProfileNavBar() {
    return (
        <div className={header.profile}>
            Seu perfil
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Seu perfil" />
        </div>
    )
}