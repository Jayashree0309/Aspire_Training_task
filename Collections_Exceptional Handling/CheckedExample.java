class NotEligibleToVoteException extends Exception {
    public NotEligibleToVoteException(String message) {
        super(message);
    }
}

public class CheckedExample {
    public static void main(String[] args) {
        try {
           
            int age = 12;
            checkEligibilityToVote(age);
            System.out.println("Person is eligible to vote.");
        } catch (NotEligibleToVoteException e) {
            System.out.println("Person is not eligible to vote: " + e.getMessage());
        }
    }

    public static void checkEligibilityToVote(int age) throws NotEligibleToVoteException {
        int votingAge = 18;
        if (age < votingAge) {
            throw new NotEligibleToVoteException("Age must be at least " + votingAge + " to vote.");
        }
    }
}

