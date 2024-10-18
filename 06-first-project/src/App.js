import List from "./components/List";
import Search from "./components/Search";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>MisPelis</h1>
        </header>
        <nav className="nav">
          <ul>
            <li><a href="//">Inicio</a></li>
            <li><a href="/">Peliculas</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
        </nav>
        <section id="content" className="content">
          <List />
        </section>
        <aside className="lateral">
          <Search />

          <Create />
        </aside>
        <footer className="footer">
          &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

      </div>
    </div>
  );
}

export default App;
