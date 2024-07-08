import './Logo.css'
import logo from '/src/assets/Logo/ioetLogo.png';

function Logo () {
    return (
        <div className='LogoContainer'>
            <img src={logo} alt='ioet logo'/>
            <h1>Store</h1>
        </div>
    )
}

export { Logo }
