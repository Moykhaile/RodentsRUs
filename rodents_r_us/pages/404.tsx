import Link from 'next/link';

import errorpage from '@/styles/errorpage.module.css';

export default function Error404() {
    return (
        <div className={errorpage.error}>
            <h1 className={errorpage.title}>Erro 404!</h1>
            <p className={errorpage.desc}>A página que você está tentando acessar não foi encontrada.</p>
            <p className={errorpage.route}>Volte para a página <Link className={errorpage.link} href='/'>Home</Link>!</p>
        </div>
    );
}