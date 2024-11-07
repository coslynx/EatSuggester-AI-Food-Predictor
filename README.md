<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
EatSuggester-AI-Food-Predictor
</h1>
<h4 align="center">AI-powered web app to predict your girlfriend's food desires</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework: Next.js">
  <img src="https://img.shields.io/badge/Frontend-React-red" alt="Frontend: React">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js">
  <img src="https://img.shields.io/badge/Database-SQLite-black" alt="Database: SQLite">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/EatSuggester-AI-Food-Predictor?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/EatSuggester-AI-Food-Predictor?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/EatSuggester-AI-Food-Predictor?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview

EatSuggester-AI-Food-Predictor is an innovative web application that utilizes AI to predict your girlfriend's hidden food cravings. This MVP tackles the age-old problem of deciding on dinner when your partner says "I don't care." By gathering contextual data about her preferences, time, and mood, the app generates personalized food suggestions, making you a hero in the process. 

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The application follows a client-server architecture, with a React frontend for user interaction and a Node.js backend for data processing. |
| 📄 | **Documentation**  | The repository includes a README file that provides a detailed overview of the project, its features, and usage instructions.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as Next.js, React, Tailwind CSS, and Axios, which are essential for building and styling the UI components, handling API calls, and form management. |
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as pages, components, services, and hooks.|
| 🧪 | **Testing**        | Unit tests using Jest are included to ensure the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | Optimized for fast loading times and efficient suggestion generation, using a combination of React's built-in state management and lightweight libraries.|
| 🔐 | **Security**       | Implements basic security measures such as input validation and secure authentication using environment variables for sensitive data.|
| 🔀 | **Version Control**| Utilizes Git for version control with GitHub Actions for automated build and release processes.|
| 🔌 | **Integrations**   | Interacts with the browser API for user interaction, utilizing a user-friendly form, and a robust suggestion generation algorithm. |
| 📶 | **Scalability**    | The application is designed for scalability, leveraging Next.js for improved performance and server-side rendering, and can be easily expanded to include more features and data sources.           |


## 📂 Structure

```text
eat-suggester-ai/
├── apps/
│   ├── web/
│   │   └── src/
│   │       └── ... (React app code)
│   └── api/
│       └── src/
│           └── ... (Node.js API code)
├── packages/
│   └── utils/
│       └── ... (Shared utility functions)
├── .eslintrc.js
├── tsconfig.json
├── babel.config.js
└── ... (Other configurations)
```

## 💻 Installation

### 🔧 Prerequisites

- Node.js v16+
- npm 6+ or yarn
- SQLite (optional for database)

### 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/EatSuggester-AI-Food-Predictor.git
   cd EatSuggester-AI-Food-Predictor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set the following variables:

   - `NEXT_PUBLIC_API_KEY`:  (if using external API)
   - `DATABASE_URL`: (if using SQLite)
   - `PORT`: (optional, default is 3000)
   

## 🏗️ Usage

### 🏃‍♂️ Running the MVP
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Access the application:
   - Web interface: [http://localhost:3000](http://localhost:3000)


## 🌐 Hosting

### 🚀 Deployment Instructions

1. **Deploy to Vercel:**
    - Visit the Vercel website and connect your GitHub repository.
    - Follow Vercel's instructions to deploy the application.
    - Ensure environment variables are correctly set on Vercel's platform.


### 🔑 Environment Variables

- **`NEXT_PUBLIC_API_KEY`:**  (if using external API)
- **`DATABASE_URL`:** (if using SQLite)
- **`PORT`:**  (optional, default is 3000)



## 📜 License & Attribution

### 📄 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.

### 🤖 AI-Generated MVP
This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).

No human was directly involved in the coding process of the repository: EatSuggester-AI-Food-Predictor

### 📞 Contact
For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
- Website: [CosLynx.com](https://coslynx.com)
- Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>