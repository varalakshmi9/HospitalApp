package com.hospital.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.app.entity.Doctor;
@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

}
