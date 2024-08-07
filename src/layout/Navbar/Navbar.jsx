import { Link, useLocation } from 'wouter'

import './Navbar.css'
import logo from '../../assets/nav/logo-white.svg'

export const Navbar = () => {
    const [location] = useLocation();

    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <Link to={'/'} className={`nav-link ${location === '/' ? 'active' : ''}`} >Convertor Horario</Link>

                    <Link to={'/'}>
                        <img src={logo} alt="Logo Web" width={75} height={75} id='logotipo' className='logo' />
                    </Link>

                    <Link to={'/invitacion'} className={`nav-link ${location === '/invitacion' ? 'active' : ''}`} >Generar Invitación</Link>
                </nav>
            </header>
        </>
    )
}