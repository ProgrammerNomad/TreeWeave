# TreeWeave Project Structure

```
TreeWeave/
├── src/                    # Source files
│   └── TreeWeave.js       # Core library
├── dist/                  # Distribution files
│   └── TreeWeave.js       # Built library
├── css/                   # Stylesheets
│   └── treeweave.css     # Default styles
├── examples/              # Demo files
│   └── family-tree-demo.html
├── LICENSE                # MIT License
├── README.md              # Documentation
└── package.json           # NPM package config
```

## Quick Start

1. Open `examples/family-tree-demo.html` in a browser
2. See the family tree visualization in action
3. Try the demo controls to switch between trees

## Development

The project follows standard open-source structure:

- **src/** - Source code (edit here)
- **dist/** - Built/compiled files (for distribution)
- **examples/** - Live demos and usage examples
- **css/** - Styling files

## Files Overview

### Core Library (`src/TreeWeave.js`)
- Main TreeWeave class
- Layout algorithm (tidy tree)
- SVG rendering engine
- Node positioning
- Connector drawing

### Demo (`examples/family-tree-demo.html`)
- Working family tree example
- Interactive controls
- Sample data structures
- Usage patterns

### Styles (`css/treeweave.css`)
- Default node styling
- Connector styles
- Animations
- Responsive design
- Print styles

## Next Steps

1. Test the demo in browser
2. Customize styles in CSS
3. Modify tree data in demo
4. Extend the core library
5. Add more examples
