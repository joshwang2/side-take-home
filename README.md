# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->
1. Move each file's CSS into possibly its own CSS file (instead of global.css) to better distinguish which CSS is applied where.
2. When the screen becomes very small - around 340 pixels - the sticky navigation menu begins to develops some margin on its right
3. The screen will only show 2 properties per row even though there seems to be significant white space to the left and right of images. Same for when there's 1 property per row
3. Figure out why your import of Axios in PropertyListings is causing an error in your test file
4. Write a test for mocking the API call. For instance, possibly mock the data that is generated from the api call. Based on this mock json, determine whether or not a certain property card with that specific info from the mocked json will be generated
5. Perform tests on whether or not we are actually caching the data from the SimpleRETS endpoint
