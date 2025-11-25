# GTA VI Landing Page

This is a **GTA VI-themed landing page** created as a demo project from Sheriyans Coding School. It is built using **React** with **Vite** and features sophisticated motion graphics powered by **GSAP (GreenSock Animation Platform)**.

The design is inspired by the aesthetic of the Grand Theft Auto VI announcement/trailers, featuring bright, vibrant colors and parallax scrolling effects.

## ✨ Features

* **Interactive Animated Intro:** A captivating entrance animation featuring a mask effect that reveals the main content, driven by a `VI` text mask that rotates, scales, and fades out using GSAP's advanced easing functions (`expoScale`).
* **Parallax Scroll Effect:** An immersive mouse-move/hover effect that creates a sense of depth by moving the foreground elements (`.text` and `.bg`) at different speeds relative to the sky layer (`.sky`).
* **Modern Styling:** Utilizes **Tailwind CSS** for rapid and utility-first styling.
* **Custom Typography:** Employs the `pricedown` custom font for the iconic Grand Theft Auto title display.
* **Responsive Design:** Implemented with modern web technologies (React/Vite) for a fast and flexible user experience.
* **Custom Assets:** Includes visual assets like `girlbg.png` (character art), `sky.png`, `bg (1).png` (Miami-Vice style backdrop), and console logos (`ps5.png`).

## 💻 Technologies Used

This project is built with the following main technologies and libraries:

* **Frontend Framework:** [React](https://reactjs.org/) (version `^19.2.0`)
* **Build Tool:** [Vite](https://vitejs.dev/) (aliased as `rolldown-vite@7.2.5`)
* **Animation Library:** [GSAP](https://greensock.com/gsap/) (via `@gsap/react` `^2.1.2`)
* **Styling:**
    * [Tailwind CSS](https://tailwindcss.com/) (version `^4.1.17`)
    * `@tailwindcss/vite` plugin
    * [Remixicon](https://remixicon.com/) for icons (`remixicon` `^4.7.0`)
* **Custom Font:** `pricedown.otf`

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You need to have Node.js (version 18 or higher) and npm/pnpm/yarn installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd gta_vi-landing-page
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Available Scripts

In the project directory, you can run the following commands:

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `vite` | Starts the development server with hot module replacement. |
| `build` | `vite build` | Builds the project for production to the `dist` folder. |
| `lint` | `eslint .` | Runs ESLint to check for code quality and style issues. |
| `preview` | `vite preview` | Serves the production build locally for previewing. |

To start the development server, run:
```bash
npm run dev
