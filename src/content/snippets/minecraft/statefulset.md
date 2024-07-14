---
title: StatefulSet Object Example
description: A simple StatefulSet for a Minecraft server.
publish: '2024-07-11T12:00:00Z'
tags:
  - kubernetes
  - statefulset
  - minecraft
---
asdf



```yaml title="project_root/statefulset.yaml"
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mc1
  namespace: mincraft-servers
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mc-server
  template:
    metadata:
      labels:
        app: mc-server
    spec:
      containers:
      - name: mc-server
        image: itzg/minecraft-server
        ports:
          - containerPort: 25565
            name: minecraft
        env:
          - name: EULA
            value: "true"
        volumeMounts:
          - name: mc-data
            mountPath: /data
      volumes:
        - name: mc-data
          persistentVolumeClaim:
            claimName: mc-data-pvc
```
