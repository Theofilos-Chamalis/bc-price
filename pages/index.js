import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BC-Price</h1>
            <p>Check out the current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

export async function getStaticProps() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        props: {
            bpi: data.bpi
        },
        revalidate: 30
    }
}

export default Index;
