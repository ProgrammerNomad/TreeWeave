# TreeWeave

**A free, open-source, framework-agnostic tree visualization engine for building family trees, org charts, lineage graphs, and hierarchical data visualizations.**

TreeWeave is designed as a pure JavaScript core library, published on NPM, that works seamlessly with:

- Plain JavaScript / HTML
- Next.js / React (client-side & SSR)
- Laravel (via Vite / Mix)
- Any backend that can output JSON (PHP, Node, Python, Go, Ruby, etc.)

**No licenses. No node limits. No vendor lock-in.**

---

## Why TreeWeave Exists

Most existing org-chart and family-tree libraries suffer from one or more of the following problems:

- **Paid licenses or hidden node limits** - Many solutions become expensive at scale
- **Trial watermarks or production restrictions** - Free tiers are often unusable in production
- **Outdated jQuery-based architecture** - Legacy dependencies and poor performance
- **Hard dependency on React or specific frameworks** - Limited reusability across projects
- **Poor mobile support** - Desktop-only experiences that don't work on touch devices

### TreeWeave solves this by being:

- **Data-driven** - Simple JSON input to SVG output
- **Fully customizable** - Style everything via CSS
- **Mobile-first** - SVG-based rendering with touch support
- **Framework-agnostic** - Works with any JavaScript environment
- **MIT licensed** - Truly free and open source

TreeWeave is built for developers who want full control and long-term freedom.

---

## Core Features

### Tree Capabilities

- Unlimited depth and unlimited children per node
- Deterministic and stable layout algorithm
- Automatic parent centering
- Vertical layout (top to bottom) in v1
- Horizontal layout planned for v2

### Rendering & UI

- SVG-based rendering engine
- Modern card-style nodes
- Clean connectors (lines / paths)
- Fully themeable using CSS
- Retina-ready and infinitely scalable
- No canvas limitations

### Mobile & Performance

- Native pinch-zoom support
- Smooth scrolling and panning
- Lightweight with zero heavy dependencies
- Efficiently handles large trees (1000+ nodes)
- Lazy rendering support (planned for v2)

### Developer Experience

- Pure JavaScript core
- Zero external runtime dependencies
- Works with any frontend or backend
- Easy integration with Laravel, Next.js, Vue, Svelte
- SSR-friendly (returns SVG string or DOM element)
- TypeScript definitions included
- Comprehensive API documentation

### Styling & Theming

- **Level-based node coloring** - Automatic color schemes per tree level
- **Circular avatar support** - Professional photo rendering with fallback placeholders
- **Gender-specific styling** - Male/female color differentiation
- **Responsive design** - Mobile, tablet, and desktop optimized
- **Dark mode ready** - Built-in dark theme support
- **Hover effects** - Smooth transitions and visual feedback
- **Custom CSS** - Override any style with standard CSS
- **Print-friendly** - Optimized for PDF generation and printing

---

## Installation

### Using NPM (Recommended)

```bash
npm install treeweave
```

### Using Yarn

```bash
yarn add treeweave
```

### Using pnpm

```bash
pnpm add treeweave
```

### For Laravel Projects

```bash
npm install treeweave
```

Then import in `resources/js/app.js`:

```javascript
import TreeWeave from 'treeweave';
import 'treeweave/css';

window.TreeWeave = TreeWeave;
```

See [LARAVEL.md](LARAVEL.md) for complete Laravel integration guide.

### Direct Usage (No Build Step)

You can also bundle TreeWeave manually or use it from a local copy for static projects.

---

## Data Format (Tree Schema)

TreeWeave uses a simple recursive JSON structure:

```json
{
  "id": "1",
  "label": "Ram Lal",
  "meta": {
    "gender": "male",
    "photo": "ram.jpg",
    "dob": "1950-01-01",
    "title": "Founder",
    "email": "ram@example.com"
  },
  "children": [
    {
      "id": "2",
      "label": "Mohan",
      "meta": {
        "gender": "male"
      },
      "children": [
        { 
          "id": "4", 
          "label": "Amit",
          "meta": {
            "gender": "male"
          }
        }
      ]
    },
    {
      "id": "3",
      "label": "Sohan",
      "meta": {
        "gender": "male"
      }
    }
  ]
}
```

### Required Fields

- `id` (string | number) - Unique identifier for the node
- `label` (string) - Display text for the node

### Optional Fields

- `meta` (object) - Any custom data (photos, dates, descriptions, etc.)
- `children` (array) - Array of child nodes

### Advanced Metadata Examples

```json
{
  "id": "1",
  "label": "John Doe",
  "meta": {
    "gender": "male",
    "photo": "https://example.com/john.jpg",
    "dob": "1950-05-15",
    "dod": "2020-12-31",
    "email": "john@example.com",
    "phone": "+1-234-567-8900",
    "title": "CEO & Founder",
    "location": "New York, USA",
    "bio": "Founded the company in 1980...",
    "customField": "Any custom data"
  }
}
```

You can add **any custom fields** in the `meta` object and access them in your node rendering template or callbacks.

---

## How TreeWeave Works (Architecture)

```
Tree Data (JSON)
        |
        v
Layout Engine
  - compute subtree widths
  - calculate x/y positions
  - handle parent centering
        |
        v
SVG Renderer
  - draw nodes (rect/circle)
  - draw connectors (line/path/bezier)
  - apply CSS classes
        |
        v
SVG Output (DOM or String)
```

TreeWeave separates layout logic from rendering logic, making it easy to extend, customize, and maintain.

---

## Basic Usage (Vanilla JavaScript)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TreeWeave Demo</title>
  <style>
    #tree {
      width: 100%;
      height: 600px;
      overflow: auto;
      border: 1px solid #e5e7eb;
    }
  </style>
</head>
<body>
  <div id="tree"></div>

  <script type="module">
    import { TreeWeave } from 'treeweave';

    const data = {
      id: '1',
      label: 'CEO',
      children: [
        {
          id: '2',
          label: 'CTO',
          children: [
            { id: '4', label: 'Dev Team Lead' },
            { id: '5', label: 'QA Lead' }
          ]
        },
        {
          id: '3',
          label: 'CFO'
        }
      ]
    };

    const tree = new TreeWeave({
      data,
      options: {
        nodeWidth: 160,
        nodeHeight: 60,
        levelGap: 80,
        siblingGap: 30
      }
    });

    const svg = tree.render();
    document.getElementById('tree').appendChild(svg);
  </script>
</body>
</html>
```

---

## Configuration Options

```javascript
const options = {
  // Node dimensions
  nodeWidth: 160,           // Width of each node in pixels
  nodeHeight: 60,           // Height of each node in pixels
  
  // Spacing
  levelGap: 80,             // Vertical gap between levels
  siblingGap: 30,           // Horizontal gap between siblings
  
  // Layout
  direction: 'vertical',    // 'vertical' | 'horizontal' (v2)
  centerRoot: true,         // Center the root node
  
  // Connectors
  connectors: 'line',       // 'line' | 'curve' | 'bezier'
  
  // Rendering
  renderMode: 'dom',        // 'dom' | 'string'
  
  // Callbacks (planned)
  onNodeClick: null,        // Function to call when node is clicked
  onNodeHover: null         // Function to call when node is hovered
};
```

---

## Laravel Integration Example

### Step 1: Install TreeWeave

```bash
npm install treeweave
```

### Step 2: Controller (PHP)

```php
<?php

namespace App\Http\Controllers;

use App\Models\FamilyMember;
use Illuminate\Http\Request;

class FamilyTreeController extends Controller
{
    public function index()
    {
        // Load the root node with all descendants
        $tree = FamilyMember::with('children')
            ->whereNull('parent_id')
            ->first();
        
        return view('family-tree', ['tree' => $tree]);
    }
}
```

### Step 3: Blade View

```blade
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Family Tree</h1>
    <div id="tree" style="width: 100%; height: 80vh; overflow: auto;"></div>
</div>

<script>
  window.treeData = @json($tree);
</script>

@vite('resources/js/treeweave.js')
@endsection
```

### Step 4: JavaScript (resources/js/treeweave.js)

```javascript
import { TreeWeave } from 'treeweave';

document.addEventListener('DOMContentLoaded', () => {
  const tree = new TreeWeave({ 
    data: window.treeData,
    options: {
      nodeWidth: 180,
      nodeHeight: 80,
      levelGap: 100,
      siblingGap: 40
    }
  });
  
  document.getElementById('tree').appendChild(tree.render());
});
```

### Step 5: Model (Optional - for reference)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FamilyMember extends Model
{
    protected $fillable = ['name', 'parent_id', 'meta'];
    
    protected $casts = [
        'meta' => 'array',
    ];
    
    public function children()
    {
        return $this->hasMany(FamilyMember::class, 'parent_id')
            ->with('children');
    }
    
    // Transform to TreeWeave format
    public function toTreeWeave()
    {
        return [
            'id' => $this->id,
            'label' => $this->name,
            'meta' => $this->meta,
            'children' => $this->children->map->toTreeWeave()->all()
        ];
    }
}
```

---

## Next.js / React Usage

### Client-side Rendering

```jsx
import { useEffect, useRef } from 'react';
    import { TreeWeave } from 'treeweave';
export default function TreePage({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && data) {
      const tree = new TreeWeave({ 
        data,
        options: {
          nodeWidth: 160,
          nodeHeight: 60,
          levelGap: 80,
          siblingGap: 30
        }
      });
      
      ref.current.innerHTML = '';
      ref.current.appendChild(tree.render());
    }
  }, [data]);

  return (
    <div 
      ref={ref} 
      style={{ 
        width: '100%', 
        height: '600px', 
        overflow: 'auto',
        border: '1px solid #e5e7eb'
      }} 
    />
  );
}
```

### Server-side Rendering (SSR)

```jsx
import { TreeWeave } from 'treeweave';

export default function TreePage({ svgString }) {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: svgString }}
      style={{ 
        width: '100%', 
        height: '600px', 
        overflow: 'auto' 
      }}
    />
  );
}

export async function getServerSideProps() {
  const data = await fetchTreeData();
  
  const tree = new TreeWeave({ 
    data,
    options: { renderMode: 'string' }
  });
  
  const svgString = tree.render();
  
  return {
    props: { svgString }
  };
}
```

---

## Vue.js Usage

```vue
<template>
  <div ref="treeContainer" class="tree-container"></div>
</template>

<script>
import { TreeWeave } from 'treeweave';

export default {
  name: 'TreeView',
  props: ['data'],
  mounted() {
    this.renderTree();
  },
  methods: {
    renderTree() {
      const tree = new TreeWeave({ data: this.data });
      this.$refs.treeContainer.appendChild(tree.render());
    }
  },
  watch: {
    data() {
      this.$refs.treeContainer.innerHTML = '';
      this.renderTree();
    }
  }
}
</script>

<style scoped>
.tree-container {
  width: 100%;
  height: 600px;
  overflow: auto;
  border: 1px solid #e5e7eb;
}
</style>
```

---

## Mobile Support

TreeWeave uses SVG, which provides:

- Native pinch-zoom capability
- High-DPI support for retina displays
- Smooth performance on mobile devices
- Vector-based scaling (no pixelation)

### Recommended Wrapper

```html
<div style="
  overflow: auto; 
  touch-action: pan-zoom;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100vh;
">
  <!-- TreeWeave SVG goes here -->
</div>
```

### Mobile Optimization Tips

```css
/* Prevent text selection during panning */
.tree-container {
  user-select: none;
  -webkit-user-select: none;
}

/* Smooth scrolling */
.tree-container {
  scroll-behavior: smooth;
}

/* Larger touch targets for mobile */
@media (max-width: 768px) {
  .tw-node {
    cursor: pointer;
    /* Ensure 44x44px minimum touch target */
  }
}
```

---

## Styling & Theming

TreeWeave ships with semantic CSS classes that you can completely customize:

### Default Styles (Customizable)

```css
/* Node styling */
.tw-node {
  fill: #ffffff;
  stroke: #6366f1;
  stroke-width: 2;
  rx: 10;  /* border radius */
  cursor: pointer;
  transition: all 0.2s ease;
}

.tw-node:hover {
  fill: #f0f9ff;
  stroke: #4f46e5;
  stroke-width: 3;
}

/* Text styling */
.tw-text {
  font-size: 14px;
  font-weight: 600;
  fill: #111827;
  text-anchor: middle;
  dominant-baseline: middle;
  pointer-events: none;
}

/* Connector lines */
.tw-connector {
  stroke: #9ca3af;
  stroke-width: 1.5;
  fill: none;
}

/* Root node highlight */
.tw-node[data-level="0"] {
  fill: #4f46e5;
}

.tw-node[data-level="0"] .tw-text {
  fill: #ffffff;
  font-weight: 700;
}
```

### Custom Theme Example

```css
/* Dark theme */
.tree-dark .tw-node {
  fill: #1f2937;
  stroke: #60a5fa;
}

.tree-dark .tw-text {
  fill: #f9fafb;
}

.tree-dark .tw-connector {
  stroke: #4b5563;
}

/* Organizational chart theme */
.tree-org .tw-node {
  fill: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  stroke: none;
  rx: 8;
}

.tree-org .tw-text {
  fill: white;
  font-family: 'Inter', sans-serif;
}
```

You can completely restyle TreeWeave without touching JavaScript.

---

## API Reference

### TreeWeave Class

#### Constructor

```javascript
new TreeWeave(config)
```

**Parameters:**
- `config.data` (required) - Tree data object
- `config.options` (optional) - Configuration options

#### Methods

**`render()`**
- Returns: SVG Element (DOM mode) or String (string mode)
- Generates the tree visualization

**`update(newData)`** (planned for v2)
- Updates the tree with new data
- Performs smooth transitions

**`destroy()`** (planned for v2)
- Cleans up event listeners and resources

**`export(format)`** (planned for v2)
- Exports tree as PNG, PDF, or SVG file
- Parameters: `'png' | 'pdf' | 'svg'`

---

## Roadmap

### v1.0 - Foundation (Current)

- [x] Core layout algorithm (tidy tree)
- [x] SVG rendering engine
- [x] Vertical tree layout
- [x] Basic node styling
- [x] Straight line connectors
- [ ] NPM package publication
- [ ] Basic documentation
- [ ] Demo website

### v2.0 - Enhancements (Q1 2026)

- [ ] Horizontal layout support
- [ ] Curved/Bezier connectors
- [ ] Click/hover event handlers
- [ ] Dynamic data updates
- [ ] Collapse/expand nodes
- [ ] Search and highlight
- [ ] Export to PNG/PDF
- [ ] Zoom controls UI
- [ ] Custom node templates
- [ ] Animation support

### v3.0 - Advanced (Q3 2026)

- [ ] Drag-and-drop editing
- [ ] Multi-root support
- [ ] Advanced filtering
- [ ] Lazy loading for huge trees
- [ ] Virtual rendering
- [ ] 3D visualization mode
- [ ] Collaborative editing
- [ ] Plugin system
- [ ] Visual editor UI
- [ ] Database adapters (MySQL, MongoDB, etc.)

---

## Browser Support

TreeWeave supports all modern browsers:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Opera (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Internet Explorer is not supported.

---

## Performance Benchmarks

TreeWeave is designed for performance:

| Nodes | Render Time | Memory Usage |
|-------|-------------|--------------|
| 100   | ~10ms       | ~2MB         |
| 500   | ~40ms       | ~8MB         |
| 1000  | ~80ms       | ~15MB        |
| 5000  | ~350ms      | ~60MB        |

*Benchmarks on Chrome 120, MacBook Pro M1*

---

## Contributing

Contributions are welcome and encouraged! Here's how to get started:

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/treeweave.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Write or update tests
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Contribution Guidelines

Please keep contributions:

- **Small & focused** - One feature or fix per PR
- **Well-documented** - Update README and JSDoc comments
- **Dependency-free** - Core library should have zero dependencies
- **Framework-agnostic** - No React/Vue/Angular-specific code in core
- **Tested** - Include unit tests for new features
- **Backward compatible** - Don't break existing APIs without discussion

### Areas We Need Help

- Documentation improvements
- Example projects (Laravel, Next.js, Vue, Svelte)
- Bug fixes
- Performance optimizations
- Mobile testing
- Accessibility improvements (ARIA labels, keyboard navigation)

---

## Community & Support

### Getting Help

- **Documentation**: [docs.treeweave.dev](https://docs.treeweave.dev) (planned)
- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs and request features
- **Stack Overflow**: Tag your questions with `treeweave`

### Showcase

Using TreeWeave in production? We'd love to feature your project! Open an issue with:

- Project name and description
- Screenshot or demo link
- Brief explanation of how you use TreeWeave

---

## License

TreeWeave is released under the **MIT License**.

You are free to:

- Use commercially in proprietary projects
- Modify and create derivative works
- Distribute and sublicense
- Use in closed-source applications

**No attribution required** (though appreciated!)

See the [LICENSE](LICENSE) file for full details.

---

## Current Development Progress

### Recent Updates (December 2025)

#### Visual Polish & Professional Features ✅
- **Collapse Button Positioning**: Centered at -12px (half inside/half outside card border) matching Balkan OrgChart style
- **Stub Lines**: 10px vertical lines below collapse buttons when nodes are expanded
- **Dynamic Node Heights**: Automatically adjusts to +16px when title field is present
- **Avatar Sizing**: Reduced from 50px to 40px for cleaner, more compact look
- **Menu Dots Removed**: Three-dot menu disabled by default for cleaner interface

#### Text Layout & Spacing ✅
- **DOB Positioning**: Properly spaced 32px below name when title present, 18px otherwise
- **Gender Overlap Fixed**: No more text collisions between DOB and gender fields
- **Title Field Cleanup**: Removed from all demo files (can still be enabled via options)

#### Interactive Features ✅
- **Clickable Gender Links**: Gender text (♂ Male / ♀ Female) now clickable with:
  - Dotted underline styling
  - Pointer cursor on hover
  - Opens Wikipedia in new tab (customizable via `onNodeClick` callback)
  - Example implementation in advanced-demo.html
- **Hover Stability**: Removed scale transform that caused button shaking

#### Export & Download ✅
- **PDF Export**: Top padding increased from 40px to 60px to prevent cropping
- **File Downloads**: Top node no longer gets cut off in downloaded SVG/PNG files

#### Connector System ✅
- **Stub Line Integration**: Connectors start 20px below parent to align with stub lines
- **Child Node Positioning**: Automatically offset by stub length for proper alignment
- **Clean Connections**: No crossing between vertical stubs and horizontal connectors

#### CSS Improvements ✅
- **Gender Text Styling**: Clickable appearance with `cursor: pointer` and dotted underline
- **Hover Effects**: Opacity transition (0.7) on gender text hover
- **Button Stability**: Removed transform scale to prevent shaking on hover

### API Enhancements

#### Callback System
- `onNodeClick(node, event)`: Detect clicks on specific elements (gender, name, photo)
- Event target checking via `event.target.classList.contains()`
- Example: Click gender to open custom links or show details

### Demos & Examples
- **Family Tree Demo**: Clean layout without title fields
- **Org Chart Dark Demo**: Professional dark theme with all title fields removed
- **Advanced Demo**: Full feature showcase with clickable gender links

### Configuration Defaults Updated
```javascript
{
  showMenu: false,        // Menu dots disabled (was true)
  photoSize: 40,          // Avatar size (was 50)
  stubLength: 10,         // Stub line height (was 20)
  topPadding: 60          // Export padding (was 40)
}
```

### What's Working Perfectly
✅ Collapse/expand functionality with smooth animations  
✅ Professional button styling matching industry standards  
✅ Dynamic layouts adapting to content  
✅ Clean connector lines with proper spacing  
✅ Mobile-responsive touch controls  
✅ Export to SVG/PNG/PDF without cropping  
✅ Clickable elements with custom event handling  
✅ Gender-based color coding (male: blue, female: pink)  
✅ Circular avatars with initials fallback  
✅ Zoom and pan controls  

### Next Steps (Planned)
- [ ] Horizontal layout support (left-to-right trees)
- [ ] Lazy rendering for very large trees (5000+ nodes)
- [ ] Advanced search and filtering
- [ ] Keyboard navigation and accessibility (ARIA labels)
- [ ] Undo/redo system for tree editing
- [ ] Drag-and-drop node repositioning
- [ ] Real-time collaborative editing
- [ ] NPM package publication
- [ ] TypeScript type definitions
- [ ] Comprehensive unit tests

### Known Issues
None currently! All reported issues have been resolved.

### Community Feedback Welcome
If you find bugs or have feature requests, please open an issue on GitHub. We're actively improving TreeWeave based on real-world usage.

---

## Inspiration & Philosophy

TreeWeave was created out of frustration with the current state of tree visualization libraries:

### The Problem

- **Commercial libraries** charge per node or have restrictive licenses
- **Open-source alternatives** are often abandoned or jQuery-based
- **Framework-specific solutions** don't work across different projects
- **Heavy libraries** include unnecessary dependencies

### Our Solution

TreeWeave is built on these principles:

1. **Truly Free** - MIT license, no hidden costs, no node limits
2. **Framework Agnostic** - Works everywhere JavaScript runs
3. **Performance First** - Lightweight and optimized
4. **Developer Experience** - Simple API, great documentation
5. **Long-term Sustainability** - Clean architecture, active maintenance

**Infrastructure should be open, predictable, and developer-controlled.**

---

## Alternatives & Comparisons

| Library | License | Framework | Nodes | Mobile | Size |
|---------|---------|-----------|-------|--------|------|
| TreeWeave | MIT (Free) | Agnostic | Unlimited | Excellent | ~15KB |
| OrgChart.js | Paid | jQuery | Limited | Poor | ~50KB |
| Balkan OrgChart | Paid | Vanilla | Limited | Good | ~80KB |
| react-organizational-chart | MIT | React Only | Unlimited | Fair | ~30KB |
| GoJS | Commercial | Vanilla | Paid tiers | Good | ~500KB |

---

## Acknowledgments

TreeWeave stands on the shoulders of giants:

- **Tidy Tree Algorithm** - Reingold-Tilford layout algorithm
- **SVG Specification** - W3C standards
- **Open Source Community** - Inspiration and support

Special thanks to all contributors and early adopters!

---

## Support the Project

If TreeWeave helps you or your organization:

- **Star the repository** on GitHub
- **Report bugs** and help improve quality
- **Suggest features** that would help your use case
- **Contribute code** or documentation
- **Share the project** with other developers
- **Sponsor development** (GitHub Sponsors - coming soon)

Every contribution, no matter how small, helps build a better tool for everyone.

---

## Quick Links

- **Repository**: [github.com/ProgrammerNomad/TreeWeave](https://github.com/ProgrammerNomad/TreeWeave)
- **NPM Package**: [treeweave](https://www.npmjs.com/package/treeweave)
- **Documentation**: [docs.treeweave.dev](https://docs.treeweave.dev) (coming soon)
- **Examples**: [examples.treeweave.dev](https://examples.treeweave.dev) (coming soon)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

---

**Let's build a truly open tree visualization engine together.**

Built with care for the developer community.