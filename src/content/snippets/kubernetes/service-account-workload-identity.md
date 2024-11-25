---
title: Service Account with Workload Identity
description: A simple example of a Service Account with Workload Identity.
publish: '2024-07-11T12:00:00Z'
tags:
  - kubernetes
  - workload-identity
  - azure
---

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: spn-network-contrib
  namespace: myns
  annotations:
    azure.workload.identity/client-id: xxxxxxxx-xxxx-xxxx-xxx-xxxxxxxxxxxx
  labels:
    azure.workload.identity/use: "true"
```
