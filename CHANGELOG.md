# TreeWeave Changelog

## [Version 1.1.0] - December 15, 2025

### Added - Enhanced Features

#### 🎨 Avatar System Enhancement
- **Circular avatar rendering** with SVG clipPath for photos
- **Automatic initials fallback** when no photo is provided
- **Gender-aware coloring** for avatar placeholders
- **Responsive avatar sizing** for mobile devices

#### 🌈 Level-Based Node Coloring
- Automatic color themes based on tree depth (levels 0-4)
- Visual hierarchy without manual configuration
- Professional color schemes:
  - Level 0: Blue (#e3f2fd / #90caf9)
  - Level 1: Purple (#f3e5f5 / #ce93d8)
  - Level 2: Green (#e8f5e9 / #a5d6a7)
  - Level 3: Orange (#fff3e0 / #ffcc80)
  - Level 4: Pink (#fce4ec / #f48fb1)

#### 📱 Enhanced Responsive Design
- Tablet optimizations (768px breakpoint)
- Mobile optimizations (480px breakpoint)
- Touch-friendly interface elements
- Scaled fonts and avatars per screen size

#### 🎯 Advanced CSS Styling
- Avatar container with circular clipping
- No-avatar placeholder styling
- Enhanced responsive media queries
- Better mobile font scaling
- Print-friendly CSS optimizations

### Improved

#### 📚 Documentation Updates
- New "Styling & Theming" section in README
- Enhanced metadata examples with all available fields
- Clear value proposition and feature highlighting
- Added FEATURES.md comprehensive guide
- Improved documentation structure

#### 💻 Code Quality
- Cleaner avatar rendering logic
- Support for nodes with and without photos
- Initials extraction from node labels
- Gender-specific fallback colors

#### 🎭 Demo Enhancements
- Updated family-tree-demo.html to showcase avatar fallback
- Mixed photo/no-photo nodes for demonstration
- Updated info box with new feature descriptions
- Better example data with comments

### Technical Details

#### Files Modified
1. **src/TreeWeave.js**
   - Enhanced `_drawNodes()` method with avatar system
   - Added initials generation logic
   - Improved photo handling with fallback

2. **css/treeweave.css**
   - Added `.tw-avatar` circular image styles
   - Added `.tw-no-avatar` placeholder styles
   - Added level-based node coloring (`.tw-node-group[data-level="N"]`)
   - Enhanced responsive breakpoints
   - Added `.tw-initials` text styling

3. **README.md**
   - Added comparison table section
   - Enhanced "Styling & Theming" documentation
   - Added advanced metadata examples
   - Improved feature descriptions

4. **examples/family-tree-demo.html**
   - Updated sample data with mixed photo/no-photo nodes
   - Enhanced info box descriptions
   - Added feature showcase comments

5. **New Files**
   - **FEATURES.md**: Comprehensive feature documentation
   - **CHANGELOG.md**: This file

#### Breaking Changes
None - All changes are backward compatible.

#### Migration Notes
No migration needed. Existing trees will automatically:
- Show initials for nodes without photos
- Apply level-based coloring
- Benefit from responsive improvements

---

## [Version 1.0.0] - December 2025

### Initial Release
- Core tree layout engine
- SVG rendering
- Collapse/expand functionality
- Zoom and pan support
- Search functionality
- Export to PNG/SVG/PDF
- Gender-specific styling
- Framework-agnostic design
- MIT License

---

For detailed feature documentation, see [FEATURES.md](FEATURES.md)
