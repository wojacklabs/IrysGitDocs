---
layout: home

hero:
  name: "IrysGit & GitHirys"
  text: "Decentralized Git Ecosystem for Web3"
  tagline: "Complete decentralized development ecosystem: IrysGit CLI and GitHirys web platform built on Irys"
  image:
    src: /logo.png
    alt: IrysGit & GitHirys
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction

features:
  - title: 🔧 IrysGit CLI
    details: Git-alternative command-line tool with familiar commands like push, pull, clone, branch, and checkout for permanent, decentralized repository management
  - title: 🌐 GitHirys Web Platform
    details: GitHub-alternative web service providing intuitive repository exploration, management, and collaboration through modern web interface
  - title: 🔗 Permanent Storage
    details: All commits and repositories are stored on Irys network for permanent preservation, verification, and censorship resistance
  - title: 🔐 Solana Wallet Integration
    details: Secure authentication using Solana private keys with AES-256-GCM encryption, shared across both CLI and web platforms
  - title: 🤝 Seamless Integration
    details: Perfect synergy between CLI and web platforms - manage repositories via command line, explore and collaborate through web interface
  - title: 🛡️ Security First
    details: Built-in cost limits, file restrictions, rate limiting, and decentralized permission management for safe operations
---

## What is the IrysGit Ecosystem?

The IrysGit ecosystem consists of two complementary projects that provide a complete decentralized alternative to traditional Git and GitHub:

### 🔧 IrysGit - The Git Alternative
IrysGit is a revolutionary CLI tool that serves as a **decentralized alternative to Git**. Built on top of Irys (Arweave-based), it provides permanent, censorship-resistant storage for your code repositories with familiar Git-like commands.

### 🌐 GitHirys - The GitHub Alternative  
GitHirys is a modern web platform that serves as a **decentralized alternative to GitHub**. Built with Next.js, it provides an intuitive web interface for repository exploration, management, and collaboration, all powered by the same Irys network.

## How They Work Together

The two projects are designed to work in perfect harmony:

1. **Development Workflow**: Use IrysGit CLI for day-to-day development tasks
2. **Repository Management**: Use GitHirys web platform for repository exploration and collaboration
3. **Unified Authentication**: Both platforms use the same Solana wallet for seamless integration
4. **Shared Storage**: All data is stored on the same Irys network, ensuring consistency

## Key Benefits

- **Complete Decentralization**: No central authority controls your code or repositories
- **Permanent Storage**: Your repositories are stored forever on Arweave through Irys
- **Familiar Experience**: Git-like CLI commands and GitHub-like web interface
- **Secure**: Encrypted private key storage and built-in security measures
- **Collaborative**: Easy contributor management and permissions across both platforms
- **Cost Effective**: Mutable uploads reduce storage costs while maintaining permanence

## Quick Example

### Using IrysGit CLI:
```bash
# Install globally
npm install -g irys-git

# Login with your Solana wallet
igit login

# Initialize a repository
igit init MyProject

# Push your code
igit push

# Clone from anywhere
igit clone githirys.xyz/your-wallet/MyProject
```

### Using GitHirys Web Platform:
1. Visit the GitHirys web platform
2. Connect your Solana wallet
3. Explore your repositories with modern UI
4. Manage collaborators and permissions
5. Copy clone commands for CLI usage

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐
│   IrysGit CLI   │    │ GitHirys Web    │
│  (Git Alternative) │    │ (GitHub Alternative) │
└─────────┬───────┘    └─────────┬───────┘
          │                      │
          │    Solana Wallet     │
          │    Authentication    │
          │                      │
          └──────────┬───────────┘
                     │
          ┌─────────────────┐
          │   Irys Network  │
          │ (Permanent Storage) │
          └─────────────────┘
```

Ready to get started? [Check out our guide](/guide/introduction) to learn more about both platforms! 