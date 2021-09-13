# Welcome to Announce me App!

**Announce me** it's a web application where you can publish announces these have a category, description, status,  Once you have finished register you can publish announces, filters, and delete them.


## Tech Stack

- Node Js
- Mongo DB
- Jest
- Ec2
- Joi
- Docker


## Team in Charge

Development by 
- Melisa Castro


## Endpoints

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.
**Endpoints:**
- POST /users  
Register users
- POST /announces
Create announces, user should be authenticated.
- GET /announces/:id/categories/:search
Get announces by category
- Get /users/:id/announces
Get announces by user
- PATCH /announces/:status
Update announce's status, user should be authenticated. 
- DELETE /announce/:id
Delete an announce, user should be authenticated. 

## Schemas DB

All persistence is with MongoDB, the schemas are:

> Users {
> id: Number,
> name: String,
> password: String,
> announces: [ {
>  announceId: { type: Number, required: true },
>  announceDescription: { type: String, required: true },
>  announceCategory: { type: String, required: true },
>  announceStatus: { type: Number, required: true }.
>  announceData : { type: Data, required: true }
>}]
> }
	
