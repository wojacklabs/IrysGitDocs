# IrysGit Ecosystem API Reference

The IrysGit ecosystem provides comprehensive APIs for both the IrysGit CLI and GitHirys web platform. This reference covers all available commands and interfaces across both platforms.

## 🔧 IrysGit CLI API

The command-line interface provides a Git-like experience for decentralized repository management.

### Authentication Commands

#### `igit login`
Authenticate with your Solana wallet and set up local encryption.

```bash
igit login
```

**Interactive prompts:**
- Enter your Solana private key (base58 encoded)
- Set a local password for encryption
- Confirm the password

**Security:** Your private key is encrypted with AES-256-GCM and stored locally.

**Integration:** Same wallet can be used with GitHirys web platform.

---

### Repository Management

#### `igit init [name]`
Initialize a new IrysGit repository in the current directory.

```bash
igit init MyProject
```

**Options:**
- `name` - Repository name (optional, defaults to directory name)

**Creates:**
- `.igit/` directory with configuration
- Repository metadata
- Web platform visibility after first push

#### `igit push [branch]`
Upload the current repository state to Irys.

```bash
igit push                 # Push current branch
igit push main           # Push specific branch
igit push --force        # Force push (override existing)
```

**Options:**
- `branch` - Branch name to push (optional)
- `--force` - Force push without confirmation
- `--dry-run` - Show what would be pushed without uploading

**Integration:** Pushed repositories appear immediately in GitHirys web platform.

#### `igit pull [repo] [branch]`
Download and sync the latest repository state.

```bash
igit pull                           # Pull current repo/branch
igit pull MyRepo main              # Pull specific repo/branch
igit pull --force                  # Force pull (override local changes)
```

**Options:**
- `repo` - Repository name (optional)
- `branch` - Branch name (optional)
- `--force` - Override local changes

#### `igit clone <url>`
Clone a repository from Irys to a local directory.

```bash
igit clone githirys.xyz/wallet/MyRepo
igit clone irys://transaction-id
igit clone 7eYZ...AbC               # Direct transaction ID
```

**URL formats:**
- `githirys.xyz/wallet/repo` - Wallet and repository name
- `irys://transaction-id` - Direct transaction ID
- `transaction-id` - Bare transaction ID (43+ characters)

**Integration:** URLs can be copied from GitHirys web platform.

---

### Branch Operations

#### `igit branch [options]`
List, create, or delete branches.

```bash
igit branch                    # List local branches
igit branch -a                 # List all branches (local + remote)
igit branch -r                 # List remote branches only
igit branch new-feature        # Create new branch
igit branch -d feature-branch  # Delete branch
```

**Options:**
- `-a, --all` - List all branches
- `-r, --remote` - List remote branches only
- `-d, --delete` - Delete branch
- `-D, --force-delete` - Force delete branch

#### `igit checkout [branch]`
Switch to a different branch or create a new one.

```bash
igit checkout main                 # Switch to main branch
igit checkout -b new-feature      # Create and switch to new branch
igit checkout --create dev         # Create new branch (alternative syntax)
```

**Options:**
- `-b` - Create new branch and switch to it
- `--create` - Create new branch

#### `igit switch <branch>`
Modern Git 2.23+ style branch switching.

```bash
igit switch main                   # Switch to existing branch
igit switch -c new-feature        # Create and switch to new branch
```

**Options:**
- `-c, --create` - Create new branch and switch to it

---

### Repository Information

#### `igit list [repo]`
List your repositories and branches.

```bash
igit list                     # List all your repositories
igit list MyRepo             # List branches for specific repository
```

#### `igit repo-status`
Show the current repository status.

```bash
igit repo-status
```

**Output includes:**
- Current repository name
- Current branch
- Last push timestamp
- Repository owner
- Contributor status

---

### Collaboration Commands

#### `igit add-contributor <address>`
Add a contributor to your repository (owner only).

```bash
igit add-contributor 7eYZ...AbC
```

**Requirements:**
- Must be repository owner
- Valid Solana wallet address

**Integration:** Changes sync to GitHirys web platform.

#### `igit remove-contributor <address>`
Remove a contributor from your repository (owner only).

```bash
igit remove-contributor 7eYZ...AbC
```

**Requirements:**
- Must be repository owner
- Address must be existing contributor

#### `igit list-contributors`
List all contributors for the current repository.

```bash
igit list-contributors
```

**Output includes:**
- Contributor wallet addresses
- Addition timestamps
- Owner status

---

### Git Proxy Commands

IrysGit proxies most standard Git commands for convenience:

```bash
igit add .                    # Proxy to git add
igit commit -m "message"      # Proxy to git commit
igit log                      # Proxy to git log
igit status                   # Proxy to git status
igit diff                     # Proxy to git diff
```

**Note:** These commands work exactly like their Git counterparts but are executed through IrysGit.

---

## 🌐 GitHirys Web Platform API

The web platform provides a modern interface for repository management and collaboration.

### Authentication API

#### Wallet Connection
```javascript
// Connect Solana wallet
const connection = await window.solana.connect();
const publicKey = connection.publicKey.toString();
```

**Supported Wallets:**
- Phantom
- Solflare
- Sollet
- Ledger
- Other Solana-compatible wallets

#### Authentication State
```javascript
// Check connection status
const isConnected = window.solana.isConnected;
const publicKey = window.solana.publicKey;
```

---

### Repository Management API

#### Repository Discovery
```javascript
// Get repositories for connected wallet
const repositories = await irysClient.getRepositories(publicKey);
```

**Response Format:**
```json
{
  "repositories": [
    {
      "name": "MyProject",
      "owner": "wallet-address",
      "created": "2024-01-15T10:30:22Z",
      "lastUpdated": "2024-01-16T14:20:15Z",
      "branches": ["main", "feature/auth"],
      "contributors": ["wallet-1", "wallet-2"],
      "transactionId": "abc123...",
      "size": 1024576
    }
  ]
}
```

#### Repository Details
```javascript
// Get repository details
const details = await irysClient.getRepository(wallet, repositoryName);
```

#### File Listing
```javascript
// Get file list for repository
const files = await irysClient.getFiles(wallet, repositoryName, branch);
```

**Response Format:**
```json
{
  "files": [
    {
      "path": "README.md",
      "size": 1024,
      "hash": "sha256-hash",
      "lastModified": "2024-01-15T10:30:22Z",
      "viewable": true
    }
  ]
}
```

---

### Collaboration API

#### Contributor Management
```javascript
// Add contributor (owner only)
await irysClient.addContributor(repositoryName, contributorAddress);

// Remove contributor (owner only)
await irysClient.removeContributor(repositoryName, contributorAddress);

// List contributors
const contributors = await irysClient.getContributors(repositoryName);
```

#### Permission Checking
```javascript
// Check user permissions
const permissions = await irysClient.checkPermissions(
  repositoryName, 
  userAddress
);
```

**Response Format:**
```json
{
  "canRead": true,
  "canWrite": true,
  "canManage": false,
  "role": "contributor"
}
```

---

### Utility API

#### Clone Command Generation
```javascript
// Generate clone commands
const cloneCommands = {
  cli: `igit clone githirys.xyz/${wallet}/${repo}`,
  url: `https://githirys.xyz/${wallet}/${repo}`,
  transactionId: `igit clone ${transactionId}`
};
```

#### Repository Statistics
```javascript
// Get repository statistics
const stats = await irysClient.getStats(repositoryName);
```

**Response Format:**
```json
{
  "totalCommits": 45,
  "totalBranches": 3,
  "totalContributors": 5,
  "totalSize": 2048576,
  "createdDate": "2024-01-01T00:00:00Z",
  "lastActivity": "2024-01-15T10:30:22Z"
}
```

---

## 🔗 Cross-Platform Integration

### Shared Data Models

#### Repository Object
```json
{
  "name": "string",
  "owner": "solana-wallet-address",
  "created": "ISO-8601-timestamp",
  "lastUpdated": "ISO-8601-timestamp",
  "branches": ["string"],
  "contributors": ["solana-wallet-address"],
  "transactionId": "arweave-transaction-id",
  "metadata": {
    "version": "1.0.0",
    "description": "string",
    "tags": ["string"]
  }
}
```

#### Branch Object
```json
{
  "name": "string",
  "head": "commit-hash",
  "created": "ISO-8601-timestamp",
  "lastCommit": "ISO-8601-timestamp",
  "author": "solana-wallet-address",
  "transactionId": "arweave-transaction-id"
}
```

### Synchronization

#### Real-time Updates
- CLI pushes appear instantly in web platform
- Web platform changes are immediately queryable by CLI
- No synchronization delays due to direct blockchain access

#### Consistency Guarantees
- Same wallet sees same data across platforms
- Immutable transaction history
- Deterministic state resolution

---

## 📊 API Response Formats

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "timestamp": "2024-01-15T10:30:22Z",
  "transactionId": "abc123..."
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "PERMISSION_DENIED",
    "message": "User does not have write access to this repository",
    "details": {
      "repository": "MyProject",
      "user": "wallet-address",
      "required": "write",
      "current": "read"
    }
  },
  "timestamp": "2024-01-15T10:30:22Z"
}
```

### Error Codes

| Code | Description | Platforms |
|------|-------------|-----------|
| `AUTHENTICATION_FAILED` | Wallet authentication failed | CLI, Web |
| `PERMISSION_DENIED` | Insufficient permissions | CLI, Web |
| `REPOSITORY_NOT_FOUND` | Repository does not exist | CLI, Web |
| `NETWORK_ERROR` | Blockchain connectivity issues | CLI, Web |
| `VALIDATION_ERROR` | Invalid input parameters | CLI, Web |
| `RATE_LIMIT_EXCEEDED` | Too many requests | CLI, Web |
| `INSUFFICIENT_FUNDS` | Not enough SOL for transaction | CLI, Web |
| `TRANSACTION_FAILED` | Blockchain transaction failed | CLI, Web |

---

## 📱 SDK and Libraries

### JavaScript SDK
```javascript
import { IrysGitClient } from '@irysgit/sdk';

const client = new IrysGitClient({
  network: 'mainnet',
  wallet: solanaWallet
});

// Use with both CLI and web platform
const repositories = await client.getRepositories();
```

### Python SDK
```python
from irysgit import IrysGitClient

client = IrysGitClient(
    network='mainnet',
    private_key='your-private-key'
)

# CLI-compatible operations
repositories = client.get_repositories()
```

---

## 🔧 Global Options

### CLI Global Options
These options work with most CLI commands:

- `--help` - Show help for the command
- `--version` - Show IrysGit version
- `--verbose` - Enable verbose output
- `--quiet` - Suppress non-error output
- `--config <path>` - Use custom config file

### Web Platform Global Settings
- **Network**: Choose between mainnet/devnet
- **Wallet**: Select preferred wallet adapter
- **Theme**: Light/dark mode preference
- **Notifications**: Configure update notifications

---

## 📋 Command Categories

| Category | CLI Commands | Web Platform Features |
|----------|-------------|----------------------|
| **Authentication** | `login` | Wallet connection |
| **Repository** | `init`, `push`, `pull`, `clone` | Repository browser, file viewer |
| **Branches** | `branch`, `checkout`, `switch` | Branch selector, branch viewer |
| **Information** | `list`, `repo-status` | Repository dashboard, statistics |
| **Collaboration** | `add-contributor`, `remove-contributor`, `list-contributors` | Team management, permissions |
| **Git Proxy** | `add`, `commit`, `log`, `status`, `diff` | N/A (use with CLI) |

---

## 🏁 Exit Codes (CLI)

IrysGit CLI uses standard exit codes:

- `0` - Success
- `1` - General error
- `2` - Authentication error
- `3` - Network error
- `4` - Permission error
- `5` - File system error

---

## 🚀 Next Steps

- Learn about [Repository Management](./repository.md) commands in detail
- Explore [Branch Operations](./branches.md) 
- Understand [Collaboration](./collaboration.md) workflows
- Check out [Web Platform Integration](../guide/how-it-works.md)
- Review [Security Best Practices](../guide/security.md) 