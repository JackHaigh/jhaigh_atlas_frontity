# Frontity → WP Engine Atlas

**Step 1: Get a Frontity Project**

If a frontity project doesn't exist locally, follow the Frontity set up guide here: [https://docs.frontity.org/getting-started/quick-start-guide](https://docs.frontity.org/getting-started/quick-start-guide)

By default, this will pull content from `[https://test.frontity.org](https://test.frontity.org)` , to add your CMS, you'll have to edit the section at the bottom of `frontity.settings.js`:

```jsx
const settings = {
  ...,
  packages: [
    ...,
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // Change this url to point to your WordPress site.
          url: "https://test.frontity.org/"
        }
      }
    }
  ]
}
```

Replace 'url' with the full URL of your CMS. You can keep the [test.frontity.org](http://test.frontity.org) URL in place to import their sample content.

**Step 2: Gitignore**

You'll have to add `/packages` and `/node_modules` to `.gitignore` . 

```jsx
touch .gitignore
echo node_modules >> .gitignore
echo .gitignore >> .gitignore
```

**Step 3: Add NPM Scripts:**

Atlas needs two npm scripts included in package.json:

- wpe-build: To build the app.
- start: to run the app.

Your scripts array should look like this:

```jsx
"scripts": {
    "dev": "frontity dev",
    "build": "frontity build",
    "serve": "frontity serve",
    "start": "frontity serve --port 8080",
    "wpe-build": "frontity build"
  },
```

**Step 4: Quick Build**

We'll need to generate the `/build` directory by running the following:

```jsx
npx frontity dev
```

Essentially you'll be following Frontity's CLI rather than WPE's.

**Step 5: Deploy to Github Repo**

Create a Github Repo to work out of, once done, make sure your working directory is your Frontity project and run:

```jsx
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin REPO_HTTPS_URL
git push -u origin main
wpe alpha auth login github
```

This will push the project up to Github.  The latter command authorises your github repo to be accessed by WP Engine.

**Step 6: Set up your WPE Headless App**

Same steps as the developers guide except we aren't using the environment variables:

[https://developers.wpengine.com/docs/headless/guides/getting-started/deploy-app/portal](https://developers.wpengine.com/docs/headless/guides/getting-started/deploy-app/portal)

**Step 7: Build**

This will build the app and make it available over the Headless custom domain `<STRING>.js.wpenginepowered.com`.
