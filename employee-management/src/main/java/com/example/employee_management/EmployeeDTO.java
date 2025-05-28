package com.example.employee_management;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

public class EmployeeDTO {
    private Long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is mandatory")
    private String email;

    @NotBlank(message = "Designation is mandatory")
    private String designation;

    @NotNull(message = "Joining date is mandatory")
    private LocalDate joiningDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public LocalDate getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(LocalDate joiningDate) {
		this.joiningDate = joiningDate;
	}

    // Getters and Setters
}
