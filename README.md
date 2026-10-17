# Website-NG

Re-implementation of my personal website in [Astro](https://astro.build)

## Reasoning

My website was a heavy lifter. Had APIs for VRChat world stuff, had seperate "modes" for different subdomains with cursed nginx configs, the whole lot.

I don't need any of that. I dont think i even needed svelte to begin with, I was just using that for serverside stuff and barely anything was reactive.

This is exaggerated hundred-fold on the [Abyssal Fragments](https://abyssalfragments.org) website. It was meant to be an all-in-one website, until the tech debt hit me. 

I need something slim. Something fast. Something *not SvelteKit*. Both here, and for Abyssal

So.

I'm using my personal website as a testing ground for Astro. If all goes well, this will be my new personal website, and I'll begin moving Abyssal over! If not, then so be it! I'll still enjoy learning the framework & taking my small steps

<details>

<summary>
My initial "rant" on the topic, more informal language here
</summary>

> considering redoing the site in https://astro.build, sveltekit is more for reactive sites & our stuff is pretty much static content, aside from externally (assets-api) fetched shit

> gonna give a crack at migrating my personal site to it first & report back

> svelte is just too much of a heavy lifter for what should be a light website

> might even rewrite it in jeckyll if i need to

> just need something with basic templating. no statefullness, no nothing

> and plus, if i *do* need something with actual statefullness on the site, astro supports a shit ton of frameworks (incl. svelte <3) so i can just do it in there under the astro wrapper

> aaalso needing to move from pnpm as its being vibeslopped, might go back to raw npm or yarn berry

> again, will use my personal site as an experiment ground before i push anything on abyssal

</details>

## Side-Notes

- This rewrite was started `2026-10-17T03:37:00.000Z` and initial commit done at `2026-10-17T05:41:29.643Z`. That's just over 2 hours. Pretty fast if I do say so myself.

- I made the README before even initalizing the astro template. Just needed to get my thoughts down on paper