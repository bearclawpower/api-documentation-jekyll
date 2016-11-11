---
layout: docs
title: Items
permalink: /docs/services/items/
---

[var_Attributevalues]: /docs/services/attributes/#attributevalues
[var_Countries]: /docs/services/countries
[var_Images]: /docs/services/images
[var_Products]: /docs/services/products
[var_Tags]: /docs/services/tags
[var_Vehicles]: /docs/services/vehicles

Items

## Example requests

##### Collection
```
{{ site.api_protocol }}{{ site.api_url }}/items
```

##### Entity
```
{{ site.api_protocol }}{{ site.api_url }}/items/216584
```

##### Associated [Attributevalues][var_Attributevalues]
```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/attributevalues
```

##### Parent [Country][var_Countries]
```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/country
```

##### Associated [Images][var_Images]
```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/images
```

##### Parent [Product][var_Products]
```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/product
```

##### Associated [Tags][var_Tags]
```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/tags
```

##### Associated [Vehicles][var_Vehicles]
```
{{ site.api_protocol }}{{ site.api_url }}/items/81897/vehicles
```
