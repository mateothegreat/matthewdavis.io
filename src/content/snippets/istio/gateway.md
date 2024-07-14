---
title: Gateway object example
description: A simple example of a Gateway object for Istio.
publish: '2024-07-11T12:00:00Z'
tags:
  - istio
  - gateway
---

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: gateway
  namespace: ingress-internal
spec:
  gatewayClassName: istio
  addresses:          #
  - value: 10.0.16.3  # This block is optional.
    type: IPAddress   #
  listeners:
  - name: http
    hostname: "*.matthewdavis.io"
    port: 80
    protocol: HTTP
    allowedRoutes:
      namespaces:
        from: Selector
        selector:
          matchLabels:
            gateway-internal-access: "true" # Change to reflect your label.
  - name: https
    hostname: "*.matthewdavis.io"
    port: 443
    protocol: HTTPS
    tls:
      mode: Terminate
      certificateRefs:
      - name: ingress-internal # Ensure secret is in the same namespace!
    allowedRoutes:
      namespaces:
        from: Selector
        selector:
          matchLabels:
            gateway-internal-access: "true" # Change to reflect your label.
```
