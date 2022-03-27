package com.hospital.app.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String patientName;
	private long mobile;
	private String appointmentDate;
	private String appointmentTime;
	private String selectedDocter;
	
	public Patient() {
		super();
	}

	public Patient(int id, String patientName, long mobile, String appointmentDate, String appointmentTime,
			String selectedDocter) {
		super();
		this.id = id;
		this.patientName = patientName;
		this.mobile = mobile;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
		this.selectedDocter = selectedDocter;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getpatientName() {
		return patientName;
	}

	public void setpatientName(String patientName) {
		this.patientName = patientName;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(String appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getSelectedDocter() {
		return selectedDocter;
	}

	public void setSelectedDocter(String selectedDocter) {
		this.selectedDocter = selectedDocter;
	}
	
	
}
	
