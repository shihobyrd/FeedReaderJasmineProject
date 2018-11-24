# Feed Reader Project

This is one of the projects I worked on to complete the Front-End Web Developer Nanodegree Program from Udacity. I was given a web-based application that reads RSS feeds and the main goal for this project was to learn that testing is an important part of the development process. By using [Jasmine](http://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code, I wrote several tests and learned strategies for developing tests in future projects.

## How to Run

When you open index.html file, you should be able to see a web-based application that reads RSS feeds. The tests that run will appear at the bottom of the page, after the feed.

## Implemented Tests

There are total 7 tests in this project. The first suite, that tests that the allFeeds variable has been defined and that it is not empty, was already implemented by Udacity. The 6 remainig tests are described below.

1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. A test that ensures the menu element is hidden by default.
4. A test that ensures the menu changes visibility when the menu icon is clicked.
5. A test that ensures when loadFeed is called, there is at leat one element loaded.
6. A test suite named "New Feed Selection" that loads feeds 2 and 3 and compares them, to ensure that loading a feed works correctly.