class Person{
    String name;
    int age;

    public Person(String name,int age){
        this.name=name;
        this.age=age;
    }

    void display(){
        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
    }
}
class Employee extends Person{
    double salary;

    public Employee(String name, int age, double salary){
        super(name,age);
        this.salary=salary;
    }

    void display(){
        super.display();
        System.out.println("Salary: "+salary);
    }
}
public class Runtime {
    public static void main(String[] args) {
        Person person=new Person("Janu",23);
        person.display();

        Employee employee=new Employee("Jai", 25, 25000.00);
        employee.display();
    }
    
}
