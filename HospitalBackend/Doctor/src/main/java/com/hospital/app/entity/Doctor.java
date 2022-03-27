package com.hospital.app.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctors")
public class Doctor {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String docterName;
private long mobile;
private String gender;
private String age;
private String specialization;
public Doctor() {
	super();
}
public Doctor(int id, String docterName, long mobile, String gender, String age, String specialization) {
	super();
	this.id = id;
	this.docterName = docterName;
	this.mobile = mobile;
	this.gender = gender;
	this.age = age;
	this.specialization = specialization;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getDocterName() {
	return docterName;
}
public void setDocterName(String docterName) {
	this.docterName = docterName;
}
public long getMobile() {
	return mobile;
}
public void setMobile(long mobile) {
	this.mobile = mobile;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getAge() {
	return age;
}
public void setAge(String age) {
	this.age = age;
}
public String getSpecialization() {
	return specialization;
}
public void setSpecialization(String specialization) {
	this.specialization = specialization;
}


}
