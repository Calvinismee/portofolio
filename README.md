# Porto Gweh

## Description
This project is a portfolio showcasing my work and skills. It includes various sections such as projects, skills, and a contact form to get in touch with me.

## Local Development Setup
To build the project locally, follow these steps:

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Calvinismee/portofolio.git
   cd portofolio
   ```

2. **Install dependencies:**  
   Make sure you have [Node.js](https://nodejs.org/) installed. Run:
   ```bash
   npm install
   ```

3. **Build the project:**  
   To create a production build, run:
   ```bash
   npm run build
   ```

## Deploying to GitHub Pages
To publish the project to GitHub Pages, follow these steps:

1. **Enable GitHub Pages:**  
   - Go to your repository on GitHub.
   - Click on **Settings**.
   - Scroll down to the **Pages** section.
   - Under **Source**, select the branch to deploy : `gh-pages` and click **Save**.

2. **Deploy the built output:**  
   ```bash
   npm run deploy
   ```
   `dist` content is automatically copied to `gh-pages` branch

Now your project should be live at `https://yourusername.github.io/portofolio/`.

## Conclusion
That's it! You can now view your portfolio live on GitHub Pages. Don't forget to update your pages as you add new projects!
