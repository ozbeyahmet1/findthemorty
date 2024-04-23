First, run the development server:

`bash	`bash npm run dev

# or

yarn dev yarn dev

# or

pnpm dev

# or

bun dev `	`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Run build:

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. ```bash yarn
build

````

## Commit Standart

`commitlint` was used to enforce a certain standard for commits. Commits that do not follow the format
`[commit type: commit message]` will be flagged by commit lint. The possible commit types are as follows:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## Project File Structure and Functions

The fundamental file structure and component types used in this project are as follows:

```bash
.
├── ...
├── src
| ├── components
|   ├── Button
|     ├── index.tsx
|     ├── button.module.scss
|     ├── button.test.tsx
|     ├── button.stories.tsx
| ├── views
|   ├── Homepage
|     ├── index.tsx
|     ├── homepage.module.scss
| ├── pages
|   ├── index.tsx
| ├── helpers
| ├── layout
| ├── redux
└── ...
````

### `components`

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on This folder contains the core
components of the project. Each component serves as a location where its structure is
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.
created, tests are written, and prototyping is done using Storybook.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as #### Example: `Button`
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize
and - `index.tsx`: The fundamental implementation of the Button component. load Inter, a custom Google Font. -
`button.module.scss`: The style file for the Button component.

- `button.test.tsx`: The test file for the Button component.
- `button.stories.tsx`: The Storybook prototype file for the Button component.

## Learn More ### `views`

To learn more about Next.js, take a look at the following resources: This folder is where components that create page
views are combined, and the overall style of the page is designed.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API. #### Example: `Homepage`
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and
contributions - `index.tsx`: The main application file for the Homepage component. are welcome! -
`homepage.module.scss`: The style file for the Homepage component.

## Deploy on Vercel ### `pages`

The easiest way to deploy your Next.js app is to use the This folder contains the main component that renders the entire
page using components from the `views` folder.
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. #### Example:
`index.tsx`

- `index.tsx`: The main file that renders the page.

This structure organizes the project files in a logical manner and describes the function of each component. This file
structure makes the project more understandable and well-organized for development and maintenance purposes.

## Naming Convention

In this project, we adhere to the BEM (Block Element Modifier) methodology as our class naming convention. BEM is a
methodology that helps us write more organized and maintainable CSS by naming CSS classes in a specific structure.

### Usage Examples

BEM includes the following basic rules:

- **Block:** Represents the main structure. For example, `button` or `header`.
- **Element:** Represents sub-elements within a block. For example, the `icon` inside a `button` block.
- **Modifier:** Modifies the appearance or behavior of a block or element. For example, the `primary` or `large`
  modifiers for a `button` block.

Example class naming:

```html
<div class="button button--primary">
  <span class="button__text">Click me</span>
</div>
```

0 comments on commit 1cc394a @ozbeyahmet1 Comment
