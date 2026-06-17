import { useMemo, useState } from 'react';
import { quizQuestions } from '../data/questions';
import type { QuizQuestion, QuizStatus } from '../types/quiz';

export function useQuiz() {
  const [status, setStatus] = useState<QuizStatus>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentIndex] as QuizQuestion;
  const totalQuestions = quizQuestions.length;
  const isAnswerLocked = selectedOptionId !== null;
  const isComplete = status === 'complete';

  const selectedOption = useMemo(
    () => currentQuestion.options.find((option) => option.id === selectedOptionId) ?? null,
    [currentQuestion, selectedOptionId],
  );

  const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
  const progress =
    status === 'idle' ? 0 : Math.round(((currentIndex + (isAnswerLocked ? 1 : 0)) / totalQuestions) * 100);

  const startQuiz = () => {
    setStatus('active');
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setScore(0);
  };

  const chooseOption = (optionId: string) => {
    if (status !== 'active' || isAnswerLocked) {
      return;
    }

    setSelectedOptionId(optionId);

    if (optionId === currentQuestion.correctOptionId) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex === totalQuestions - 1) {
      setStatus('complete');
      return;
    }

    setCurrentIndex((currentQuestionIndex) => currentQuestionIndex + 1);
    setSelectedOptionId(null);
  };

  const restartQuiz = () => {
    setStatus('idle');
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setScore(0);
  };

  return {
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
  };
}
