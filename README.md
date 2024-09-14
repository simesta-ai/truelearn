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

- role: 
- actions:

### Emmanuel 

- role: Product Manager
- actions:
  - Oversaw the whole operation from creation to

### Kingsley Ihemelandu

- role: Lead Engineer
- actions:
  - Did the authentication of users
  - Worked on the user model and
 
### Mobile Frontend to be developed subsequently with following features:
- Interface from user signin and register
- Chat Interface to display communication with socket server to determine learning method 
- Interface to create course(add subtopics and files)
- Interface to view created course content and learn
- Technologies: React Native Expo, Redux Toolkit, Socket client
