# VaxCare Client Application

## Introduction

VaxCare Client is the official frontend application for the VaxCare Vaccination Campaign Program. Built with React and Vite, it provides a user-friendly interface for interacting with the VaxCare API (Django REST Framework backend). This application allows users (patients and potentially doctors/administrators) to view vaccination campaigns, book appointments, manage their profiles, and submit reviews.

The client application focuses on providing a fast, modern, and reactive user experience to manage all aspects of the vaccination process.

## Features

* **User Authentication:** Secure patient and potentially doctor/admin login/logout, powered by JWT from the VaxCare API.
* **Campaign Browse:** View available vaccination campaigns, including details like vaccine type, dates, locations, and eligibility.
* **Appointment Booking:** Patients can book vaccination appointments for specific campaigns.
* **Profile Management:** Users can view and update their personal information.
* **Booking History:** View a list of past and upcoming appointments.
* **Review Submission:** Patients can submit reviews for completed vaccination campaigns or doctors.
* **Responsive Design:** Optimized for various screen sizes, from mobile devices to desktops.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A next-generation frontend tooling that provides an extremely fast development experience.
    * `@vitejs/plugin-react`: Uses Babel for Fast Refresh.
    * *Alternatively, if you're using SWC:* `@vitejs/plugin-react-swc`: Uses SWC for Fast Refresh.
* **React Router (Assumed):** For declarative routing in the single-page application.
* **State Management (e.g., Context API, Zustand, Redux - *Specify if you use one*):** For managing application state.
* **Axios (Assumed):** For making HTTP requests to the VaxCare API.
* **CSS / UI Framework (e.g., Tailwind CSS, Material-UI, Ant Design - *Specify if you use one*):** For styling and consistent UI components.

## Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn (package manager)
* **VaxCare Backend API running:** This frontend application requires the `VaxCare` Django REST Framework backend to be up and running. Ensure you have followed the setup instructions for the backend project first.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/shojibruhan/vaxCare-client.git](https://github.com/shojibruhan/vaxCare-client.git)
    cd vaxCare-client
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # OR if you use Yarn:
    yarn install
    ```

### Configuration (.env)

Create a `.env` file in the root of the project to configure environment variables. This is typically used to point the frontend to your backend API.

```dotenv
VITE_API_BASE_URL=[http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/) # Or your deployed backend URL
````

Replace `http://127.0.0.1:8000/api/` with the actual URL of your VaxCare backend API.

### Running the Development Server

1.  **Start the development server:**

    ```bash
    npm run dev
    # OR if you use Yarn:
    yarn dev
    ```

    The application will typically be accessible at `http://localhost:5173/` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
# OR if you use Yarn:
yarn build
```

This will generate optimized static assets in the `dist/` directory, which can then be deployed to a static hosting service.

## Project Structure (Typical)

```
vaxCare-client/
├── public/                 # Static assets (e.g., index.html, favicon)
├── src/
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Top-level components for different routes
│   ├── contexts/           # React Context API for global state (if used)
│   ├── services/           # API interaction logic (e.g., axios instances)
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for React application
│   ├── index.css           # Global styles
│   └── ...
├── .env.example            # Example environment variables file
├── .gitignore
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

## Expanding the ESLint Configuration (from Vite template)

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contributing

Contributions are welcome\! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
