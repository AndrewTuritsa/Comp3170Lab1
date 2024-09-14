function App() {
  return (
    <div className="app">
      <section id="content">
        <main id="tunes">
          <div>
            <h1>The Tunes</h1>
            <div>
              <div id="albumArea">
                <h2>Rammstein's Albums</h2>
                <details className="album">
                  <summary>Zeit</summary>
                  <ol>
                    <li>Armee der Tristen</li>
                    <li>Zeit</li>
                    <li>Schwarz</li>
                    <li>Giftig</li>
                    <li>...</li>
                  </ol>
                </details>

                <details className="album">
                  <summary>Rammstein</summary>
                  <ol>
                    <li>Deutschland</li>
                    <li>Radio</li>
                    <li>Zeig dich</li>
                    <li>Auslander</li>
                    <li>...</li>
                  </ol>
                </details>
              </div>

              <img src="/images/Group.jpg" id="group" />

            
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
