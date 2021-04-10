import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="https://cdn.iconscout.com/icon/free/png-256/bitcoin-1824299-1545921.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
        BC-Price
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;