# MyReads Completed Project

This is the completed MyReads project for the Udacity React Developer cours. All functionality required by [the rubric](https://review.udacity.com/#!/rubrics/918/view) has been added, along with a couple extra bits. In addition to the required functionality, there is a QuickView available by clicking on any of the book covers. This is done by including the react-modal-dialog component into the app.

## Basic Functionality
* Main screen displaying bookshelves for "Currently Reading", "Want to Read", and "Read" books
* Search screen to find new books
* A control on each book, on any screen, that allows for setting which shelf it displays on (or none)

## TL;DR

To get started developing right away:

* git clone https://github.com/thefinitemonkey/udacity-myreads.git
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What's in the Repository
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Book.js # Book component file for book display in Search and Main.
    ├── BookQuickView.js # Quick view to display when book covers are clicked on anywhere in the application.
    ├── Bookshelf.js # Component for the display of a specific collection of books.
    ├── BookshelfChanger.js # Component used for displaying and changing the shelf on which a particular book resides.
    ├── Bookshelves.js # Component for the display of multiple Bookshelf components.
    ├── BookUtils.js # Utility functions for sorting and merging book data.
    └── Search.js # Component for the display of search entry and results.
```

## Backend Server Note

This project uses a backend server that is maintained separately by Udacity and responds to the following Rest functions:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
