[storybook]: https://storybook.js.org
[nextjs]: https://nextjs.org
[styled-components]: https://styled-components.com
[react]: https://reactjs.org
[typescript]: https://www.typescriptlang.org
[jest]: https://jestjs.io
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
[preapp]: https://better.com/start
[node]: https://nodejs.org
[npm]: https://www.npmjs.com
[figma]: https://www.figma.com
[figma-file]: https://www.figma.com/file/uNMToTZNNUQZliTIBUXi4v/Better_Core-Flow?node-id=0%3A1
[greenhouse]: https://greenhouse.io

# frontend-take-home
>Better’s take-home project for candidates applying for the Frontend Engineer role

First of all, welcome to our engineering hiring process! :tada:

We are glad that you’re interested in joining us and looking forward to check out your project once you are done with it.

This is a simple web-based application that simulates a partial version of our existing [preapproval flow][preapp].

Everything should already be working and setup for you so you can focus your time and energy on the actual project.

We will use the output of this exercise to help us get a sense of your technical skills and try to match them with the available roles we have on our engineering teams.

Good luck! :raised_hands:

## Stack
- [TypeScript][typescript] as programming language
- [React][react] as user interface library
- [styled-components][styled-components] as styling solution
- [Next.js][nextjs] as framework
- [Storybook][storybook] as component library
- [Jest][jest] with [`react-testing-library`][react-testing-library] for tests

## Setup
1. Clone the repository
2. Assuming you have [Node.js][node] and [`npm`][npm] installed, run `npm install`
3. By running `npm run dev` you should have a local development server up and running and now you should be good to go

## Scripts
| Name | Description |
|--- |--- |
| `dev` | Start a Next.js local development server |
| `build` | Creates a static build of the application |
| `start` | Startup a Next.js server |
| `storybook` | Startup a Storybook local development server |
| `storybook-build` | Creates a static build of the component library |
| `test` | Runs project tests and type check |

## Spec
- You should spent three hours maximum working on this project
- The design files were built using [Figma][figma] and should be available [here (under the “D_Happy-Path” page)][figma-file]
- Do not worry about a mobile version; focus on building a great desktop  experience
- Do not worry about browser support; assume we only support the latest and greatest versions of modern browsers
- Build the UI as close to the design file as you can
- We do not believe in “pixel-perfect”; make sure the UI looks consistent by approximating or tweaking values from the already available theme values but avoid one-offs and magic numbers
- Only implement steps under “Personal Information” and “Pre-approval”; do not worry about implementing the other ones, just make them available in the sidebar
- Do not implement the “Affordability estimate” step; assume the one before it is the last one and that we are covering only the happy path
- The sidebar component hasn’t been styled much, this is a task for you
- Implement inline validation for form elements based on their input type
- Implement page-level validation for each of the steps; a user shouldn’t be able to go to step two if step one has invalid data
- Build an auto complete input field to be used for street addresses (refer to the one we have on our live [preapproval flow][preapp]); add at least one story in Storybook for it and at least one test
- There are a few missing steps for “Pre-approval”, you’ll have to implement them
- There is already a “success” page built; it’s available at `/approved`
- There is a broken test, you should fix it

## Bonus
- Consistent code formatting
- Keyboard navigation works seamlessly with the auto complete input field
- Extract recurring patterns and duplicate code into reusable modules
- Persist form data during navigation
- Tests
- An organized and thoughtful list of Git commits
- UI animations
- Dark mode

## Submit
Once you are finished, send us your project via [Greenhouse][greenhouse].

## Support
If something is broken or for some reason you need help during the process of building your project, reach out to our recruiting team.
