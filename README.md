# JSONPlaceholder

[JSONPlaceholder](https://jsonplaceholder.typicode.com) is a simple fake REST API for testing and prototyping.

It's like an [image placeholder](http://placehold.it/) but for web developers.

JSONPlaceholder is powered by [JSON Server](https://github.com/typicode/json-server).

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/6WUB3WBwbmZXbZxzrUv5y2A5/typicode/jsonplaceholder'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/6WUB3WBwbmZXbZxzrUv5y2A5/typicode/jsonplaceholder.svg' />
</a>

## Why?

Most of the time when trying a new library, hacking a prototype or following a tutorial, I found myself in need of some data.

I didn't like the idea of using some public API because I had the feeling that I was spending more time registering a client and understanding a complex API than focusing on my task.

But I liked the idea of image placeholders for web designers. So I decided to code a little Express server inspired by that and here is JSONPlaceholder.

You can find it running here and are free to use it in your developments: https://jsonplaceholder.typicode.com. 

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

* Posts https://jsonplaceholder.typicode.com/posts/1
* Comments https://jsonplaceholder.typicode.com/comments/1
* Albums https://jsonplaceholder.typicode.com/albums/1
* Photos https://jsonplaceholder.typicode.com/photos/1
* Users https://jsonplaceholder.typicode.com/users/1
* Todos https://jsonplaceholder.typicode.com/todos/1

## How to

Here's some code using jQuery showing what can be done with JSONPlaceholder. 
Since GitHub loads jQuery, you can simply copy and paste these examples in a console.

### Showing a resource

```javascript
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
```

### Listing resources

```javascript
$.ajax('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
```

### Creating a resource

```javascript
// POST adds a random id to the object sent
$.ajax('https://jsonplaceholder.typicode.com/posts', {
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
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
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
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
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
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
});
```

Note: the resource will not be really deleted on the server but it will be faked as if. 

### Filtering resources

Basic filtering is supported through query parameters.

```javascript
// Will return all the posts that belong to the first user
$.ajax('https://jsonplaceholder.typicode.com/posts?userId=1').then(function(data) {
  console.log(data);
});
```

### Nested resources

One level of nested route is available.

```javascript
$.ajax('https://jsonplaceholder.typicode.com/posts/1/comments').then(function(data) {
  console.log(data);
});
// Which is equivalent to /comments?postId=1
```

Here's the list of available nested routes:

* https://jsonplaceholder.typicode.com/posts/1/comments
* https://jsonplaceholder.typicode.com/albums/1/photos
* https://jsonplaceholder.typicode.com/users/1/albums
* https://jsonplaceholder.typicode.com/users/1/todos
* https://jsonplaceholder.typicode.com/users/1/posts

### JSONP request

```javascript
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
  dataType: 'jsonp'
}).then(function(data) {
  console.log(data);
});
```
