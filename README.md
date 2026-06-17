# ReactQuiz

ReactQuiz is a React + TypeScript quiz app starter built with Vite.

It includes a polished app shell, quiz state management, reusable UI components, and a starter set of multiple-choice questions so you can extend the experience quickly.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.

## Project Structure

- `src/App.tsx` renders the main app shell.
- `src/features/quiz` contains the quiz flow.
- `src/hooks/useQuiz.ts` manages quiz state and progression.
- `src/components` contains reusable UI pieces like buttons, cards, and progress.
- `src/data/questions.ts` contains the starter quiz questions.
- `src/styles/global.css` contains the global theme and layout styles.

## What’s Included

- Intro screen with a start action.
- Question flow with progress tracking.
- Locked answer selection after choosing an option.
- Score summary at the end of the quiz.
- Responsive dark visual design tuned for a quiz experience.

## Next Ideas

- Add a timer per question.
- Load questions from a JSON file or API.
- Add categories, difficulty levels, or question randomization.
- Persist high scores in local storage.
