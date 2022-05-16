# Web Application Design

## Using NodeJS create a small app that:
• Lists all products
• Display product details
• Update product details using API endpoint
• Pages should be styled using Bootstrap or any other common framework, in minimalistic fashion
## Middleware:
• Routes should follow REST standard
• Each page response should contain a custom http header called “random” and contain a system generated
random value, that changes on each request
• Each page request should be audited
## Database:
• Design database tables to fulfil the requirements above, in either MsSQL or PostgreSQL
• Data should be retrieved from the DB using stored procedures
• Provide the tables and stored procedure scripts, including any test data insert scripts


# Database Scheme Design

Looking at the DB structure
1. Find the design errors
2. Suggest index, based on the following data volumes, and explain why
a. dealer: 250 +4 new per month
b. customer: 1,900 + 3 new daily
c. vehicle_group: 7,000 + 5 new daily
d. vehicle: 30,000 + 25 new daily
e. vehicle_data: 367m + 2m new daily, with 1.5m between the hours of 08:00 and 18:00
3. Suggest improvements/alternatives