export type ProductVariant = {
	label: string;
	group?: string;
	sku?: string;
	swatch?: string;
	price_label?: string;
	compare_at_price?: string;
	image_path?: string;
	shipping_time?: string;
};

export function linesFromText(value?: string | null): string[] {
	if (!value) return [];
	return value
		.split(/\r?\n|,/)
		.map((part) => part.trim())
		.filter(Boolean);
}

export function asVariants(value: unknown): ProductVariant[] {
	if (!Array.isArray(value)) return [];
	return value
		.map((row) => {
			if (!row || typeof row !== "object") return null;
			const item = row as Record<string, unknown>;
			const label = typeof item.label === "string" ? item.label.trim() : "";
			if (!label) return null;
			return {
				label,
				group: typeof item.group === "string" ? item.group : undefined,
				sku: typeof item.sku === "string" ? item.sku : undefined,
				swatch: typeof item.swatch === "string" ? item.swatch : undefined,
				price_label:
					typeof item.price_label === "string" ? item.price_label : undefined,
				compare_at_price:
					typeof item.compare_at_price === "string"
						? item.compare_at_price
						: undefined,
				image_path:
					typeof item.image_path === "string" ? item.image_path : undefined,
				shipping_time:
					typeof item.shipping_time === "string"
						? item.shipping_time
						: undefined,
			} satisfies ProductVariant;
		})
		.filter((row): row is ProductVariant => row !== null);
}

export function groupVariants(variants: ProductVariant[]) {
	const groups = new Map<string, ProductVariant[]>();
	for (const variant of variants) {
		const key = variant.group?.trim() || "Options";
		const list = groups.get(key) ?? [];
		list.push(variant);
		groups.set(key, list);
	}
	return [...groups.entries()].map(([name, items]) => ({ name, items }));
}
