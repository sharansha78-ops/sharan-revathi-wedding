<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->
# Project rules
- All wedding details (names, events, times, RSVP number, audio, photos) live in src/config/wedding.ts so the couple can edit one place.
- Countdown math is a pure helper in src/lib/countdown.ts with tests, so timezone handling stays verifiable.
- Resolve original media through src/config/artwork.ts and expose it through the wedding config; this preserves original filenames and keeps presentation independent of asset storage.
- Drive the pinned opening temple entrance and zoom over its complete sticky scroll range (`start start` to `end end`); never overlay the opaque arch as a second-image transition.
- Composite the lower wedding scene as separately zoomed background, temple, and couple layers over the sticky range; temple and couple share one box whose final zoomed height lets the temple top meet the screen top, capped by width so the couple is never cropped, clouds sit near the top behind the temple; passing clouds use rightward horizontal scroll transforms rather than timed loops so motion reverses with scrolling.
