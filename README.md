# AmDark

Project for me to test out angular material M3 theming and trying to
find a workaround for my phone being on ios 16 and not supporting
the newer (circa 2024) css `light-dark()` function.

Live page: [https://jasongoemaat.github.io/amdark/](https://jasongoemaat.github.io/amdark/)

The problem is I can't target 'color-scheme' so I have to use css selectors,
and create separate light and dark themes for each color palette.

Anyway, you can check these out:

* [/src/styles/styles_newer.scss] - clear and easy styling for newer browsers
* [/src/styles/styles_older.scss] - styles for older browsers that can be finicky and requires targetting each combination of brightness and color with it's own theme
* [/src/styles/styles_older_container.scss] - not used, trying to use css `@container` at-rule to mimic the use of `color-scheme`, which unfortunately doesn't work with `style()` in older browsers either.   The technique might be useful for some other purpose though...

The main [/src/styles/styles.scss] loads both of the files which use the css
`@support` at-rule to only apply the one based on support for the `light-dark()`
function.

## github pages

I setup pages under repo settings on github.com.

I ran:

    ng add angular-cli-ghpages

I deployed with:

    ng deploy --base-href=/amdark/

An action 'pages-build-deployment' appears under the 'actions' tab on my 
repo.

It shows the url under deploy:

    https://jasongoemaat.github.io/amdark/
