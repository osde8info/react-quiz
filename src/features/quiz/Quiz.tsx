import { ChoiceCard } from '../../components/ChoiceCard';
import { PrimaryButton } from '../../components/PrimaryButton';
import { ProgressBar } from '../../components/ProgressBar';
import { ScoreSummary } from '../../components/ScoreSummary';
import { useQuiz } from '../../hooks/useQuiz';

export function Quiz() {
  const {
    currentIndex,
    currentQuestion,
    isAnswerLocked,
    isComplete,
    isCorrect,
    nextQuestion,
    progress,
    restartQuiz,
    score,
    selectedOption,
    selectedOptionId,
    startQuiz,
    status,
    totalQuestions,
    chooseOption,
  } = useQuiz();

  if (status === 'idle') {
    return (
      <section className="quiz-panel quiz-panel--intro">
        <p className="panel-kicker">Ready to start</p>
        <h2>Test your React and TypeScript instincts.</h2>
        <p className="panel-copy">
          The scaffold gives you a quiz flow with progress, answer locking, scoring, and a results
          summary you can extend with timers, categories, or persistence.
        </p>
        <PrimaryButton onClick={startQuiz}>Start quiz</PrimaryButton>
      </section>
    );
  }

  if (isComplete) {
    const accuracy = Math.round((score / totalQuestions) * 100);

    return (
      <ScoreSummary
        accuracy={accuracy}
        onRestart={restartQuiz}
        score={score}
        totalQuestions={totalQuestions}
      />
    );
  }

  return (
    <section className="quiz-panel">
      <ProgressBar value={progress} label={`Question ${currentIndex + 1} of ${totalQuestions}`} />

      <div className="question-meta">
        <span className="topic-pill">{currentQuestion.category}</span>
        <span className="score-pill">Score {score}</span>
      </div>

      <h2>{currentQuestion.prompt}</h2>

      <div className="choices-grid" role="list">
        {currentQuestion.options.map((option) => {
          const selected = selectedOptionId === option.id;
          const correct = isAnswerLocked && option.id === currentQuestion.correctOptionId;
          const revealWrongSelection = isAnswerLocked && selected && !isCorrect;

          return (
            <ChoiceCard
              aria-pressed={selected}
              correct={correct}
              disabled={isAnswerLocked}
              key={option.id}
              onClick={() => chooseOption(option.id)}
              selected={selected}
            >
              <span className="choice-label">{option.label}</span>
              {option.helper ? <span className="choice-helper">{option.helper}</span> : null}
              {revealWrongSelection ? <span className="choice-badge choice-badge--wrong">Your pick</span> : null}
              {correct ? <span className="choice-badge choice-badge--correct">Correct</span> : null}
            </ChoiceCard>
          );
        })}
      </div>

      {selectedOption ? (
        <div className={`feedback-box ${isCorrect ? 'feedback-box--success' : 'feedback-box--warning'}`}>
          <strong>{isCorrect ? 'Nice work.' : 'Not quite.'}</strong>
          <p>{currentQuestion.explanation}</p>
        </div>
      ) : null}

      <div className="panel-actions">
        <PrimaryButton disabled={!isAnswerLocked} onClick={nextQuestion}>
          {currentIndex === totalQuestions - 1 ? 'See results' : 'Next question'}
        </PrimaryButton>
      </div>
    </section>
  );
}
