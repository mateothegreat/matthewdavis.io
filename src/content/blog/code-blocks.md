---
title: 'Beautiful code blocks'
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam eget massa.
cover: https://cdn.matthewdavis.io/kubernetes.webp
featured: true
publish: 2024-07-08T12:00:00Z
created: 2024-07-08T12:00:00Z
updated: 2024-07-08T12:00:00Z
author:
  name: 'John Doe'
  title: 'Software Engineer'
tags:
  - code
  - foo
theme:
  title: text-indigo-500
  button: text-indigo-500
---

Display code using <https://expressive-code.com> in code fence blocks beautifully.

```ts {1, 18} title="PowerShell terminal example" collapse={1-44, 64-141}
import { sessions } from "$lib/components/sessions/sessions";
import { BehaviorSubject, type Observable } from "rxjs";
import type { APIOperation } from "../helpers";

export enum APIClientErrors {
  ERROR_UNKNOWN = "ERROR_UNKNOWN",
  ERROR_ALREADY_EXISTS = "ERROR_ALREADY_EXISTS",
  ERROR_NOT_FOUND = "ERROR_NOT_FOUND",
  ERROR_PRECONDITION_FAILED = "ERROR_PRECONDITION_FAILED",
  ERROR_NO_RESULT = "ERROR_NO_RESULT"
}

export interface BatchResult {
  count: number;
}

/**
 * Wrapper for making GraphQL requests.
 */
export class APIClient {
  public url: string;
  public headers = new Headers();

  public constructor(url?: string) {
    sessions.session.subscribe((session) => {
      if (url) {
        this.url = url;
      } else {
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
          this.url = import.meta.env.VITE_API_BASE_URL;
        } else {
          this.url = "https://api.asdf.ai";
        }
      }

      this.headers = new Headers();
      this.headers.set("Content-Type", "application/json");

      if (session) {
        this.headers.set("Authorization", `Bearer ${session.token}`);
      }
    });
  }

  public _get<T>(path: string, params?: { [key: string]: string }): Observable<APIOperation<T>> {
    const loading = true;
    const subject = new BehaviorSubject<APIOperation<T>>({ loading });

    fetch(`${this.url}${path}${params && Object.keys(params).length > 0 ? `?${new URLSearchParams(params)}` : ""}`, {
      method: "GET",
      headers: this.headers
    })
      .then((response) => response.json())
      .then((data) => {
        subject.next({ loading: false, data });
        subject.complete();
      })
      .catch((error) => {
        subject.error(error);
      });

    return subject;
  }

  public _post<T>(path: string, body: unknown): Observable<APIOperation<T>> {
    const subject = new BehaviorSubject<APIOperation<T>>({ loading: true });

    fetch(`${this.url}${path}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then((response) => {
        if (!response.ok) {
          // Throw an error with both status and statusText for HTTP errors
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        subject.next({ loading: false, data });
        subject.complete();
      })
      .catch((error) => {
        // Better error handling for both fetch and non-fetch errors
        console.error("Fetch error:", error);

        // Use a more generic error message if status and statusText are not available
        subject.error({
          error: {
            message: error.message || "An unknown error occurred",
            status: error.status || "Unknown" // Using a placeholder for unknown status
          },
          loading: false
        });
      });

    return subject;
  }

  public _put<T>(path: string, body: unknown): Observable<APIOperation<T>> {
    const subject = new BehaviorSubject<APIOperation<T>>({ loading: true });

    fetch(`${this.url}${path}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((data) => {
        subject.next({ loading: false, data });
        subject.complete();
      })
      .catch((error) => {
        subject.error(error);
      });

    return subject;
  }

  public _delete<T>(path: string): Observable<APIOperation<T>> {
    const subject = new BehaviorSubject<APIOperation<T>>({ loading: true });

    fetch(`${this.url}${path}`, {
      method: "DELETE",
      headers: this.headers
    })
      .then((response) => response.json())
      .then((data) => {
        subject.next({ loading: false, data });
        subject.complete();
      })
      .catch((error) => {
        subject.error(error);
      });

    return subject;
  }
}

export const apiClient = new APIClient();
```

- Line numbers
- Syntax highlighting
- Collapsible code blocks
- Copy to clipboard
- Framing code blocks
