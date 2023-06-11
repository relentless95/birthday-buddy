import { useState } from "react";

import data from "./data";
import List from "./components/List";

console.log(data)

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])} className="btn btn-block">
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
