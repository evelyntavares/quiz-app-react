import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="bg-background bg-cover bg-center box-border bg-fixed min-h-screen">
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
