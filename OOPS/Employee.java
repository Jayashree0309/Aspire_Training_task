
/* 
   Title of the Application: Employee Details
   Author: S.Jayashree
   Created Date: 02.04.2024
   Last modified Date: 03.04.2024
   Reviewed By:
   Reviewed Date:

*/

public class Employee {
	int employee_Id;
	String name;
	String gender;
	String department;
	String designation;
	double salary;

	public Employee(int employee_Id, String name, String gender, String department, String designation, double salary) {
		this.employee_Id = employee_Id;
		this.name = name;
		this.gender = gender;
		this.department = department;
		this.designation = designation;
		this.salary = salary;
	}

	public double calculatesalary() {
		return salary * 12;

	}

	public void display() {
		System.out.println("Employee Details");
		System.out.println("Employee Id: " + employee_Id);
		System.out.println("Name: " + name);
		System.out.println("Gender: " + gender);
		System.out.println("Department: " + department);
		System.out.println("Designation: " + designation);
		System.out.println("Salary: " + calculatesalary());
	}

	public static void main(String[] args) {

		Employee employee = new Employee(1011, "Varsha", "Female", "Sales", "Manager", 25000.00);

		employee.display();
	}
}