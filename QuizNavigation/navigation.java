import java.util.Scanner;

public class QuizNavigation {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String[] questions = {
            "What is Java?",
            "Which keyword creates an object?",
            "Which method is the main entry point?"
        };

        String[][] options = {
            {"A. Language", "B. Database", "C. Browser", "D. OS"},
            {"A. class", "B. new", "C. static", "D. void"},
            {"A. start()", "B. run()", "C. main()", "D. print()"}
        };

        String[] answers = new String[questions.length];

        int currentQuestion = 0;

        while (currentQuestion < questions.length) {

            System.out.println("\n" + questions[currentQuestion]);

            for (int i = 0; i < 4; i++) {
                System.out.println(options[currentQuestion][i]);
            }

            System.out.print("Select Answer (A/B/C/D): ");
            String answer = input.nextLine().trim().toUpperCase();

            if (answer.isEmpty()) {
                System.out.println("Alert: Please select an answer!");
                continue;
            }

            if (!answer.equals("A") && !answer.equals("B")
                    && !answer.equals("C") && !answer.equals("D")) {

                System.out.println("Invalid answer! Select A, B, C or D.");
                continue;
            }

            answers[currentQuestion] = answer;

            System.out.println("Answer saved!");

            System.out.println("Press Enter for Next Question.");
            input.nextLine();

            currentQuestion++;
        }

        System.out.println("\nQuiz Completed!");

        for (int i = 0; i < answers.length; i++) {
            System.out.println("Question " + (i + 1) + ": " + answers[i]);
        }

        input.close();
    }
}
