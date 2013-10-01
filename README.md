JSONPlaceholder
===============

JSONPlaceholder is a simple fake online REST API for testing and prototyping.

It's like [image placeholders](http://placehold.it/) but for web developers.


Why?
----

Many times when trying a new library, hacking a prototype or following a tutorial, I found myself in need of some data.
I could either use a public API or hard code some data but:
- Public APIs need registration and are often too much for basic prototyping
- Hard coding data is boring and doesn't have real latency

So here is JSONPlaceholder, I hope you'll find it useful.

You can find it running here: http://jsonplaceholder.typicode.com feel free to use it.

Features
--------

- Registration free
- Least surprise API
- Has many relationships
- Filters and nested resources
- Cross-domain ([CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) and [JSONP](http://en.wikipedia.org/wiki/JSONP))
- Supports GET, POST, PUT and DELETE verbs
- Compatible with Backbone, Ember, AngularJS, ...

Available resources
-------------------

Let's start with resources, JSONPlaceholder provides the usual suspects: 
- Posts http://jsonplaceholder.typicode.com/posts/1
- Comments http://jsonplaceholder.typicode.com/comments/1
- Albums http://jsonplaceholder.typicode.com/albums/1
- Photos http://jsonplaceholder.typicode.com/photos/1
- Users http://jsonplaceholder.typicode.com/users/1
- Todos http://jsonplaceholder.typicode.com/todos/1

Code samples
------------

Here's some code using jQuery showing what can be done with JSONPlaceholder. 
If jQuery is load you can simply copy and paste these codes in a console.

### Listing resources

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
```

### Showing a resource

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
```

### Creating a resource

```javascript
// POST adds a random id to the object sent
$.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  }
}).then(function(data) {
  console.log(data);
});

/* will return
{
  id: 134985902,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

Note: the resource will not be really created on the server but it will be faked as if. 

### Updating a resource

```javascript
// PUT returns the object sent
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  data: {
    id: 1
    title: 'foo',
    body: 'bar',
    userId: 1
  }
}).then(function(data) {
  console.log(data);
});

/* will return
{
  id: 1
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

Note: the resource will not be really updated on the server but it will be faked as if. 

### Deleting a resource

```javascript
// DELETE returns a 200 status only
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
});
```

Note: the resource will not be really deleted on the server but it will be faked as if. 

### Filtering resources

Basic filtering is supported through query parameters.

```javascript
// Will return all the posts that belong to the first user
$.ajax('http://jsonplaceholder.typicode.com/posts?userId=1').then(function(data) {
  console.log(data);
});
```

### Nested resources

One level of nested route is available.

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts/1/comments').then(function(data) {
  console.log(data);
});
// Which is equivalent to /comments?postId=1
```

Here's the list of available nested routes:
- http://jsonplaceholder.typicode.com/posts/1/comments
- http://jsonplaceholder.typicode.com/albums/1/photos
- http://jsonplaceholder.typicode.com/users/1/albums
- http://jsonplaceholder.typicode.com/users/1/photos
- http://jsonplaceholder.typicode.com/users/1/tasks
- http://jsonplaceholder.typicode.com/users/1/posts

### JSONP request

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  dataType: 'jsonp'
}).then(function(data) {
  console.log(data);
});
```

