import Navbar from "./Navbar.jsx";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <Navbar />
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
