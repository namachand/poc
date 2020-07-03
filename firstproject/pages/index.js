import Layout from '../components/layout'
import Displayer from '../components/displayer'
const Home=(props)=>{
  console.log(props);
  return (
    <Layout>
      <h1>Welcome to the Home Page</h1>
      <Displayer result={props.result}/>
    </Layout>
  )
}

Home.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    result: data
  };
}

export default Home;
