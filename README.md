# ScoutLens

> Enhanced & Experimental ScoutGame UI extension

ScoutLens is an open-source browser extension (Chrome & Firefox) that super-charges the Scout Game interface. Inspired by how **Complexity** enhances Perplexity, ScoutLens provides a modern, modular, and developer-friendly overlay that surfaces key information and tooling right where you need it—inside the game client itself.

---

## Table of Contents

1. [Features](#features)
2. [Screenshots](#screenshots)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Development](#development)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [Roadmap](#roadmap)
9. [License](#license)
10. [Credits](#credits)

---

## Features

| Category | Description |
| --- | --- |
| UI / UX | • Lightweight overlay with collapsible sidebar<br>• Dark, Light & Cyberpunk themes<br>• Customisable hot-keys & layouts |
| Game Data | • Real-time player stats & inventory viewer<br>• Quick-filter market explorer<br>• Quest & achievement tracker |
| Dev Tools | • Live DEV token price & wallet balances<br>• Built-in log inspector & network panel<br>• One-click links to smart-contract explorers |
| Experimental | • AI chat assistant (OpenAI / Ollama plug-ins)<br>• Voice command prototype<br>• Accessibility high-contrast mode |

> **Note** Features tagged *Experimental* are behind feature-flags and may change without notice.

---

## Screenshots

_Coming soon — feel free to submit your own screenshots via Pull Request!_

---

## Installation

### 1. Clone the repository

```bash
$ git clone https://github.com/etherion-tools/ScoutLens.git
$ cd ScoutLens
```

### 2. Install dependencies

ScoutLens uses **pnpm** by default but npm / yarn work fine:

```bash
# With pnpm
$ pnpm install

# With npm
$ npm install
```

### 3. Build the extension

```bash
# Production build (outputs to ./dist)
$ pnpm run build

# Development watch (auto-reloads on save)
$ pnpm run dev
```

### 4. Load into your browser

<details>
<summary>Chrome / Brave / Edge</summary>

1. Open `chrome://extensions/`.
2. Toggle **Developer mode** (top-right).
3. Click **Load unpacked** and select the generated `dist/` folder.
</details>

<details>
<summary>Firefox</summary>

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on**.
3. Select the `manifest.json` inside `dist/`.
4. For permanent installs, pack the extension (`pnpm run build:zip`) and load it via `about:addons`.
</details>

---

## Usage

Once loaded, launch **Scout Game** in your browser. The ScoutLens icon will appear in the toolbar and an overlay badge will show in-game.

* Open the sidebar with <kbd>Ctrl</kbd> + <kbd>Space</kbd> (default).
* Explore tabs for **Market**, **Quests**, **DEV Monitor**, etc.
* Access settings → **⚙️ Preferences** to enable experimental modules or change theme.

---

## Development

ScoutLens is built with **TypeScript**, **React**, and **Vite**.

```bash
# Start dev server with hot-reload (Chrome only)
$ pnpm run web-ext
```

**Key scripts** (see `package.json`):

| Script | Purpose |
| ------ | ------- |
| `dev` | Vite dev & watcher |
| `build` | Production build to `dist/` |
| `web-ext` | Launches Firefox with live-reload |
| `lint` | ESLint + Prettier |
| `format` | Auto-formats code |

### Project Structure

```
ScoutLens/
├─ public/           # Static assets
├─ src/
│  ├─ background/    # Background scripts
│  ├─ content/       # Content scripts injected into Scout Game
│  ├─ popup/         # Toolbar popup UI
│  ├─ options/       # Settings page
│  ├─ themes/        # CSS / Tailwind themes
│  └─ utils/         # Shared helpers & hooks
├─ manifest.json     # Web-extension manifest v3
└─ vite.config.ts    # Build config
```

---

## Contributing

1. ★ Star this repo to show your support.
2. Fork the project and create your feature branch:
   `git checkout -b feat/my-awesome-feature`.
3. Commit your changes with conventional commits.
4. Push to the branch and open a Pull Request.

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed process & code-style rules.

---

## Roadmap

- [ ] Polish AI Assistant UI
- [ ] Add unit tests with Vitest
- [ ] Persist settings via IndexedDB
- [ ] Publish to Chrome Web Store & Firefox AMO

Feel free to open issues for suggestions or bug reports.

---

## License

This project is licensed under the **AGPL v3.0**. See the [LICENSE](LICENSE) file for details.

---
