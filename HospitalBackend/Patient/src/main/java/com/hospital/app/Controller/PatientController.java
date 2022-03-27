package com.hospital.app.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hospital.app.Entity.Patient;

import com.hospital.app.Repository.PatientRepo;


@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class PatientController {
@Autowired
	private PatientRepo prepo;
		@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient) {
		return prepo.save(patient);
	}
		
	@GetMapping("/patients")
		public List<Patient> getAllEmployees(){
			return prepo.findAll();
		}	
		
	@PutMapping("/patients/{id}")
		public ResponseEntity<Patient> updateEmployee(@PathVariable int id, @RequestBody Patient patient){
			Patient p = prepo.findById(id).orElse(null);
					
			
			p.setId(patient.getId());
			p.setpatientName(patient.getpatientName());
			p.setMobile(patient.getMobile());
			p.setAppointmentDate(patient.getAppointmentDate());
			p.setAppointmentTime(patient.getAppointmentTime());
			p.setSelectedDocter(patient.getSelectedDocter());
			
			
			Patient updatedPatient = prepo.save(patient);
			return ResponseEntity.ok(updatedPatient);
		}
	
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable int id){
		Patient p = prepo.findById(id).orElse(null);
		
		prepo.delete(p);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}