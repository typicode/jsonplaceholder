# JSONPlaceholder

[JSONPlaceholder](https://jsonplaceholder.typicode.com) is a simple fake REST API for testing and prototyping.

It's like an [image placeholder](http://placehold.it/) but for web developers.

JSONPlaceholder is powered by [JSON Server](https://github.com/typicode/json-server).

<a href="https://www.patreon.com/typicode">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
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
* HTTP or HTTPS
* Compatible with React, Angular, Vue, Ember, ...

## Guide

For examples and more, you can visit https://jsonplaceholder.typicode.com

## Detailed Examples

For each endpoint, example requests and responses are provided to demonstrate how the API works. See example responses for GET, POST, PUT, and DELETE requests so you can understand the data structure. Each request shows possible parameters and returns detailed response bodies.

## Error Handling

This API includes error responses for common HTTP status codes, such as:

- **404 Not Found**: If a requested resource does not exist.
- **500 Internal Server Error**: If something goes wrong on the server side.
- **400 Bad Request**: If the request format is invalid.

### Example:

```json
{
  "error": "Resource not found"
}
```

## Rate Limiting

While there are no official rate limits for this API, you should avoid sending too many requests in a short period of time to prevent being blocked. In case of rate-limiting, a relevant HTTP status code will be returned.

## Advanced Filters and Query Parameters

JSONPlaceholder supports a variety of query parameters for more advanced data retrieval, such as filtering by user ID, limiting the number of posts, or sorting data.

### Example:

```http
GET /posts?userId=1&limit=5
```

This retrieves the first 5 posts for a user with ID 1.

## Common Use Cases

- **Mock Data for Front-End Development**: Use JSONPlaceholder to populate your app with placeholder data while you work on UI/UX.
- **Prototype Quickly**: If you need a quick backend for your project, this API can serve as a temporary solution for things like user posts, comments, and other common data structures.
