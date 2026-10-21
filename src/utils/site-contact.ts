import { getEmDashEntry } from "emdash";

/** Fallback when Contact & Location entry is missing (Masko showroom). */
export const DEFAULT_CONTACT = {
	locationName: "Masko Mobilya Kenti",
	address:
		"Ziya Gökalp, İkitelli OSB, Masko Mobilya Kenti D:3B-2 Blok NO:3, 34490 Başakşehir/İstanbul",
	phone: "(0212) 675 20 57",
	hours: [
		"Çarşamba 09:30–19:30",
		"Perşembe 09:30–19:30",
		"Cuma 09:30–19:30",
		"Cumartesi 09:30–19:30",
		"Pazar 12:00–19:00",
		"Pazartesi 09:30–19:30",
		"Salı 09:30–19:30",
	],
	email: null as string | null,
	mapUrl: "https://maps.google.com/?q=Masko+Mobilya+Kenti+Ba%C5%9Fak%C5%9Fehir",
};

export type SiteContact = {
	locationName: string;
	address: string;
	phone: string;
	phoneTel: string;
	hours: string[];
	email: string | null;
	mapUrl: string | null;
	/** EmDash edit attrs when loaded from CMS */
	edit?: Record<string, Record<string, string>> | null;
	content?: { collection: string; id: string; slug?: string | null };
};

/** Convert display phone to a tel: href value. */
export function phoneToTel(display: string): string {
	const digits = display.replace(/\D/g, "");
	if (!digits) return "";
	if (digits.startsWith("0") && digits.length === 11) return `+90${digits.slice(1)}`;
	if (digits.startsWith("90") && digits.length >= 12) return `+${digits}`;
	if (digits.startsWith("90212")) return `+${digits}`;
	return digits.startsWith("+") ? digits : `+${digits}`;
}

function parseHours(raw: string | null | undefined): string[] {
	if (!raw?.trim()) return DEFAULT_CONTACT.hours;
	return raw
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter(Boolean);
}

/** Load the primary Contact & Location entry (slug: main) from EmDash. */
export async function resolveSiteContact(): Promise<SiteContact> {
	try {
		const { entry } = await getEmDashEntry("contact", "main");
		if (!entry) {
			return {
				...DEFAULT_CONTACT,
				phoneTel: phoneToTel(DEFAULT_CONTACT.phone),
				edit: null,
			};
		}
		const phone = String(entry.data.phone ?? DEFAULT_CONTACT.phone).trim();
		return {
			locationName: String(entry.data.location_name ?? DEFAULT_CONTACT.locationName).trim(),
			address: String(entry.data.address ?? DEFAULT_CONTACT.address).trim(),
			phone,
			phoneTel: phoneToTel(phone),
			hours: parseHours(entry.data.hours),
			email: entry.data.email ? String(entry.data.email).trim() : null,
			mapUrl: entry.data.map_url ? String(entry.data.map_url).trim() : DEFAULT_CONTACT.mapUrl,
			edit: entry.edit ?? null,
			content: { collection: "contact", id: entry.data.id, slug: "main" },
		};
	} catch {
		return {
			...DEFAULT_CONTACT,
			phoneTel: phoneToTel(DEFAULT_CONTACT.phone),
			edit: null,
		};
	}
}
