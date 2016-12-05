---
layout: docs
title: Blocks
permalink: /docs/services/blocks/
---

[var_Images]: /
[var_Products]: /

Blocks are essentially a chunk of HTML that we attach to [Products][var_Products]. Blocks can also have [Images][var_Images] associated with them, and the references to those are 
typically embedded within the HTML data itself.

The `data` property is a *string* of markup that is commonly included when displaying product detail on the web.

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/blocks
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/blocks/1
```

##### Associated [Images][var_Images]

```
{{ site.api_protocol }}{{ site.api_url }}/blocks/27/images
```

##### Associated [Products][var_Products]

```
{{ site.api_protocol }}{{ site.api_url }}/blocks/27/products
```
