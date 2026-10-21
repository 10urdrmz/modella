import type { CategoryTermLike } from "./categories";

export type MegaColumn = {
	title: string;
	url: string;
	links: Array<{ label: string; url: string }>;
};

export type NavItem = {
	label: string;
	url: string;
	sale?: boolean;
	mega?: MegaColumn[];
};

const HUB_SLUGS = new Set(["dolaplar", "odalar", "uniteler"]);

function slugFromCategoryUrl(url: string): string | null {
	const match = url.match(/^\/category\/([^/?#]+)/);
	return match?.[1] ?? null;
}

/** Attach taxonomy children as Hive-style mega columns for hub nav items. */
export function buildMegaNav(
	navItems: Array<{ label: string; url: string; sale?: boolean }>,
	terms: CategoryTermLike[],
): NavItem[] {
	const hubs = new Map(
		terms.filter((t) => HUB_SLUGS.has(t.slug)).map((t) => [t.slug, t]),
	);

	return navItems.map((item) => {
		const slug = slugFromCategoryUrl(item.url);
		const hub = slug ? hubs.get(slug) : undefined;
		const children = hub?.children ?? [];
		if (!hub || children.length === 0) {
			return { ...item };
		}

		const mega: MegaColumn[] = children.map((child) => ({
			title: child.label,
			url: `/category/${child.slug}`,
			links: [],
		}));

		return { ...item, mega };
	});
}
