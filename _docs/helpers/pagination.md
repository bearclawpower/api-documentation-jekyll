---
layout: docs
title: Pagination
permalink: /docs/helpers/pagination/
---

The WPS API utilizes a technique called "cursoring" to paginate large result sets. Cursoring allows deep paging of massive data sets without sacrificing performance. Cursoring 
separates results into pages (the size of which are defined by the `page[size]` request parameter) and provides a means to move backwards and forwards through these pages.

Paging through the results is accomplished by sending a `page[cursor]` parameter in your requests. Cursors are provided at the bottom of the response in the `meta` property in an 
object containing defined `current`, `prev`, or `next` properties.

To retrieve cursored results, you initially avoid sending a cursor parameter to the endpoint. By default, the endpoints will assume `page[cursor]=null` was passed as the cursor 
if you do not provide one.

The `next` value is the cursor that you should send to the endpoint to receive the next batch of responses, and the `prev` is the cursor that you should send to receive the 
previous batch.

You will know that you have requested the last available page of results when the API endpoint responds with a `next` = **null** in the cursor object. This makes a standard 
`while` loop in the programming language of your choice an ideal mechanism for making several requests in succession. Just keeping looping *while* the `next` property is not 
`null`.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/products
```

Note that we did not send a `page[cursor]` initially.

### Response (truncated)
```json
{
    "data": {
        ...
    },
    "meta": {
        "cursor": {
            "current": "mZOYdKDe5K49",
            "prev": null,
            "next": "lqjMdY6e6Z07",
            "count": 10
        }
    }
}
```

We now have a means to move forwards through our data set, via the `next` cursor. Also note, the `prev` property is `null` because we're at the first page.

To retrieve the next page of results, we can send the `next` cursor we just got on our subsequent request like so...
```
{{ site.api_protocol }}{{ site.api_url }}/products?page[cursor]=lqjMdY6e6Z07
```

...And the next page of results is returned. Keep advancing until the `next` cursor is `null`, which indicates that there are no more remaining pages.

<div class="note">
    <h5>Pro Tip&rarr; You can use cursors on any endpoint</h5>
    <p>Keep in mind that you can use cursors on more than just <a href="/docs/services/products">Products</a>. Cursors work on any endpoint throughout the API.</p>
</div>
