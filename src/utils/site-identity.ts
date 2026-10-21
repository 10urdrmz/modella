/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface StarterSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "hive";
const DEFAULT_SITE_TAGLINE =
	"Modern designer furniture for architects and interior designers";
export const DEFAULT_PHONE = "1.866.663.4483";
export const DEFAULT_PHONE_TEL = "+18666634483";

export function resolveStarterSiteIdentity(
	settings?: StarterSiteIdentitySettings,
) {
	return {
		siteTitle: settings?.title ?? DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline ?? DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
