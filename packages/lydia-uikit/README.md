# 🦁 Lydia UIkit

[![Version](https://img.shields.io/npm/v/@lydiaswap-libs/uikit)](https://www.npmjs.com/package/@lydiaswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@lydiaswap-libs/uikit)](https://www.npmjs.com/package/@lydiaswap-libs/uikit)

Lydia UIkit is a set of React components and hooks used to build pages on Lydia's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @lydiaswap-libs/uikit`

## Setup

### Theme

Before using Lydia UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@lydiaswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@lydiaswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://lydiaswap.github.io/lydia-uikit/)
