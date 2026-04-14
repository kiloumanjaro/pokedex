# Clean Code Guidelines

> ⚠️ AI INSTRUCTION: Read this file before writing or modifying any code in this project.

## Naming Conventions
- Names MUST be meaningful and descriptive
- Functions → camelCase
- Variables → camelCase
- Constants → UPPER_SNAKE_CASE
- Classes → PascalCase
- Class methods → camelCase
- Booleans MUST start with: is, has, should, can (e.g. isLoading, hasError)
- File names → kebab-case
- HTML classes → BEM with kebab-case: block__element--modifier
- Event handlers MUST use handle prefix: handleSubmitClick, handleModalClose

## File Organization
- Organize by feature, not by type
- If a folder has fewer than ~7 files, NEVER create subfolders

## Function Rules
- One function = one responsibility only
- Name describes WHAT, not HOW
- if/else/while blocks should contain ~1 line — extract to named functions

## Separation of Responsibility
- HTML, CSS, and JS MUST be in separate files — never mixed
- Never mix UI creation and logic in one function — split into createX() and saveX()
- Split files by DOM responsibility: card-dom.js, board-dom.js, storage-service.js

## DRY
- No duplicate code
- Extract repeated logic into shared utilities or classes

## HTML Rules
- No inline styles
- No inline JS
- HTML is structure only

## CSS Rules
- BEM only
- No ID selectors
- All styles via composable classes

## Comments
- No commented-out unused code
- Comments only for non-obvious intent

## Error Handling
- Throw exceptions, not error codes
- Never put try/catch inside business logic functions

## Classes
- Use classes to encapsulate DOM, events, and state when abstraction is needed
- Class structure: constructor → render → createElement → attachEventListeners → handlers → updaters → remove → toJSON → static fromJSON

---

## Nice to have — deferred (not yet enforced)

These rules are acknowledged but intentionally not applied in the current audit pass. Revisit after the baseline rules above are fully adopted.

- DOM element variables MUST use `$` prefix (e.g. `const $modal = ...`)
- Max 20 lines per function
- JS file > 200 lines → split into separate files
- No element selectors in CSS (e.g. `div {}`)
- HTML IDs → UPPER_SNAKE_CASE
