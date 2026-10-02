# React Course Projects

This repository contains my implementations of the projects developed while following [SuperSimpleDev's React course](https://github.com/SuperSimpleDev/react-course).

The two main projects included in this repository are:

- **Chatbot Project** — a React-based chatbot interface with message history and custom response functionality.
- **Ecommerce Project** — a React/TypeScript ecommerce application with products, cart, checkout, orders, and package tracking.

> **Important:** The majority of the code in these projects was written by following along with SuperSimpleDev's React course. The original project structure, functionality, and much of the implementation are based on the course material and are **not my original work**.  
>
> I have made additional modifications and implemented several features of my own in order to practice extending existing React applications and to explore concepts beyond the course requirements. Those additions are documented in each project's README.

## About the Course

These projects were developed while following [SuperSimpleDev's React course](https://github.com/SuperSimpleDev/react-course).

The course covers React from the fundamentals through building larger applications, including the chatbot and ecommerce projects. The course repository provides the lesson materials, exercise solutions, and copies of the code developed throughout the lessons.

The ecommerce project also uses the backend provided by SuperSimpleDev. Its API and available endpoints are documented in the [ecommerce backend documentation](https://github.com/SuperSimpleDev/ecommerce-backend-ai/blob/main/documentation.md).

## Projects

### 🤖 Chatbot Project

A React chatbot application developed progressively while following the course.

In addition to the functionality implemented during the course, I added:

- User message-history navigation using the `ArrowUp` and `ArrowDown` keys.
- An **Add Response** feature that allows users to teach the chatbot a response for a specific prompt.
- A modal for adding custom prompt/response pairs.
- Rendering the modal using a React Portal.
- Additional chatbot response handling.

[View the Chatbot Project README](./chatbot-project/README.md)

---

### 🛒 Ecommerce Project

A React/TypeScript ecommerce application developed while following the ecommerce portion of the course.

The application includes product browsing, searching, a shopping cart, checkout, delivery options, orders, and package tracking.

In addition to the course implementation, I added:

- A persistent dark-mode preference using React Context and `localStorage`.
- Dark-mode styling throughout the relevant application views.
- A dark-mode toggle in both the main header and checkout header.
- A scroll-to-top button that appears after scrolling more than 300px.

[View the Ecommerce Project README](./ecommerce-project/README.md)

## Technologies & Concepts

Across the two projects, I gained practical experience with:

- React
- React Hooks
  - `useState`
  - `useEffect`
  - `useContext`
  - `useRef`
- Functional components
- Props and component composition
- Controlled inputs
- Event handling
- Conditional rendering
- Lists and keys
- React Context
- React Portals
- React Router
- TypeScript with React
- Axios
- REST API integration
- Asynchronous JavaScript
- Local storage
- Form handling
- Responsive CSS
- Component-based styling
- Vitest
- React Testing Library
- Vite
- ESLint
- Git and GitHub

## Attribution

The original course material and project implementations belong to **SuperSimpleDev**.

Course repository:

https://github.com/SuperSimpleDev/react-course

Ecommerce backend:

https://github.com/SuperSimpleDev/ecommerce-backend-ai

These projects should therefore be viewed primarily as **learning projects and course implementations**, rather than original applications created entirely from scratch.

My contribution consists mainly of the additional features and modifications described in the individual project READMEs, as well as the experimentation and learning involved in extending the course projects.

## Demos

Demos will be added here as the projects are deployed.

| Project | Live Demo | GIF / Preview |
|---|---|---|
| Chatbot | *Coming soon* | [demo 1](./chatbot-project/src/assets/chatbot_1.gif), [demo 2](./chatbot-project/src/assets/chatbot_2.gif)|
| Ecommerce | - | [demo 1](./ecommerce-project/src/assets/ecommerce_1.gif), [demo 2](./ecommerce-project/src/assets/ecommerce_2.gif)|

## Purpose of This Repository

The purpose of this repository is to document my progress while learning React and to demonstrate my ability to understand, modify, and extend an existing React codebase.

Rather than presenting the course projects as entirely original work, I have documented the source of the original implementation and highlighted the features I added myself.

