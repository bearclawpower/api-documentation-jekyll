---
layout: docs
title: Resources
permalink: /docs/services/resources/
---

[var_Products]: /docs/services/products

Resources are outside, external assets that relate to [Products][var_Products] and are typically embeddable references to something on the web in some shape or form. Example 
Resource *types*: Flickr, Imgur, Instagram, Slideshare, Tumblr, Vevo, Vimeo, Vine, YouTube. They could also be references to a PDF hosted on the Internet somewhere, or a URL to a 
Google Doc. Resources are not necessarily limited to any of these *types*. More Resource *types* could be added as time goes on.

Resources contain a property called `reference` which is typically just the *identifier* of the asset. More often than not it will simply be the YouTube identifier, such as 
`CPeF9546uac` because there are so many ways to utilize it...

```
https://www.youtube.com/watch?v=CPeF9546uac
https://youtu.be/CPeF9546uac
<iframe src="https://www.youtube.com/embed/CPeF9546uac" allowfullscreen></iframe>
```

Same goes for the other *types* of Resources. For instance, we'll provide you with the Vimeo or Instagram identifier, it is up to you how you utilize it.

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
