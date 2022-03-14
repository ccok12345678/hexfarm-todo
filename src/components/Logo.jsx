import logo from '../images/logo.svg'

function Logo() {
  return (
    <a href="#" title="農場備忘" className="logo">
      <h1 className="logo-title">農場備忘</h1>
      <img
        src={logo}
        alt="logo"
        className="logo-img"/>
    </a>
  )
  
}

export default Logo
