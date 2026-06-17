import { Quiz } from './features/quiz/Quiz';

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">React + TypeScript quiz starter</p>
        <h1>Build quizzes that feel sharp, fast, and easy to extend.</h1>
        <p className="hero-copy">
          This scaffold includes quiz state, reusable UI pieces, and a polished layout so you can
          focus on content and behavior instead of boilerplate.
        </p>
      </header>

      <main className="content-grid">
        <Quiz />
      </main>
    </div>
  );
}

export default App;
