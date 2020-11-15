## Obsidian latex preamble plugin

This is a plugin for [Obsidian](https://obsidian.md/) that will include a
global Latex preamble in all docs.  Useful for defining Latex commands.

## Usage

Once installed, this plugin will look for a file called `preamble.sty`, and
anything defined in this file will be available in any document.  For example:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\norm}[2]{||#2||_{#1}}
```

## Features

- Loads preamble at startup
- Enables command to reload preamble

## Compatibility

`obsidian-latex-preamble-plugin` currently requires Obsidian v0.9.9 or above to work
properly.

## Installation

You can install the plugin via the Community Plugins tab within Obsidian. Just
search for "Latex preamble".

### Manual Installation

You can install the plugin manually by downloading the `zip` of the latest
Github Release. Unzip the contents into your
`<vault>/.obsidian/plugins/obsidian-latex-preamble-plugin` directory. [More
info](https://forum.obsidian.md/t/plugins-mini-faq/7737).

## Todo
- [ ] Auto-reload preamble
- [ ] Support custom path for preamble file
