---
title: Golang Dockerfile
description: A simple Dockerfile for a Golang application.
publish: '2024-07-11T12:00:00Z'
tags:
  - docker
  - golang
---

```dockerfile
FROM golang:1.22.0-alpine as builder

WORKDIR /app

COPY go.sum .
COPY go.mod .

RUN go mod download

COPY . .

RUN go build -o service .

FROM alpine

WORKDIR /app

RUN mkdir tmp

COPY --from=builder /build/service .

ENTRYPOINT ["./service"]
```
