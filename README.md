# JSONPlaceholder

[JSONPlaceholder](http://jsonplaceholder.typicode.com) is a simple fake REST API for testing and prototyping.

It's like an [image placeholder](http://placehold.it/) but for web developers.

_JSONPlaceholder is powered by [JSON Server](https://github.com/typicode/json-server)._

## Why?

Most of the time when trying a new library, hacking a prototype or following a tutorial, I found myself in need of some data.

I didn't like the idea of using some public API because I had the feeling that I was spending more time registering a client and understanding a complex API than focusing on my task.

But I liked the idea of image placeholders for web designers. So I decided to code a little Express server inspired by that and here is JSONPlaceholder.

You can find it running here and are free to use it in your developments: http://jsonplaceholder.typicode.com. 

Or you can run it locally:

```
$ npm install -g jsonplaceholder
$ jsonplaceholder
```

I hope you will find it useful.

## Features

* No registration
* Zero-config
* Basic API
* "Has many" relationships
* Filters and nested resources
* Cross-domain ([CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) and [JSONP](http://en.wikipedia.org/wiki/JSONP))
* Supports GET, POST, PUT, PATCH, DELETE and OPTIONS verbs
* Compatible with Backbone, AngularJS, Ember, ...

## Available resources

Let's start with resources, JSONPlaceholder provides the usual suspects:

* Posts http://jsonplaceholder.typicode.com/posts/1
* Comments http://jsonplaceholder.typicode.com/comments/1
* Albums http://jsonplaceholder.typicode.com/albums/1
* Photos http://jsonplaceholder.typicode.com/photos/1
* Users http://jsonplaceholder.typicode.com/users/1
* Todos http://jsonplaceholder.typicode.com/todos/1

## How to

Here's some code using jQuery showing what can be done with JSONPlaceholder. 
Since GitHub loads jQuery, you can simply copy and paste these examples in a console.

### Showing a resource

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
```

### Listing resources

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
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

Note: the resource will not be really created on the server but it will be faked as if. 

### Updating a resource

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  data: {
    id: 1,
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

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  data: {
    title: 'foo'
  }
}).then(function(data) {
  console.log(data);
});

/* will return
{
  id: 1
  title: 'foo',
  body: 'quia et suscipit [...]',
  userId: 1
}
*/
```

Note: the resource will not be really updated on the server but it will be faked as if. 

### Deleting a resource

```javascript
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

* http://jsonplaceholder.typicode.com/posts/1/comments
* http://jsonplaceholder.typicode.com/albums/1/photos
* http://jsonplaceholder.typicode.com/users/1/albums
* http://jsonplaceholder.typicode.com/users/1/todos
* http://jsonplaceholder.typicode.com/users/1/posts

### JSONP request

```javascript
$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  dataType: 'jsonp'
}).then(function(data) {
  console.log(data);
});
```
