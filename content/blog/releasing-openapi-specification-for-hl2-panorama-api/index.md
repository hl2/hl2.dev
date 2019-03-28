---
title: "Releasing OpenAPI Specification for hl2 Panorama API"
date: 2019-03-18T17:15:04+04:00
author: kevinpollet
---

With the release of our new documentation web site, powered by [Hugo](https://gohugo.io), we're also releasing the [**OpenAPI Specification**](https://github.com/OAI/OpenAPI-Specification#readme) for the hl2 Panorama API. As you already know, hl2 Panorama provides a **REST API** which can be used to integrate and administrate it easily. Every language has an HTTP client so you can script and integrate it as you want! As an example, the following JS script will log the authenticated account to the console:

```js
import fetch from "fetch";

const options = {
  method: "GET",
  headers: { Authorization: "Bearer API_KEY" }
};

fetch("https://api.hl2.com/panorama/v1/account", options).then(response =>
  console.log(response)
);
```

If you want to know where the API key is coming from 👉 browse the [Authentication]({{< ref "/docs/hl2-panorama/authentication" >}}) chapter in our documentation.

We're trying our best to respect the HTTP standards (methods, status codes, ...) and to provide meaningful endpoints to reduce the learning curve and to facilitate the integration into your infrastructure.

In this context, we have chosen the OpenAPI standard to describe the available API endpoints. The OpenAPI standard is heavily used and offers a lot of tools. It can also be imported in [Postman](https://www.getpostman.com/) without effort (see this [chapter]({{< ref "/docs/hl2-panorama/rest-api">}}) in our documentation).

You can browse the latest version of the hl2 Panorama specification <a href="{{< ref "/docs/hl2-panorama/openapi-specification.html">}}" target="\_blank">here</a> and the GitHub repository is public and can be accessed [here]({{< param hl2PanoramaOpenAPIRepositoryURL >}}/#readme).

Thanks for reading and helping us expand the IoT world!
