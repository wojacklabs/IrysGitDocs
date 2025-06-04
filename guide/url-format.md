# URL Format

IrysGit uses several URL formats to address repositories and content on the Irys network. This guide explains the different formats and when to use each.

## URL Types

### 1. GitHub-style URLs

**Format**: `githirys.xyz/wallet-address/repository-name`

```bash
# Example
githirys.xyz/7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ/MyProject
```

**Usage:**
- Most user-friendly format
- Works with `igit clone`
- Requires repository name to be set during `igit init`

### 2. Nickname-based URLs

**Format**: `githirys.xyz/nickname/repository-name`

```bash
# Example
githirys.xyz/alice/MyProject
```

**Features:**
- Shorter and more memorable
- Requires nickname registration (future feature)
- Automatically resolves to wallet address

### 3. Direct Transaction URLs

**Format**: `irys://transaction-id`

```bash
# Example
irys://8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

**Usage:**
- Direct access to specific transaction
- Immutable reference to exact state
- Useful for archival purposes

### 4. Bare Transaction IDs

**Format**: `transaction-id` (43+ characters)

```bash
# Example
8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

**Usage:**
- Shortest format
- Automatically detected by character count
- Direct reference to Irys transaction

## URL Resolution

### Resolution Order

When you provide a URL, IrysGit resolves it in this order:

1. **Direct Transaction ID**: 43+ characters → Direct Irys lookup
2. **Transaction URL**: `irys://` prefix → Extract transaction ID
3. **GitHub-style**: `githirys.xyz/wallet/repo` → Lookup latest transaction
4. **Nickname**: `githirys.xyz/nickname/repo` → Resolve nickname to wallet

### Example Resolution

```bash
# These all resolve to the same repository:
igit clone githirys.xyz/7eYZ9K8s...AbC/MyProject
igit clone githirys.xyz/alice/MyProject  # if alice → 7eYZ9K8s...AbC
igit clone irys://8fGH3L9m...XyZ
igit clone 8fGH3L9m...XyZ
```

## URL Components

### Wallet Address Format

Solana wallet addresses used in URLs:
- **Length**: 43-44 characters (base58 encoded)
- **Characters**: A-Z, a-z, 0-9 (excluding 0, O, I, l)
- **Example**: `7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ`

### Repository Name Format

Repository names in URLs:
- **Length**: 1-50 characters
- **Characters**: Letters, numbers, hyphens, underscores
- **Case**: Case-sensitive
- **Example**: `MyProject`, `web3-dapp`, `data_analysis`

### Transaction ID Format

Irys transaction IDs:
- **Length**: 43 characters (base64url encoded)
- **Characters**: A-Z, a-z, 0-9, -, _
- **Example**: `8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK`

## URL Usage Examples

### Cloning Repositories

```bash
# Using different URL formats
igit clone githirys.xyz/7eYZ...AbC/MyProject
igit clone githirys.xyz/alice/MyProject
igit clone irys://8fGH...XyZ
igit clone 8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Sharing Repositories

```bash
# User-friendly sharing
https://githirys.xyz/alice/MyProject

# Permanent reference
https://githirys.xyz/transaction/8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Branch-specific URLs

```bash
# Access specific branch (future feature)
githirys.xyz/alice/MyProject/branch/feature-branch
githirys.xyz/alice/MyProject/commit/8fGH3L9m...XyZ
```

## Web Interface

### Repository Browser

Visit `https://githirys.xyz/wallet/repo` in your browser to:
- View repository contents
- Browse files and directories
- See commit history
- Access raw files

### Direct File Access

```bash
# Access specific files
https://githirys.xyz/alice/MyProject/file/README.md
https://githirys.xyz/alice/MyProject/raw/src/main.js
```

## URL Validation

### Valid URLs

```bash
✅ githirys.xyz/7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ/MyProject
✅ githirys.xyz/alice/web3-dapp
✅ irys://8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
✅ 8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Invalid URLs

```bash
❌ githirys.xyz/short/repo          # Wallet address too short
❌ githirys.xyz/wallet/             # Missing repository name
❌ githirys.xyz/wallet/repo with spaces  # Spaces not allowed
❌ irys://short                     # Transaction ID too short
```

## Custom Domains

### Future Feature: Custom Domains

```bash
# Planned support for custom domains
my-project.dev → githirys.xyz/alice/MyProject
company.com/repo → githirys.xyz/company-wallet/repo
```

## URL Shortcuts

### Environment Variables

```bash
# Set default repository
export IGIT_DEFAULT_REPO="githirys.xyz/alice/MyProject"

# Use shortcuts
igit pull  # Pulls from default repository
```

### Aliases

```bash
# Create local aliases
igit alias add myproject githirys.xyz/alice/MyProject
igit clone myproject
```

## Security Considerations

### URL Verification

Always verify URLs before cloning:
```bash
# Check repository ownership
igit repo-status githirys.xyz/alice/MyProject

# Verify transaction ID
igit verify 8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Phishing Prevention

- Verify domain is `githirys.xyz`
- Check wallet addresses match expected values
- Use transaction IDs for permanent references

## API Integration

### REST API

```bash
# Get repository metadata
curl https://api.githirys.xyz/7eYZ...AbC/MyProject

# Get transaction data
curl https://api.githirys.xyz/tx/8fGH3L9m...XyZ
```

### GraphQL

```graphql
query {
  repository(wallet: "7eYZ...AbC", name: "MyProject") {
    name
    owner
    branches
    lastUpdated
  }
}
```

## Best Practices

### URL Selection

1. **For Sharing**: Use GitHub-style URLs with nicknames
2. **For Archival**: Use transaction IDs
3. **For Automation**: Use wallet addresses
4. **For Bookmarking**: Use permanent transaction URLs

### URL Management

```bash
# Keep track of important URLs
echo "MyProject: githirys.xyz/alice/MyProject" >> ~/.igit/bookmarks

# Use descriptive repository names
igit init "frontend-webapp"  # Better than "project1"
```

## Troubleshooting URLs

### Common Issues

**URL Not Found**
```bash
# Check if repository exists
igit list alice

# Verify wallet address
igit verify-address 7eYZ...AbC
```

**Invalid Format**
```bash
# Check URL format
igit validate-url githirys.xyz/alice/MyProject
```

**Resolution Errors**
```bash
# Test URL resolution
igit resolve githirys.xyz/alice/MyProject
```

## Related Commands

- [`igit clone`](../api/repository.md#clone)
- [`igit list`](../api/repository.md#list)
- [`igit repo-status`](../api/repository.md#repo-status) 