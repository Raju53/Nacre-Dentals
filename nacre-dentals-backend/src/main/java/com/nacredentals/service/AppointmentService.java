package com.nacredentals.service;

import com.nacredentals.model.Appointment;
import com.nacredentals.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repository;

    @Autowired
    private EmailService emailService;

    public Appointment saveAppointment(Appointment appointment) {
        // Here you would normally integrate a real Java Mail Sender
        Appointment saved = repository.save(appointment);
        System.out.println("Backend: Sending confirmation email to " + appointment.getEmail());
        emailService.sendConfirmationEmail(saved);
        return saved;
    }

    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    public void deleteAppointment(Long id) {
        repository.deleteById(id);
    }

    public Appointment updateStatus(Long id, String status) {
        Appointment appt = repository.findById(id).orElseThrow(() -> new RuntimeException("Not Found"));
        appt.setStatus(status);
        return repository.save(appt);
    }
}