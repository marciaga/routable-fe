# Github Issues Prioritizer

# Run the app locally

```
$ npm install
$ npm start
```

You'll need a Github username and API Token.

Sign in using the form on the home page.

Click on a Repo name.

If it has issues, they will be displayed in the right column. 

Drag and Drop to reorder (i.e. prioritize). Edits are persisted to local storage and read on page reloads.


Note the inclusion of the .env.development file. Since the production build of the app is a static bundle, there should not be any sensitive variables in the .env file, which means it's safe to check in. 


## TODOs - i.e. things I would have done if I hadn't run out of time before implementing 

* In lieu of the avatar, I went with the assignee's name.

* Responsive - unlike other CSS in JS solutions, with styled components, which is just CSS, you can use media queries. I'd love to have set up a layout component with breakpoints.

* Tests. I love tests. Particularly Cypress.

* Production env build/deploy pipeline.

* Proper UI messaging - loading spinners, snackbar messages, confirmation dialogs, etc.

* Better Styled Components implementation/separate concerns

* Real back end. Set up a Node HTTP framework like Express, although my favorite (Hapi.js) just announced it's sunsetting the project, so I need to find a new favorite. This data as-is is pretty well-structured for a NOSQL database solution like MongoDB.

* Exception tracking and logging solution. New Relic Browser or LogRocket, Sentry, etc.

* The Redux implementation could be better-factored. The two "models" are nearly identical in their boilerplate.

* Better data-fetching. A solution using Redux thunks most likely.

* Better factored components. Aimed for some generality but could do better.

* Eslint - I prefer the Airbnb rules. I would have migrated to those.
