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


import com.hospital.app.Repository.DoctorRepo;
import com.hospital.app.entity.Doctor;



@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class DoctorController {
	@Autowired
	private DoctorRepo drepo;
	
	@PostMapping("/doctors")
	public Doctor createDoctor(@RequestBody Doctor doctor) {
		return drepo.save(doctor);
	}
	
	@GetMapping("/doctors")
	public List<Doctor> getAllEmployees(){
		return drepo.findAll();
	}	
	
	@PutMapping("/doctors/{id}")
	public ResponseEntity<Doctor> updateEmployee(@PathVariable int id, @RequestBody Doctor doctor){
		Doctor d = drepo.findById(id).orElse(null);
				
		
		d.setId(doctor.getId());
		d.setDocterName(doctor.getDocterName());
		d.setAge(doctor.getAge());
		d.setGender(doctor.getGender());
		d.setMobile(doctor.getMobile());
		d.setSpecialization(doctor.getSpecialization());
		
		Doctor updatedDoctor = drepo.save(doctor);
		return ResponseEntity.ok(updatedDoctor);
	}
	
	@DeleteMapping("/doctors/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDoctor(@PathVariable int id){
		Doctor d = drepo.findById(id).orElse(null);
		
		drepo.delete(d);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
