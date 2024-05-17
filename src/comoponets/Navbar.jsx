import logo from "../assets/b.png";

const Navbar = ({Changetheme,theme}) => {
  return (
    <nav className="navbar bg-info ">
  <div className="container-fluid">
    <span className="navbar-text-dark fs-2 text-light ">
    <div className="d-flex align-items-center">
    <img src={logo} alt="" />
    Todo App React 
    </div>
     
    </span>
    
  </div>
 
</nav>
  );
};

export default Navbar;
