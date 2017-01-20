---
layout: docs
title: Vehicleyears
permalink: /docs/services/vehicleyears/
---

[var_Vehiclemodels]: /docs/services/vehiclemodels

Vehicleyears (or **vehicle year** or **year of vehicle**, and typically abbreviated to just “year”) is used to describe approximately the year in which a vehicle was produced.
(ie. `1995`, `2006`, `2013`, etc.)

The Vehicleyear endpoint allows you to retrieve a *collection* of all our Vehicleyears, or the data surrounding a specific Vehicleyear via the *entity* endpoint.

You can also determine all the [Vehiclemodels][var_Vehiclemodels] that are associated with a given Vehicleyear.

This service can be useful for building a drop-down menu of "years".

{% include fitment_access_warning.html %}

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/vehicleyears
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/vehicleyears/61
```

###### Associated [Vehiclemodels][var_Vehiclemodels]

```
{{ site.api_protocol }}{{ site.api_url }}/vehicleyears/61/vehiclemodels
```
