This project consists of two repositories

# About the Project
- #[socket-io-node](https://github.com/kkrish39/socket-io-node) (Backend)
    - To handle the search query and to enable dynamic data update
    - Tenchnologies
        - Node.js
        - Express
        - socket.io

- #react-socketio-search (Frontend)
    - To enable search interface and to display search results
    - Technologies
        - React & Redux
        - axios (To perform rest requests)
        - lodash (Object manipulations)
        - moment (Formatting date fields)
        - socket.io (To enable real-time data update)

# Demo Link
- https://drive.google.com/file/d/1biBRajuErctQJUOeUBrlA-Myg9eWW6We/view?usp=sharing

# Added Features
    - Handling search for a given query (Please refer to Product Design Approach 1 for more info)
    - Handling dynamic rendering if there is a new incoming data. (Please refer to product Design Approach 2 for more info)
    - Minor tweak to filter by source. (Like calendar, slack, etc.)
    - On hover over the info icon, detailed card info will be displayed
    - Ability to clear the search input.

# Known Bugs
    - The custom data only returns only the slack data. So even if you are searching for a calendar, slack tile will get returned as an updated result.
    - Didn't custom handle the close connection of sockets. Anyways the sockets will be closed on reload of the page.
    - Footer is not completed yet.
    - There is one DOM warning being thrown in the console because of material-ui component. It's a open bug in Material-UI itself

# Product Design Approach
1) How search works?
    - For a given search query, there will be a check to see if it's one of the sources. If yes, it will return all the objects related to it. If not, it will check for matching terms in every source and return.
    - To avoid a search click, I kept the search dynamic for every letter input. The code is commented right now. To enable it, go to index.js in the actions folder of acme_ui and uncomment line number 40 and 43.

2) How dynamic update works?
    - The update logic is kept as a probability right now. I'm generating a random number which is either 1 or 0. If 1 it will add an object to the slack object. If 0, do nothing. 
    - For every 10 seconds, an identifier with updated data will be received in the UI. Based on if it's a new data, logic will be handled to render it.
    - In the frontend, there will be a green notification at the bottom of the screen saying new data is available. It will also dynamically add the newly received data.

3) How to perform ranking?
    - Didn't perform any specific ranking. But my idea will be to rank based on the timestamp and the source. My source ranking will be as follows ["calendar", "contacts", "slack", "twitter", "dropbox"]. I will give weight to it. Then a specific weight if it's given. The cumulative weight will be taken for ranking and displaying in the UI.

4) LAUNCH, JOIN, REACH OUT are only dummy buttons

5) Trade-off between normalizing the data and adding a separate code segment to build UI for each source. I chose the approach not normalize and using separate code components. 
