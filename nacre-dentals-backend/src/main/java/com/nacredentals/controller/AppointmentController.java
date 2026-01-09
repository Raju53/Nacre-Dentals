package com.nacredentals.controller;

import com.nacredentals.model.Appointment;
import com.nacredentals.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        return service.saveAppointment(appointment);
    }

    @GetMapping
    public List<Appointment> getAll() {
        return service.getAllAppointments();
    }

    /*
     * @PatchMapping("/{id}")
     * public Appointment updateStatus(@PathVariable Long id, @RequestParam String
     * status) {
     * return service.updateStatus(id, status);
     * }
     */
    @PatchMapping("/{id}")
    public Appointment updateStatus(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        String status = payload.get("status");
        if (status == null) {
            throw new IllegalArgumentException("JSON body must contain 'status' key");
        }
        return service.updateStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteAppointment(id);
    }
}