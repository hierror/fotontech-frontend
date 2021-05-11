<h1 align="center">Fullstack Challenge (<strong>Frontend</strong>) - Foton Tech 🔥</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/hierror404" target="_blank">
    <img alt="Twitter: hierror404" src="https://img.shields.io/twitter/follow/hierror404.svg?style=social" />
  </a>
</p>

> This is the repository for the frontend project of the Fullstack Challenge. It is an application to simulate a library, where you can search for books and see their information.

## Access to the application

This application has been deployed using surge.sh. To access it, [use this link](foton-fullstack-challenge.surge.sh) or the URL below:

`foton-fullstack-challenge.surge.sh`

## Installation and configuration

Use [npm](https://www.npmjs.com/) to install all the project dependencies.

```sh
npm install
```

# Environment variables

After the installation, grab a copy of `.env.example` and rename it to `.env`. If you wish, set the port to a value different from default. `REACT_APP_IMG_BASE_URL` refers to the URL of the server where the book cover images are stored. Since we don't have any server like this one, we can leave it blank and the `public/covers/` folder will be used. `REACT_APP_API_REST_URL` is the URL of our API Rest.

## Usage

You can run the server in dev. mode with:

```sh
npm run start:dev
```

If you wish to deploy it, use instead:

```sh
npm run deploy
```

You may need to change the CNAME URL of the website.

## Built with

- React
- Typescript
- SASS
- React Router
- React Hook Form
- React Icons
- Axios
- Surge

## Author

👤 **Hierro Duarte <hierror>**

- Twitter: [@hierror404](https://twitter.com/hierror404)
- Github: [@hierror](https://github.com/hierror)

## Thoughts about the project

There is a few thoughts that I would like to share with you about the development of this project, including improvements that could be made to enhance it.

### The deployment

I was going to deploy the server manually to my AWS EC2 instance as I did with the backend, but it wasn't necessary. Instead, I chose to use popular hosting services like Netlify, which was my first option. Still, it didn't made requests that weren't HTTPS, so I had to use surge.sh that is very bad compared to Netlify.

### Styling everything

I love CSS and the things that we can do with it, so styling its one of favorite parts of web development. In this project, I have used [SASS](https://sass-lang.com/) and [BEM naming conventions](http://getbem.com/naming/) on all CSS classes because these two together make all the development and debugging of styles more organized and faster. After everything was done, I noticed that it would be a good project to use CSS Modules (it can be used with SASS too), so thats one thing that could be implemented.

### Dynamic images!

Since the database already starts with some books stored, I was saving their images in the application to show it in the application. However, dinamically images inside components are a bit messy with CRA, specially if they are in the `src` folder. Webpack imports the assets with `import` and this can't be done dinamically, so I had to move all the images to the public folder and generate their path with a function. I also created a environment variable to support a server used to store all the images.

### Linting and formatting... again

I have used [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting the codebase. This could be improved using Husky, a library that could automate these processes using Git hooks, but it was a bit of overkill in this project (this paragraph was already on the backend project, but it is important).

---
