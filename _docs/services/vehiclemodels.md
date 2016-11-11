---
layout: docs
title: Vehiclemodels
permalink: /docs/services/vehiclemodels/
---

[var_Taxonomyterms]: /docs/services/taxonomyterms
[var_Vehicleyears]: /docs/services/vehicleyears

Vehiclemodels

{% include fitment_access_warning.html %}

## Example requests

##### Collection
```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels
```

##### Entity
```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels/2908
```

##### Associated [Taxonomyterms][var_Taxonomyterms]
```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels/2908/taxonomyterms
```

###### Associated [Vehicleyears][var_Vehicleyears] 
```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels/2908/vehicleyears
```
