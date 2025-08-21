import './App.css';

function App() {
  return (
    <div className="container">
      <header>Header</header>

      <main>
        <section>
          <h2>Main Section</h2>
          <p>This is the content area.</p>
        </section>

        <nav>
          <ul>
            <li>Aboutus</li>
            <li>Register</li>
            <li>Login</li>
            <li>Contactus</li>
          </ul>
        </nav>
      </main>

      <div className="pagination">
        {[...Array(12)].map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>

      <footer>Footer</footer>
    </div>
  );
}

export default App;