class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            throw new InsufficientFundsException("Insufficient funds to withdraw " + amount);
        }
        balance -= amount;
        System.out.println("Withdrawn: " + amount + ", Remaining Balance: " + balance);
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);

        try {
           
            account.withdraw(1500);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        }

        
        account.withdraw(500);
    }
}
