# @nooks-by-jonghwa/use-title

React Hook to update your document's title.

## Installation

#### yarn

`yarn add @nooks-by-jonghwa/use-title`

#### npm

`npm i @nooks-by-jonghwa/use-title`

## Usage

```js
import React from "react";
import useTitle from "@nooks-by-jonghwa/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
