---
layout: docs
title: Attributekeys
permalink: /docs/attributes/attributekeys/
---

## Collection

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

## Entity

Retrieve one particular Attributekey entity.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys/15
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

## Children

For a given Attributekey, retrieve a collection of its related Attributevalues.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys/15/attributevalues
```

### Response
```json
{
  "data": [
    {
      "id": 2965,
      "attributekey_id": 15,
      "name": "Army/Orange",
      "sort": 0,
      "created_at": "2016-11-08 16:53:40",
      "updated_at": "2016-11-08 16:53:40",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2965"
        }
      ]
    },
    {
      "id": 2687,
      "attributekey_id": 15,
      "name": "ATV Green",
      "sort": 0,
      "created_at": "2016-09-06 21:08:02",
      "updated_at": "2016-09-06 21:08:02",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2687"
        }
      ]
    },
    {
      "id": 848,
      "attributekey_id": 15,
      "name": "Black",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/848"
        }
      ]
    },
    {
      "id": 2415,
      "attributekey_id": 15,
      "name": "Black Corporate",
      "sort": 0,
      "created_at": "2016-06-23 15:32:24",
      "updated_at": "2016-06-23 15:32:24",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2415"
        }
      ]
    },
    {
      "id": 2416,
      "attributekey_id": 15,
      "name": "Black Graphic",
      "sort": 0,
      "created_at": "2016-06-23 15:32:35",
      "updated_at": "2016-06-23 15:32:35",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2416"
        }
      ]
    },
    {
      "id": 2667,
      "attributekey_id": 15,
      "name": "Black/Black/Blue",
      "sort": 0,
      "created_at": "2016-09-06 18:28:54",
      "updated_at": "2016-09-06 18:28:54",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2667"
        }
      ]
    },
    {
      "id": 2666,
      "attributekey_id": 15,
      "name": "Black/Black/Red",
      "sort": 0,
      "created_at": "2016-09-06 18:28:42",
      "updated_at": "2016-09-06 18:28:42",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2666"
        }
      ]
    },
    {
      "id": 567,
      "attributekey_id": 15,
      "name": "Black/Blue",
      "sort": 0,
      "created_at": "2016-06-17 20:53:25",
      "updated_at": "2016-06-17 20:53:25",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/567"
        }
      ]
    },
    {
      "id": 2672,
      "attributekey_id": 15,
      "name": "Black/Blue/Hi-Vis Orange",
      "sort": 0,
      "created_at": "2016-09-06 18:35:49",
      "updated_at": "2016-09-06 18:35:49",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2672"
        }
      ]
    },
    {
      "id": 2646,
      "attributekey_id": 15,
      "name": "Black/Blue/White",
      "sort": 0,
      "created_at": "2016-09-02 20:18:22",
      "updated_at": "2016-09-02 20:18:22",
      "links": [
        {
          "rel": "self",
          "uri": "/attributevalues/2646"
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



