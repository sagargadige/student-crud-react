# Student Management App

Modern student CRUD interface built with React + Vite, featuring clean light UI, instant search, toast feedback, and localStorage persistence.

<p align="left">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router 7" />
</p>

## Preview

![Student Management UI Preview](./docs/screenshots/student-management-preview.svg)

## Key Features

- Add, update, and delete student records
- Search students by email in real-time
- Styled action buttons (`Edit` outline blue, `Delete` outline red)
- Toast popup messages for all major actions
- Route-based navigation (`Home` and `Student Data`)
- Data persistence in browser localStorage (`students`)

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Bootstrap 5
- ESLint 9

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Usage Flow

1. Fill in email and password on the Home page.
2. Click `Add Student` to save.
3. Open `Student Data` from navbar.
4. Use search bar to filter by email.
5. Click `Edit` to load a record back into the form.
6. Click `Delete` to remove a record.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## Project Structure

```text
std-mngt/
  docs/
    screenshots/
      student-management-preview.svg
  public/
  src/
    components/
      AppToast.jsx
      Header.jsx
      Home.jsx
      StdData.jsx
    App.jsx
    index.css
    main.jsx
  package.json
  README.md
```

## Notes

- Frontend-only project (no backend/API yet).
- Current password field is for demo CRUD behavior.
- You can extend this with form validation, auth, and backend integration.
