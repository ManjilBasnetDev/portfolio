// Quiz Data - Separated for better performance and maintainability
const quizData = {
    basics: {
        title: "Python Basics",
        questions: [
            // Easy Level (Questions 1-4)
            {
                question: "What is the correct way to create a variable in Python?",
                options: ["var x = 5", "x = 5", "int x = 5", "x := 5"],
                correct: 1,
                explanation: "In Python, you simply assign a value to a variable name without declaring its type.",
                difficulty: "easy"
            },
            {
                question: "Which of the following is used to add comments in Python?",
                options: ["//", "/* */", "#", "**"],
                correct: 2,
                explanation: "Python uses the # symbol for single-line comments.",
                difficulty: "easy"
            },
            {
                question: "What will be the output of print(type(5.0))?",
                options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
                correct: 1,
                explanation: "5.0 is a floating-point number in Python, so its type is 'float'.",
                difficulty: "easy"
            },
            {
                question: "Which function is used to get input from the user?",
                options: ["input()", "get()", "read()", "scan()"],
                correct: 0,
                explanation: "The input() function reads a line from the user and returns it as a string.",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "What is the result of 10 // 3 in Python?",
                options: ["3.33", "3", "4", "3.0"],
                correct: 1,
                explanation: "The // operator performs floor division, returning the integer part of the division.",
                difficulty: "medium"
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["function", "def", "func", "define"],
                correct: 1,
                explanation: "The 'def' keyword is used to define functions in Python.",
                difficulty: "medium"
            },
            {
                question: "What does the 'is' operator check in Python?",
                options: ["Value equality", "Type equality", "Identity", "Both value and type"],
                correct: 2,
                explanation: "The 'is' operator checks if two variables refer to the same object in memory.",
                difficulty: "medium"
            },
            {
                question: "What is the difference between '==' and 'is' in Python?",
                options: ["No difference", "== checks value, is checks identity", "is checks value, == checks identity", "Both check identity"],
                correct: 1,
                explanation: "'==' compares values while 'is' compares object identity in memory.",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "What will be the output of: print(bool([]), bool([0]), bool(['']))?",
                options: ["False False False", "True True True", "False True True", "True False True"],
                correct: 2,
                explanation: "Empty list is False, list with 0 is True (not empty), list with empty string is True (not empty).",
                difficulty: "hard"
            },
            {
                question: "What is the result of 'Hello' + str(123) + 'World'?",
                options: ["Hello123World", "HelloWorld", "Error", "Hello 123 World"],
                correct: 0,
                explanation: "String concatenation combines 'Hello', '123' (converted to string), and 'World'.",
                difficulty: "hard"
            },
            {
                question: "Which of the following creates a multi-line string in Python?",
                options: ["'text\\ntext'", "'''text\\ntext'''", "Both A and B", "\"text\\ntext\""],
                correct: 2,
                explanation: "Both single quotes with \\n and triple quotes can create multi-line strings.",
                difficulty: "hard"
            },
            {
                question: "What happens when you use 'global' keyword inside a function?",
                options: ["Creates a local variable", "Accesses global variable", "Creates a constant", "Throws an error"],
                correct: 1,
                explanation: "The 'global' keyword allows you to modify a global variable inside a function.",
                difficulty: "hard"
            }
        ]
    },
    datatypes: {
        title: "Data Types",
        questions: [
            // Easy Level
            {
                question: "Which of the following is a mutable data type in Python?",
                options: ["tuple", "string", "list", "int"],
                correct: 2,
                explanation: "Lists are mutable, meaning you can change their contents after creation.",
                difficulty: "easy"
            },
            {
                question: "What will len('Hello') return?",
                options: ["4", "5", "6", "Error"],
                correct: 1,
                explanation: "The string 'Hello' has 5 characters, so len() returns 5.",
                difficulty: "easy"
            },
            {
                question: "How do you create an empty dictionary in Python?",
                options: ["{}", "[]", "()", "dict()"],
                correct: 0,
                explanation: "Empty curly braces {} create an empty dictionary in Python.",
                difficulty: "easy"
            },
            {
                question: "Which data type is ordered and allows duplicate values?",
                options: ["set", "dictionary", "list", "tuple"],
                correct: 2,
                explanation: "Lists are ordered collections that allow duplicate values.",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "What's the difference between a tuple and a list?",
                options: ["No difference", "Tuples are immutable, lists are mutable", "Lists are faster", "Tuples allow duplicates"],
                correct: 1,
                explanation: "Tuples cannot be changed after creation (immutable), while lists can be modified.",
                difficulty: "medium"
            },
            {
                question: "How do you create a set with elements 1, 2, 3?",
                options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "set([1, 2, 3])"],
                correct: 0,
                explanation: "Curly braces with comma-separated values create a set in Python.",
                difficulty: "medium"
            },
            {
                question: "What method removes duplicates from a list most efficiently?",
                options: ["remove()", "pop()", "set()", "del"],
                correct: 2,
                explanation: "Converting to set removes duplicates, then convert back to list if needed.",
                difficulty: "medium"
            },
            {
                question: "Which method adds an element to the end of a list?",
                options: ["add()", "append()", "insert()", "push()"],
                correct: 1,
                explanation: "The append() method adds an element to the end of a list.",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "What's the output of: list(set([1,2,2,3,3,3]))?",
                options: ["[1, 2, 3]", "[1, 2, 2, 3, 3, 3]", "[3, 2, 1]", "Order may vary: [1, 2, 3]"],
                correct: 3,
                explanation: "Sets remove duplicates but don't guarantee order, so the result order may vary.",
                difficulty: "hard"
            },
            {
                question: "What happens when you try to access a dictionary key that doesn't exist?",
                options: ["Returns None", "Returns empty string", "Raises KeyError", "Returns 0"],
                correct: 2,
                explanation: "Accessing a non-existent dictionary key raises a KeyError exception.",
                difficulty: "hard"
            },
            {
                question: "Which is the correct way to create a dictionary from two lists?",
                options: ["dict(zip(keys, values))", "dict(keys + values)", "dict(keys, values)", "{keys: values}"],
                correct: 0,
                explanation: "zip() pairs elements from two lists, and dict() converts the pairs to a dictionary.",
                difficulty: "hard"
            },
            {
                question: "What's the difference between copy() and deepcopy()?",
                options: ["No difference", "copy() is faster", "deepcopy() copies nested objects", "copy() copies references"],
                correct: 2,
                explanation: "deepcopy() recursively copies nested objects, while copy() creates a shallow copy.",
                difficulty: "hard"
            }
        ]
    },
    control: {
        title: "Control Flow",
        questions: [
            // Easy Level
            {
                question: "Which keyword is used to exit a loop prematurely?",
                options: ["exit", "break", "stop", "end"],
                correct: 1,
                explanation: "The 'break' statement immediately exits the current loop.",
                difficulty: "easy"
            },
            {
                question: "What does the 'continue' statement do?",
                options: ["Exits the loop", "Skips to the next iteration", "Restarts the loop", "Pauses the loop"],
                correct: 1,
                explanation: "'continue' skips the rest of the current iteration and moves to the next one.",
                difficulty: "easy"
            },
            {
                question: "How do you write an if-else statement in Python?",
                options: ["if condition { } else { }", "if (condition): else:", "if condition: else:", "if condition then else"],
                correct: 2,
                explanation: "Python uses 'if condition:' followed by 'else:' with proper indentation.",
                difficulty: "easy"
            },
            {
                question: "Which loop is best for iterating over a sequence?",
                options: ["while", "for", "do-while", "repeat"],
                correct: 1,
                explanation: "The 'for' loop is ideal for iterating over sequences like lists, strings, etc.",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "What is the correct syntax for a while loop?",
                options: ["while (condition) {}", "while condition:", "while condition do:", "while (condition):"],
                correct: 1,
                explanation: "Python while loops use 'while condition:' followed by an indented block.",
                difficulty: "medium"
            },
            {
                question: "What does 'elif' stand for in Python?",
                options: ["else if", "elseif", "elif", "It's not an abbreviation"],
                correct: 0,
                explanation: "'elif' is short for 'else if' and is used for multiple condition checking.",
                difficulty: "medium"
            },
            {
                question: "How do you iterate over both index and value in a list?",
                options: ["for i, v in list:", "for i, v in enumerate(list):", "for i, v in range(list):", "for i, v in index(list):"],
                correct: 1,
                explanation: "enumerate() returns both index and value when iterating over a sequence.",
                difficulty: "medium"
            },
            {
                question: "What is the purpose of the 'pass' statement?",
                options: ["Skip iteration", "Exit function", "Do nothing (placeholder)", "Pass arguments"],
                correct: 2,
                explanation: "'pass' is a null operation - it does nothing and serves as a placeholder.",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "What will this code output: [x for x in range(5) if x % 2 == 0]?",
                options: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "[2, 4]"],
                correct: 0,
                explanation: "List comprehension filters even numbers from range(5): 0, 2, and 4.",
                difficulty: "hard"
            },
            {
                question: "What happens with nested loops when 'break' is used?",
                options: ["Breaks all loops", "Breaks only the innermost loop", "Breaks only outer loop", "Causes error"],
                correct: 1,
                explanation: "'break' only exits the innermost loop it's directly contained in.",
                difficulty: "hard"
            },
            {
                question: "What is the output of: for i in range(3): for j in range(2): print(i*j, end=' ')?",
                options: ["0 0 0 1 0 2", "0 0 0 1 0 2 ", "0 0 1 0 2 ", "000102"],
                correct: 1,
                explanation: "Nested loops: i=0: 0*0=0, 0*1=0; i=1: 1*0=0, 1*1=1; i=2: 2*0=0, 2*1=2",
                difficulty: "hard"
            },
            {
                question: "What is a generator expression in Python?",
                options: ["(x for x in range(10))", "[x for x in range(10)]", "{x for x in range(10)}", "x for x in range(10)"],
                correct: 0,
                explanation: "Generator expressions use parentheses and create memory-efficient iterators.",
                difficulty: "hard"
            }
        ]
    },
    functions: {
        title: "Functions",
        questions: [
            // Easy Level
            {
                question: "How do you define a function that takes no parameters?",
                options: ["def func():", "function func():", "def func:", "function func:"],
                correct: 0,
                explanation: "Use 'def function_name():' to define a function with no parameters.",
                difficulty: "easy"
            },
            {
                question: "What keyword is used to return a value from a function?",
                options: ["give", "return", "send", "output"],
                correct: 1,
                explanation: "The 'return' keyword sends a value back from a function.",
                difficulty: "easy"
            },
            {
                question: "What happens if a function doesn't have a return statement?",
                options: ["Error occurs", "Returns 0", "Returns None", "Returns empty string"],
                correct: 2,
                explanation: "Functions without explicit return statements automatically return None.",
                difficulty: "easy"
            },
            {
                question: "How do you call a function named 'greet'?",
                options: ["call greet()", "greet()", "execute greet()", "run greet()"],
                correct: 1,
                explanation: "Functions are called by writing their name followed by parentheses.",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "How do you define default parameter values?",
                options: ["def func(x=5):", "def func(x default 5):", "def func(x := 5):", "def func(default x=5):"],
                correct: 0,
                explanation: "Default parameters are defined using the equals sign in the function definition.",
                difficulty: "medium"
            },
            {
                question: "What are *args used for in function definitions?",
                options: ["Required arguments", "Variable-length arguments", "Keyword arguments", "Default arguments"],
                correct: 1,
                explanation: "*args allows a function to accept any number of positional arguments.",
                difficulty: "medium"
            },
            {
                question: "What are **kwargs used for?",
                options: ["Variable positional args", "Required keyword args", "Variable keyword args", "Default args"],
                correct: 2,
                explanation: "**kwargs allows a function to accept any number of keyword arguments.",
                difficulty: "medium"
            },
            {
                question: "What is a lambda function?",
                options: ["A named function", "An anonymous function", "A class method", "A built-in function"],
                correct: 1,
                explanation: "Lambda functions are anonymous functions defined using the 'lambda' keyword.",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "What is the scope of a variable defined inside a function?",
                options: ["Global", "Local", "Module", "Class"],
                correct: 1,
                explanation: "Variables defined inside a function have local scope and are only accessible within that function.",
                difficulty: "hard"
            },
            {
                question: "What is a closure in Python?",
                options: ["A function that closes files", "A nested function that accesses outer variables", "A function that returns nothing", "A function with no parameters"],
                correct: 1,
                explanation: "A closure is a nested function that has access to variables in its outer scope.",
                difficulty: "hard"
            },
            {
                question: "What will be the output of: def func(lst=[]): lst.append(1); return lst; print(func(), func())?",
                options: ["[1] [1]", "[1] [1, 1]", "[] []", "Error"],
                correct: 1,
                explanation: "Mutable default arguments are shared between function calls, causing unexpected behavior.",
                difficulty: "hard"
            },
            {
                question: "What is the difference between 'return' and 'yield'?",
                options: ["No difference", "'return' exits function, 'yield' pauses it", "'yield' exits function", "Both do the same"],
                correct: 1,
                explanation: "'return' terminates the function, 'yield' creates a generator that can be resumed.",
                difficulty: "hard"
            }
        ]
    },
    oop: {
        title: "Object-Oriented Programming",
        questions: [
            // Easy Level
            {
                question: "What keyword is used to define a class in Python?",
                options: ["class", "Class", "object", "Object"],
                correct: 0,
                explanation: "The 'class' keyword (lowercase) is used to define classes in Python.",
                difficulty: "easy"
            },
            {
                question: "What is the purpose of the __init__ method?",
                options: ["Delete objects", "Initialize objects", "Copy objects", "Compare objects"],
                correct: 1,
                explanation: "__init__ is the constructor method that initializes new objects when they're created.",
                difficulty: "easy"
            },
            {
                question: "What does 'self' refer to in a class method?",
                options: ["The class itself", "The current instance", "The parent class", "A static variable"],
                correct: 1,
                explanation: "'self' refers to the current instance of the class being operated on.",
                difficulty: "easy"
            },
            {
                question: "How do you create an instance of a class named 'Car'?",
                options: ["new Car()", "Car.new()", "Car()", "create Car()"],
                correct: 2,
                explanation: "You create an instance by calling the class name like a function: Car().",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "What is inheritance in OOP?",
                options: ["Creating multiple objects", "One class acquiring properties of another", "Deleting objects", "Copying methods"],
                correct: 1,
                explanation: "Inheritance allows a class to inherit attributes and methods from another class.",
                difficulty: "medium"
            },
            {
                question: "What is method overriding?",
                options: ["Creating new methods", "Redefining inherited methods", "Deleting methods", "Copying methods"],
                correct: 1,
                explanation: "Method overriding allows a child class to provide a specific implementation of a parent's method.",
                difficulty: "medium"
            },
            {
                question: "What is encapsulation?",
                options: ["Hiding data and methods", "Creating objects", "Inheriting classes", "Overloading methods"],
                correct: 0,
                explanation: "Encapsulation is the bundling of data and methods that work on that data within one unit.",
                difficulty: "medium"
            },
            {
                question: "How do you make a method private in Python?",
                options: ["private def method()", "def _method()", "def __method()", "def method() private"],
                correct: 2,
                explanation: "Double underscore prefix (__) makes a method name-mangled (pseudo-private).",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "What is polymorphism in Python?",
                options: ["Multiple inheritance", "Method overloading", "Same interface, different implementations", "Creating multiple objects"],
                correct: 2,
                explanation: "Polymorphism allows different classes to be treated through the same interface.",
                difficulty: "hard"
            },
            {
                question: "What is the Method Resolution Order (MRO)?",
                options: ["Order of method calls", "Order of inheritance resolution", "Order of object creation", "Order of variable access"],
                correct: 1,
                explanation: "MRO determines the order in which base classes are searched when executing a method.",
                difficulty: "hard"
            },
            {
                question: "What is a metaclass in Python?",
                options: ["A parent class", "A class that creates classes", "A method in a class", "An instance of a class"],
                correct: 1,
                explanation: "A metaclass is a class whose instances are classes themselves.",
                difficulty: "hard"
            },
            {
                question: "What does the @property decorator do?",
                options: ["Creates a class property", "Makes a method static", "Creates a getter method", "Makes a method private"],
                correct: 2,
                explanation: "@property allows you to define methods that can be accessed like attributes.",
                difficulty: "hard"
            }
        ]
    },
    files: {
        title: "File Handling",
        questions: [
            // Easy Level
            {
                question: "Which function is used to open a file in Python?",
                options: ["file()", "open()", "read()", "load()"],
                correct: 1,
                explanation: "The open() function is used to open files in Python.",
                difficulty: "easy"
            },
            {
                question: "What mode is used to open a file for reading?",
                options: ["'w'", "'r'", "'a'", "'x'"],
                correct: 1,
                explanation: "'r' mode opens a file for reading (default mode).",
                difficulty: "easy"
            },
            {
                question: "Which method reads the entire file content?",
                options: ["read()", "readline()", "readlines()", "readall()"],
                correct: 0,
                explanation: "read() method reads the entire file content as a string.",
                difficulty: "easy"
            },
            {
                question: "What does 'w' mode do when opening a file?",
                options: ["Read file", "Write (overwrites existing)", "Append to file", "Create new file only"],
                correct: 1,
                explanation: "'w' mode opens for writing and overwrites the file if it exists.",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "What's the advantage of using 'with' statement for file operations?",
                options: ["Faster reading", "Automatic file closing", "Better error handling", "All of the above"],
                correct: 3,
                explanation: "'with' automatically closes files, handles errors gracefully, and is more efficient.",
                difficulty: "medium"
            },
            {
                question: "What mode should you use to append data to an existing file?",
                options: ["'w'", "'r'", "'a'", "'w+'"],
                correct: 2,
                explanation: "'a' mode opens for appending, adding new data to the end of the file.",
                difficulty: "medium"
            },
            {
                question: "How do you read a file line by line efficiently for large files?",
                options: ["readlines()", "read().split()", "for line in file:", "readline() in loop"],
                correct: 2,
                explanation: "Iterating directly over the file object is memory-efficient for large files.",
                difficulty: "medium"
            },
            {
                question: "What does the 'r+' mode do?",
                options: ["Read only", "Write only", "Read and write", "Append only"],
                correct: 2,
                explanation: "'r+' opens the file for both reading and writing.",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "How do you handle file encoding issues?",
                options: ["Use binary mode", "Specify encoding parameter", "Use try-except", "All of the above"],
                correct: 3,
                explanation: "Encoding issues can be handled through binary mode, encoding specification, and error handling.",
                difficulty: "hard"
            },
            {
                question: "What's the difference between 'wb' and 'w' modes?",
                options: ["No difference", "'wb' is for binary, 'w' is for text", "'w' is faster", "'wb' creates backup"],
                correct: 1,
                explanation: "'wb' opens in binary mode for non-text files, 'w' opens in text mode.",
                difficulty: "hard"
            },
            {
                question: "How do you work with CSV files in Python?",
                options: ["Use csv module", "Read as text and split", "Use pandas", "All are valid approaches"],
                correct: 3,
                explanation: "CSV files can be handled with csv module, manual parsing, or pandas library.",
                difficulty: "hard"
            },
            {
                question: "What happens if you don't close a file after opening it?",
                options: ["Nothing", "Memory leak", "File corruption", "System may run out of file handles"],
                correct: 3,
                explanation: "Not closing files can lead to resource leaks and system limitations.",
                difficulty: "hard"
            }
        ]
    },
    exceptions: {
        title: "Exception Handling",
        questions: [
            // Easy Level
            {
                question: "Which keyword is used to handle exceptions in Python?",
                options: ["catch", "try", "handle", "except"],
                correct: 1,
                explanation: "The 'try' keyword starts an exception handling block.",
                difficulty: "easy"
            },
            {
                question: "What follows a 'try' block?",
                options: ["catch", "except", "finally", "handle"],
                correct: 1,
                explanation: "The 'except' block follows 'try' to handle specific exceptions.",
                difficulty: "easy"
            },
            {
                question: "What type of error occurs when dividing by zero?",
                options: ["ValueError", "ZeroDivisionError", "TypeError", "IndexError"],
                correct: 1,
                explanation: "ZeroDivisionError is raised when attempting to divide by zero.",
                difficulty: "easy"
            },
            {
                question: "Which block always executes regardless of exceptions?",
                options: ["try", "except", "finally", "else"],
                correct: 2,
                explanation: "The 'finally' block always executes after try-except, regardless of exceptions.",
                difficulty: "easy"
            },
            // Additional exception handling questions
            {
                question: "What is a try-finally block used for?",
                options: [
                    "Only handling errors",
                    "Cleanup operations",
                    "Defining custom exceptions",
                    "Catching specific exceptions"
                ],
                correct: 1,
                explanation: "try-finally ensures cleanup code runs whether an exception occurs or not.",
                difficulty: "medium"
            },
            {
                question: "What is exception chaining?",
                options: [
                    "Multiple try blocks",
                    "Using raise from",
                    "Nested exceptions",
                    "Exception inheritance"
                ],
                correct: 1,
                explanation: "Exception chaining links related exceptions using 'raise from'.",
                difficulty: "hard"
            }
        ]
    }
};

// Configuration constants
const CONFIG = {
    YOUTUBE_URL: "https://www.youtube.com/@ManjilDadaa",
    MAX_USERNAME_LENGTH: 50,
    ANIMATION_DELAY: 30
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizData, CONFIG };
}