let student = new Object()
student.name = "Magali"
student.grade = 85

if (student.grade >= 70) {
    console.log(student.name + " is approved.")
}
else if (student.grade  >= 60 && student.grade <= 69) {
    console.log(student.name + " needs academic support.")
}
else {
        console.log(student.name + " failed.")
}