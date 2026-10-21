/** Helpers for hierarchical EmDash `category` taxonomy terms. */

export type CategoryTermLike = {
	id: string;
	slug: string;
	label: string;
	description?: string | null;
	parentId?: string | null;
	children?: CategoryTermLike[];
};

export type CategoryMatch = {
	term: CategoryTermLike;
	/** Immediate parent hub, when this term is a child. */
	parent: CategoryTermLike | null;
	/** Root hub for breadcrumbs / nav highlight (self when already a hub). */
	hub: CategoryTermLike;
};

/** Two-level category tree lookup (hub → children). */
export function findCategoryInTree(
	terms: CategoryTermLike[],
	slug: string,
	parent: CategoryTermLike | null = null,
): CategoryMatch | null {
	for (const term of terms) {
		if (term.slug === slug) {
			return { term, parent, hub: parent ?? term };
		}
		const found = findCategoryInTree(term.children ?? [], slug, term);
		if (found) return found;
	}
	return null;
}

export type CategoryPageFields = {
	title?: string | null;
	lede?: string | null;
	hero_image_path?: string | null;
	tile_image_path?: string | null;
	hero_alt?: string | null;
	slug?: string | null;
};

/** Index category_pages entries by slug for O(1) tile/hero lookup. */
export function indexCategoryPages(
	entries: Array<{ id: string; data: CategoryPageFields }>,
): Map<string, CategoryPageFields> {
	const map = new Map<string, CategoryPageFields>();
	for (const entry of entries) {
		const slug = entry.id || entry.data.slug;
		if (slug) map.set(String(slug), entry.data);
	}
	return map;
}
