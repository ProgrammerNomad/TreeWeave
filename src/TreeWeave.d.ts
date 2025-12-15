/**
 * TreeWeave TypeScript Definitions
 */

export interface TreeNodeMeta {
  gender?: 'male' | 'female' | string;
  photo?: string;
  dob?: string;
  dod?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  bio?: string;
  [key: string]: any;
}

export interface TreeNode {
  id: string | number;
  label: string;
  meta?: TreeNodeMeta;
  children?: TreeNode[];
  parent?: string | number;
}

export interface TreeWeaveOptions {
  // Node dimensions
  nodeWidth?: number;
  nodeHeight?: number;

  // Spacing
  levelGap?: number;
  siblingGap?: number;

  // Layout
  direction?: 'vertical' | 'horizontal';
  centerRoot?: boolean;

  // Connectors
  connectors?: 'line' | 'curve' | 'bezier';

  // Display options
  showPhoto?: boolean;
  showDOB?: boolean;
  showGender?: boolean;
  showTitle?: boolean;
  showMenu?: boolean;

  // Features
  enableCollapse?: boolean;
  collapseOnNodeClick?: boolean;
  enableZoom?: boolean;
  enableExport?: boolean;

  // Rendering
  renderMode?: 'dom' | 'string';

  // Colors
  colors?: {
    [key: string]: string;
    male?: string;
    female?: string;
    default?: string;
  };

  // Callbacks
  onNodeClick?: (node: TreeNode, event: MouseEvent) => void;
  onNodeDoubleClick?: (node: TreeNode, event: MouseEvent) => void;
  onNodeRightClick?: (node: TreeNode, event: MouseEvent) => void;
  onMenuClick?: (node: TreeNode, event: MouseEvent) => void;
}

export interface TreeWeaveConfig {
  data: TreeNode;
  options?: Partial<TreeWeaveOptions>;
}

export class TreeWeave {
  constructor(config: TreeWeaveConfig);

  /**
   * Render the tree as SVG
   */
  render(): SVGSVGElement | string;

  /**
   * Toggle collapse/expand state of a node
   */
  toggleNode(nodeId: string | number): TreeWeave;

  /**
   * Expand a node
   */
  expandNode(nodeId: string | number): TreeWeave;

  /**
   * Collapse a node
   */
  collapseNode(nodeId: string | number): TreeWeave;

  /**
   * Fit tree to viewport
   */
  fit(): TreeWeave;

  /**
   * Get all nodes in the tree
   */
  getNodes(): TreeNode[];

  /**
   * Search for nodes by label
   */
  search(query: string): TreeNode[];

  /**
   * Export tree to PNG
   */
  exportToPNG(filename?: string): TreeWeave;

  /**
   * Export tree to PDF
   */
  exportToPDF(filename?: string): TreeWeave;

  /**
   * Export tree to SVG
   */
  exportToSVG(filename?: string): TreeWeave;

  /**
   * Zoom in
   */
  zoomIn(): TreeWeave;

  /**
   * Zoom out
   */
  zoomOut(): TreeWeave;

  /**
   * Set zoom level (0.1 to 5)
   */
  setZoom(level: number): TreeWeave;

  /**
   * Pan tree
   */
  pan(x: number, y: number): TreeWeave;

  /**
   * Reset view
   */
  reset(): TreeWeave;
}

export default TreeWeave;
