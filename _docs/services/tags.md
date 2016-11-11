---
layout: docs
title: Tags
permalink: /docs/services/tags/
---

[var_Images]: /docs/services/images
[var_Items]: /docs/services/items
[var_Products]: /docs/services/products

Tags

## Example requests

##### Collection
```
{{ site.api_protocol }}{{ site.api_url }}/tags
```

##### Entity
```
{{ site.api_protocol }}{{ site.api_url }}/tags/25
```

##### Associated [Images][var_Images]
```
{{ site.api_protocol }}{{ site.api_url }}/tags/25/images
```

##### Associated [Items][var_Items] 
```
{{ site.api_protocol }}{{ site.api_url }}/tags/25/items
```

##### Associated [Products][var_Products] 
```
{{ site.api_protocol }}{{ site.api_url }}/tags/25/products
```
