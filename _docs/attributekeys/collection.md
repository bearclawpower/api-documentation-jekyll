---
layout: docs
title: Collection
permalink: /docs/attributekeys/collection/
---

Retrieve a collection of Attributekeys.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys
```

### Response
```json
{
  "data": [
    {
      "id": 1,
      "name": "Product Type",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/1"
        }
      ]
    },
    {
      "id": 2,
      "name": "Sidewall",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/2"
        }
      ]
    },
    {
      "id": 3,
      "name": "Load Index",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/3"
        }
      ]
    },
    {
      "id": 4,
      "name": "Speed Rating",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/4"
        }
      ]
    },
    {
      "id": 5,
      "name": "Material",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/5"
        }
      ]
    },
    {
      "id": 6,
      "name": "Application",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/6"
        }
      ]
    },
    {
      "id": 7,
      "name": "Counter Shaft",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/7"
        }
      ]
    },
    {
      "id": 8,
      "name": "Performance",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/8"
        }
      ]
    },
    {
      "id": 9,
      "name": "Purpose",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/9"
        }
      ]
    },
    {
      "id": 10,
      "name": "Seal Type",
      "created_at": "2016-06-17 20:53:19",
      "updated_at": "2016-06-17 20:53:19",
      "links": [
        {
          "rel": "self",
          "uri": "/attributekeys/10"
        }
      ]
    }
  ],
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
