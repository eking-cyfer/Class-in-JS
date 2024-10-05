// Step 7: Create a class with one property and two methods
class Student {
    constructor(name) {
        this.studentName = name;
    }

    static hello() {
        return "Hello";
    }

    present() {
        return 'My name is ' + this.studentName;
    }
}

// Step 8: Inherit the class with two parameters
class Grade extends Student {
    constructor(name, grade) {
        super(name);
        this.studentGrade = grade;
    }

    show() {
        return this.present() + ', from ' + this.studentGrade;
    }
}

// Step 9: Create an object for the child class
let myStudent = new Grade("Tina", "grade 6");
document.getElementById("details").innerHTML = myStudent.show();

// Step 10: Access the static method using the parent class
document.getElementById("greetings").innerHTML = Student.hello();
