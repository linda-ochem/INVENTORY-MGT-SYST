# INVENTORY MANAGEMENT SYSTEM

## This backend can be tested with postman, the endpoint 'http://localhost:4500/api/section/' can create, read, update and delete a section.

To Get all sections: A **GET** request to 'http://localhost:4500/api/section/';

To Get a single section: Send a **GET** request to 'http://localhost:4500/api/section/' with a query parameter 'Name' to the endpoint;

To Update a single section: Send a **PATCH** request to 'http://localhost:4500/api/section/' with a query parameter name, and add a request body;

To delete a single section: Send a **DELETE** request to 'http://localhost:4500/api/section/' with a query parameter 'Name';

To create a section:  Send a **POST** request to 'http://localhost:4500/api/section/' coupled with a request body in JSON format.
to create a section, you need to provide these inputs;
*Location_Id:       |     Type Of Number        |  Required
*Plant_section:     |     Type Of Number        |  Required
*Common_name:       |     Type Of String        |  Required    
*Name:              |     Type Of String        |  Required
*Type:              |     Type Of String        |  Required
*Vendor:            |     Type Of String        |  Required
*Model:             |     Type Of String        |  Required
*Spares_Id:         |     Type Of Number        |  Required
*Description:       |    Type of String         |  Required
*Name_Tag:          |     Type Of String        |  Required
*Quantity:          |     Type Of Number        |  Required
*plant:             |     Type Of String        |  Required

when all inputs are provided and sent, if succesfull, you would recieve a 200 status code to show for it.

>Dont be scared of errors
>Face them head-on *wink-wink*

If any field is missing, you get an error saying *some required field are missing*, review the inputs and try again.

if you get a 500 (Internal server error), restart the server with *npm run dev* and try again.


:rocket: :rocket: :tada: :tada: :octocat:
