const Navbar = () => {
    return (  
      <>
        <ul className="nav">
            <li className="logo">Admin</li>
            <li tabindex="0"><i data-feather="home">Home</i></li>
            <li tabindex="0"><i data-feather="users">Users</i></li>
            <li tabindex="0"><i data-feather="list">List</i></li>
        </ul>
      </>
    );
}
export default Navbar;