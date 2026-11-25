# Pigeon Pitch, One Line

[![make.fun](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/lerrboyy/pigeon-pitch-one-line/rank.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/lerrboyy/pigeon-pitch-one-line/reward.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)

Entry for the [Pigeon Pitch, One Line](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf) bounty on [make.fun](https://make.fun).

## The pitch

> Investors, I did three years of due diligence on you from the ledge outside your office — my startup sells that footage, and you're already in it.

One line, 146 characters. The pigeon did due diligence *on the investor* — the
power flips — and the twist is that the investor is already the product. No
seed-round pun, no breadcrumbs, no statue, no poop joke: in a field of ~800
entries, every one of those jokes is already crowded out. Only a pigeon does
diligence from the ledge outside your office for three years.

## How it works

`main.ts` (Node 22, standard library only) validates the pitch — one line,
1–200 characters, no leading/trailing whitespace — then writes it to
`/output/entry.txt` with no trailing newline, and reads the file back to
verify it byte-for-byte. It clears only the *contents* of `/output`, never
the directory itself.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
