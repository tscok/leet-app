# leet-app

This app is a work sample that revolves around the leet people at [13|37](https://1337.tech/)

The assignment was to fetch and display (and moderate) a list of employees from a third party
resource, using a secret API key 🤫 The result was to be published and be publicly available at
Heroku or similar platform.

## Tech Stack

- The backend is a Node.js [Express](https://expressjs.com/) server, handling request
  authentication, data fetching and serving the frontend. I had no previous experience of using
  Express but it was quite easy. There's probably room for improvements here 🙄 (TypeScript, error
  handling, etc.)
- The frontend is a
  [React app with TypeScript](https://create-react-app.dev/docs/adding-typescript/) setup, the
  easiest way to get started for someone like me. I really enjoy working with TypeScript and I've
  tried to keep a reasonable structure of components, hooks and types.
- For easy and fast UI development I used
  [Material UI](https://mui.com/material-ui/getting-started/installation/) elements and icons, CSS
  baseline shim and fonts.
- The result is hosted at [Heroku](https://www.heroku.com/) where my account is connected to this
  repository, which makes code management and deploys a bliss. This is also wehere the API key is
  stored.

## User Stories / Requirements

##### 1. Responsive design, works on mobile and tablets

The toolbar at the top of the page breaks the layout on mobile screens, but the grid and list views
looks great. Admittedly I focused more on functionality than design here. It should look alright on
tablets and up.

##### 2. Use modern CSS throughout the application (css-grid, variables, clamp etc)

By using Material UI components I think I've covered this requirement quite well, although I could
have done a better job on the responsiveness / media queries.

##### 3. Sort by name and office

Sort buttons for `Name` and `Office` allows for sorting on both params, independently of each other,
which affects both the `grid` and `list` view.

##### 4. Filter by name and office

There's a `Name` filter textfield where input is matched to employee names. For `Office` filtering
there's a dropdown menu populated with the offices found in the employee list.

##### 5. Enable switch between a grid and a different view (such as list)

Two toggle buttons controls the view layout, either displaying a `grid` (default) or a `list` /
table.

##### 6. Unit tests for existing functionality (reasonable coverage)

As per usual I'm trying to add meaningful unit tests to components and hooks, in order to make sure
the output is aligned with expectations. While these tests could be improved, they cover the basic
renderings and actions.

##### 7. Available on a free public url (such as Azure, Heroku)

Done. See [leet-app.herokuapp.com](https://leet-app.herokuapp.com/)

## Getting Started - Scripts

Keep in mind that the server requires the API key to authenticate the fetch request on the
`/employees` endpoint. On localhost the data returned will be an empty array and the React app will
set the fetch status to `error`, displaying a warning in the UI.

Before you start you should probably run `yarn` to install necessary dependencies. This applies for
both project root folder and `client` folder.

### Server

In the project root folder you can run:

#### `yarn start`

Runs the server app in development mode, `nodemon` hot reloads the server if you make edits. Open
[http://localhost:3001](http://localhost:3001) to view the latest React build in the browser.

### Client

In the `client` folder you can run:

#### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it
in the browser. The page will reload if you make edits.
