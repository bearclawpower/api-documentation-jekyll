---
layout: docs
title: Images
permalink: /docs/blocks/images/
---

For a given Block, retrieve a collection of its related Images.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/blocks/27/images
```

### Response
```json
{
  "data": [
    {
      "id": 50863,
      "domain": "wpsassets.s3.amazonaws.com/",
      "filename": "fa0b-57fe72e318098.jpg",
      "path": "images/",
      "alt": null,
      "mime": "image/jpeg",
      "size": 332248,
      "signature": "e8361e4ae27ebeb94d18d8834c307b5e6458f7042e0324e24571c9683e522a9f",
      "created_at": "2016-10-12 17:29:08",
      "updated_at": "2016-10-12 17:29:08",
      "links": [
        {
          "rel": "self",
          "uri": "/images/50863"
        }
      ]
    },
    {
      "id": 50862,
      "domain": "wpsassets.s3.amazonaws.com/",
      "filename": "e529-57fe72e231f8b.jpg",
      "path": "images/",
      "alt": null,
      "mime": "image/jpeg",
      "size": 273181,
      "signature": "c692a8f35085e0c565f6c496c69486ffdc23b769895b97c75088a57a1e68c24a",
      "created_at": "2016-10-12 17:29:07",
      "updated_at": "2016-10-12 17:29:07",
      "links": [
        {
          "rel": "self",
          "uri": "/images/50862"
        }
      ]
    },
    {
      "id": 50861,
      "domain": "wpsassets.s3.amazonaws.com/",
      "filename": "37ca-57fe72e160a0e.jpg",
      "path": "images/",
      "alt": null,
      "mime": "image/jpeg",
      "size": 216484,
      "signature": "a66ca31eb021205c724c4448c7fab975bd52d9492760d647860719b2a4572bd8",
      "created_at": "2016-10-12 17:29:06",
      "updated_at": "2016-10-12 17:29:06",
      "links": [
        {
          "rel": "self",
          "uri": "/images/50861"
        }
      ]
    }
  ],
  "meta": {
    "cursor": {
      "current": "mZOYdKDe5K49",
      "prev": null,
      "next": null,
      "count": 3
    }
  }
}
```
