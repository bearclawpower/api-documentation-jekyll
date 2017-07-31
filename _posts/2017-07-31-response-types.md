---
layout: news_item
title: 'Response types'
date: 2017-07-31 08:55:12 -0700
author: AustinMaddox
categories: [latest news]
---

Recently it was brought to our attention that there may be some confusion regarding differing return types from the API. We'd like to take this opportunity to clarify some of the confusion and hopefully save you some time when dealing with the parsing of various responses.

The flexibility of being able to send multiple IDs separated by a comma with a GET request is nice, but it introduces two different data types of results. If you specify just one ID then you get a record <code class="flag">{"data": {...}}</code> but if there is more than one ID you get an array <code class="option">{"data": [{...}...{...}]}</code>. This can make parsing into the right object difficult.

The thing to remember is the differing return types is a result of what you're actually returning, an <em>entity</em> or <em>collection</em>. Let's use some examples...

### 1. All Attributekeys
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys
```
Returns <code class="option">{"data": [{...}...{...}]}</code>, a multiple-entity collection response which makes sense to be an "array".

### 2. One Attributekey
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys/15
```
Returns <code class="flag">{"data": {...}}</code>, a single entity response which makes sense to be an "object" and will never be an array. It wouldn't make sense to be an array with ever only one element.

### 3. A set of Attributekeys filtered by the 'updated_at' date
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys?filter[updated_at][gt]=2017-07-25
```
Returns <code class="option">{"data": [{...}...{...}]}</code>, a multiple-entity collection response which makes sense to be an "array" because you are just filtering a collection by the `updated_at` date.

### 4. A set of Attributekeys filtered by IDs 
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys/15,17
```
Returns <code class="option">{"data": [{...}...{...}]}</code>, a multiple-entity collection response which makes sense to be an "array" because you are just filtering a collection to those specific Id's.

When you make the above request, what you are really doing is just a shortcut for...
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys?filter[id]=15|17
```
...They both return the exact same thing.

So, because our API is so flexible and there are so many ways to query the data, it is really just a matter of the type of response you'd like to receive. If you want to clearly separate the two return types, stick to standard entity responses where you can expect an object (ie. {{ site.api_protocol }}{{ site.api_url }}/attributekeys/15), and collection requests that utilize "filter" where you can expect an array.

The confusion lies in the tricky little helper where you can send multiple IDs separate by a comma (ie. {{ site.api_protocol }}{{ site.api_url }}/attributekeys/15,17). That type of request is obviously throwing people off. We're even considering leaving that trick out of the documentation to avoid confusion. What you need to understand is that #2 and #4 in the above examples are not the same thing. They are two very different ways of querying the API.
