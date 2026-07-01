# AmDark

Project for me to test out angular material M3 theming and trying to
find a workaround for my phone being on ios 16 and not supporting
the newer (circa 2024) css `light-dark()` function.

Live page: [https://jasongoemaat.github.io/amdark/](https://jasongoemaat.github.io/amdark/)

The problem is I can't target 'color-scheme' so I have to use css selectors,
and create separate light and dark themes for each color palette.

Anyway, you can check these out:

- [styles.scss](/src/styles.scss) - Main stylesheet, includes both below which use @supports so only the styles in one should be used based on browser support for 'light-dark()'
- [styles_newer.scss](/src/styles_newer.scss) - clear and easy styling for newer browsers
- [styles_older.scss](/src/styles_older.scss) - styles for older browsers that can be finicky and requires targetting each combination of brightness and color with it's own theme


Also I was working on this until I saw that the older browser I was targeting
didn't support `@container style(--var-name: value)` either.  The technique
might be useful for some other purpose though...

- [styles_older_container.scss](src/styles_older_container.scss) - not used, trying to use css `@container` at-rule to mimic the use of `color-scheme`

The main [/src/styles/styles.scss] loads both of the files which use the css
`@support` at-rule to only apply the one based on support for the `light-dark()`
function.

## github pages

I setup pages under repo settings on github.com.

I installed for publishing:  `ng add angular-cli-ghpages`

I deployed with: `ng deploy --base-href=/amdark/`

An action 'pages-build-deployment' appears under the 'actions' tab on my
repo showing it being deployed with the url: https://jasongoemaat.github.io/amdark/
