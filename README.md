# Documentation

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Sections covered

- Header (mobile / desktop)
- "Resources" page (analytics, "All" sub-section)
- Other pages are just empty boilerplates
- Mock static data comes from `+page.server.ts` files

## Conventions
- Reusable components were placed in `$lib/components`, and exposed by `$lib/index.ts`
- Types were put in a `*.models.ts` file

## Additional dependencies (more in `package.json`)

- tailwind.css for styling
- chart.js for charts
- sveltekit-progress for simple progress bars
- lucide for icons
- prettier for formatting


## Known issues

- There are overflow and resize issues related to chart.js and the table displayed in the resources page that don't allow the layout to be correctly responsive; by commenting the table and refreshing (due to the resize problem) they responsive layout gets better. However, yes, not ideal, it needs to be fixed.
- The line chart should be populated with data
- Header should be position fixed, now it disappears as you scroll
- The following features should be added: animations, docker setup, testing, storybook, language support, different app interactions and api integration, table's pagination etc.
- Accessibility should be improved, such as "go to main section" with keyboard navigation, better aria attributes, better chart coverage, etc.
- Some elements should be put into a component as are being repeated
- Forms should be well handled with validation

## Possible design improvements that come to mind

- Explicit section titles with related links, to further improve readability and accessibility
- Maybe some gray text should be checked for contrast (accessibility)