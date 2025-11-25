## Guide

You can use JSONPlaceholder with any type of project that needs to get JSON data (React, Vue, Node, Rails, Swift, Android, ...).

Below you'll find examples using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). You can copy paste them in your browser Console to quickly test JSONPlaceholder.

### Get a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))

// Output
{
  id: 1,
  title: '[...]',
  body: '[...]',
  userId: 1
}
```

<div id="codefund"><!-- fallback content --></div>
<script src="https://app.codefund.io/properties/338/funder.js" async="async"></script>

### List all resources

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

// Output
[
  { id: 1, title: '[...]' /* ... */ },
  /* ... */
  { id: 100, title: '[...]' /* ... */ }
]
```

### Create a resource

```js
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

// Output
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```

Important: the resource will not be really created on the server but it will be faked as if. In other words, if you try to access a post using 101 as an id, you'll get a 404 error.

### Update a resource

#### With PUT

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

// Output
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```

#### With PATCH

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

// Output
{
  id: 1,
  title: 'foo',
  body: '[...]',
  userId: 1
}
```

Important: the resource will not be really updated on the server but it will be faked as if. 

### Delete a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
```

Important: the resource will not be really deleted on the server but it will be faked as if. 

### Paginate resources

JSONPlaceholder supports pagination through query parameters. You can use any of the following approaches:

#### Using `_limit`

```js
// Get only the first 5 posts
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(response => response.json())
  .then(json => console.log(json))

// Output: Array of 5 posts (IDs 1-5)
```

#### Using `_page` with `_limit`

```js
// Get 5 posts starting from page 2
fetch('https://jsonplaceholder.typicode.com/posts?_page=2&_limit=5')
  .then(response => response.json())
  .then(json => console.log(json))

// Output: Array of 5 posts (IDs 6-10)
// Formula: returns items from (_page-1) * _limit to _page * _limit
```

#### Using `_start` and `_end`

```js
// Get posts from index 10 to 19 (zero-indexed)
fetch('https://jsonplaceholder.typicode.com/posts?_start=10&_end=20')
  .then(response => response.json())
  .then(json => console.log(json))

// Output: Array of 10 posts (IDs 11-20)
// Note: _start is inclusive, _end is exclusive
```

You can combine pagination with filters (see below).

### Filter resources

Basic filtering is supported through query parameters.

```js
// Will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(json => console.log(json))

// Output: Array of 10 posts (IDs 1-10)
```

#### Filter case sensitivity

**Important**: Filter parameters are case-sensitive. Using incorrect casing will cause the filter to be ignored and return all results instead of an error.

```js
// ✓ Correct - returns posts for user 1
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

// ✗ Wrong casing - returns ALL 100 posts (filter is silently ignored)
fetch('https://jsonplaceholder.typicode.com/posts?UserId=1')
fetch('https://jsonplaceholder.typicode.com/posts?userid=1')
```

Always use the exact property names as they appear in the resource: `userId`, `id`, `postId`, etc.

#### Combining multiple filters

You can combine multiple filters using `&`. Filters use AND logic (all conditions must match).

```js
// Get the post with userId=1 AND id=5
fetch('https://jsonplaceholder.typicode.com/posts?userId=1&id=5')
  .then(response => response.json())
  .then(json => console.log(json))

// Output: Single post object with ID 5
```

#### Combining filters with pagination

```js
// Get first 3 posts from user 1
fetch('https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3')
  .then(response => response.json())
  .then(json => console.log(json))

// Output: Array of 3 posts (IDs 1-3)
```

### Nested resources

One level of nested route is available. Nested routes are equivalent to using query parameters on the related resource.

```js
// These two requests return identical results:

// Nested route (RESTful style)
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))

// Query parameter alternative
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  .then(response => response.json())
  .then(json => console.log(json))

// Both return: Array of 5 comments for post 1
```

Available nested routes:

* https://jsonplaceholder.typicode.com/posts/1/comments
* https://jsonplaceholder.typicode.com/albums/1/photos
* https://jsonplaceholder.typicode.com/users/1/albums
* https://jsonplaceholder.typicode.com/users/1/todos
* https://jsonplaceholder.typicode.com/users/1/posts

### Error handling

JSONPlaceholder returns different responses for different error conditions:

#### Invalid resource ID (404)

```js
// Requesting a post that doesn't exist
fetch('https://jsonplaceholder.typicode.com/posts/999')
  .then(response => {
    console.log(response.status); // 404
    return response.json();
  })
  .then(json => console.log(json))

// Output: {} (empty object)
```

#### Invalid filter value (200 with empty array)

```js
// Filtering by a userId that doesn't exist
fetch('https://jsonplaceholder.typicode.com/posts?userId=999')
  .then(response => {
    console.log(response.status); // 200 (not 404)
    return response.json();
  })
  .then(json => console.log(json))

// Output: [] (empty array)
```

Note: Invalid filter values return a successful response (200) with an empty array, not an error status code.
