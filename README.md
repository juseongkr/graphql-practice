# GraphQL-Practice
> A tiny project for practicing GraphQL

<img width="800" alt="main" src="https://user-images.githubusercontent.com/10775915/87668147-8d756100-c7a6-11ea-8832-6916ffa622ab.png"></img>

---

## example

- request all books
``` graphql
query {
  allBooks {
    title
    published
    author
    genres
  }
}
```

``` graphql
{
  "data": {
    "allBooks": [
      {
        "title": "Hunter Of Tomorrow",
        "published": 1990,
        "author": "Finn Wilkerson",
        "genres": [
          "Parody",
          "High Fantasy"
        ]
      },
      
      ...
}
```
---

- request the number of authors
``` graphql
query {
  authorCount
}
```

``` graphql
{
  "data": {
    "authorCount": 8
  }
}
````
---

- create data
``` graphql
mutation {
  addAuthor(name: "James Spader", ssn: 123456789, birth: 1960) {
    name
    ssn
    birth
  }
}
```

``` graphql
{
  "data": {
    "addAuthor": {
      "name": "James Spader",
      "ssn": 123456789,
      "birth": 1960
    }
  }
}
```
---

- update data
``` graphql
mutation {
  updateAuthorBirth(name: "James Spader", setBirth: 2020) {
    name
    ssn
    birth
  }
}
```

``` graphql
{
  "data": {
    "updateAuthorBirth": {
      "name": "James Spader",
      "ssn": 123456789,
      "birth": 2020
    }
  }
}
```
---

- find data
``` graphql
query {
  findBook(title: "Honor Of Gold") {
    title
    published
    genres
  }
}
```

``` graphql
{
  "data": {
    "findBook": {
      "title": "Honor Of Gold",
      "published": 1939,
      "genres": [
        "Thriller",
        "Adventure",
        "High Fantasy",
        "Mystery"
      ]
    }
  }
}
```
---
