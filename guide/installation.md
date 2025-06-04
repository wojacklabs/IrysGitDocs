# Installation

The IrysGit ecosystem provides two ways to interact with decentralized repositories: the IrysGit CLI tool and the GitHirys web platform. This guide covers both installation methods.

## 🔧 IrysGit CLI Installation

### Prerequisites

- **Node.js**: Version 16 or higher (18+ recommended)
- **npm**: Usually comes with Node.js
- **Solana Wallet**: You'll need a Solana private key for authentication

### Install from npm

#### Global Installation (Recommended)

Install IrysGit globally to use it anywhere on your system:

```bash
npm install -g irys-git
```

After installation, you can use the `igit` command from anywhere:

```bash
igit --version
```

#### Local Installation

If you prefer to install IrysGit locally in your project:

```bash
# Install as a development dependency
npm install irys-git --save-dev

# Or install as a regular dependency
npm install irys-git --save
```

When installed locally, you can use it via npm scripts or npx:

```bash
# Using npx
npx igit --version

# Or add to package.json scripts
{
  "scripts": {
    "igit": "igit"
  }
}
```

### Build from Source

If you want to build IrysGit from source:

```bash
# Clone the repository
git clone https://github.com/yourname/irys-git.git
cd irys-git

# Install dependencies
npm install

# Build the project
npm run build

# Link for global usage
npm link
```

### Verification

Verify your installation by checking the version:

```bash
igit --version
```

You should see the version number printed to the console.

## 🌐 GitHirys Web Platform Access

### No Installation Required

GitHirys is a web-based platform that requires no installation. Simply:

1. **Visit the GitHirys Platform**: Navigate to the GitHirys web application
2. **Connect Your Wallet**: Use your Solana wallet (Phantom, Solflare, etc.)
3. **Start Exploring**: Browse repositories and manage your projects

### Supported Wallets

GitHirys supports all major Solana wallets:
- **Phantom**: Most popular Solana wallet
- **Solflare**: Feature-rich wallet with advanced options
- **Sollet**: Web-based wallet option
- **Ledger**: Hardware wallet support
- **Other**: Most Solana-compatible wallets

### Browser Requirements

- **Modern Browser**: Chrome, Firefox, Safari, or Edge
- **JavaScript Enabled**: Required for wallet integration
- **Wallet Extension**: Installed and configured

## 🔄 Using Both Platforms Together

The beauty of the IrysGit ecosystem is that both platforms work seamlessly together:

### Unified Authentication
- Use the same Solana wallet for both CLI and web platform
- No need to manage separate accounts or credentials

### Shared Repositories
- Repositories created via CLI appear in the web interface
- Changes made through the web platform are accessible via CLI

### Complementary Workflows
- **Development**: Use CLI for day-to-day coding tasks
- **Management**: Use web platform for repository exploration and collaboration

## System Requirements

### For IrysGit CLI
- **Operating System**: Windows, macOS, or Linux
- **Memory**: At least 512MB RAM available
- **Storage**: 100MB free disk space for installation
- **Network**: Internet connection for uploading to Irys network

### For GitHirys Web Platform
- **Browser**: Modern web browser with JavaScript enabled
- **Wallet**: Solana wallet extension installed
- **Network**: Stable internet connection

## Troubleshooting

### IrysGit CLI Issues

#### Permission Errors

If you encounter permission errors during global installation:

```bash
# On macOS/Linux
sudo npm install -g irys-git

# Or configure npm to use a different directory
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

#### Node.js Version Issues

If you're using an older version of Node.js:

```bash
# Check your Node.js version
node --version

# Update Node.js using nvm (recommended)
nvm install --lts
nvm use --lts
```

#### Network Issues

If you're behind a corporate firewall:

```bash
# Configure npm proxy
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

### GitHirys Web Platform Issues

#### Wallet Connection Problems
1. **Check Extension**: Ensure your Solana wallet extension is installed and enabled
2. **Refresh Page**: Sometimes a simple refresh resolves connection issues
3. **Clear Cache**: Clear browser cache and cookies for the GitHirys domain
4. **Try Different Wallet**: Test with a different Solana wallet

#### Repository Loading Issues
1. **Check Network**: Ensure stable internet connection
2. **Wallet Balance**: Verify your wallet has sufficient SOL for transactions
3. **Browser Console**: Check console for specific error messages

## Getting Started

### Choose Your Platform

1. **For Developers**: Start with [IrysGit CLI Quick Start](./quick-start.md)
2. **For Web Users**: Visit GitHirys web platform and connect your wallet
3. **For Complete Experience**: Use both platforms together

### Next Steps

Once you have access to either or both platforms:

1. **CLI Users**: Continue to the [Quick Start guide](./quick-start.md)
2. **Web Users**: Connect your wallet and explore existing repositories
3. **Both**: Learn how to use them together for maximum productivity

## Integration Benefits

Using both platforms provides:
- **Flexibility**: Choose the right tool for each task
- **Redundancy**: Multiple ways to access your repositories
- **Collaboration**: Different team members can use their preferred interface
- **Efficiency**: Leverage the strengths of both command-line and web interfaces

Ready to get started? Continue to the [Quick Start guide](./quick-start.md) to begin your decentralized development journey! 