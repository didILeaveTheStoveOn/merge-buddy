# merge-buddy
Google Chrome extension that hides the merge button in GitHub PRs. The reasoning for this is
that adding more friction will help you remember that you have to use labels to merge and/or
deploy. It definitely will for me! If the repo is set up so that merging is actually done using
the button, you can click on the extension icon and a popup with a button will appear - click it
and it will toggle the visibility of the merge button.

## Installation
1. Go to [chrome://extensions/](chrome://extensions/)
2. Enable developer mode by turning on the switch in the upper right
3. Click on `Load unpacked` and load the folder in which you cloned this repo

## Using with GitHub Enterprise with a custom domain
Simply replace the `https://github/com/*` in the `manifest.json` file with `https://your.company.github.url/*`.
Once replaced, you should reload the extension if you already had it installed. To do that, go to
[chrome://extensions/](chrome://extensions/), find Merge Buddy and click on the reload icon on the
bottom right part of the tile.
