---
layout: docs
title: Resources
permalink: /docs/services/resources/
---

[var_Products]: /docs/services/products

Resources are outside, external assets that relate to [Products][var_Products] and are typically embeddable references to something on the web in some shape or form. Example 
Resource *types*<span class="text-pink">*</span>: Flickr, Imgur, Instagram, Slideshare, Tumblr, Vevo, Vimeo, Vine, YouTube. They could also be references to a PDF hosted on the Internet somewhere, or a URL to a 
Google Doc.

<div class="note unreleased">
    <h5>Room to grow</h5>
    <p>* Resources are not necessarily limited to any of these <em>types</em>. More Resource types could be added as time goes on.</p>
</div>

Resources are great for accompanying product detail page information on your website. It is our hope that you can utilize the resources we've gathered up and 
associated to [Products][var_Products] to help sell the them via various sales channels. Resources are very versatile and can be used in a number of ways. 

### Usage examples
Display a linked thumbnail of the Resource...

[![Acerbis Endurance Handguard](http://img.youtube.com/vi/ozRYBdjhIaw/3.jpg)](https://www.youtube.com/watch?v=ozRYBdjhIaw)
[![ROCK-A-BILLY Tire for Side-By-Sides by Sedona Tire & Wheel](http://img.youtube.com/vi/twUcZJkpvko/default.jpg)](https://www.youtube.com/watch?v=twUcZJkpvko)
[![FLY Racing's Kinetic Women's Over the Boot Pant](http://img.youtube.com/vi/a4w_otutzMA/default.jpg)](https://www.youtube.com/watch?v=a4w_otutzMA)
[![Hot Rods-Complete Crankshafts](http://img.youtube.com/vi/SK1MjVrkY-k/default.jpg)](https://www.youtube.com/watch?v=SK1MjVrkY-k)
[![Lite Hydrogen Limited Edition Hi-Vis Racewear](http://img.youtube.com/vi/jiU4Hd3a-hA/default.jpg)](https://www.youtube.com/watch?v=jiU4Hd3a-hA)
[![Shinko 010 Apex Radial Tire](http://img.youtube.com/vi/C2Dg8AcBMoI/default.jpg)](https://www.youtube.com/watch?v=C2Dg8AcBMoI)
[![GMAX Helmets Design & Development ](http://img.youtube.com/vi/BFwnDhLugQs/default.jpg)](https://www.youtube.com/watch?v=BFwnDhLugQs)

Embed the resources as an iframe...
<iframe src="https://www.youtube.com/embed/CPeF9546uac"></iframe>

Resources contain a property called `reference` which is typically just the *identifier* of the asset. More often than not it will simply be the YouTube identifier, such as 
`CPeF9546uac` because there are so many ways to utilize it...

```
https://www.youtube.com/watch?v=CPeF9546uac
https://youtu.be/CPeF9546uac

<iframe src="https://www.youtube.com/embed/CPeF9546uac"></iframe>

http://img.youtube.com/vi/CPeF9546uac/default.jpg
http://img.youtube.com/vi/CPeF9546uac/sddefault.jpg
http://img.youtube.com/vi/CPeF9546uac/mqdefault.jpg
http://img.youtube.com/vi/CPeF9546uac/hqdefault.jpg
http://img.youtube.com/vi/CPeF9546uac/maxresdefault.jpg
http://img.youtube.com/vi/CPeF9546uac/0.jpg
http://img.youtube.com/vi/CPeF9546uac/1.jpg
http://img.youtube.com/vi/CPeF9546uac/2.jpg
http://img.youtube.com/vi/CPeF9546uac/3.jpg
```

<div class="note info">
    <h5>But wait, there's more</h5>
    <p>There are even <strong>more</strong> YouTube hostnames that can be used: i.ytimg.com, i1.ytimg.com, i2.ytimg.com, i3.ytimg.com, i4.ytimg.com, or s.ytimg.com.</p>
</div>

The other *types* of Resources would also work the same way. We provide the Vimeo or Instagram identifier, it is up to you how you utilize it.

## Example requests

##### Collection
```
{{ site.api_protocol }}{{ site.api_url }}/resources
```

##### Entity
```
{{ site.api_protocol }}{{ site.api_url }}/resources/1
```

##### Associated [Products][var_Products]
```
{{ site.api_protocol }}{{ site.api_url }}/resources/1/products
```
