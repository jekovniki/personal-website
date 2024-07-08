const Header = () => {
  return (
    <header>
      <div className="left-side">
        <div className="box"></div>
        <a href="/">
          <span className="name">Nikolay Zhekov</span>
          <span className="position"> / SOFTWARE ENGINEER</span>
        </a>
      </div>
      <nav>
        <ul>
          <li>ABOUT ME</li>
          <li>RESUME</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
