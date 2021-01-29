import { writable } from 'svelte/store';
import type { Line } from '../canvas/index.d';

export const linesStore = writable(new Map() as Map<Symbol | {}, Line>);

// Current active line
export const activeLineStore = writable(null as Symbol | null);

// Current active segment within a line
export const activeSegmentStore = writable(null as Symbol | null);

// Current active node within a segment
export const activeNodeStore = writable(null as Symbol | null);

// represents canvas svg to get coords and dimensions
export const canvasStore = writable(null as SVGElement | null);

// whether to assocociate delete and backspace with the deletion of a node
// if we're in an input, we want this disabled.
export const allowDeleteStore = writable(true); 

export const debugModeStore = writable(false);

export const showGridBG = writable(true);
export const gridDimStore = writable([3, 8]);
export const lightenOddGridStore = writable(true);

// opacity of the image background
export const gridBGOpacityStore = writable(.3);

// variable width of the box
export const canvasWidthStore = writable(500);