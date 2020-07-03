import Link from 'next/link'
import Head from 'next/head';

class NavbarComponent extends React.Component{
    render(){
        return(
        <div>
            <Head>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
            </Head>
            <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
                <div className="container">
                    <div>
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
        </div>   
        )
    }
}
export default NavbarComponent;