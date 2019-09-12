# Star Wars Client

This is a simple React app for ingesting the [Star Wars API](https://swapi.co/).

## Build setup

```bash
# install dependencies
yarn

# start server
yarn start

# check tests ✅
yarn test
```

## Overview

As this is a simple consume website for the Star Wars API - there are a few things a user is probably going to want to do.

1. View all root types, and the resources inside them
2. Click though and see a detailed breakdown of the information on each resource type
3. Easily access other linked resources
4. Favorite a resource type - this must persist after page refresh however it doesn't need to be stored on a server

## Requirements

- The interface has to be responsive
- There must be full end-to-end unit tests using Jest
- Loading states while the data is being fetched
- As important as the feature set is, keeping coding standards and code consistency is key

## Design

- This isn't an exercise in design, but a good understanding of basic UX principles will be a very strong bonus
- This is Star Wars isn't it? Have some fun! 🚀 👽

## Brownie points

- Add type support by migrating to TypeScript 🏗
- Use redux sagas 📖
- Inline resource filtering 🕵🏻‍♀️
- Animations on the loading states (lottie?) ⚛️

Have fun, we look forward to seeing what you've come up with.
