import React from 'react';
import style from '@/components/Mural/CriarNovaPostagem/criarPostagem.module.scss';
import Image from 'next/image';

export default function criarPostagem() { 
    return (
        <div className={style.tela_mural}> 
        
            <div className={style.list_header}>
                <div className={style.list_header__title}>
                    <div className={style.list_header__title_voltar}>
                    <Image src="/assets/iconMenorQue.svg" alt="Visualizar" width={27} height={26}/>
                        <a className={style.list_header__title_voltar_link} href='/inicio'>
                            <h1>Voltar</h1>
                        </a>                   
                    </div>
                    <div className={style.list_header__title_guia}>
                        <h1>Home /</h1>
                        <h1> Mural /</h1>
                        <h2> Criar nova postagem</h2>
                    </div>
                </div>
            </div>
            
            <selection className={style.criarPostagem}>
                <div className={style.criarPostagem__addImagem}>

                </div>


            </selection>

        </div>
    );
}

