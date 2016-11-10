---
layout: docs
title: Entity
permalink: /docs/attributekeys/entity/
---

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

