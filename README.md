# INVENTORY MANAGEMENT SYSTEM

#### This backend can be tested with postman, the endpoint 'http://localhost:4500/api/section/' can create, read, update and delete a section.

- To Get all sections: A **GET** request to 'http://localhost:4500/api/section/';

- To Get a single section: Send a **GET** request to 'http://localhost:4500/api/section/' with a query parameter `Name` to the endpoint;

- To Update a single section: Send a **PATCH** request to 'http://localhost:4500/api/section/' with a query parameter `Name`, and add a `Request Body`;

- To delete a single section: Send a **DELETE** request to 'http://localhost:4500/api/section/' with a query parameter `Name`;

- To create a section:  Send a **POST** request to 'http://localhost:4500/api/section/' coupled with a request body in JSON format.
to create a section, you need to provide these inputs;
```javascript
{
  Location_Id:{
    type: Number,
    required: true}

  Plant_section:{
    type: String,
    required: true}

  Common_name:{
    type: String,
    required: true}

  Name:{
    type: String,
    required: true}

  Type:{
    type: String,
    required: true}

  Vendor:{
    type: String,
    required: true}

  Model:{
    type: String,
    required: true}

  Spares_Id:{
    type: Number,
    required: true}

  Description:{
    type: String,
    required: true}

  Name_Tag:{
    type: String,
    required: true}

  Quantity:{
    type: Number,
    required: true}

  plant:{
    type: String,
    required: true}
    }
```


when all inputs are provided and sent, if succesfull, you would recieve a *200* status code to show for it.
The response would be in a *JSON* format.

Below is an example of a response to the create section as received from *POSTMAN*

```javascript
{
    "Location_Id": 1,
    "Plant_section": "Section-2",
    "Common_name": "Spanner",
    "Name": "Tool",
    "Type": "Building Tool",
    "Vendor": "Hisense",
    "Model": "SER452T",
    "Spares_Id": 342,
    "Description": "None Given",
    "Name_Tag": "Hamer Tool",
    "Quantity": 200,
    "plant": "Plant-one",
    "_id": "645528c6c5de1f12876b4e6f",
    "createdAt": "2023-05-05T16:03:18.432Z",
    "updatedAt": "2023-05-05T16:03:18.432Z",
    "__v": 0
}

```

If any field is missing, you get an error saying *some required field are missing*, review the inputs and try again.

if you get a *500* [Internal server error], restart the server with *npm run dev* and try again.


:rocket: :rocket: :tada: :tada: :octocat:
