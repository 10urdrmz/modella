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

/** @deprecated Prefer resolveSiteContact().phone — kept for gradual migration */
export const DEFAULT_PHONE = "(0212) 675 20 57";
/** @deprecated Prefer resolveSiteContact().phoneTel */
export const DEFAULT_PHONE_TEL = "+902126752057";

export function resolveStarterSiteIdentity(
	settings?: StarterSiteIdentitySettings,
) {
	return {
		siteTitle: settings?.title ?? DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline ?? DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
