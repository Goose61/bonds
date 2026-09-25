# ABC Trust Bonding — Frontend

Simple wallet UI for end users to **bond** reserve tokens and **stake** TIME with the ABC Bonding contracts.

## Features

- Connect wallet (MetaMask / injected provider) with **network switch** button
- **Protocol wiring panel** — on-chain health checks (bytecode, bond init, treasury whitelist, warmup, auto-stake link)
- View TIME, reserve (MIM), and MEMO balances (decimals/symbols read from chain)
- **Bond**: approve + purchase bonds, view vesting, redeem (optional auto-stake)
- **Stake**: approve TIME, stake, claim MEMO after warmup, approve MEMO + unstake, trigger rebase
- Auto-refresh balances after each confirmed transaction

## Setup

```bash
cd frontend
cp .env.example .env
# Edit .env with your RPC URL, chain ID, and deployed addresses
npm install
npm run dev
```

Open http://localhost:5173

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_RPC_URL` | Yes | JSON-RPC endpoint |
| `VITE_CHAIN_ID` | Yes | Chain ID (e.g. `31337` local, `43114` Avalanche) |
| `VITE_BOND_DEPOSITORY` | Yes | `BondDepository` contract address |
| `VITE_STAKING` | Yes | `Staking` contract address |
| `VITE_TIME_TOKEN` | No | Auto-read from bond/staking if omitted |
| `VITE_PRINCIPLE_TOKEN` | No | Auto-read from bond if omitted |
| `VITE_MEMO_TOKEN` | No | Auto-read from staking if omitted |

## Prerequisites on-chain

The **Protocol wiring** panel at the top of the app checks these automatically:

1. Contract bytecode exists at configured addresses (RPC reachable)
2. `initializeBondTerms` called on `BondDepository`
3. `BondDepository` whitelisted as treasury **reserve depositor**
4. `Staking.setContract(WARMUP, …)` configured
5. `BondDepository.setStaking(…)` configured (for redeem auto-stake)

For rebases to mint rewards, also configure off-app:

- `StakingDistributor` as treasury **reward manager**
- `Staking` added as distributor recipient

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repo includes [`.github/workflows/deploy-frontend.yml`](../.github/workflows/deploy-frontend.yml), which builds `frontend/` and publishes to GitHub Pages on pushes to `frontend` or `main`.

**Live URL (after setup):** https://leruo-m.github.io/ABC_Bonding/

### One-time GitHub setup

1. Open **Settings → Pages** on `LERUO-M/ABC_Bonding`.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push this workflow to `frontend` or `main` — the **Deploy frontend to GitHub Pages** action runs automatically.
4. Optional: add repository **Variables** or **Secrets** to override defaults (Sepolia addresses are baked in):

| Name | Type | Purpose |
|------|------|---------|
| `VITE_RPC_URL` | Variable | Preferred RPC (defaults to public Sepolia) |
| `VITE_CHAIN_ID` | Variable | Default `11155111` |
| `VITE_CHAIN_NAME` | Variable | Default `Sepolia` |
| `VITE_BOND_DEPOSITORY` | Variable | Bond contract |
| `VITE_STAKING` | Variable | Staking contract |
| `VITE_TIME_TOKEN` | Variable | TRUST token |
| `VITE_PRINCIPLE_TOKEN` | Variable | uTRST token |

### Local production preview (same base path as Pages)

```bash
VITE_BASE_PATH=/ABC_Bonding/ npm run build
npx vite preview --base /ABC_Bonding/
```

## Stack

- React + TypeScript + Vite
- [wagmi](https://wagmi.sh) + [viem](https://viem.sh) for Ethereum interactions
