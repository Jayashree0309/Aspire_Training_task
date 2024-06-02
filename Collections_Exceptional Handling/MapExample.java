import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        Map<Integer, String> bankAccounts = new HashMap<>();

        
        bankAccounts.put(1001, "Palani");
        bankAccounts.put(1002, "Ravi");
        bankAccounts.put(1003, "Priya");
        bankAccounts.put(1004, "Bharath");
        bankAccounts.put(1005, "Dhivya");

        // Displaying the size of the Map
        System.out.println("Size of Bank Accounts Map: " + bankAccounts.size());

        
        System.out.println("Is Bank Accounts Map empty? " + bankAccounts.isEmpty());

        // Getting the account holder for a specific account number
        int accountNumberToFind = 1003;
        String accountHolder = bankAccounts.get(accountNumberToFind);
        System.out.println("Account Holder for account number " + accountNumberToFind + ": " + accountHolder);

        // Adding a new bank account using putIfAbsent
        int newAccountNumber = 1006;
        String newAccountHolder = "Shanmugam";
        String existingAccountHolder = bankAccounts.putIfAbsent(newAccountNumber, newAccountHolder);
        if (existingAccountHolder == null) {
            System.out.println("New account added successfully: " + newAccountNumber + " - " + newAccountHolder);
        } else {
            System.out.println("Account with number " + newAccountNumber + " already exists. Account holder: " + existingAccountHolder);
        }
        System.out.println("Bank Accounts Map after adding new account: " + bankAccounts);
    }
}
