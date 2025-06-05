# Branch Operations

This section covers all commands related to managing branches in IrysGit repositories.

## igit branch

List, create, or delete branches.

### Syntax
```bash
igit branch [options]
igit branch <branch-name>
igit branch -d <branch-name>
```

### Options
- `-a, --all` - List all branches (local and remote)
- `-r, --remote` - List remote branches only
- `-d, --delete` - Delete a branch
- `-D, --force-delete` - Force delete a branch
- `-m, --move` - Rename a branch
- `-c, --copy` - Copy a branch
- `--merged` - List branches merged into current branch
- `--no-merged` - List branches not merged into current branch

### Examples

**List local branches:**
```bash
igit branch
```

**List all branches:**
```bash
igit branch -a
```

**Create new branch:**
```bash
igit branch feature/new-feature
```

**Delete branch:**
```bash
igit branch -d feature/old-feature
```

**Force delete branch:**
```bash
igit branch -D experimental-feature
```

**Rename branch:**
```bash
igit branch -m old-name new-name
```

### Output Examples

**List branches:**
```
* main
  develop
  feature/authentication
  feature/ui-improvements
```

**List all branches:**
```
* main
  develop
  feature/authentication
  feature/ui-improvements
  remotes/origin/main
  remotes/origin/develop
  remotes/origin/feature/authentication
```

---

## igit checkout

Switch branches or restore working tree files.

### Syntax
```bash
igit checkout <branch-name>
igit checkout -b <new-branch-name>
igit checkout -B <branch-name>
```

### Options
- `-b` - Create and switch to new branch
- `-B` - Create or reset and switch to branch
- `--track` - Set up tracking relationship
- `--force` - Force checkout (discard local changes)
- `--orphan` - Create orphan branch

### Examples

**Switch to existing branch:**
```bash
igit checkout main
```

**Create and switch to new branch:**
```bash
igit checkout -b feature/new-feature
```

**Force checkout (discard changes):**
```bash
igit checkout --force main
```

**Create orphan branch:**
```bash
igit checkout --orphan gh-pages
```

### Output
```
Switched to branch 'feature/new-feature'
```

---

## igit switch

Switch branches (Git 2.23+ style).

### Syntax
```bash
igit switch <branch-name>
igit switch -c <new-branch-name>
```

### Options
- `-c, --create` - Create new branch and switch to it
- `-C, --force-create` - Force create new branch and switch to it
- `--track` - Set up tracking relationship
- `--force` - Force switch (discard local changes)

### Examples

**Switch to existing branch:**
```bash
igit switch main
```

**Create and switch to new branch:**
```bash
igit switch -c feature/new-feature
```

**Force switch:**
```bash
igit switch --force develop
```

### Output
```
Switched to a new branch 'feature/new-feature'
```

---

## Remote Branch Operations

### Listing Remote Branches

```bash
# List remote branches
igit branch -r

# List all branches with remote tracking
igit branch -vv
```

### Pushing Branches

```bash
# Push current branch
igit push

# Push specific branch
igit push origin feature/new-feature

# Push and set upstream
igit push --set-upstream origin feature/new-feature
```

### Pulling Branches

```bash
# Pull current branch
igit pull

# Pull specific branch
igit pull origin main

# Pull and merge
igit pull --merge origin main
```

---

## Branch Management Workflows

### Feature Branch Workflow

```bash
# Create feature branch
igit checkout -b feature/user-authentication

# Work on feature
echo "// Authentication code" > auth.js
git add auth.js
git commit -m "Add authentication"

# Push feature branch
igit push origin feature/user-authentication

# Switch back to main
igit checkout main

# Merge feature branch
git merge feature/user-authentication
igit push origin main

# Delete feature branch
igit branch -d feature/user-authentication
```

### Release Branch Workflow

```bash
# Create release branch from develop
igit checkout develop
igit checkout -b release/v1.2.0

# Finalize release
echo "1.2.0" > VERSION
git add VERSION
git commit -m "Version 1.2.0"

# Push release branch
igit push origin release/v1.2.0

# Merge to main
igit checkout main
git merge release/v1.2.0
igit push origin main

# Tag the release
git tag v1.2.0
git push origin v1.2.0

# Merge back to develop
igit checkout develop
git merge release/v1.2.0
igit push origin develop

# Delete release branch
igit branch -d release/v1.2.0
```

### Hotfix Workflow

```bash
# Create hotfix branch from main
igit checkout main
igit checkout -b hotfix/security-fix

# Apply hotfix
echo "// Security fix" > security-patch.js
git add security-patch.js
git commit -m "Fix security vulnerability"

# Push hotfix
igit push origin hotfix/security-fix

# Merge to main
igit checkout main
git merge hotfix/security-fix
igit push origin main

# Merge to develop
igit checkout develop
git merge hotfix/security-fix
igit push origin develop

# Delete hotfix branch
igit branch -d hotfix/security-fix
```

---

## Branch Synchronization

### Keeping Branches Updated

```bash
# Update main branch
igit checkout main
igit pull origin main

# Update feature branch with latest main
igit checkout feature/my-feature
git merge main

# Alternative: rebase feature branch
git rebase main

# Push updated feature branch
igit push origin feature/my-feature
```

### Resolving Conflicts

```bash
# If merge conflicts occur
git merge main
# Edit conflicted files
git add .
git commit -m "Resolve merge conflicts"
igit push origin feature/my-feature
```

---

## Branch Naming Conventions

### Recommended Naming

```bash
# Feature branches
feature/user-authentication
feature/payment-integration
feature/ui-improvements

# Bug fix branches
bugfix/login-error
bugfix/memory-leak
bugfix/validation-issue

# Release branches
release/v1.0.0
release/v2.0.0-beta

# Hotfix branches
hotfix/security-patch
hotfix/critical-bug

# Documentation branches
docs/api-documentation
docs/user-guide
```

### Branch Prefixes

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/user-profile` |
| `bugfix/` | Bug fixes | `bugfix/login-error` |
| `hotfix/` | Critical fixes | `hotfix/security-patch` |
| `release/` | Release preparation | `release/v1.0.0` |
| `docs/` | Documentation | `docs/api-guide` |
| `test/` | Testing | `test/unit-tests` |
| `refactor/` | Code refactoring | `refactor/auth-module` |

---

## Branch Status and Information

### Check Branch Status

```bash
# Show current branch
igit branch --show-current

# Show branch information
igit branch -vv

# Show branch commit history
igit log --oneline --graph
```

### Branch Comparison

```bash
# Compare branches
git diff main..feature/my-feature

# Show commits in feature branch not in main
git log main..feature/my-feature

# Show files changed between branches
git diff --name-only main..feature/my-feature
```

---

## Advanced Branch Operations

### Branch Tracking

```bash
# Set upstream branch
igit push --set-upstream origin feature/my-feature

# Track existing remote branch
igit branch --set-upstream-to=origin/feature/my-feature

# Show tracking branches
igit branch -vv
```

### Branch Cleanup

```bash
# List merged branches
igit branch --merged

# Delete merged branches
igit branch --merged | grep -v "main\|develop" | xargs -n 1 git branch -d

# List unmerged branches
igit branch --no-merged

# Prune remote branches
git remote prune origin
```

### Branch Archives

```bash
# Create archive of branch
git archive --format=zip --output=feature-branch.zip feature/my-feature

# Create tarball of branch
git archive --format=tar.gz --output=feature-branch.tar.gz feature/my-feature
```

---

## Branch Security

### Protected Branches

```bash
# In repository settings (conceptual)
# Protect main branch from force pushes
# Require pull request reviews
# Require status checks
```

### Branch Permissions

```bash
# Check if user can push to branch
igit check-permissions $(igit config user.wallet) --branch main

# List branch contributors
igit list-contributors --branch feature/my-feature
```

---

## Troubleshooting Branches

### Common Issues

**Branch Not Found:**
```bash
# Check if branch exists
igit branch -a | grep feature/my-feature

# Fetch remote branches
git fetch origin
```

**Cannot Switch Branch:**
```bash
# Check for uncommitted changes
git status

# Stash changes
git stash

# Switch branch
igit switch main

# Apply stashed changes
git stash pop
```

**Branch Diverged:**
```bash
# Check branch status
git status

# Pull latest changes
igit pull origin main

# Rebase local commits
git rebase origin/main
```

### Recovery Operations

**Recover Deleted Branch:**
```bash
# Find commit hash of deleted branch
git reflog

# Recreate branch from commit
igit checkout -b recovered-branch <commit-hash>
```

**Undo Branch Merge:**
```bash
# Find merge commit
git log --oneline

# Reset to before merge
git reset --hard <commit-before-merge>
```

---

## Best Practices

### Branch Lifecycle

1. **Create**: Create branch for specific purpose
2. **Develop**: Make changes and commit regularly
3. **Push**: Push branch to remote repository
4. **Review**: Review changes before merging
5. **Merge**: Merge into target branch
6. **Cleanup**: Delete merged branches

### Branch Hygiene

- Keep branches focused on single features
- Use descriptive branch names
- Regularly update branches with latest changes
- Delete merged branches promptly
- Use pull requests for code review

### Team Coordination

- Communicate about branch creation
- Follow naming conventions
- Coordinate merge timing
- Review branch changes before merging

## Related Commands

- [`igit push`](./repository.md#push)
- [`igit pull`](./repository.md#pull)
- [`igit merge`](./repository.md#merge)
- [`igit log`](./repository.md#log) 