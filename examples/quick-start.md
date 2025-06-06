# Quick Start Examples

This page provides practical examples to get you started with IrysGit quickly. Each example includes step-by-step instructions and expected outputs.

## Example 1: Your First Repository

Let's create and upload your first IrysGit repository.

### Step 1: Create a New Project

```bash
# Create a new directory
mkdir my-first-igit-project
cd my-first-igit-project

# Create some sample files
echo "# My First IrysGit Project" > README.md
echo "console.log('Hello, decentralized world!');" > hello.js
echo "node_modules/" > .gitignore
```

### Step 2: Initialize with IrysGit

```bash
# Initialize the repository
igit init "MyFirstProject"
```

**Expected Output:**
```
✓ Initialized IrysGit repository 'MyFirstProject'
✓ Created .igit directory
✓ Set up initial configuration
```

### Step 3: Push to Irys

```bash
# Upload to Irys network
igit push
```

**Expected Output:**
```
📦 Preparing upload...
📁 Found 3 files (2.1 KB)
💰 Estimated cost: 0.001 SOL
🔐 Signing transaction...
🚀 Uploading to Irys...
✅ Upload successful!
🌍 Repository URL: githirys.xyz/7eYZ...AbC/MyFirstProject
📋 Transaction ID: 8fGH3L9m...XyZ
```

### Step 4: Verify Your Repository

```bash
# Check repository status
igit repo-status
```

**Expected Output:**
```
Repository: MyFirstProject
Owner: 7eYZ9K8s...AbC
Current Branch: main
Last Push: 2024-01-15 10:30:22 UTC
Transaction ID: 8fGH3L9m...XyZ
Status: Up to date
```

---

## Example 2: Cloning an Existing Repository

Let's clone a repository from the Irys network.

### Using Repository URL

```bash
# Clone using the repository URL
igit clone githirys.xyz/7eYZ...AbC/MyFirstProject
cd MyFirstProject

# Verify the contents
ls -la
```

**Expected Output:**
```
total 16
drwxr-xr-x  4 user  staff  128 Jan 15 10:30 .
drwxr-xr-x  3 user  staff   96 Jan 15 10:30 ..
drwxr-xr-x  3 user  staff   96 Jan 15 10:30 .igit
-rw-r--r--  1 user  staff   26 Jan 15 10:30 README.md
-rw-r--r--  1 user  staff   13 Jan 15 10:30 .gitignore
-rw-r--r--  1 user  staff   45 Jan 15 10:30 hello.js
```

### Using Transaction ID

```bash
# Clone using direct transaction ID
igit clone 8fGH3L9m...XyZ my-cloned-project
cd my-cloned-project
```

---

## Example 3: Working with Branches

Let's create and manage branches in IrysGit.

### Create a New Branch

```bash
# Create and switch to a new branch
igit checkout -b feature/add-config

# Create new files
echo '{"name": "my-project", "version": "1.0.0"}' > package.json
echo "# Configuration added" >> README.md

# Push the new branch
igit push feature/add-config
```

### List All Branches

```bash
# List branches
igit branch -a
```

**Expected Output:**
```
* feature/add-config
  main
  remotes/origin/main
  remotes/origin/feature/add-config
```

### Switch Between Branches

```bash
# Switch back to main
igit checkout main

# Switch using modern syntax
igit switch feature/add-config
```

---

## Example 4: Team Collaboration

Let's set up a collaborative workflow.

### As Repository Owner

```bash
# Add a contributor
igit add-contributor 9xH8K2n...DeF

# List contributors
igit list-contributors
```

**Expected Output:**
```
Contributors for MyFirstProject:
👑 7eYZ9K8s...AbC (owner)
👤 9xH8K2n...DeF (contributor)
```

### As Contributor

```bash
# Clone the repository
igit clone githirys.xyz/7eYZ...AbC/MyFirstProject

# Make changes
cd MyFirstProject
echo "// Added by contributor" >> hello.js

# Push changes
igit push
```

**Expected Output:**
```
✅ Permission verified
🚀 Uploading to Irys...
✅ Upload successful!
```

---

## Example 5: Integration with Git

IrysGit works alongside regular Git for local version control.

### Using Git Commands

```bash
# Use regular Git for local commits
git add .
git commit -m "Add configuration file"

# Use IrysGit for decentralized storage
igit push
```

### Git Proxy Commands

```bash
# These commands work through IrysGit
igit add .
igit commit -m "Update documentation"
igit log --oneline
igit status
```

---

## Example 6: Advanced Repository Management

### Dry Run Before Pushing

```bash
# See what would be uploaded without actually uploading
igit push --dry-run
```

**Expected Output:**
```
🔍 Dry run mode - no files will be uploaded
📁 Files to upload:
  - README.md (250 bytes)
  - hello.js (45 bytes)
  - package.json (35 bytes)
💰 Estimated cost: 0.001 SOL
📊 Total size: 330 bytes
```

### Custom Cost Limits

```bash
# Set a custom cost limit
igit push --cost-limit 0.5
```

### Excluding Files

```bash
# Exclude specific patterns
igit push --exclude "*.log" --exclude "tmp/"
```

---

## Example 7: Repository Information

### Check Repository Status

```bash
# Detailed status
igit repo-status --verbose
```

**Expected Output:**
```
Repository: MyFirstProject
Owner: 7eYZ9K8s...AbC
Current Branch: main
Last Push: 2024-01-15 10:30:22 UTC
Transaction ID: 8fGH3L9m...XyZ
Contributors: 2
Local Changes: None
Remote Changes: None
Status: Up to date

Files:
- README.md (last modified: 2024-01-15 10:25:00)
- hello.js (last modified: 2024-01-15 10:20:00)
- package.json (last modified: 2024-01-15 10:30:00)
```

### List All Repositories

```bash
# List all your repositories
igit list
```

**Expected Output:**
```
Your repositories:
📁 MyFirstProject (main, feature/add-config)
📁 WebApp (main, develop)
📁 DataAnalysis (main)
```

---

## Example 8: Error Handling

### Authentication Issues

```bash
# If not authenticated
igit push
```

**Expected Output:**
```
❌ Error: Not authenticated
💡 Solution: Run 'igit login' to authenticate
```

### Cost Limit Exceeded

```bash
# Large repository push
igit push
```

**Expected Output:**
```
⚠️  Warning: Upload cost (1.5 SOL) exceeds limit (1.0 SOL)
Do you want to continue? [y/N]: y
🚀 Uploading to Irys...
```

### Permission Denied

```bash
# Trying to push without permission
igit push
```

**Expected Output:**
```
❌ Error: Permission denied
💡 You are not a contributor to this repository
💡 Contact the repository owner to request access
```

---

## Example 9: Complete Workflow

Here's a complete example workflow from start to finish:

```bash
# 1. Authentication
igit login

# 2. Create project
mkdir awesome-dapp
cd awesome-dapp
npm init -y
echo "# Awesome DApp" > README.md

# 3. Initialize repository
igit init "AwesomeDApp"

# 4. Initial push
igit push

# 5. Create feature branch
igit checkout -b feature/smart-contracts

# 6. Add code
mkdir contracts
echo "// Smart contract code" > contracts/Token.sol

# 7. Commit locally with Git
git add .
git commit -m "Add smart contract"

# 8. Push to Irys
igit push feature/smart-contracts

# 9. Add team member
igit add-contributor 9xH8K2n...DeF

# 10. Switch back to main
igit checkout main

# 11. Check status
igit repo-status
```

---

## Next Steps

- Learn about [team collaboration](./collaboration.md) workflows
- Explore [advanced examples](./advanced.md)
- Check out the [complete command reference](../api/commands.md) 