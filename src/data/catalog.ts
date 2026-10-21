export type CatalogChild = {
	slug: string;
	label: string;
	image?: string;
	imageAlt?: string;
};

export type CatalogCategory = {
	slug: string;
	label: string;
	lede: string;
	heroImage?: string;
	heroAlt?: string;
	children: CatalogChild[];
};

/** Sample imagery sourced from hivemodern.com/public_resources (local copies). */
const img = (name: string) => `/hive-samples/${name}.jpg`;
const productImg = (name: string) => `/hive-samples/products/${name}.jpg`;

export const catalog: CatalogCategory[] = [
	{
		slug: "furniture",
		label: "Furniture",
		lede: "The foundation of every great space. Explore our curated collection of modern furniture from the world's most celebrated designers and manufacturers.",
		heroImage: img("furniture-hero"),
		heroAlt: "Modern designer furniture",
		children: [
			{ slug: "seating", label: "Seating", image: img("seating") },
			{ slug: "tables-desks", label: "Tables & Desks", image: img("tables-desks") },
			{ slug: "shelving-storage", label: "Shelving & Storage", image: img("shelving") },
			{ slug: "bedroom", label: "Bedroom Furniture", image: img("bedroom") },
		],
	},
	{
		slug: "lighting",
		label: "Lighting",
		lede: "Architectural light for rooms that need atmosphere as much as illumination.",
		heroImage: img("lighting-hero"),
		heroAlt: "Modern lighting",
		children: [
			{ slug: "floor-lamps", label: "Floor Lamps", image: img("lighting-hero") },
			{ slug: "table-lamps", label: "Table Lamps", image: img("candle-holders") },
			{ slug: "pendants", label: "Pendants", image: img("decorative-vases") },
			{ slug: "wall-sconces", label: "Wall Sconces", image: img("mirrors") },
		],
	},
	{
		slug: "accessories",
		label: "Accessories",
		lede: "The finishing touches. Thoughtfully curated accessories that bring personality and purpose to every space.",
		heroImage: img("accessories-hero"),
		heroAlt: "Modern home accessories",
		children: [
			{ slug: "home-accessories", label: "Home Accessories", image: img("home-accessories") },
			{ slug: "kitchen-dining", label: "Kitchen & Dining", image: img("kitchen-dining") },
			{ slug: "organization-office", label: "Organization & Office", image: img("organization-office") },
			{ slug: "clocks", label: "Clocks", image: img("clocks") },
			{ slug: "pillows-blankets", label: "Pillows & Blankets", image: img("pillows-blankets") },
			{ slug: "candle-holders", label: "Candle Holders", image: img("candle-holders") },
			{ slug: "planters", label: "Planters", image: img("planters") },
			{ slug: "decorative-vases", label: "Decorative Vases & Bowls", image: img("decorative-vases") },
			{ slug: "coat-racks", label: "Coat Racks", image: img("coat-racks") },
			{ slug: "mirrors", label: "Mirrors", image: img("mirrors") },
			{ slug: "fireplace", label: "Fireplace", image: img("fireplace") },
			{ slug: "vitra-miniatures", label: "Miniatures by Vitra", image: img("vitra-miniatures") },
		],
	},
	{
		slug: "rugs",
		label: "Rugs",
		lede: "Ground the room with texture, color, and craft — from flatweaves to sculptural piles.",
		heroImage: img("rugs-tile"),
		heroAlt: "Modern rugs",
		children: [
			{ slug: "area-rugs", label: "Area Rugs", image: img("rugs-tile") },
			{ slug: "runners", label: "Runners", image: img("pillows-blankets") },
			{ slug: "outdoor-rugs", label: "Outdoor Rugs", image: img("outdoor-seating") },
		],
	},
	{
		slug: "outdoor",
		label: "Outdoor",
		lede: "Furniture and lighting built for open air — designed with the same care as indoor classics.",
		heroImage: img("outdoor-seating"),
		heroAlt: "Outdoor furniture",
		children: [
			{ slug: "outdoor-seating", label: "Outdoor Seating", image: img("outdoor-seating") },
			{ slug: "outdoor-tables", label: "Outdoor Tables", image: img("outdoor-tables") },
			{ slug: "outdoor-lighting", label: "Outdoor Lighting", image: img("lighting-hero") },
		],
	},
	{
		slug: "sale",
		label: "Sale",
		lede: "Selected pieces with seasonal savings — still the makers and designers you trust.",
		heroImage: img("home-hero-2"),
		heroAlt: "Sale selection",
		children: [],
	},
	{
		slug: "new",
		label: "New!",
		lede: "Just arrived — new introductions from the brands and designers we stock.",
		heroImage: img("home-hero-3"),
		heroAlt: "New arrivals",
		children: [],
	},
];

/** Demo product image overrides (Hive samples) keyed by product slug / id */
export const productSampleImages: Record<string, string> = {
	"lc4-chaise-longue": productImg("lounge"),
	"lc4-chaise": productImg("lounge"),
	"zig-zag-chair": productImg("masters"),
	"zig-zag": productImg("masters"),
	"gogan-sofa": productImg("sofa"),
	"husk-armchair": productImg("victoria-ghost"),
	"eames-lounge-chair": productImg("louis-ghost"),
	"eames-lounge": productImg("louis-ghost"),
	"arco-floor-lamp": productImg("arco-ish"),
	"arco-lamp": productImg("arco-ish"),
};

export function sampleImageForProduct(slugOrId: string) {
	return productSampleImages[slugOrId] ?? null;
}

export function getCatalogCategory(slug: string) {
	const parent = catalog.find((c) => c.slug === slug);
	if (parent)
		return {
			category: parent,
			parent: null as CatalogCategory | null,
			child: null as CatalogChild | null,
		};

	for (const cat of catalog) {
		const child = cat.children.find((c) => c.slug === slug);
		if (child) return { category: cat, parent: cat, child };
	}
	return null;
}
