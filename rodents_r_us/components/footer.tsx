import Image from 'next/image';
import Logo2 from '../public/logo/logo2.png';
import footer from '@/styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={footer.footer}>
            <div className={footer.fato}>
                “Ratos podem ser encontrados em todo o território terrestre.”
            </div>
            <nav className={footer.nav}>
                <a href="">Home</a>
                <a href="">Espécies</a>
                <a href="">Favoritos</a>
                <a href="">Perfil/Login</a>
            </nav>
            <div className={footer.contato}>
                <h1>Contato</h1>
                <p>atendimento@rodentsrus.com.br</p>
                <p>Rua Roedores, 123 | Roelândia | SP | 01234-123</p>
                <p>Telefone: +55 (11) 5836-4628</p>
            </div>
            <Image className={footer.image} src={Logo2} alt="Logo" />
            <div className={footer.copyright}>Rodents R Us &copy;2022 - Todos os direitos reservados</div>
        </footer >
    )
}