/* 
   Title of the Application: Inheritance 
   Author: S.Jayashree
   Created Date: 05.04.2024
   Last modified Date: 08.04.2024
   Reviewed By:
   Reviewed Date:

*/

class Employee {
    int emp_id;
    String name;
    String gender;

    public Employee(int emp_id, String name, String gender) {
        this.emp_id = emp_id;
        this.name = name;
        this.gender = gender;
    }

    void displayEmployeeDetails() {
        System.out.println("--Employee Details--");
        System.out.println("Employee Id:" + emp_id);
        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
    }
}

// Single Inheritance
class Manager extends Employee {
    String department;

    public Manager(int emp_id, String name, String gender, String department) {
        super(emp_id, name, gender);
        this.department = department;
    }

    void displayManagerDetails() {

        displayEmployeeDetails();
        System.out.println("Department: " + department);
    }

}

// Multilevel Inheritance
class TeamLead extends Manager {
    int teamSize;

    public TeamLead(int emp_id, String name, String gender, String department, int teamSize) {
        super(emp_id, name, gender, department);
        this.teamSize = teamSize;
    }

    void displayTeamLeadDetails() {

        displayManagerDetails();
        System.out.println("Team size: " + teamSize);
    }
}

// Hierarchical Inheritance
class SystemAdministrator extends Employee {
    double salary;

    public SystemAdministrator(int emp_id, String name, String gender, double salary) {
        super(emp_id, name, gender);
        this.salary = salary;
    }

    void displayAdminDetails() {

        displayEmployeeDetails();
        System.out.println("Salary: " + salary);
    }

}

public class Inheritance {
    public static void main(String[] args) {

        Employee employee = new Employee(121, "Ram", "male");
        employee.displayEmployeeDetails();

        Manager manager = new Manager(122, "Abinay", "Male", "Software Development");
        manager.displayManagerDetails();

        TeamLead teamLead = new TeamLead(123, "Sakthi", "female", "Software development", 6);
        teamLead.displayTeamLeadDetails();

        SystemAdministrator admin = new SystemAdministrator(125, "John", "male", 15000);
        admin.displayAdminDetails();

    }

}
