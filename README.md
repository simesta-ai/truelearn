# TrueLearn - AI-powered Learning Assistant

TrueLearn is an innovative learning application that harnesses the power of AI to create personalized learning experiences for users. It interacts with the user and determines the way they learn best and teaches them "ANY" course based on that learning method.

## Project Overview(API)

This repository contains the backend code for the TrueLearn application, built with Express and TypeScript. It serves as the core engine for the entire TrueLearn platform.

### Key Features:

- **Personalized Learning Paths**: Users can input a course title (and optionally specify topics, and any relevant file ) and TrueLearn generates a tailored learning journey with both textual and video content.
- **Text Generation**: The application leverages the Gemini Pro model to create comprehensive textual learning materials.
- **Image Generation**: Using the Imagen model, TrueLearn provides visual aids in the form of images based on the learning content.
- **Video Integration**: By utilizing the YouTube API, TrueLearn incorporates relevant videos into the learning path.
- **Secure Authentication**: User access is protected through Google OAuth2 authorization and token-based authentication using JWT.

### Technologies Used:

- **Backend Framework**: Express, TypeScript
- **AI Models**:
  - Text Generation: Gemini Pro
  - Image Generation: Imagen
- **External API**: YouTube API
- **Authentication**: Google OAuth2, JWT

This backend serves as the foundation for the TrueLearn ecosystem, providing robust API endpoints and AI-driven functionalities to power the learning experience across all TrueLearn platforms.

## Roles

### Samuel Emeka

- Role: Software Engineer (Mobile and Backend)
- Actions:
  1. Built the chat system ontop of  gemini ai to determine users most appropriate learning method.
  2. Build socket server to power chat messaging
  3. Implemented speech to text logic using Azure Speech service to enable voice commands from the frontend.

### Sakibu Abdulmujeeb 
- Role: Machine Learning engineer 
- Actions:
  1. Prompt engineering to determine user's learning methods. To work on: LLM to provide course content.

### Daniel

- Role: Software Engineer (Backend)

- Actions:
  1. Implemented the creation of Topic Lectures which involves the use of a generative ai model to generate an array of lectures associated with a Topic.
  2. ⁠ Worked on populating each lectures with lecture contents sufficient to help a user understand a topic by creating a set of idea content, image description(to explain the ideas better) and Quizzes as well.

### Emmanuel 

- Role: Program Manager 
- Actions:
  1. Oversaw team activities.
  2. Scheduled team meetings and monitored the progress of each member.
  3. Ensured team is up to date with all necessary information regarding the buildathon.
  4. Assisted in research and data gathering for the development of the team's project.

### Kingsley Ihemelandu

- role: Lead Engineer
- actions:
  1. Did the authentication of users
  2. Worked on the user module and its services
  3. Implemented the database setup with Prisma
  4. Had an oversight of the operation of the backend
 
### Joseph Taiwo
- Role: Backend Engineer
  1. Implemented functions for creating courses based on input (titles, topics, and files) from users.
  2. Worked on the functions for retrieving courses from the database.
  3. Transferred and improved code from controllers to services during structural code changes.

## Further Development

### Mobile Frontend to be developed subsequently with following features:
- Interface from user signin and register
- Chat Interface to display communication with socket server to determine learning method 
- Interface to create course(add subtopics and files)
- Interface to view created course content and learn
- Technologies: React Native Expo, Redux Toolkit, Socket client

## Setup in development

### Clone the repo

```sh
git clone https://github.com/simesta-ai/truelearn
```

### Install the backend dependencies

```sh
yarn install:backend
```

### Start the development server

```sh
yarn dev:backend
```