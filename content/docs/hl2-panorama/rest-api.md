---
title: REST API
description: Description of the endpoints that make up the hl2 Panorama REST API.
date: 2019-03-19T18:13:29+04:00
type: docs
weight: 3
---

hl2 Panorama provides a REST API respecting the standard methods and status codes of HTTP. We're also doing our best to provide meaningful endpoints which can be integrated easily into your infrastructure.

{{% note "warning" %}}
We will commit ourselves to support the library and maintain backwards compatibility in the future, but we reserve the right to make incompatible changes when necessary. If you experience any issue, drop us an email from the [contact](/contact) page.{{% /note %}}

## OpenAPI Specification

As described before, we strongly believe in standards as a way of communication between us and our customers. That's why we have chosen to write an [OpenAPI descriptor]({{< param "hl2PanoramaOpenAPIRepositoryURL" >}}) publicly available on GitHub.

You can browse the latest version of the descriptor and make requests from your browser (if you already have generated an API key as described [here]({{< ref "/docs/hl2-panorama/authentication" >}})) by clicking this <a href="https://rebilly.github.io/ReDoc/?url=https://raw.githubusercontent.com/hl2/hl2-panorama-openapi/master/openapi/spec.json" target="_blank">link</a>.

{{% note "info" "Found an issue?" %}}
As the repository is public you can submit an [issue]({{< param "hl2PanoramaOpenAPIRepositoryURL" >}}/isuues) - or even better open a [pull request]({{< param "hl2PanoramaOpenAPIRepositoryURL" >}}/pulls).
{{% /note %}}
