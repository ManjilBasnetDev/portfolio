// Enhanced Quiz Data with 12 questions per topic and increasing difficulty
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
                options: ["&lt;class 'int'&gt;", "&lt;class 'float'&gt;", "&lt;class 'double'&gt;", "&lt;class 'number'&gt;"],
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
                options: ["No difference", "'==' checks value, 'is' checks identity", "'is' checks value, '==' checks identity", "Both check identity"],
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
    },
    modules: {
        title: "Modules and Packages",
        questions: [
            // Easy Level
            {
                question: "What is the correct way to import a module in Python?",
                options: ["import module", "from module import", "include module", "using module"],
                correct: 0,
                explanation: "The 'import' statement is used to import modules in Python.",
                difficulty: "easy"
            },
            {
                question: "How do you import only the sqrt function from the math module?",
                options: ["import math.sqrt", "from math import sqrt", "from math import *", "import sqrt from math"],
                correct: 1,
                explanation: "from math import sqrt imports only the sqrt function from the math module.",
                difficulty: "easy"
            },
            {
                question: "What is the purpose of the __name__ variable in a module?",
                options: ["Module name", "File name", "Function name", "Class name"],
                correct: 0,
                explanation: "__name__ is a special variable that holds the name of the current module.",
                difficulty: "easy"
            },
            {
                question: "How can you prevent a module from being run as a standalone script?",
                options: ["Remove __name__ variable", "Use if __name__ == '__main__':", "Add import statement", "Nothing, it always runs"],
                correct: 1,
                explanation: "Using if __name__ == '__main__': allows code to run only when the module is executed directly.",
                difficulty: "easy"
            },
            // Medium Level
            {
                question: "What command installs a package from requirements.txt?",
                options: ["pip install requirements.txt", "pip install -r requirements.txt", "python -m pip install", "install -r requirements.txt"],
                correct: 1,
                explanation: "pip install -r requirements.txt installs all packages listed in requirements.txt.",
                difficulty: "medium"
            },
            {
                question: "How do you create a virtual environment in Python?",
                options: ["python -m venv myenv", "python myenv.py", "virtualenv myenv", "env myenv"],
                correct: 0,
                explanation: "python -m venv myenv creates a virtual environment named myenv.",
                difficulty: "medium"
            },
            {
                question: "What is the purpose of the __init__.py file in a package?",
                options: ["Initialize package", "Define module variables", "Import submodules", "All of the above"],
                correct: 3,
                explanation: "__init__.py can initialize a package, define variables, and import submodules.",
                difficulty: "medium"
            },
            {
                question: "How do you list all installed packages in Python?",
                options: ["pip list", "pip freeze", "python -m pip list", "All of the above"],
                correct: 3,
                explanation: "pip list, pip freeze, and python -m pip list all display installed packages.",
                difficulty: "medium"
            },
            // Hard Level
            {
                question: "What is the difference between a module and a package in Python?",
                options: ["No difference", "Modules are files, packages are folders", "Packages are files, modules are folders", "Both are the same"],
                correct: 1,
                explanation: "Modules are single files, while packages are directories that can contain multiple modules and sub-packages.",
                difficulty: "hard"
            },
            {
                question: "How do you import a module from a subpackage?",
                options: ["import package.module", "from package import module", "from package.subpackage import module", "import subpackage.module"],
                correct: 2,
                explanation: "from package.subpackage import module imports a module from a specific subpackage.",
                difficulty: "hard"
            },
            {
                question: "What is the purpose of the PYTHONPATH environment variable?",
                options: ["Set default encoding", "Add directories to module search path", "Define package variables", "None of the above"],
                correct: 1,
                explanation: "PYTHONPATH specifies additional directories where Python should look for modules to import.",
                difficulty: "hard"
            },
            {
                question: "How can you optimize module loading time in Python?",
                options: ["Use __all__ variable", "Minimize module size", "Use lazy imports", "All of the above"],
                correct: 3,
                explanation: "Using __all__, minimizing size, and lazy imports can optimize module loading time.",
                difficulty: "hard"
            }
        ]
    }
};

// Quiz state variables
let currentUser = '';
let currentTopic = '';
let currentQuestion = 0;
let userAnswers = {};
let quizState = {};
let questionStartTime = 0;

// Initialize quiz system when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Original portfolio JavaScript
    initializePortfolio();
    
    // Initialize quiz data globally
    window.quizData = quizData;
    window.currentUser = currentUser;
    window.currentTopic = currentTopic;
    window.currentQuestion = currentQuestion;
    window.userAnswers = userAnswers;
    window.quizState = quizState;
});

function initializePortfolio() {
    // Typewriter animation
    const typewriterElement = document.getElementById('typewriter');
    const text = "Manjil Basnet";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (navMenu) navMenu.classList.remove('show');
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section visibility animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.querySelector('.skills-list')) {
                    animateSkills(entry.target.querySelector('.skills-list'));
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Skill animation
    function animateSkills(skillsList) {
        if (skillsList) {
            skillsList.querySelectorAll('li').forEach((skill, index) => {
                skill.style.animationDelay = `${index * 0.1}s`;
                skill.style.animation = `fadeInUp 0.5s ease forwards`;
            });
        }
    }

    // Project hover effect
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateY(-10px)';
            project.style.boxShadow = '0 0 20px var(--primary-color)';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'translateY(0)';
            project.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Save contact form to Firebase if available
            if (window.db && window.addDoc && window.collection) {
                try {
                    await window.addDoc(window.collection(window.db, "contacts"), {
                        name: name,
                        email: email,
                        message: message,
                        timestamp: new Date().toISOString()
                    });
                    console.log('Contact form saved to Firebase');
                } catch (error) {
                    console.error("Error saving contact form:", error);
                }
            }

            form.reset();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Home link functionality
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Quiz Functions
function startQuiz() {
    const username = document.getElementById('username').value.trim();
    if (!username) {
        alert('Please enter your name to continue!');
        return;
    }

    currentUser = username;
    window.currentUser = currentUser;

    // Hide user setup and show language selection
    document.getElementById('user-setup').classList.add('hidden');
    document.getElementById('progress-card').classList.remove('hidden');
    document.getElementById('language-card').classList.remove('hidden');

    loadUserProgress();
}

function selectLanguage(language) {
    if (language === 'python') {
        document.getElementById('language-card').classList.add('hidden');
        document.getElementById('topics-card').classList.remove('hidden');
    }
}

function goBackToStart() {
    document.getElementById('language-card').classList.add('hidden');
    document.getElementById('progress-card').classList.add('hidden');
    document.getElementById('user-setup').classList.remove('hidden');
    document.getElementById('username').value = '';
    currentUser = '';
    window.currentUser = '';
}

function goBackToLanguages() {
    document.getElementById('topics-card').classList.add('hidden');
    document.getElementById('language-card').classList.remove('hidden');
    closeQuiz();
}

async function loadUserProgress() {
    if (!window.db) {
        console.log('Firebase not initialized yet');
        return;
    }

    try {
        const q = window.query(
            window.collection(window.db, "quizProgress"), 
            window.where("username", "==", currentUser)
        );
        const querySnapshot = await window.getDocs(q);
        
        const progressList = document.getElementById('progress-list');
        progressList.innerHTML = '';

        const userProgress = {};
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Keep the best score for each topic
            if (!userProgress[data.topic] || userProgress[data.topic].score < data.score) {
                userProgress[data.topic] = data;
            }
        });

        Object.keys(quizData).forEach(topic => {
            const progress = userProgress[topic];
            const progressItem = document.createElement('div');
            progressItem.className = 'progress-item';
            
            const score = progress ? progress.score : 0;
            const attempts = progress ? progress.attempts : 0;
            
            progressItem.innerHTML = `
                <div class="topic-progress">
                    <i class="fab fa-python"></i>
                    <span>${quizData[topic].title}</span>
                </div>
                <div>
                    <span class="progress-badge">${score}% (${attempts} attempts)</span>
                </div>
            `;
            progressList.appendChild(progressItem);
        });

        quizState = userProgress;
        window.quizState = quizState;
    } catch (error) {
        console.error("Error loading progress:", error);
    }
}

function loadTopic(topic) {
    currentTopic = topic;
    window.currentTopic = topic;
    currentQuestion = 0;
    window.currentQuestion = 0;
    userAnswers = {};
    window.userAnswers = userAnswers;
    questionStartTime = Date.now();

    // Show quiz modal
    document.getElementById('quiz-overlay').classList.remove('hidden');
    document.getElementById('quiz-modal-title').innerHTML = `<i class="fab fa-python"></i> ${quizData[topic].title}`;

    // Load first question
    loadQuestion(topic, 0);
}

function loadQuestion(topic, questionIndex) {
    const questions = quizData[topic].questions;
    const modalContent = document.getElementById('quiz-modal-content');
    
    if (questionIndex >= questions.length) {
        showResults(topic);
        return;
    }

    const question = questions[questionIndex];
    
    // Debug: Check if question and options exist
    console.log('Loading question:', questionIndex, question);
    
    if (!question || !question.options || question.options.length !== 4) {
        console.error('Question data is incomplete:', question);
        return;
    }

    const difficultyColor = question.difficulty === 'easy' ? '#10b981' : 
                           question.difficulty === 'medium' ? '#f59e0b' : '#ef4444';
    
    modalContent.innerHTML = `
        <div class="question-header">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(questionIndex / questions.length) * 100}%"></div>
            </div>
            <div class="question-info">
                <span class="question-counter">Question ${questionIndex + 1} of ${questions.length}</span>
                <span class="difficulty-badge" style="background: ${difficultyColor}20; color: ${difficultyColor}">
                    ${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </span>
            </div>
        </div>
        
        <div class="question-card">
            <div class="question-text">
                ${question.question}
            </div>
            <div class="options">
                <div class="option" onclick="selectOption('${topic}', ${questionIndex}, 0)">
                    <i class="fas fa-circle"></i>
                    <span>${question.options[0]}</span>
                </div>
                <div class="option" onclick="selectOption('${topic}', ${questionIndex}, 1)">
                    <i class="fas fa-circle"></i>
                    <span>${question.options[1]}</span>
                </div>
                <div class="option" onclick="selectOption('${topic}', ${questionIndex}, 2)">
                    <i class="fas fa-circle"></i>
                    <span>${question.options[2]}</span>
                </div>
                <div class="option" onclick="selectOption('${topic}', ${questionIndex}, 3)">
                    <i class="fas fa-circle"></i>
                    <span>${question.options[3]}</span>
                </div>
            </div>
        </div>

        <div class="quiz-controls">
            <button class="quiz-btn secondary" onclick="previousQuestion('${topic}')" ${questionIndex === 0 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Previous
            </button>
            <button class="quiz-btn" onclick="nextQuestion('${topic}')" id="next-btn" disabled>
                ${questionIndex === questions.length - 1 ? '<i class="fas fa-flag-checkered"></i> Finish Quiz' : 'Next <i class="fas fa-chevron-right"></i>'}
            </button>
        </div>
    `;

    questionStartTime = Date.now();
}

function selectOption(topic, questionIndex, optionIndex) {
    // Remove previous selections
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection to clicked option
    event.target.closest('.option').classList.add('selected');

    // Store answer with timing
    userAnswers[questionIndex] = {
        answer: optionIndex,
        timeSpent: Date.now() - questionStartTime,
        difficulty: quizData[topic].questions[questionIndex].difficulty
    };
    window.userAnswers = userAnswers;

    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion(topic) {
    if (currentQuestion < quizData[topic].questions.length - 1) {
        currentQuestion++;
        window.currentQuestion = currentQuestion;
        loadQuestion(topic, currentQuestion);
    } else {
        showResults(topic);
    }
}

function previousQuestion(topic) {
    if (currentQuestion > 0) {
        currentQuestion--;
        window.currentQuestion = currentQuestion;
        loadQuestion(topic, currentQuestion);
    }
}

async function showResults(topic) {
    const questions = quizData[topic].questions;
    let correct = 0;
    let easyCorrect = 0, mediumCorrect = 0, hardCorrect = 0;
    let easyTotal = 0, mediumTotal = 0, hardTotal = 0;

    // Calculate detailed scores
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer && userAnswer.answer === question.correct) {
            correct++;
            if (question.difficulty === 'easy') easyCorrect++;
            else if (question.difficulty === 'medium') mediumCorrect++;
            else hardCorrect++;
        }
        
        if (question.difficulty === 'easy') easyTotal++;
        else if (question.difficulty === 'medium') mediumTotal++;
        else hardTotal++;
    });

    const score = Math.round((correct / questions.length) * 100);

    // Show results in modal
    const modalContent = document.getElementById('quiz-modal-content');
    modalContent.innerHTML = `
        <div class="score-display">
            <h3><i class="fas fa-trophy"></i> Quiz Complete!</h3>
            <div class="score-circle" id="score-circle">
                <div class="score-text" id="score-text">0%</div>
            </div>
            
            <div class="detailed-results">
                <h4>Detailed Performance:</h4>
                <div class="performance-grid">
                    <div class="performance-item">
                        <span class="level easy">Easy</span>
                        <span>${easyCorrect}/${easyTotal}</span>
                    </div>
                    <div class="performance-item">
                        <span class="level medium">Medium</span>
                        <span>${mediumCorrect}/${mediumTotal}</span>
                    </div>
                    <div class="performance-item">
                        <span class="level hard">Hard</span>
                        <span>${hardCorrect}/${hardTotal}</span>
                    </div>
                </div>
            </div>

            <div class="quiz-feedback" id="quiz-feedback"></div>
            <div class="suggestions" id="quiz-suggestions"></div>

            <div class="result-actions">
                <button class="quiz-btn" onclick="retakeQuiz()">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
                <button class="quiz-btn secondary" onclick="goToTopics()">
                    <i class="fas fa-list"></i> Choose Another Topic
                </button>
            </div>
        </div>
    `;

    // Animate score counting
    animateScore(score);

    // Generate personalized feedback
    generateFeedback(score, correct, questions.length, easyCorrect, mediumCorrect, hardCorrect, easyTotal, mediumTotal, hardTotal);

    // Save progress to Firebase
    await saveQuizProgress(topic, correct, questions.length, score);
}

function animateScore(targetScore) {
    const scoreText = document.getElementById('score-text');
    const scoreCircle = document.getElementById('score-circle');
    let currentScore = 0;
    
    const scoreInterval = setInterval(() => {
        currentScore += 2;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(scoreInterval);
        }
        
        scoreText.textContent = `${currentScore}%`;
        
        // Update circle
        const angle = (currentScore / 100) * 360;
        const color = currentScore >= 80 ? 'var(--success-color)' : 
                     currentScore >= 60 ? 'var(--warning-color)' : 'var(--secondary-color)';
        scoreCircle.style.background = `conic-gradient(${color} 0deg, ${color} ${angle}deg, rgba(0,0,0,0.1) ${angle}deg)`;
    }, 30);
}

function generateFeedback(score, correct, total, easyCorrect, mediumCorrect, hardCorrect, easyTotal, mediumTotal, hardTotal) {
    let feedback = '';
    let suggestions = '';
    let youtubeMessage = '';

    if (score >= 90) {
        feedback = `Outstanding! You scored ${correct}/${total} correct answers. You're a Python expert!`;
        suggestions = `Excellent mastery across all difficulty levels! You're ready for advanced Python concepts.`;
        youtubeMessage = `Check out my advanced Python tutorials for even more challenging concepts!`;
    } else if (score >= 80) {
        feedback = `Excellent work! You scored ${correct}/${total} correct answers.`;
        suggestions = `You have a solid understanding of this topic.`;
        youtubeMessage = `Keep up the great work! Watch my YouTube tutorials for deeper insights.`;
    } else if (score >= 70) {
        feedback = `Good job! You scored ${correct}/${total} correct answers.`;
        suggestions = `You're doing well, but there's room for improvement in ${hardCorrect < hardTotal/2 ? 'advanced' : 'intermediate'} concepts.`;
        youtubeMessage = `Review my YouTube tutorials to strengthen your understanding!`;
    } else if (score >= 60) {
        feedback = `Keep practicing! You scored ${correct}/${total} correct answers.`;
        suggestions = `Focus on strengthening your fundamentals, especially ${easyCorrect < easyTotal/2 ? 'basic' : 'intermediate'} concepts.`;
        youtubeMessage = `Don't worry! Check out my step-by-step YouTube tutorials to build a strong foundation.`;
    } else {
        feedback = `Don't give up! You scored ${correct}/${total} correct answers.`;
        suggestions = `This topic needs more practice. Start with the basics and work your way up.`;
        youtubeMessage = `I recommend watching my complete Python tutorial series from the beginning!`;
    }

    document.getElementById('quiz-feedback').innerHTML = `<p style="font-size: 1.2rem; margin-bottom: 1rem;">${feedback}</p>`;
    
    document.getElementById('quiz-suggestions').innerHTML = `
        <h4><i class="fas fa-lightbulb"></i> Personalized Learning Path:</h4>
        <p>${suggestions}</p>
        <p style="margin-top: 1rem;"><strong>${youtubeMessage}</strong></p>
        <a href="https://www.youtube.com/@ManjilDadaa" target="_blank" class="youtube-link">
            <i class="fab fa-youtube"></i>
            Visit My YouTube Channel
        </a>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(59, 130, 246, 0.05); border-radius: 8px; border-left: 4px solid var(--info-color);">
            <strong>Study Tips:</strong>
            <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                <li>Practice coding daily for at least 30 minutes</li>
                <li>Build small projects to apply what you learn</li>
                <li>Join Python communities and forums</li>
                <li>Review and retake quizzes to track improvement</li>
            </ul>
        </div>
    `;
}

async function saveQuizProgress(topic, correct, total, score) {
    if (!window.db || !window.addDoc || !window.collection) {
        console.log('Firebase not available, progress not saved');
        return;
    }

    try {
        const existingAttempts = quizState[topic] ? quizState[topic].attempts : 0;
        
        // Calculate performance metrics
        const timeSpent = Object.values(userAnswers).reduce((total, answer) => total + (answer.timeSpent || 0), 0);
        const avgTimePerQuestion = timeSpent / total;
        
        await window.addDoc(window.collection(window.db, "quizProgress"), {
            username: currentUser,
            topic: topic,
            correct: correct,
            total: total,
            score: score, 
            attempts: existingAttempts + 1,
            timestamp: new Date().toISOString(),
            answers: userAnswers,
            totalTimeSpent: timeSpent,
            averageTimePerQuestion: avgTimePerQuestion
        });

        // Update local state
        quizState[topic] = {
            correct: correct,
            total: total,
            score: score,
            attempts: existingAttempts + 1
        };
        window.quizState = quizState;

        await loadUserProgress();
    } catch (error) {
        console.error("Error saving progress:", error);
    }
}

function retakeQuiz() {
    currentQuestion = 0;
    window.currentQuestion = 0;
    userAnswers = {};
    window.userAnswers = userAnswers;

    loadQuestion(currentTopic, 0);
}

function goToTopics() {
    closeQuiz();
    // Reset topic selection
    currentTopic = '';
    window.currentTopic = '';
}

function closeQuiz() {
    document.getElementById('quiz-overlay').classList.add('hidden');
    document.getElementById('topics-card').classList.remove('hidden');
}

// Global function assignments for HTML onclick handlers
window.startQuiz = startQuiz;
window.selectLanguage = selectLanguage;
window.goBackToStart = goBackToStart;
window.goBackToLanguages = goBackToLanguages;
window.loadUserProgress = loadUserProgress;
window.loadTopic = loadTopic;
window.loadQuestion = loadQuestion;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.showResults = showResults;
window.saveQuizProgress = saveQuizProgress;
window.retakeQuiz = retakeQuiz;
window.goToTopics = goToTopics;
window.closeQuiz = closeQuiz;