---
layout: docs
title: Brands
permalink: /docs/services/brands/
---

[var_Images]: /docs/services/images
[var_Items]: /docs/services/items

A Brand is a unique design, sign, symbol, words, or a combination of these, employed in creating an image that identifies a product and differentiates it from its competitors. 

In the WPS API, Brands refer to products manufactured by a particular company under a particular name. This endpoint allows you to retrieve a *collection* of all our Brands, or 
the data surrounding a specific Brand via the *entity* endpoint.

## Example requests

##### Collection
```
{{ site.api_protocol }}{{ site.api_url }}/brands
```

##### Entity
```sh
{{ site.api_protocol }}{{ site.api_url }}/brands/135
```

##### Associated Images
 Get all the [Images][var_Images] associated to the "FLY Racing" Brand.
```shell
{{ site.api_protocol }}{{ site.api_url }}/brands/135/images
```

##### Associated Items
Get all the [Items][var_Items] associated to the "FLY Racing" Brand.
```bash
{{ site.api_protocol }}{{ site.api_url }}/brands/135/items
```
