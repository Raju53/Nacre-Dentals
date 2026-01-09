package com.nacredentals.service;

import com.nacredentals.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    // Using required=false so the app starts even if mail server is not configured
    @Autowired(required = false)
    private JavaMailSender mailSender;

    /**
     * Sends a confirmation email to the patient.
     * Logs the email content to the console if no mail sender is configured.
     */
    public void sendConfirmationEmail(Appointment appointment) {
        String subject = "Appointment Confirmed - Nacre Dentals";
        String body = String.format(
                "Dear %s,\n\n" +
                        "Your appointment for %s has been successfully booked for %s.\n\n" +
                        "Details:\n" +
                        "- Service: %s\n" +
                        "- Date: %s\n" +
                        "- Contact: %s\n\n" +
                        "We look forward to providing you with excellent dental care.\n\n" +
                        "Best Regards,\n" +
                        "Nacre Dentals Team",
                appointment.getName(),
                appointment.getService(),
                appointment.getAppointmentDate(),
                appointment.getService(),
                appointment.getAppointmentDate(),
                appointment.getMobile());

        // Simulation for development
        System.out.println("=== OUTGOING EMAIL SIMULATION ===");
        System.out.println("To: " + appointment.getEmail());
        System.out.println("Subject: " + subject);
        System.out.println("Body:\n" + body);
        System.out.println("==================================");

        if (mailSender != null) {
            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setFrom("bandikalla.prathapraju1111@gmail.com");
                message.setTo(appointment.getEmail());
                message.setSubject(subject);
                message.setText(body);
                mailSender.send(message);
            } catch (Exception e) {
                System.err.println("Failed to send real email: " + e.getMessage());
            }
        }
    }
}