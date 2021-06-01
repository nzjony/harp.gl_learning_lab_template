# Welcome

This repository was auto generated using Yeoman, see method 1 here: https://developer.here.com/tutorials/harpgl/#install-harp.gl and tweaked to fit a GitHub learning lab.

# Getting started

If you want some help getting started, check out: https://developer.here.com/tutorials/harpgl/, if you need to contact someone, see the links here: https://developer.here.com/tutorials/harpgl/#review

Otherwise, see our broad range of examples: https://www.harp.gl/docs/master/examples/

# Steps to run the application

- Go to: https://developer.here.com/tutorials/harpgl/#acquire-credentials and get a API Key
- Put the API Key in the View.ts file on the line with the following: `authenticationCode: "<replace with your API Key>"`
- run `npm install && npm run start`
- open `http://localhost:8080/`

# Note

The `resources` directory can be used to add themes / data etc, so for example, if you have a dark theme, you could add it to the `resources` directory and reference it as so:

```typescript
const app = new View({
  ...
  theme: "resources/dark.json",
});
```

Because this project uses webpack, if you want to rename this, you need to adjust the `webpack.config.js` file accordingly, so it knows where to find this directory.
