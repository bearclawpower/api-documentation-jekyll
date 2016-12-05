---
layout: docs
title: Vehicles
permalink: /docs/services/vehicles/
---

[var_Attributevalues]: /docs/services/attributes/#attributevalues
[var_Items]: /docs/services/items
[var_Vehiclemodels]: /docs/services/vehiclemodels
[var_Vehicleyears]: /docs/services/vehicleyears

The association of [Vehiclemodels][var_Vehiclemodels] to [Vehicleyears][var_Vehicleyears] form first-class citizens we call **Vehicles**. A Vehicle is just that; an actual, 
physical vehicle. It is a veritable dirt bike, or ATV, or snowmobile, or whatever. But even still, it is not just a model that was produced at some point in time, like for example 
a `CRF250R`; it is a specific year `2014` `CRF250R` dirt bike.

The Vehicle endpoint allows you to retrieve a *collection* of all our Vehicles, or the data surrounding a specific Vehicle via the *entity* endpoint.

If any exist in our system, you can also determine the [Attributevalues][var_Attributevalues] that are associated to the Vehicle, such as OEM specifications like: `Bolt Pattern`, 
`Fuel Capacity`, etc.

Lastly, if you wish to determine all the [Items][var_Items] associated with a particular vehicle, the Vehicles endpoint is where you would make that request.

{% include fitment_access_warning.html %}

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/vehicles
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/vehicles/1
```

##### Associated [Attributevalues][var_Attributevalues]

```
{{ site.api_protocol }}{{ site.api_url }}/vehicles/1/attributevalues
```

##### Associated [Items][var_Items]

```
{{ site.api_protocol }}{{ site.api_url }}/vehicles/1/items
```
