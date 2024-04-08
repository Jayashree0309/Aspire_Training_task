class Student{
    String name;
    int age;
    String gender;

    
    void displayDetails(String name,int age){
        System.out.println("Name: "+name+" Age: "+age );
    }
    void displayDetails(String name,int age,String gender){
        System.out.println("Name: "+name+" Age: "+age+" gender: "+gender);
    }
}
public class Complietime {
    public static void main(String[] args) {
        Student student=new Student();
        student.displayDetails("pooja", 17,"Female");
        student.displayDetails("jai", 16);
    }
    
}
