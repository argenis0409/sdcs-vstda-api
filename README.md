# VSTDA-API

# Setup 
Clone/Download the repo onto your local machine the run the following command:
```
npm install
```
## To run
```
npm start
```
Then go to your Postman, if you don't have, you should download it.
* In Postman input http://localhost:8484
   * Show amount of time the server has been running
* http://localhost:8484/api/TodoItems/
   * List of all the TO DO items
* http://localhost:8484/api/TodoItems/#
   * Display To Do item with id
   * Post a new item
   * Delete an existing item

## To test, open separate terminals and run:
```
npm start
```
```
npm test
```