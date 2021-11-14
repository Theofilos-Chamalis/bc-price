import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'
import "bootswatch/dist/minty/bootstrap.min.css";

const Layout = (props) => (
    <div>
        <Head>
            <title>BC-Price</title>
            <link rel="icon" type="image/x-icon"
                  href="https://cdn.iconscout.com/icon/free/png-256/bitcoin-1824299-1545921.png"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        <Footer/>
    </div>
);

export default Layout;
