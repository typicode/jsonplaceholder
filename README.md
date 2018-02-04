# JSONPlaceholder

[JSONPlaceholder](https://jsonplaceholder.typicode.com) is a simple fake REST API for testing and prototyping.

It's like an [image placeholder](http://placehold.it/) but for web developers.

JSONPlaceholder is powered by [JSON Server](https://github.com/typicode/json-server).

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
* HTTP or HTTPS
* Compatible with React, Angular, Vue, Ember, ...

## Available resources

Let's start with resources, JSONPlaceholder provides the usual suspects:

* Posts https://jsonplaceholder.typicode.com/posts/1
* Comments https://jsonplaceholder.typicode.com/comments/1
* Albums https://jsonplaceholder.typicode.com/albums/1
* Photos https://jsonplaceholder.typicode.com/photos/1
* Users https://jsonplaceholder.typicode.com/users/1
* Todos https://jsonplaceholder.typicode.com/todos/1

## How to

Here's some code using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) showing what can be done with JSONPlaceholder.

### Showing a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Listing resources

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Creating a resource

```js
// POST adds a random id to the object sent
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

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

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

/* will return
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

/* will return
{
  id: 1,
  title: 'foo',
  body: 'quia et suscipit [...]',
  userId: 1
}
*/
```

Note: the resource will not be really updated on the server but it will be faked as if. 

### Deleting a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
```

Note: the resource will not be really deleted on the server but it will be faked as if. 

### Filtering resources

Basic filtering is supported through query parameters.

```js
// Will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Nested resources

One level of nested route is available.

```js
// equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))
```

Here's the list of available nested routes:

* https://jsonplaceholder.typicode.com/posts/1/comments
* https://jsonplaceholder.typicode.com/albums/1/photos
* https://jsonplaceholder.typicode.com/users/1/albums
* https://jsonplaceholder.typicode.com/users/1/todos
* https://jsonplaceholder.typicode.com/users/1/posts
