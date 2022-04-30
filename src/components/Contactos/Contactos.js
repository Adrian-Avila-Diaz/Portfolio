import React from 'react';
import './Contactos.css';
import Redes from './Redes';
import TwitterIcon from './icons/Twitter';
import LinkedinIcon from './icons/Linkedin';
import GithubIcon from './icons/Github';
import Whatsapp from './icons/Whatsapp';


function Contactos() {

    const socialElements = Redes.map(social => {
        let iconEl;
        if(social.red === 'twitter') {
            iconEl = <TwitterIcon />;
        } else if(social.red === 'linkedin') {
            iconEl = <LinkedinIcon />;
        } else if(social.red === 'github') {
            iconEl = <GithubIcon />;
        } else if(social.red === 'whatsapp') {
            iconEl = <Whatsapp />;
        }
        return <li className={`Contacto-${social.red} blocks`} key={social.id}>
            <a target="_blank" without rel="noreferrer" className='item-a flex items-center justify-center relative h-[6rem] w-[6rem] rounded-full overflow-hidden hover:scale-[1.1] mr-[3rem]' href={social.url}>
                {iconEl}
            </a>
        </li>
    })

    return (<>
        <section className="Contacto relative py-[6rem] ">
            {socialElements && <ul className="Lista_de_contactos flex items-center justify-center">
                {socialElements}
            </ul>}
        </section>
    </>)
}

export default Contactos