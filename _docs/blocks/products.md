---
layout: docs
title: Products
permalink: /docs/blocks/products/
---

For a given Block, retrieve a collection of its related Products.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/blocks/27/products
```

### Response
```json
{
  "data": [
    {
      "id": 211761,
      "name": "F2 Carbon MIPS Retrospec",
      "description": "Carbon fiber, Kevlar®, Multi-directional Impact Protection System (MIPS®), Drylex Microfiber the F2 Carbon in its standard form is as close to a factory race bike as a helmet can get. Used by top FLY racers Trey Canard, Andrew Short, Weston Peick, and Justin Brayton, this helmet is out-of-the-box and on-to-the-racetrack ready.",
      "published_at": "2016-10-11 23:34:16",
      "created_at": "2016-10-11 23:34:16",
      "updated_at": "2016-10-11 23:38:21",
      "links": [
        {
          "rel": "self",
          "uri": "/products/211761"
        },
        {
          "rel": "product.attributevalues",
          "uri": "/products/211761/attributes"
        },
        {
          "rel": "product.blocks",
          "uri": "/products/211761/blocks"
        },
        {
          "rel": "product.features",
          "uri": "/products/211761/features"
        },
        {
          "rel": "product.images",
          "uri": "/products/211761/images"
        },
        {
          "rel": "product.resources",
          "uri": "/products/211761/resources"
        },
        {
          "rel": "product.sites",
          "uri": "/products/211761/sites"
        },
        {
          "rel": "product.tags",
          "uri": "/products/211761/tags"
        }
      ]
    },
    {
      "id": 211762,
      "name": "F2 Carbon MIPS Replica",
      "description": "Carbon fiber, Kevlar®, Multi-directional Impact Protection System (MIPS®), Drylex Microfiber the F2 Carbon in its standard form is as close to a factory race bike as a helmet can get. Used by top FLY racers Trey Canard, Andrew Short, Weston Peick, and Justin Brayton, this helmet is out-of-the-box and on-to-the-racetrack ready.",
      "published_at": "2016-10-11 23:41:40",
      "created_at": "2016-10-11 23:41:40",
      "updated_at": "2016-10-11 23:41:40",
      "links": [
        {
          "rel": "self",
          "uri": "/products/211762"
        },
        {
          "rel": "product.attributevalues",
          "uri": "/products/211762/attributes"
        },
        {
          "rel": "product.blocks",
          "uri": "/products/211762/blocks"
        },
        {
          "rel": "product.features",
          "uri": "/products/211762/features"
        },
        {
          "rel": "product.images",
          "uri": "/products/211762/images"
        },
        {
          "rel": "product.resources",
          "uri": "/products/211762/resources"
        },
        {
          "rel": "product.sites",
          "uri": "/products/211762/sites"
        },
        {
          "rel": "product.tags",
          "uri": "/products/211762/tags"
        }
      ]
    }
  ],
  "meta": {
    "cursor": {
      "current": "mZOYdKDe5K49",
      "prev": null,
      "next": null,
      "count": 2
    }
  }
}
```
