import type { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'rendering',
    category: 'React Core',
    prompt: 'What triggers a React component to re-render?',
    explanation: 'A re-render happens when state, props, or context that the component reads change.',
    correctOptionId: 'state-props-context',
    options: [
      { id: 'state-props-context', label: 'State, props, or context change' },
      { id: 'only-clicks', label: 'Only when a user clicks a button' },
      { id: 'css-updates', label: 'Only when CSS changes' },
    ],
  },
  {
    id: 'typescript',
    category: 'TypeScript',
    prompt: 'Why is a discriminated union useful in quiz state?',
    explanation: 'It makes each state branch explicit and narrows the shape of data safely.',
    correctOptionId: 'safe-narrowing',
    options: [
      { id: 'safe-narrowing', label: 'It enables safe narrowing across state branches' },
      { id: 'less-code', label: 'It removes the need for any types at all' },
      { id: 'runtime-only', label: 'It only affects runtime performance' },
    ],
  },
  {
    id: 'hooks',
    category: 'Hooks',
    prompt: 'Which hook is best for derived values that depend on quiz progress?',
    explanation: 'Derived values should usually come from direct calculation or memoization when needed.',
    correctOptionId: 'derived-calculation',
    options: [
      { id: 'derived-calculation', label: 'A direct calculation from current state' },
      { id: 'use-ref', label: 'useRef for rendering logic' },
      { id: 'use-effect', label: 'useEffect for every derived value' },
    ],
  },
  {
    id: 'composition',
    category: 'Architecture',
    prompt: 'What is a good reason to split quiz UI into small components?',
    explanation: 'Small components improve reuse, readability, and focused testing.',
    correctOptionId: 'reuse-testability',
    options: [
      { id: 'reuse-testability', label: 'Reuse, readability, and testability' },
      { id: 'more-files', label: 'It always makes code shorter' },
      { id: 'avoid-state', label: 'It removes the need for application state' },
    ],
  },
  {
    id: 'accessibility',
    category: 'UX',
    prompt: 'What should quiz answer buttons support?',
    explanation: 'Buttons should be keyboard friendly, clearly labeled, and expose selection state.',
    correctOptionId: 'keyboard-state',
    options: [
      { id: 'keyboard-state', label: 'Keyboard access and visible selection state' },
      { id: 'hover-only', label: 'Hover interactions only' },
      { id: 'image-icons', label: 'Only icons with no text' },
    ],
  },
];
