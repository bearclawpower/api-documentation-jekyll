---
layout: docs
title: Crutches
permalink: /docs/helpers/crutches/
---

<div class="grid">
    <div class="unit three-fourths">
        <p>In order to make the transition from Version 3 to Version 4 of the WPS API as painless as possible, we've created a clever concept which we've humorously<span class="text-pink">*</span> dubbed "crutches".</p>
    
        <p>This feature allows you to "crutch" to the resource using the old v3 identifier, without needing to know the v4 <code>id</code> of the resource.</p>
        
        <p>Obviously this only applies to concepts that existed in v3 and are carried forward into v4. Things like Attributes, Catalogs, Items, Vehicles, etc.</p>
    </div>
    <div class="unit one-fourth">
        <img src="/img/fallen-using-crutches.jpg">
        <small class="text-pink">* Perhaps, unless you're the guy hobbling around on them.</small>
    </div>
</div>

## Examples

### Items

In the case of the <a href="http://www.highway21.com/product/gunner-jacket/50552" target="_blank">Highway 21 Small Black <em>Gunner</em> Jacket</a>, we can make a request for that specific Item using the v4 `id` with this request:

```
{{ site.api_protocol }}{{ site.api_url }}/items/72728
```

Conversely, we can "crutch" to the same Item using the v3 identifier with this request:

```
{{ site.api_protocol }}{{ site.api_url }}/items/crutch/489-1014S
```

---

### Attributekeys
In the case of the <code class="flag">Color</code> Attributekey, we can make a request for that specific Attributekey using the v4 `id` with this request:

```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys/15
```

Conversely, we can "crutch" to the same Attributekey using the v3 identifier with this request:

```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys/crutch/3
```
