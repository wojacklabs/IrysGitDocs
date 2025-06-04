# Quick Start

This guide will help you get started with the IrysGit ecosystem in just a few minutes. Choose your preferred platform or use both together for the complete experience.

## 🚀 Choose Your Path

### Path 1: IrysGit CLI (For Developers)
Perfect for developers who prefer command-line interfaces and want to integrate with existing development workflows.

### Path 2: GitHirys Web Platform (For Web Users)  
Ideal for users who prefer web interfaces and want to explore repositories with a modern, intuitive UI.

### Path 3: Both Platforms (Recommended)
Get the best of both worlds by using CLI for development and web platform for repository management.

---

## 🔧 Path 1: IrysGit CLI Quick Start

### Step 1: CLI Authentication

First, authenticate with your Solana wallet:

```bash
igit login
```

You'll be prompted to:
1. Enter your Solana private key (base58 encoded)
2. Set a local password to encrypt your key
3. Confirm the password

Your private key will be encrypted and stored locally in `~/.igit/` directory.

::: tip
Your private key never leaves your machine - it's only used locally to sign transactions.
:::

### Step 2: Initialize a Repository

Navigate to your project directory and initialize it as an IrysGit repository:

```bash
cd my-project
igit init MyAwesomeProject
```

This creates a `.igit` directory and prepares your project for decentralized storage.

### Step 3: Push Your Code

Upload your current project to the Irys network:

```bash
igit push
```

Your code will be packaged and uploaded to Irys. You'll see a progress indicator and the final transaction ID.

### Step 4: Access via Web Platform

Your repository is now available at:
```
githirys.xyz/YOUR_WALLET_ADDRESS/MyAwesomeProject
```

You can also view it in the GitHirys web platform by connecting your wallet.

---

## 🌐 Path 2: GitHirys Web Platform Quick Start

### Step 1: Connect Your Wallet

1. **Visit GitHirys**: Navigate to the GitHirys web application
2. **Click Connect**: Select "Connect Solana Wallet"
3. **Choose Wallet**: Select your preferred wallet (Phantom, Solflare, etc.)
4. **Approve Connection**: Confirm the connection in your wallet

### Step 2: Explore Repositories

Once connected, the platform will automatically:
- Search for repositories associated with your wallet
- Display your existing repositories
- Show repository details including CID and file lists

### Step 3: Repository Management

From the web interface, you can:
- **View Repository Details**: See CID, file lists, and metadata
- **Generate Clone Commands**: Copy CLI commands for easy repository cloning
- **Manage Collaborators**: Add or remove contributors (if you're the owner)
- **Browse Files**: Explore repository contents directly in the browser

### Step 4: Use with CLI

Copy the generated clone command to use with IrysGit CLI:

```bash
igit clone githirys.xyz/WALLET_ADDRESS/REPOSITORY_NAME
```

---

## 🔄 Path 3: Using Both Platforms Together

### Complete Workflow Example

Here's how to use both platforms for maximum productivity:

#### 1. Start with Web Platform
```
1. Visit GitHirys web platform
2. Connect your Solana wallet
3. Explore existing repositories
4. Copy clone commands for repositories you want to work on
```

#### 2. Development with CLI
```bash
# Clone repository from web platform
igit clone githirys.xyz/OWNER_WALLET/ProjectName

# Navigate to project
cd ProjectName

# Create new branch
igit checkout -b feature/new-feature

# Make changes with your favorite editor
# ... coding ...

# Use regular Git for local commits
git add .
git commit -m "Add new feature"

# Push branch to Irys network
igit push feature/new-feature
```

#### 3. Management via Web Platform
```
1. Return to GitHirys web platform
2. View your updated repository
3. See the new branch and changes
4. Manage collaborators if needed
5. Share repository links with team members
```

## 🤝 Collaborative Workflow

### For Repository Owners

#### Using CLI:
```bash
# Add a contributor
igit add-contributor CONTRIBUTOR_WALLET_ADDRESS

# List contributors
igit list-contributors

# Remove a contributor
igit remove-contributor CONTRIBUTOR_WALLET_ADDRESS
```

#### Using Web Platform:
1. Navigate to your repository
2. Access the collaboration settings
3. Add/remove contributors through the UI
4. View contributor list and permissions

### For Contributors

#### Using CLI:
```bash
# Clone the repository
igit clone githirys.xyz/OWNER_WALLET/ProjectName

# Make changes and push
igit push
```

#### Using Web Platform:
1. Connect your wallet
2. Access repositories you have permission to
3. View repository details and recent changes
4. Copy clone commands for local development

## 📊 Common Operations

### Repository Status
```bash
# CLI
igit repo-status

# Web Platform: View repository dashboard
```

### List Repositories
```bash
# CLI
igit list

# Web Platform: Automatic display after wallet connection
```

### Pull Latest Changes
```bash
# CLI
igit pull ProjectName main

# Web Platform: View latest commits and changes
```

### Branch Management
```bash
# CLI
igit branch -a
igit checkout main
igit switch feature/new-feature

# Web Platform: View all branches and their details
```

## 🔗 Integration Benefits

### Why Use Both?

1. **Development Efficiency**: CLI for fast development operations
2. **Visual Management**: Web platform for repository exploration
3. **Team Collaboration**: Different team members can use their preferred interface
4. **Backup Access**: Multiple ways to access your repositories
5. **Feature Complementarity**: Each platform has unique strengths

### Workflow Recommendations

- **Solo Development**: Use CLI for coding, web platform for sharing
- **Team Projects**: Use web platform for project overview, CLI for individual work
- **Open Source**: Use web platform for community engagement, CLI for contributions
- **Enterprise**: Use both for different roles (developers vs. managers)

## 📝 Example Complete Workflow

```bash
# 1. Authenticate with CLI
igit login

# 2. Initialize existing project
cd my-existing-project
igit init MyProject

# 3. Push to Irys
igit push

# 4. View in web platform
# Navigate to GitHirys and connect wallet
# See your repository listed automatically

# 5. Create a new branch
igit checkout -b feature/authentication

# 6. Make changes with Git
git add .
git commit -m "Add authentication"

# 7. Push branch to Irys
igit push feature/authentication

# 8. Check web platform
# View the new branch and changes in the UI

# 9. Add a contributor via CLI
igit add-contributor 7eYZ...AbC

# 10. Verify in web platform
# See the contributor listed in the UI

# 11. Share repository
# Copy the URL from web platform: githirys.xyz/YOUR_WALLET/MyProject
```

## 🎯 What's Next?

### Choose Your Learning Path

- **CLI Focus**: Learn about [advanced commands](../api/commands.md)
- **Web Platform Focus**: Explore [repository collaboration](../examples/collaboration.md)
- **Both Platforms**: Understand [permissions and security](./permissions.md)

### Advanced Topics

- [Permissions and collaboration](./permissions.md)
- [Security best practices](./security.md)
- [Advanced examples](../examples/collaboration.md)
- [API reference](../api/commands.md)

### Community

- Join our Discord for support and discussions
- Check out example projects on GitHirys
- Contribute to the open-source ecosystem

Ready to dive deeper? Choose your next topic and continue exploring the decentralized development ecosystem! 