interface ScoreSummaryProps {
  score: number;
  totalQuestions: number;
  accuracy: number;
  onRestart: () => void;
}

export function ScoreSummary({ score, totalQuestions, accuracy, onRestart }: ScoreSummaryProps) {
  return (
    <section className="summary-card">
      <p className="summary-kicker">Quiz complete</p>
      <h2>{score} correct answers</h2>
      <p className="summary-copy">
        You answered {score} of {totalQuestions} questions correctly with an accuracy of {accuracy}%.
      </p>

      <div className="summary-stats">
        <div>
          <span className="summary-stat-value">{score}</span>
          <span className="summary-stat-label">Correct</span>
        </div>
        <div>
          <span className="summary-stat-value">{totalQuestions - score}</span>
          <span className="summary-stat-label">Missed</span>
        </div>
        <div>
          <span className="summary-stat-value">{accuracy}%</span>
          <span className="summary-stat-label">Accuracy</span>
        </div>
      </div>

      <button className="primary-button" onClick={onRestart}>
        Play again
      </button>
    </section>
  );
}
