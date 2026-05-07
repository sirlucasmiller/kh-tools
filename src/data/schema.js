/**
 * App Data Schema
 * ===============
 * Reference for the data structure used in each category's app list.
 * When adding a new app, follow this shape exactly.
 *
 * {
 *   id:            string   — Unique slug, e.g. "app-name"
 *   name:          string   — Display name
 *   developer:     string   — Person or team name
 *   website:       string   — Official URL (optional, can be null)
 *   repository:    string   — Source code URL (optional, can be null)
 *   platforms:     string[] — Array of: "windows", "macos", "linux", "android", "ios", "web"
 *   pricing:       string   — One of: "free", "freemium", "paid", "donation"
 *   description:   string   — Brief fallback description of what the app does.
 *                              Visible strings should also be added to locale files:
 *                              apps.[appId].description, pros, cons, details,
 *                              and sources.[index].label.
 *   features: {
 *     [featureKey]: boolean  — Each key is a feature ID defined in the category,
 *                              value is whether the app supports it
 *   }
 *   privacy: {
 *     dataCollection:  string  — "none" | "minimal" | "moderate" | "extensive"
 *     openSource:      boolean
 *     offlineCapable:  boolean
 *   }
 *   details:        string[] — Reviewed factual fallback notes (optional)
 *   pros:           string[] — Fallback list of advantages
 *   cons:           string[] — Fallback list of disadvantages
 *   sources: {
 *     label:         string
 *     url:           string
 *   }[]                     — Sources used for the review (optional)
 *   lastReviewed:   string   — ISO date string (YYYY-MM-DD)
 * }
 *
 *
 * Category Schema
 * ===============
 * Each category in categories.js follows this shape:
 *
 * {
 *   id:              string   — Unique slug, e.g. "audio-video"
 *   icon:            string   — Emoji or icon identifier
 *   featureLabels: {
 *     [featureKey]: string    — Human-readable label for each compared feature
 *   }
 *   verdict: {
 *     recommendedAppId:  string | null  — ID of the recommended app, or null
 *     recommendedAppIds: string[]        — IDs when multiple apps are recommended
 *     type:              string         — Optional: "tie" for context-dependent ties
 *     summary:           string         — Brief explanation of the recommendation
 *   }
 *   apps:            App[]    — Array of app objects (see above)
 * }
 */

export const APP_SCHEMA_VERSION = '1.0.0'
