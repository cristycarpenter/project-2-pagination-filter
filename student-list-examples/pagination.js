// Store students per page for use in pagination calculations.
var studentsPerPage = 10;

// Show the first 10 students on page load; hide the others.
$('.student-list li').slice(studentsPerPage).hide();

// Function for creating the pagination menu.
function createPaginationMenu() {
    
    // Determine the amount of students.
    var studentCount = $('.student-list li').length;
    console.log(studentCount); //for visibility
    
    // Determine how many page links are needed.
    var pageCount = studentCount / studentsPerPage;
    console.log(pageCount); // for visibility
    
    // Create the div and give it a class of 'pagination'.
    var pageLinksDiv = document.createElement('div');
    pageLinksDiv.className += 'pagination';
    
    // Create a ul element and place it within the div.
    var pageLinksUnorderedList = document.createElement('ul');
    pageLinksDiv.appendChild(pageLinksUnorderedList);
    
    // Create however many links are needed.
    for(i = 1; i <= Math.ceil(pageCount); i++){ 
    
        // Create li and append it to the ul.
        var pageLinksListItem = document.createElement('li'); 
        pageLinksUnorderedList.appendChild(pageLinksListItem); 
        
        // Create anchor, add page number as anchor's text, and append anchor to the li.
        var pageLinksAnchor = document.createElement('a'); 
        pageLinksAnchor.innerHTML = i;
        pageLinksListItem.appendChild(pageLinksAnchor);
        
        //Add class to anchor to use for triggering changes with event listener.
         pageLinksAnchor.className += 'pageLink';
       
        console.log('test' + i); // for visibility
        
	}
    
    // Insert the constructed menu just below the student list.
    $(pageLinksDiv).insertAfter(".student-list");
    
}

// Call funtion that creates the menu UI.
createPaginationMenu();

// Add 'active' class to first page link upon page load.
$('.pageLink:first').addClass('active');

// Adds click event listener that changes students shown as pages are clicked.

    $( '.pageLink' ).click(function() {
    
        //  Removes 'active' class from the last link viewed/clicked.
        $('.pageLink.active').removeClass('active');
        
        //  Hides previously viewed student list.
        $('.student-list li').hide();
        
        //  Add 'active' class to page just clicked. 
        $(this).addClass('active');  
        
        //  Determine what page was clicked and store it as a number to perform calculations with. 
        var $pageNumber = this.text;
        $pageNumber = Number($pageNumber);
        $pageNumber = ($pageNumber - 1);
        
        // Calculate next student list and show it.
        var changeStudents = $(".student-list li").slice(($pageNumber * 10), (($pageNumber * 10) + 10)).show();
        
    });










