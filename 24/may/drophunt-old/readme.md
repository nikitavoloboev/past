# Drophunt

> See airdrops

## Setup

```
bun i
```

## Run website

```
bun dev
```

## Run telegram mini app

Setup [cloudflared](https://github.com/cloudflare/cloudflared) tunnel. Add the tunnel id in `.env` as `CLOUDFLARE_TUNNEL_ID`. Then:

```
bun tg
```

and in another tab

```
bun tunnel
```
