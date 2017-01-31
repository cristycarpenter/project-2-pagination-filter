//Store students per page for use in pagination calculations.
var studentsPerPage = 10;

//Show the first 10 students on page load; hide the others.
$(".student-list li").slice(studentsPerPage).hide();

//Function for creating the pagination menu.
function createPaginationMenu() {
    
    //Determine the amount of students.
    var studentCount = $(".student-list li").length;
    console.log(studentCount); //for visibility
    
    //Determine how many page links are needed.
    var pageCount = studentCount / studentsPerPage;
    console.log(pageCount);   
}

createPaginationMenu();
