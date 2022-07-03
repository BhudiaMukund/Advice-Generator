import { useEffect, useState } from "react";

function App() {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    setLoading(true);
    const response = await fetch(url);
    const adviceResponse = await response.json();
    setLoading(false);
    setAdvice(adviceResponse.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section className="card">
      <div className={loading ? `loading` : `not-loading`}>
        <div className="dice-container">
          <img src="/images/icon-dice.svg" id="loading" />
        </div>
      </div>
      <header>{`ADVICE #${advice.id}`}</header>
      <main>
        <p>{`“ ${advice.advice}”`}</p>
      </main>
      <footer>
        <img
          src="/images/pattern-divider-desktop.svg"
          alt="divider"
          className="desktop-divider divider"
        />
        <img
          src="/images/pattern-divider-mobile.svg"
          alt="divider"
          className="mobile-divider divider"
        />
        <div className="dice-container" id="next" onClick={() => fetchAdvice()}>
          <img src="/images/icon-dice.svg" className="dice" />
        </div>
      </footer>
    </section>
  );
}

export default App;
