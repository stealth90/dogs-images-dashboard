<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>DOGS-IMAGES-DASHBOARD</h1>
<h3>◦ A webapp for dogs lover.</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=plastic&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=plastic&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=plastic&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Docker-3178C6.svg?style=plastic&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/Cypress-C.svg?style=plastic&logo=Cypress&logoColor=white" alt="Cypress" />

</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running dogs-images-dashboard](#-running-dogs-images-dashboard)
    - [🧪 Tests](#-e2e-tests)
    - [🎯 Docker Image](#-docker-image-repo)
- [📄 License](#-license)

---


## 📍 Overview

The dogs-images-dashboard repository is a project that allows users to view and organize images of dogs. The dashboard provides a user-friendly interface for browsing and managing a collection of dog pictures. With its intuitive design and easy-to-use features, this project offers a great solution for dog lovers who want to keep their dog pictures organized and accessible. It use [Dog API](https://dog.ceo/dog-api/) service.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a component-based architecture using React.js framework. It separates UI components into reusable and interchangeable components such as Card, Carousel, and Header. The codebase also follows a single-page application architecture with a client-side rendering approach. |
| 📄 | **Documentation**  | The documentation in the repository is limited. There is a README.md file that provides a brief overview of the project, but it lacks in-depth documentation on code structure, architecture, and usage instructions. Additional documentation would be helpful for onboarding new developers and users.|
| 🔗 | **Dependencies**   | The repository relies on external libraries such as React for frontend development. The package.json file provides a list of all the dependencies along with their version numbers. |
| 🧪 | **Testing**        | The codebase includes a e2e suit test that use Cypress library

---

## 📂 Repository Structure

```sh
└── dogs-images-dashboard/
    ├── package.json
    ├── cypress/
    │   ├── downloads
    │   ├── e2e
    │   ├── fixtures
    │   ├── support
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── App.test.tsx
    │   ├── App.tsx
    │   ├── components/
    │   │   ├── Card/
    │   │   ├── Carousel/
    │   │   ├── CustomButton/
    │   │   ├── Header/
    │   │   ├── ImagePlaceholder/
    │   │   ├── ImagesListByBread/
    │   │   ├── ImagesListByBreadAndSubBreed/
    │   │   ├── LazyImage/
    │   │   ├── Loader/
    │   │   ├── RandomBreedDogImage/
    │   │   ├── RandomImageByBreedAndSubBreed/
    │   │   ├── SelectInput/
    │   │   └── Skeleton/
    │   ├── context/
    │   │   ├── Breed.tsx
    │   ├── hooks/
    │   │   ├── useBreedsList.ts
    │   │   ├── useCarousel.ts
    │   │   ├── useImagesListByBread.ts
    │   │   ├── useImagesListByBreadAndSubBreed.ts
    │   │   ├── useLoadImage.ts
    │   │   ├── useRandomBreedDogImage.ts
    │   │   └── useRandomImageByBreedAndSubBreed.ts
    │   ├── index.tsx
    │   ├── pages/
    │   │   └── Dashboard/
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   ├── services/
    │   │   └── Dog.ts
    │   ├── setupTests.ts
    │   ├── theme/
    │   │   ├── animations.scss
    │   │   └── root.scss
    │   ├── types/
    │   │   └── index.ts
    │   └── utils/
    │       └── index.ts
    ├── .nvmrc
    ├── cypress.config.ts
    ├── Dockerfile
    ├── tsconfig.json
    └── yarn.lock

```

---
## 🚀 Getting Started

### 🔧 Installation

1. Clone the dogs-images-dashboard repository:
```sh
git clone https://github.com/stealth90/dogs-images-dashboard
```

2. Change to the project directory:
```sh
cd dogs-images-dashboard
```

3. Install the dependencies:
```sh
yarn or yarn install
```

### 🤖 Running dogs-images-dashboard

```sh
yarn start
```

### 🧪 e2e Tests
```sh
yarn cypress:open
```

### 🎯 Docker image repo
- [Docker](https://hub.docker.com/repository/docker/ppetralia/dogs-images-dashboard/general)
---

## 📄 License


This project is protected under the [MiT](https://choosealicense.com/licenses/mit) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) page.

[**Return**](#Top)

---

