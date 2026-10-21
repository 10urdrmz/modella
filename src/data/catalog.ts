/** Modella product image map keyed by product slug / id */
export const productSampleImages: Record<string, string> = {
	"raydolap": "/modella-products/raydolap/01.jpg",
	"reflekte-camli-dolap": "/modella-products/reflekte-camli-dolap/01.jpg",
	"membran-kapakli-dolap": "/modella-products/membran-kapakli-dolap/01.jpg",
	"giyinme-odasi": "/modella-products/giyinme-odasi/01.jpg",
	"yatak-odasi": "/modella-products/yatak-odasi/01.jpg",
	"genc-odasi": "/modella-products/genc-odasi/01.jpg",
	"tv-unitesi": "/modella-products/tv-unitesi/01.jpg",
	"dresuar-ve-makyaj-masasi": "/modella-products/dresuar-ve-makyaj-masasi/01.jpg",
	"coffee-corner-ve-kitaplik": "/modella-products/coffee-corner-ve-kitaplik/01.jpg",
};

export function sampleImageForProduct(slugOrId: string) {
	return productSampleImages[slugOrId] ?? null;
}
