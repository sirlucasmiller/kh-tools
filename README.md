# Kingdom Hall Tools

An open-source directory to discover and compare independent apps built by and for Jehovah's Witnesses congregations.

> **Disclaimer:** This project is not affiliated with, endorsed by, or connected to the Watch Tower Bible and Tract Society of Pennsylvania or any of its related entities.

## What is this?

Over the years, many brothers have developed helpful apps on their own initiative to support congregation activities — things like audio & video management during meetings, field service tracking, territory organization, and more.

The problem is that these apps are scattered all over the internet. It's hard to know what exists and which one fits your congregation's needs.

**KH Tools** brings them together in one place, with honest side-by-side comparisons, feature breakdowns, privacy notes, and a clear recommendation for each category.

> Comparisons are based on general congregation use cases. Each congregation may have specific needs, so the final choice should always be made locally.

## How it works

- Apps are organized by **category** (Audio & Video, Field Service, Territory, etc.)
- Each category page has a **feature comparison table**, **privacy information**, **pros & cons**, and a **verdict**
- Categories without reviewed apps are hidden from the homepage — they show up as soon as the first app is reviewed
- All data lives in simple JavaScript files under `src/data/apps/`, making it easy to add new entries

## Want to suggest an app?

If you know of an app that isn't listed, [open an issue](../../issues/new?template=app-submission.yml). Just provide the app name and a link — we'll take care of researching and reviewing it.

## Running locally

```bash
npm install
npm run dev
```

## Contributing

Contributions are welcome! Whether it's suggesting an app, improving a review, fixing a bug, or translating the site into another language — every bit helps.

## License

[MIT](./LICENSE)
