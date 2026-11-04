# Online-quiz-system

An online quiz system built collaboratively using GitHub and AI for the Gen AI for Software Development course.

Description
A simple web-based quiz app. Users answer multiple choice questions, move between them with Next / Previous, race against a countdown timer, and see their score and pass/fail result at the end.

 Features
- Multiple choice questions
- Next / Previous navigation
- Countdown timer with auto-submit
- Score and percentage calculation
- Result screen with pass/fail and restart

 Setup
1. Clone the repository or download it as a ZIP (Code > Download ZIP).
2. No installation needed. It uses plain HTML, CSS and Java.

Usage
Open `index.html` in any web browser and start the quiz.

 Project Structure
- index.html, style.css
- js/ (questions.js, navigation.js, timer.js, score.js, result.js)
- tests/

 Member Roles
| Member | GitHub Username | Role |
|---|---|---|
| Student 1 | TayyabaSE | Project setup, HTML structure, README |
| Student 2 | arusha-sys | Quiz questions module |
| Student 3 | nayyab | Quiz navigation module |
| Student 4 | mahtab | Timer module |
| Student 5 | hooraínashiq | Score module and unit tests |
| Student 6 | Maryam4707 | Result module and prompt log |

 Workflow
- Tasks were split using GitHub Issues and assigned to members.
- Each member worked on a separate feature branch (no direct commits to `main`).
- Changes were merged through pull requests with at least one peer review.

 AI Usage
We used an LLM for planning, code, tests and documentation. Our prompts, the AI's mistakes and our fixes are recorded in [PROMPT_LOG.md](PROMPT_LOG.md).
