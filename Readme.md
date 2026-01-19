                        ******Nacre Dentals - Hospital Management System******

A full-stack web application for a Dental Hospital featuring a modern patient portal, a secure admin dashboard, and automated email notifications.

📋 Prerequisites

Before the demo, ensure you have these installed:

- Java JDK 17+

- Node.js (v16+)

MySQL Server (Running via XAMPP or Workbench)

⚙️ Setup Guide (Do this before the meeting)

1. Database Setup
   - Open your MySQL Workbench or Command Line and run:

     CREATE DATABASE dental_booking_db;

2. Backend Setup (Spring Boot)
   - Navigate to nacre-dentals-backend.

     Open src/main/resources/application.properties.

   - Update Credentials:

     # MySQL

     spring.datasource.username=root
     spring.datasource.password=YOUR_MYSQL_PASSWORD

     # Gmail SMTP (Required for emails)

     spring.mail.username=your-email@gmail.com
     spring.mail.password=your-16-char-app-password

   - Start Server:
     - mvn clean install
     - mvn spring-boot:run

   Server runs on: http://localhost:8080

3. Frontend Setup (React)
   - Navigate to nacre-dentals-frontend.

   - Install Dependencies (if you haven't):

     npm install

   - Start Client:

     npm run dev

   Client runs on: http://localhost:5173

🎬 Client Demo Script

Follow this flow to give a professional presentation:

1. The Patient Journey
   - Open http://localhost:5173.

   - Show the Hero Section and smooth scrolling to Services.

   - Scroll to "Book Now".

   - Fill out the form with your own email (so you can show the notification).

   - Action: Click "Confirm Appointment".

   - Result: Show the "Success" message on screen.

2. The Email Confirmation (Wow Factor)
   - Open your email inbox tab.

   - Show the real email sent by the Java Backend.

3. The Admin Control
   - Click the Shield Icon in the navbar (or go to /admin).

   - Login:

     User: admin

     Pass: admin123

   - Show the Dashboard.

   - Action: Find the appointment you just booked (Status: Pending).

   - Action: Click the Green Checkmark.

   - Result: Status changes to Confirmed instantly.

### 📡 API Reference

| Method | Endpoint | Purpose

| :----- | :------------------------- | :------------------------------- |

| `POST` | `/api/appointments` | `Booking form submission`

| `GET` | `/api/appointments` | `Admin dashboard data fetch`

| `PATCH` | `/api/appointments/{id}` | `Update status to "Confirmed"`

| `DELETE` | `/api/appointments/{id}` | `Remove appointment record`

⚠️ Troubleshooting during Demo

    "Network Error" when booking:

        * Check if the Java Backend terminal is still running.

        * Ensure MySQL is running (XAMPP Control Panel).

    "Authentication Failed" (Email):

        * Double-check your App Password in application.properties.

        * Ensure spring.mail.username matches the App Password account exactly.

    White Screen / UI Issues:

        * Refresh the page.

        * Check the browser console (F12) for errors.

© 2026 Nacre Dentals.
