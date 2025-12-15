# TreeWeave Features & Improvements

## Recent Enhancements

### 1. Avatar System with Intelligent Fallback

**Feature**: Circular avatar rendering with automatic initials placeholder

- **With Photo**: Displays circular cropped images using SVG clipPath
- **Without Photo**: Shows a beautiful circular placeholder with user initials
- **Gender-Aware**: Fallback circles use gender-specific colors
- **Responsive**: Avatars scale appropriately on mobile devices

**Example**:
```javascript
{
  id: '1',
  label: 'John Doe',
  meta: {
    photo: 'https://example.com/john.jpg' // If provided, shows photo
    // If omitted, shows "JD" initials in circular placeholder
  }
}
```

### 2. Level-Based Node Coloring

**Feature**: Automatic color schemes based on tree depth

- **Level 0** (Root): Blue theme (#e3f2fd background, #90caf9 border)
- **Level 1**: Purple theme (#f3e5f5 background, #ce93d8 border)
- **Level 2**: Green theme (#e8f5e9 background, #a5d6a7 border)
- **Level 3**: Orange theme (#fff3e0 background, #ffcc80 border)
- **Level 4**: Pink theme (#fce4ec background, #f48fb1 border)

This provides visual hierarchy without manual configuration.

### 3. Enhanced Responsive Design

**Mobile Support**:
- Tablet breakpoint (768px): Scaled fonts and avatars
- Mobile breakpoint (480px): Further optimized sizing
- Touch-friendly collapse buttons
- Optimized node spacing for small screens

**CSS Media Queries**:
```css
@media (max-width: 768px) {
  .tw-avatar { width: 60px; height: 60px; }
  .tw-name { font-size: 12px; }
}

@media (max-width: 480px) {
  .tw-avatar { width: 50px; height: 50px; }
  .tw-name { font-size: 11px; }
}
```

### 4. Advanced Styling Features

**Available Styles**:
- Gender-specific node borders
- Hover effects with smooth transitions
- Drop shadows for depth perception
- Print-optimized CSS (removes effects for clean printing)
- Dark theme support (optional)
- Animation on initial load with staggered timing

### 5. Improved Documentation

**README.md Updates**:
- Added "Styling & Theming" feature section
- Enhanced metadata examples with all possible fields
- Clear value proposition for developers
- Improved documentation structure

## Key Advantages of TreeWeave

### 1. **Zero Licensing Costs**
- No per-developer fees
- No per-deployment fees
- No node/user limits
- Use in commercial projects freely

### 2. **Smaller Bundle Size**
- Compact ~15KB minified library
- Faster page loads
- Better performance metrics
- Lower bandwidth costs

### 3. **Modern Codebase**
- ES6+ JavaScript
- Clean, maintainable code
- No legacy jQuery dependencies
- Easy to extend and customize

### 4. **Complete Transparency**
- Read every line of source code
- Understand exactly how it works
- Contribute improvements
- No vendor lock-in

### 5. **Better Developer Experience**
- Simple JSON data format
- Intuitive API
- Works with any backend
- SSR-friendly
- TypeScript definitions

## Future Enhancements (Planned)

1. **Horizontal Layout** - Left-to-right tree orientation
2. **Lazy Loading** - Load nodes on-demand for huge trees
3. **Drag & Drop** - Reorganize tree structure interactively
4. **Advanced Templates** - Custom node rendering templates
5. **Animation Library** - More transition effects
6. **Export Formats** - XLSX, JSON, XML export options
7. **Search Filters** - Filter by metadata fields
8. **Mini-map** - Navigation overview for large trees

## Installation & Usage

See [README.md](README.md) for complete installation and usage instructions.

## Contributing

TreeWeave is open source and welcomes contributions. Visit our [GitHub repository](https://github.com/ProgrammerNomad/TreeWeave) to:
- Report bugs
- Request features
- Submit pull requests
- Improve documentation

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

**TreeWeave** - Built by developers, for developers. No strings attached.
