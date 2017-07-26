---
layout: page
title: Frequently Asked Questions
---

##### Q. Can you provide me your data in _____ format?

A. Our API is designed to provide the necessary data for experienced programmers to consume, store, and integrate into their system. The data we provide are in a language-independent data-interchange format so that almost any programming language can be used to request and consume the data. The format we use is JSON which is not specific to any platform, programming language, or web system.

---

##### Q. Can you give me the examples of the code that WPS uses to build your websites?

At this time, we do not provide any application or mechanism to consume our data. We’ve been asked numerous times if we could share examples or code snippets of how we built our sites and how we consume our own data. Unfortunately, our sites are fairly custom-built and don't use standard off-the-shelf software. If we were to share our code, it probably wouldn't help you much.

---

##### Q. Can you help me import your data into my ______ system?

We are happy to assist in making sure every dealer has access to our data through our API; however, as a business rule we generally don't assist with how to implement the data into a particular system. There are simply too many different databases, shopping carts, and other software environments for us to provide support for them all. A lot of dealers ask us how to import the provided data directly into their database and there just isn’t a simple process for that. There will always be some degree of integration code dealers will need to write to import our data into their database. The data format we use was not created to be conducive to any specific Database Management System (DBMS). Therefore in order to get the data into a particular system the first step is to request it from us, store it, parse it, and format it in a way that's conducive to import into the particular database.

---

##### Q. Do you provide a turn-key solution or service I can subscribe to?

In the future we may provide a service or some kind of all-inclusive web solution that we can put in the hands of our dealers and let them run with it. But right now we merely provide the data; it is up to the individual dealers what they do with it.

---

##### Q. What timezone are dates returned in?

A. All timestamps are in the Coordinated Universal Time (UTC) +0000 UTC standard. UTC can be assumed on all dates that are returned from the API such as <code>created_at</code> and <code>updated_at</code>.
