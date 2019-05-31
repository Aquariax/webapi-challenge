1. Mention two parts of Express that you learned about this week.
  
  Middleware, and Routes

2. Describe Middleware?
    Middleware is a function that takes 3 or 4 arguments and makes a change to req and res and passes that to the next middle ware, and technically almost everything in express is middleware

3. Describe a Resource? 
    
    resource is what is returned to the client, can be a string boolian ...

4. What can the API return to help clients know if a request was successful?

    http status code, one in the 200 block

5. How can we partition our application into sub-applications?

    index(to contain port to listen to), server(contains the routes and middleware), and then into routes