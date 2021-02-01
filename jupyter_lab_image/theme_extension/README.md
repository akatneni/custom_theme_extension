# myorg/jupyter_lab_custom_theme

Custom JupyterLab theme extension

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install myorg/jupyter_lab_custom_theme
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
