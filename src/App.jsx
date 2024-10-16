import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="bg-background h-screen bg-scroll">
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
