import java.util.HashSet;
import java.util.Iterator;

public class SetExample {
    public static void main(String[] args) {
        
        HashSet<String> employeeSet = new HashSet<>();

        
        employeeSet.add("Jayashree");
        employeeSet.add("Abirami");
        employeeSet.add("Saranya");
        employeeSet.add("Janani");
        employeeSet.add("Kathiravan");

        System.out.println("Employee HashSet Elements: " + employeeSet);

        
        // Removing an employee name from the HashSet
        employeeSet.remove("Jayashree");
        System.out.println("HashSet Elements after removing Jayashree: " + employeeSet);

        // Checking if an employee name is present in the HashSet
        if (employeeSet.contains("Janani")) {
            System.out.println("Janani is present");
        } else {
            System.out.println("Janani is not present");
        }

        // Iterating through the employee HashSet using Iterator
        Iterator<String> iterator = employeeSet.iterator();
        System.out.println("Employee HashSet Elements using Iterator:");
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Clearing the employee HashSet
        employeeSet.clear();
        System.out.println("Employee HashSet Elements after clearing: " + employeeSet);
    }
}
