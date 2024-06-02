import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        ArrayList<Integer> List = new ArrayList<>();

        List.add(10);
        List.add(20);
        List.add(30);
        List.add(40);
        List.add(50);
        System.out.println("ArrayList Elements: " + List);

        List.remove(3);
        System.out.println("ArrayList Elements after removing element at index 3: " + List);

        
        if (List.contains(50)) {
            System.out.println("50 is present in the ArrayList");
        } else {
            System.out.println("50 is not present in the ArrayList");
        }

        
        int index = List.indexOf(20);
        System.out.println("Index of 20 in the ArrayList: " + index);

        // Creating a sublist of the ArrayList
        List<Integer> sublist = List.subList(1, 4);
        System.out.println("Sublist from index 1 to 3: " + sublist);

        // Sorting the ArrayList
        Collections.sort(List);
        System.out.println("ArrayList Elements after sorting: " + List);

        // Iterating through the ArrayList using Iterator
        Iterator<Integer> iterator = List.iterator();
        System.out.println("ArrayList Elements using Iterator:");
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

      
    }
}

