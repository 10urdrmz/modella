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

export const catalog: CatalogCategory[] = [
	{
		slug: "furniture",
		label: "Furniture",
		lede: "The foundation of every great space. Explore our curated collection of modern furniture from the world's most celebrated designers and manufacturers.",
		heroImage:
			"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop",
		heroAlt: "Modern living room seating",
		children: [
			{
				slug: "seating",
				label: "Seating",
				image:
					"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop",
			},
			{
				slug: "tables-desks",
				label: "Tables & Desks",
				image:
					"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
			},
			{
				slug: "shelving-storage",
				label: "Shelving & Storage",
				image:
					"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
			},
			{
				slug: "bedroom",
				label: "Bedroom Furniture",
				image:
					"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop",
			},
		],
	},
	{
		slug: "lighting",
		label: "Lighting",
		lede: "Architectural light for rooms that need atmosphere as much as illumination.",
		heroImage:
			"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1600&h=900&fit=crop",
		heroAlt: "Modern floor lamp",
		children: [
			{
				slug: "floor-lamps",
				label: "Floor Lamps",
				image:
					"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop",
			},
			{
				slug: "table-lamps",
				label: "Table Lamps",
				image:
					"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
			},
			{
				slug: "pendants",
				label: "Pendants",
				image:
					"https://images.unsplash.com/photo-1524484484237-868080f82f08?w=800&h=800&fit=crop",
			},
			{
				slug: "wall-sconces",
				label: "Wall Sconces",
				image:
					"https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=800&fit=crop",
			},
		],
	},
	{
		slug: "accessories",
		label: "Accessories",
		lede: "The finishing touches. Thoughtfully curated accessories that bring personality and purpose to every space.",
		heroImage:
			"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&h=900&fit=crop",
		heroAlt: "Modern wall clock and home accessories",
		children: [
			{
				slug: "home-accessories",
				label: "Home Accessories",
				image:
					"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
			},
			{
				slug: "kitchen-dining",
				label: "Kitchen & Dining",
				image:
					"https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop",
			},
			{
				slug: "organization-office",
				label: "Organization & Office",
				image:
					"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop",
			},
			{
				slug: "clocks",
				label: "Clocks",
				image:
					"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=800&fit=crop",
			},
			{
				slug: "pillows-blankets",
				label: "Pillows & Blankets",
				image:
					"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=800&fit=crop",
			},
			{
				slug: "candle-holders",
				label: "Candle Holders",
				image:
					"https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=800&fit=crop",
			},
			{
				slug: "planters",
				label: "Planters",
				image:
					"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=800&fit=crop",
			},
			{
				slug: "decorative-vases",
				label: "Decorative Vases & Bowls",
				image:
					"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=800&fit=crop",
			},
			{
				slug: "coat-racks",
				label: "Coat Racks",
				image:
					"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
			},
			{
				slug: "mirrors",
				label: "Mirrors",
				image:
					"https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop",
			},
			{
				slug: "fireplace",
				label: "Fireplace",
				image:
					"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
			},
			{
				slug: "vitra-miniatures",
				label: "Miniatures by Vitra",
				image:
					"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
			},
		],
	},
	{
		slug: "rugs",
		label: "Rugs",
		lede: "Ground the room with texture, color, and craft — from flatweaves to sculptural piles.",
		heroImage:
			"https://images.unsplash.com/photo-1600166898405-da953828f484?w=1600&h=900&fit=crop",
		heroAlt: "Modern area rug in a living space",
		children: [
			{
				slug: "area-rugs",
				label: "Area Rugs",
				image:
					"https://images.unsplash.com/photo-1600166898405-da953828f484?w=800&h=800&fit=crop",
			},
			{
				slug: "runners",
				label: "Runners",
				image:
					"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop",
			},
			{
				slug: "outdoor-rugs",
				label: "Outdoor Rugs",
				image:
					"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop",
			},
		],
	},
	{
		slug: "outdoor",
		label: "Outdoor",
		lede: "Furniture and lighting built for open air — designed with the same care as indoor classics.",
		heroImage:
			"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&h=900&fit=crop",
		heroAlt: "Outdoor lounge furniture",
		children: [
			{
				slug: "outdoor-seating",
				label: "Outdoor Seating",
				image:
					"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=800&fit=crop",
			},
			{
				slug: "outdoor-tables",
				label: "Outdoor Tables",
				image:
					"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=800&fit=crop",
			},
			{
				slug: "outdoor-lighting",
				label: "Outdoor Lighting",
				image:
					"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop",
			},
		],
	},
	{
		slug: "sale",
		label: "Sale",
		lede: "Selected pieces with seasonal savings — still the makers and designers you trust.",
		heroImage:
			"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop",
		heroAlt: "Sale furniture selection",
		children: [],
	},
	{
		slug: "new",
		label: "New!",
		lede: "Just arrived — new introductions from the brands and designers we stock.",
		heroImage:
			"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop",
		heroAlt: "New arrivals",
		children: [],
	},
];

export function getCatalogCategory(slug: string) {
	const parent = catalog.find((c) => c.slug === slug);
	if (parent) return { category: parent, parent: null as CatalogCategory | null, child: null as CatalogChild | null };

	for (const cat of catalog) {
		const child = cat.children.find((c) => c.slug === slug);
		if (child) return { category: cat, parent: cat, child };
	}
	return null;
}

export function getParentNavSlug(label: string) {
	const map: Record<string, string> = {
		Furniture: "/category/furniture",
		Lighting: "/category/lighting",
		Accessories: "/category/accessories",
		Rugs: "/category/rugs",
		Outdoor: "/category/outdoor",
		Brands: "/brands",
		Designers: "/brands",
		"New!": "/category/new",
		About: "/about",
		Sale: "/category/sale",
	};
	return map[label] ?? "/products";
}
