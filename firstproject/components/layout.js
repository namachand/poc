import NavbarComponent from './Navbar';
 
const Layout = (props) => (
    <div>
      <NavbarComponent/>
      <div className="container">
        {props.children}
      </div>
    </div>
);
  
export default Layout;