/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs defined and the URLs are not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names defined and the names are not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element is hidden by default', function() {
            const menuHidden = document.body.classList.contains('menu-hidden');
            expect(menuHidden).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('changes visibility when the menu icon is clicked', function() { 
            const menuIconLink = document.querySelector('.menu-icon-link');

            menuIconLink.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            menuIconLink.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
         });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('have at least a single .entry element within the .feed container', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length).not.toBe(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    /* Loads feeds at position 2 and 3 and compares them - they shouldn't be equal*/
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        let feed2 = [];
        var doneFunction;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        //beforeAll(function (done) {
        //    setTimeout(done, 5000);
        //});

        function loadFeed2Done () {
            //console.log("feed 2 loaded");
            Array.from(feed.children).forEach( function(entry) {
                feed2.push(entry.innerText);
            });
            loadFeed(3, loadFeed3Done);
        } 

        function loadFeed3Done () {
            //console.log("feed 3 loaded");
            doneFunction();
        }

        beforeEach(function(done) {
            //console.log("starting");
            doneFunction = done;
            loadFeed(2, loadFeed2Done);
        });


        it('content changes when a new feed is loaded', function() {
            Array.from(feed.children).forEach( function(entry, index) {
                expect(feed2[index] === entry.innerText).not.toBe(true);
            });
        });
    });
});