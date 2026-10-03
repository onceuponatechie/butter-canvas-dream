<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the site as a single-page experience at `/`; homepage sections use hash navigation because secondary routes are intentionally excluded.
- Render the Why Not Build feature as a Canvas 2D animation with DOM controls and semantic fallback so its 360×486 composition stays exact at every size.
- Keep the three research-led product practice cards data-driven in one component so desktop columns and mobile snap-scrolling stay synchronized.
