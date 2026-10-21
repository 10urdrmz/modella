import { getEmDashEntry, getMenu } from "emdash";

export type FooterMenuItem = { label: string; url: string };

export type SiteFooterContent = {
	newsletterHeading: string;
	newsletterPlaceholder: string;
	newsletterDisclaimer: string;
	privacyLabel: string;
	privacyUrl: string;
	supportHeading: string;
	contactHeading: string;
	accountHeading: string;
	helpCenterLabel: string;
	helpCenterUrl: string;
	bottomBrandPrimary: string;
	bottomBrandSecondary: string;
	socialInstagram: string | null;
	socialFacebook: string | null;
	socialVimeo: string | null;
	supportLinks: FooterMenuItem[];
	accountLinks: FooterMenuItem[];
	edit?: Record<string, Record<string, string>> | null;
};

const DEFAULTS: Omit<SiteFooterContent, "supportLinks" | "accountLinks" | "edit"> = {
	newsletterHeading: "Join Our Newsletter",
	newsletterPlaceholder: "Email",
	newsletterDisclaimer:
		"By providing this information, you are opting to receive email communications from hive.",
	privacyLabel: "View privacy policy",
	privacyUrl: "/about",
	supportHeading: "Support",
	contactHeading: "Contact",
	accountHeading: "Account",
	helpCenterLabel: "Help Center",
	helpCenterUrl: "/contact",
	bottomBrandPrimary: "hive",
	bottomBrandSecondary: "İstanbul",
	socialInstagram: "https://www.instagram.com/",
	socialFacebook: "https://www.facebook.com/",
	socialVimeo: "https://vimeo.com/",
};

const DEFAULT_SUPPORT: FooterMenuItem[] = [
	{ label: "About hive", url: "/about" },
	{ label: "Sales Assistance", url: "/contact" },
	{ label: "Trade Program", url: "/trade" },
	{ label: "Swatch Samples", url: "/products" },
	{ label: "Order Status", url: "/contact" },
	{ label: "Contact", url: "/contact" },
	{ label: "FAQ", url: "/about" },
	{ label: "Policies", url: "/about" },
	{ label: "Privacy", url: "/about" },
	{ label: "Cookie Policy", url: "/about" },
];

const DEFAULT_ACCOUNT: FooterMenuItem[] = [
	{ label: "Sign In", url: "/_emdash/admin" },
	{ label: "Order History", url: "/contact" },
];

function str(value: unknown, fallback: string): string {
	const s = typeof value === "string" ? value.trim() : "";
	return s || fallback;
}

function urlOrNull(value: unknown, fallback: string | null): string | null {
	const s = typeof value === "string" ? value.trim() : "";
	if (s) return s;
	return fallback;
}

async function loadMenu(name: string, fallback: FooterMenuItem[]): Promise<FooterMenuItem[]> {
	try {
		const menu = await getMenu(name);
		const items = (menu?.items ?? [])
			.map((item) => ({
				label: item.label?.trim() || "",
				url: item.url?.trim() || "#",
			}))
			.filter((item) => item.label);
		return items.length > 0 ? items : fallback;
	} catch {
		return fallback;
	}
}

/** Load footer copy + menus from EmDash (Footer entry `main`, menus footer_support / footer_account). */
export async function resolveSiteFooter(): Promise<SiteFooterContent> {
	const [supportLinks, accountLinks] = await Promise.all([
		loadMenu("footer_support", DEFAULT_SUPPORT),
		loadMenu("footer_account", DEFAULT_ACCOUNT),
	]);

	try {
		const { entry } = await getEmDashEntry("footer", "main");
		if (!entry) {
			return { ...DEFAULTS, supportLinks, accountLinks, edit: null };
		}
		const d = entry.data;
		return {
			newsletterHeading: str(d.newsletter_heading, DEFAULTS.newsletterHeading),
			newsletterPlaceholder: str(d.newsletter_placeholder, DEFAULTS.newsletterPlaceholder),
			newsletterDisclaimer: str(d.newsletter_disclaimer, DEFAULTS.newsletterDisclaimer),
			privacyLabel: str(d.privacy_label, DEFAULTS.privacyLabel),
			privacyUrl: str(d.privacy_url, DEFAULTS.privacyUrl),
			supportHeading: str(d.support_heading, DEFAULTS.supportHeading),
			contactHeading: str(d.contact_heading, DEFAULTS.contactHeading),
			accountHeading: str(d.account_heading, DEFAULTS.accountHeading),
			helpCenterLabel: str(d.help_center_label, DEFAULTS.helpCenterLabel),
			helpCenterUrl: str(d.help_center_url, DEFAULTS.helpCenterUrl),
			bottomBrandPrimary: str(d.bottom_brand_primary, DEFAULTS.bottomBrandPrimary),
			bottomBrandSecondary: str(d.bottom_brand_secondary, DEFAULTS.bottomBrandSecondary),
			socialInstagram: urlOrNull(d.social_instagram, DEFAULTS.socialInstagram),
			socialFacebook: urlOrNull(d.social_facebook, DEFAULTS.socialFacebook),
			socialVimeo: urlOrNull(d.social_vimeo, DEFAULTS.socialVimeo),
			supportLinks,
			accountLinks,
			edit: entry.edit ?? null,
		};
	} catch {
		return { ...DEFAULTS, supportLinks, accountLinks, edit: null };
	}
}
