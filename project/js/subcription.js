    function validateForm() { // function to validate input fields
        // Variables to configure validate function
        var FirstName = document.getElementById('fName').value;
        var LastName = document.getElementById('fLname').value;
        var Email = document.getElementById('mail').value;
        var fZip = document.getElementById('zip').value;
        var emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // regular expresion to validate correct e-mail format 

        if (FirstName.length == "") { // ensures that field is filled in
            event.preventDefault(); // prevents page from reloading after submission
            alert("Your  first name wasn't recognised."); // dialog box
            FirstName.focus(); //Gives focus to first name text field, immediately after incorrect submission
            return false; // prevents function from firing until all fields are submitted correctly
        }

        if (LastName.length == "") { // ensures that field is filled in
            event.preventDefault(); // prevents page from reloading after submission
            alert("Your last name wasn't recognised."); // dialog box
            LastName.focus(); //Gives focus to last name text field, immediately after incorrect submission
            return false; // prevents function from firing until all fields are submitted correctly
        }
        if (!emailFilter.test(Email)) { // attaches e-mail variable to regex ensuring proper format
            event.preventDefault(); // prevents page from reloading after submission
            alert("You have entered an invalid email address!"); // dialog box
            Email.focus(); //Gives focus to e-mail text field, immediately after incorrect submission
            return false; // prevents function from firing until all fields are submitted correctly
        }

        if (Email.value == "") { // ensures that field is filled in
            event.preventDefault(); // prevents page from reloading after submission
            alert("Your E-mail wasn't recognised."); // dialog box
            Email.focus(); //Gives focus to e-mail text field, immediately after incorrect submission
            return false; // prevents function from firing until all fields are submitted correctly
        }

        if (fZip.length != 5 && fZip.length != 10) { // ensures correct format for zip codes
            event.preventDefault(); // prevents page from reloading after submission
            alert("Please enter your 5 digit or 5 digit + 4 zip code."); // dialog box
            fZip.focus(); //Gives focus to zip code text field, immediately after incorrect submission
            return false; // prevents function from firing until all fields are submitted correctly

        } else {
            alert('Thank you for subscribing!') // dialog box
            setTimeout(function() {
                window.location = "index.html"
            }); // redirects user to homepage upon subscribing successfuly
            return true; // allows function to initiate when all fields are submitted correctly
        }
    }