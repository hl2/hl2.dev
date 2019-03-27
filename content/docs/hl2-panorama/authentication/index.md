---
title: Authentication
description: Everything you need to know to authenticate your requests to hl2 Panorama REST API.
date: 2019-03-19T18:13:14+04:00
type: docs
weight: 2
---

Any request made to the hl2 Panorama API must include the following `Authorization` header, containing a valid API key for your organization. API keys are created through the hl2 Panorama web interface.

```http
Authorization: Bearer API_KEY
```

{{< note "warning" >}}Several different keys may be created, or the same key can be shared by several users of the API. Be aware, though, that using the same key for several concurrent processes could induce rate limiting issues, just as firing many requests in rapid succession in any single process could.{{< /note >}}

## Generate an API key

To generate an API Key you must be an `owner` of the organization you want to generate a key for. The API key can be generated through the web interface in the organization settings page.

{{< page-resource "screen-1.png" >}}

Once the API key is generated you must keep it secret and store it because it will not be possible to retrieve it later.

{{< page-resource "screen-2.png" >}}

## Revoke an API key

To revoke an API Key you must be an `owner` of the key's organization. Keys can be revoked independently or all at once.

{{< page-resource "screen-3.png" >}}
