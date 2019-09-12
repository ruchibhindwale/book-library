# Instructions to run the project

1) Please git clone the project from github by running git clone https://github.com/ruchibhindwale/book-library.git
2) Navigate to src/UI folder within project and run npm install . to install all the npm dependencies
3) Navigate to src/Node folder within project and run npm install . to install all the npm dependencies
4) In src/Node run node index.js to start the server on port 3007. This hosts the node backend code
5) In src/UI run npm start to get the UI started. You should be able to see the application on http://localhost:3000/
6) There is some initial data which is showing the books on the UI
7) Adding, editing, searching a book should work
8) If you resize the window, the UI is responsive and hence gracefully readjusts.

For state management redux is used. Backend code runs on Node which saves, reads, updated the book data from a json file which is stored under data/books.json file. The UI connects to the backend using axios. The backend is running on port 3007 and UI by default on 3000. 

POSSIBLE IMMEDIATE ENHANCEMENTS -

As such there are a lot of enhancements that can be made to the project. I am listing below a few which I would have liked to fo but could not complete in the given time frame - 

1) There is a bug where once you search and then try to go to the LIST link in the navigation, it does not work. I will be putting in a fix soon.
2) Clearing Search 
3) Adding more fields like publish Date, genre to the add book form
4) Showing the Add, List navigation links as hamburger menu items

Please let me know if there is any issue running the project. I would be happy to resolve if there is any issue. 
