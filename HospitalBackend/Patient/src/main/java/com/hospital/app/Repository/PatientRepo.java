package com.hospital.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.app.Entity.Patient;
;

@Repository
public interface PatientRepo extends JpaRepository<Patient,Integer>{

}

