import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../public/logo/logo.png';
import header from '@/styles/header.module.css';

export default function Header() {
    return (
        <header className={header.header}>
            <nav>
                <div className={header.wrap}>
                    <div className={header.navbar}>
                        <a className={header.img} href="/">
                            <Image src={Logo} alt="Logo - Home page" />
                        </a>
                        <a className={header.title} href="/">
                            Rodents R Us
                        </a>
                        <div className={header.itemsWrap}>
                            <div className={header.items}>
                                <Item path='/todos' title='Todos' />
                                <Item path='/especies' title='Espécies' />
                                <Item path='/favoritos' title='Favoritos' />
                                <Item path='#perfil' title={<ProfileNavBar />} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </header>
    );
}

function Item({ path, title }) {
    const curPath = useRouter().asPath;
    const activeStyle = {
        textDecoration: "underline #666666",
        color: "#666666",
        borderLeft: "1px solid #aaaaaa",
        cursor: "default",
    };
    return (
        <Link href={path} className={header.item} style={(curPath === path ? activeStyle : undefined)}>
            {title}
        </Link>
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