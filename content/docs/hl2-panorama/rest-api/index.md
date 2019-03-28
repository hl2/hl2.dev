---
title: REST API
description: Description of the endpoints that make up the hl2 Panorama REST API.
date: 2019-03-19T18:13:29+04:00
weight: 3
---

hl2 Panorama provides a REST API respecting the standard methods and status codes of HTTP. We're also doing our best to provide meaningful endpoints which can be integrated easily into your infrastructure.

## OpenAPI Specification

As described before, we strongly believe in standards as a way of communication between us and our customers. That's why we have chosen to write an OpenAPI descriptor publicly available on GitHub. Here is a quote from the readme of the OpenAPI Specification [repository](https://github.com/OAI/OpenAPI-Specification) on GitHub.

{{< blockquote >}}The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.{{< /blockquote >}}

You can browse the latest version of the hl2 Panorama API descriptor by clicking this <a href="{{< ref "docs/hl2-panorama/openapi-specification.html" >}}" target="\_blank">link</a> or by browsing the [repository]({{< param "hl2PanoramaOpenAPIRepositoryURL" >}}).

{{% note "info" "Found an issue?" %}}
As the repository is public you can submit an [issue]({{< param "hl2PanoramaOpenAPIRepositoryURL" >}}/issues) - or even better open a [pull request]({{< param "hl2PanoramaOpenAPIRepositoryURL" >}}/pulls).
{{% /note %}}

## Postman

A tool we use extensively at hl2 is [Postman](https://www.getpostman.com/). It allows us to manage our hl2 Panorama instances via their REST API through an intuitive interface.

Since version `v6.6`, it's now possible to import an OpenAPI v3.0 descriptor via file, url, or by directly entering JSON or YAML as raw text from the Import button within the Postman App (See [Postman Supports OpenAPI 3.0](https://blog.getpostman.com/2018/12/11/postman-supports-openapi-3-0/)). So, you just have to paste https://raw.githubusercontent.com/hl2/hl2-panorama-openapi/master/openapi/spec.json in the import dialog of the Postman App.

{{< page-resource "screen-1.png" >}}

and the corresponding collection will be created:

{{< page-resource "screen-2.png" >}}

## Lifecycle

{{% note "warning" %}}
We will commit ourselves to support the API and maintain backwards compatibility in the future, but we reserve the right to make incompatible changes when necessary. If you experience any issue, drop us an email from the [contact](/contact) page.{{% /note %}}
