---
layout: docs
title: Attributevalues
permalink: /docs/attributes/attributevalues/
---

## Collection

Retrieve a collection of Attributevalues.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributevalues
```

### Response
```json
{
  "data": [
    {
      "id": 1,
      "attributekey_id": 1,
      "name": "Brakes",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/1"
        }
      ]
    },
    {
      "id": 2,
      "attributekey_id": 33,
      "name": "Front",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2"
        }
      ]
    },
    {
      "id": 3,
      "attributekey_id": 14,
      "name": "132",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/3"
        }
      ]
    },
    {
      "id": 4,
      "attributekey_id": 15,
      "name": "White/Black",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/4"
        }
      ]
    },
    {
      "id": 5,
      "attributekey_id": 15,
      "name": "Blue/Black",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/5"
        }
      ]
    },
    {
      "id": 6,
      "attributekey_id": 15,
      "name": "Green/Black/White",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/6"
        }
      ]
    },
    {
      "id": 7,
      "attributekey_id": 15,
      "name": "White/Orange",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/7"
        }
      ]
    },
    {
      "id": 8,
      "attributekey_id": 15,
      "name": "Flo. Orange",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/8"
        }
      ]
    },
    {
      "id": 9,
      "attributekey_id": 15,
      "name": "White/Yellow",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/9"
        }
      ]
    },
    {
      "id": 10,
      "attributekey_id": 15,
      "name": "Flo Green",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/10"
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

## Entity

Retrieve one particular Attributevalue entity.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributevalues/4
```

### Response
```json
{
  "data": {
    "id": 4,
    "attributekey_id": 15,
    "name": "White/Black",
    "sort": 0,
    "created_at": "2016-06-17 20:53:25",
    "updated_at": "2016-06-17 20:53:25",
    "links": [
      {
        "rel": "self",
        "uri": "/attributevalues/4"
      }
    ]
  }
}
```

## Parent

For a given Attributevalue, retrieve its one related Attributekey.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributevalues/4/attributekey
```

### Response
```json
{
  "data": {
    "id": 15,
    "name": "Color",
    "created_at": "2016-06-17 20:53:19",
    "updated_at": "2016-11-08 21:23:39",
    "links": [
      {
        "rel": "self",
        "uri": "/attributekeys/15"
      }
    ]
  }
}
```
