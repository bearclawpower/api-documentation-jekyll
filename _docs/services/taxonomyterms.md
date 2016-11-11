---
layout: docs
title: Taxonomyterms
permalink: /docs/services/taxonomyterms/
---

[var_Images]: /docs/services/images
[var_Products]: /docs/services/products
[var_Vehiclemodels]: /docs/services/vehiclemodels
[var_Vocabularies]: /docs/services/vocabularies

Taxonomyterms

## Example requests

##### Collection
```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms
```

##### Entity
```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1
```

##### Associated [Images][var_Images]
```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/images
```

##### Associated [Products][var_Products] 
```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/products
```

##### Associated [Vehiclemodels][var_Vehiclemodels] 
```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/vehiclemodels
```

##### Parent [Vocabulary][var_Vocabularies] 
```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/vocabulary
```
