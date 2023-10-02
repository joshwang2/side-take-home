# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions
<!-- Please document your code & design decisions here. -->
I added/created three main files.
1. **App.js** contained all of the routing of the pages. 
2. **Layout.js** is where I created the sticky navigation bar which allowed for accessing the various pages that could be created.
3. **PropertyListings.js** is the primary page for this project. It contains an API call to simplyrets as well as many helper methods to convert the information from the API data to readable text for the user. From the API call, we created a map of each property that would then be displayed for the user. To display this data from each property, we created helper methods that did various things such as but not limited to converting TZ to MM/DD/YY, displaying a number with commas, uncapitalizing words, etc. 

# Tasks that were not completed due to time limitations
1. Move each file's CSS into possibly its own CSS file (instead of global.css) to better distinguish which CSS is applied where.
2. When the screen becomes very small - around 340 pixels - the sticky navigation menu begins to develop some margin on its right
3. The screen will only show 2 properties per row even though there seems to be significant white space to the left and right of images. This issue also applies when there's 1 property per row
3. Figure out why your import of Axios in PropertyListings is causing an error in your test file
4. Write a test for mocking the API call. For instance, possibly mock the data that is generated from the API call. Based on this mock data, determine whether or not a certain property card with that specific info from the mocked data will be generated
5. Perform tests on whether or not we are actually caching the data from the SimpleRETS endpoint
