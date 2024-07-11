
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
