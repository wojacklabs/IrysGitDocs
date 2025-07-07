# Repository Management

This section covers all commands related to managing IrysGit repositories: initialization, pushing, pulling, and cloning.

## igit init

Initialize a new IrysGit repository in the current directory.

### Syntax
```bash
igit init [name] [options]
```

### Parameters
- `name` - Repository name (optional, defaults to directory name)

### Options
- `--force` - Initialize even if directory already has a repository
- `--template <path>` - Use a template directory for initialization
- `--bare` - Create a bare repository

### Examples

**Basic initialization:**
```bash
cd my-project
igit init
# Creates repository with directory name
```

**Initialize with custom name:**
```bash
igit init MyAwesomeProject
# Creates repository named "MyAwesomeProject"
```

**Force initialization:**
```bash
igit init --force
# Reinitialize existing repository
```

### What It Creates

- `.igit/` directory with:
  - `config` - Repository configuration
  - `HEAD` - Current branch reference
  - `refs/` - Branch references
  - `objects/` - Object storage (if any)

---

## igit push

Upload the current repository state to the Irys network.

### Syntax
```bash
igit push [branch] [options]
```

### Parameters
- `branch` - Branch name to push (optional, defaults to current branch)

### Options
- `--force` - Force push without confirmation
- `--dry-run` - Show what would be pushed without uploading
- `--cost-limit <amount>` - Set custom cost limit in SOL
- `--include-gitignore` - Include .gitignore'd files
- `--exclude <pattern>` - Exclude files matching pattern

### Examples

**Push current branch:**
```bash
igit push
# Pushes current branch to Irys
```

**Push specific branch:**
```bash
igit push main
# Pushes main branch specifically
```

**Force push:**
```bash
igit push --force
# Pushes without confirmation prompts
```

**Dry run:**
```bash
igit push --dry-run
# Shows what would be pushed without actually uploading
```

**Custom cost limit:**
```bash
igit push --cost-limit 2.5
# Sets cost limit to 2.5 SOL
```

### Upload Process

1. **File Collection**: Gathers all files (respecting .gitignore)
2. **Compression**: Creates compressed archive
3. **Cost Calculation**: Estimates upload cost
4. **Confirmation**: Prompts for approval if cost exceeds limit
5. **Upload**: Uploads to Irys network
6. **Verification**: Confirms successful upload

### File Restrictions

These file types are automatically excluded:
- `.exe`, `.bat`, `.cmd`, `.scr`, `.com`, `.pif`, `.jar`
- Files over 100MB
- Directories with more than 10,000 files

---

## igit pull

Download and sync the latest repository state from Irys.

### Syntax
```bash
igit pull [repo] [branch] [options]
```

### Parameters
- `repo` - Repository name (optional, defaults to current repository)
- `branch` - Branch name (optional, defaults to current branch)

### Options
- `--force` - Override local changes
- `--no-backup` - Don't create backup of local changes
- `--merge` - Merge remote changes with local changes
- `--rebase` - Rebase local changes on top of remote changes

### Examples

**Pull current repository and branch:**
```bash
igit pull
# Pulls latest changes for current repo/branch
```

**Pull specific repository and branch:**
```bash
igit pull MyRepo main
# Pulls main branch from MyRepo
```

**Force pull (override local changes):**
```bash
igit pull --force
# Overwrites local changes with remote version
```

**Pull with merge:**
```bash
igit pull --merge
# Attempts to merge remote changes with local changes
```

### Merge Strategies

- **Override**: Default behavior, replaces local files
- **Merge**: Attempts to merge changes (requires Git integration)
- **Rebase**: Replays local commits on top of remote changes

---

## igit clone

Clone a repository from Irys to a local directory.

### Syntax
```bash
igit clone <url> [directory] [options]
```

### Parameters
- `url` - Repository URL or transaction ID
- `directory` - Local directory name (optional, defaults to repository name)

### Options
- `--branch <name>` - Clone specific branch
- `--depth <number>` - Create shallow clone with limited history
- `--recursive` - Clone with submodules (if supported)
- `--bare` - Create bare repository

### URL Formats

**GitHub-style URLs:**
```bash
igit clone githirys.xyz/wallet-address/repo-name
```

**Direct transaction IDs:**
```bash
igit clone irys://transaction-id
igit clone transaction-id  # 43+ character transaction ID
```

**Nickname-based URLs:**
```bash
igit clone githirys.xyz/nickname/repo-name
```

### Examples

**Basic clone:**
```bash
igit clone githirys.xyz/7eYZ...AbC/MyRepo
# Clones MyRepo to ./MyRepo directory
```

**Clone to specific directory:**
```bash
igit clone githirys.xyz/wallet/MyRepo my-local-repo
# Clones to ./my-local-repo directory
```

**Clone specific branch:**
```bash
igit clone githirys.xyz/wallet/MyRepo --branch develop
# Clones develop branch
```

**Clone using transaction ID:**
```bash
igit clone 7eYZ9K8s...transaction-id
# Clones directly from transaction ID
```

### Clone Process

1. **URL Resolution**: Resolves repository URL to transaction ID
2. **Metadata Fetch**: Downloads repository metadata
3. **Branch Selection**: Selects appropriate branch
4. **Content Download**: Downloads repository content
5. **Extraction**: Extracts files to local directory
6. **Configuration**: Sets up local repository configuration

---

## Repository Status

Check the current state of your repository.

### igit repo-status

### Syntax
```bash
igit repo-status [options]
```

### Options
- `--verbose` - Show detailed status information
- `--json` - Output in JSON format

### Example Output

```
Repository: MyAwesomeProject
Owner: 7eYZ9K8s...AbC
Current Branch: main
Last Push: 2024-01-15 10:30:22 UTC
Transaction ID: 8fGH3L9m...XyZ
Contributors: 3
Status: Up to date
```

---

## Configuration

Repository configuration is stored in `.igit/config`:

```json
{
  "repository": {
    "name": "MyRepo",
    "owner": "wallet-address",
    "created": "2024-01-15T10:30:22Z"
  },
  "remote": {
    "url": "githirys.xyz/wallet/MyRepo",
    "transactionId": "latest-transaction-id"
  },
  "branches": {
    "main": "transaction-id",
    "develop": "transaction-id"
  }
}
```

---

## Best Practices

### Before Pushing
1. **Review Changes**: Check what files will be uploaded
2. **Test Locally**: Ensure your code works
3. **Check Costs**: Use `--dry-run` to estimate costs
4. **Clean Up**: Remove unnecessary files

### Repository Structure
```
my-project/
├── .igit/              # IrysGit configuration
├── .gitignore          # Git ignore rules (respected by IrysGit)
├── README.md
├── src/
│   └── main.js
└── package.json
```

### File Management
- Use `.gitignore` to exclude files
- Keep repositories under 1GB
- Avoid binary files when possible
- Use clear, descriptive commit messages

---

## Error Handling

Common errors and solutions:

**Authentication Error:**
```bash
Error: Not authenticated
Solution: Run 'igit login' first
```

**Cost Limit Exceeded:**
```bash
Error: Upload cost exceeds limit (2.5 SOL)
Solution: Use --cost-limit flag or reduce repository size
```

**Permission Denied:**
```bash
Error: Permission denied
Solution: Ensure you're a contributor or owner
```

**Network Error:**
```bash
Error: Failed to connect to Irys
Solution: Check internet connection and try again
``` 