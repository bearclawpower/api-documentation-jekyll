---
layout: docs
title: Vehiclemodels
permalink: /docs/services/vehiclemodels/
---

[var_Taxonomyterms]: /docs/services/taxonomyterms
[var_Vehicleyears]: /docs/services/vehicleyears

Vehiclemodels (or **vehicle model** or **model of vehicle**, and typically abbreviated to just "model") is a particular brand of vehicle sold under a marque by a manufacturer, 
usually within a range of models, usually of different sizes or capabilities. A few common examples are: `Bonneville 865`, `CRF250R`, `FXD Dyna Super Glide`, `GSX-R600`, `RZR 800`, 
`ZR 6000 LXR`, and so on.

The Vehiclemodel endpoint allows you to retrieve a *collection* of all our Vehiclemodels, or the data surrounding a specific Vehiclemodel via the *entity* endpoint.

You can also determine the [Taxonomyterms][var_Taxonomyterms] we use to categorize the Vehiclemodels into segments such as `ATV`, `Offroad`, `Snow`, `Street`, etc.

Lastly, if you wish to determine all the [Vehicleyears][var_Vehicleyears] associated with a particular vehicle model, the Vehiclemodels endpoint is where you would make that request.

This service can be useful for building a drop-down menu of "models".

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

...or send multiple ids separated by a comma(,)

```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels/2908,1280,4275
```

##### Associated [Taxonomyterms][var_Taxonomyterms]

```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels/2908/taxonomyterms
```

###### Associated [Vehicleyears][var_Vehicleyears]

```
{{ site.api_protocol }}{{ site.api_url }}/vehiclemodels/2908/vehicleyears
```
