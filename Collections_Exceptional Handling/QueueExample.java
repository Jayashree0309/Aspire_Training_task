import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        
        Queue<String> studentQueue = new LinkedList<>();

        
        studentQueue.add("Jolin");
        studentQueue.add("Afreen");
        studentQueue.add("Ramaprabha");
        studentQueue.add("Silpha");
        studentQueue.add("Vidhya");
        System.out.println("Student Queue Elements: " + studentQueue);

        // Offering an additional student name to the Queue
        boolean added = studentQueue.offer("Ramya");
        System.out.println("Element 'Ramya' added successfully? " + added);

        

        // Removing the head of the student Queue using remove()
        String removedStudent = studentQueue.remove();
        System.out.println("Removed Student: " + removedStudent);
        System.out.println(" Elements after removing head: " + studentQueue);

        // Polling the head of the student Queue using poll()
        String polledStudent = studentQueue.poll();
        System.out.println("Polled Student: " + polledStudent);
        System.out.println(" Elements after polling head: " + studentQueue);

        // Peeking at the head of the student Queue using peek()
        String peekedStudent = studentQueue.peek();
        System.out.println("Peeked Student: " + peekedStudent);
        System.out.println(" Elements after peeking head: " + studentQueue);
    }
}
