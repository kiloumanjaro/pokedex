// Manages search query, type filter, and sort mode, provides filtered/sorted list computation
import cache from '../lib/services/cache.js';

let sortMode    = 'id';
let searchQuery = '';
let typeFilter  = '';

export function getSortMode()     { return sortMode; }
export function getSearchQuery()  { return searchQuery; }
export function getTypeFilter()   { return typeFilter; }
export function setSortMode(m)    { sortMode = m; }
export function setSearchQuery(q) { searchQuery = q; }
export function setTypeFilter(t)  { typeFilter = t; }

export function filteredList(list) {
  let result = [...list];
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    result = result.filter(p => {
      const padded = String(p.id).padStart(3, '0');
      return (
        p.name.toLowerCase().includes(q) ||
        padded.includes(q) ||
        String(p.id).includes(q)
      );
    });
  }
  if (typeFilter) {
    result = result.filter(p => {
      const detail = cache.pokemon[p.id];
      if (!detail?.types) return false;
      return detail.types.some(t => t.type.name === typeFilter);
    });
  }
  result.sort(sortMode === 'name'
    ? (a, b) => a.name.localeCompare(b.name)
    : (a, b) => a.id - b.id
  );
  return result;
}
