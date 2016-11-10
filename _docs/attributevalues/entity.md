---
layout: docs
title: Entity
permalink: /docs/attributevalues/entity/
---

Retrieve one particular Attributevalues entity.

### Request
```
{{ site.api_protocol }}{{ site.api_url }}/attributevalues/901
```

### Response
```json
{
  "data": {
    "id": 901,
    "attributekey_id": 15,
    "name": "Red",
    "sort": 0,
    "created_at": "2016-06-17 20:53:25",
    "updated_at": "2016-06-17 20:53:25",
    "links": [
      {
        "rel": "self",
        "uri": "/attributevalues/901"
      }
    ]
  }
}
```
