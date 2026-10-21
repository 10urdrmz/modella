/** Demo product image overrides (Hive samples) keyed by product slug / id */
const productImg = (name: string) => `/hive-samples/products/${name}.jpg`;

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
