---
id: introduction
title: Introduction
sidebar_label: Introduction
---

### What is the Code<sup>11</sup> Engine?

Engine is a meta-framework for creating web applications.

The Engine keenly focuses on developer productivity. It allows creating robust
web applications with unprecedented simplicity.

### Goals

Engine strives to build applications with

- Small codebase. Less code, less bugs, more hairs still on head
- Less work for computer. Only compute what is needed for faster applications
- Less work for developer. Minimal API which gets out of developers' way. Allows
  focusing on business problems, not Engine problems

### Principles

Instead of creating perfect bricks and sticking them together into "the perfect
application", **mold your application just like you would do with clay**. Let it
gradually evolve over time without any friction or constraints.

Engine is built with keeping real-world, evolving requirements in mind, and all
the challenges that come with it.

#### Dumb as a brick Views

> A view is just another representation of some data

[View](/docs/api/view)s are bricks of an Engine, and they should be as
dumb as bricks. A view does not do anything except:

1. Render the view it is supposed to display
2. Change the data it is supposed to represent

#### Evolving State

> At the core of every UI is a state

The clay of an application is its [state](/docs/concepts/state). Although the
core of the application, state in engine is simply a plain old Javascript
Object. As the requirements evolve, so do the state, and views and logic
associated with it.

#### Reactive Computations

Dumb components, plain data, and computations capable of reacting to changes
(called [producers](/docs/api/producer)) to the data makes an Engine app.

Engine apps are reactive. They start with:
- an initial state (which can be empty as well)
- declare dumb views that represent some part(s) of state e.g a
  `TodoListItem` component which needs a `TodoItem` object from state
- declare computations that depend on some part(s) of state, e.g a `doneCounter`
  function which depends on all `TodoItems` in state to count number of done
  todos

Engine takes care of updating the view and re-running the computations only when
their dependencies from state change. Head over to the [Getting
started](/docs/usage) page for a sneak peek into how Engine apps look like, or
take a look at the [quick start tutorial](/docs/tutorials/react/setup) for a
more comprehensive guide to building an Engine app.
