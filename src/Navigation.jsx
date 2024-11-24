function Navigation(props) {
  return (
    <header>
      <nav className="w-full bg-black p-4">
        <div className="container flex items-center justify-between">
          <span id="logo">
            <a className="font-bold" href="#">
              Curtis<span>.xyz</span>
            </a>
          </span>
          <ul className="navigation-links flex items-center justify-center">
            <li>
              <a className="active" href="#">
                My Work
              </a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a className="border-2 rounded-3xl px-4 py-2" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
