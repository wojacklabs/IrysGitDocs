# Permissions and Collaboration

IrysGit provides a blockchain-based permission system that allows repository owners to control who can contribute to their projects. This guide explains how permissions work and how to manage collaborators.

## Permission Model

### Repository Ownership
- **Owner**: The wallet address that created the repository
- **Immutable**: Repository ownership cannot be transferred
- **Full Control**: Owners can add/remove contributors and manage all aspects

### Contributor System
- **Contributor List**: Stored on-chain as mutable data
- **Permissioned Access**: Only contributors can push changes
- **Revocable**: Owners can remove contributors at any time

## Managing Contributors

### Adding Contributors

Repository owners can add contributors using their Solana wallet addresses:

```bash
# Add a contributor
igit add-contributor 9xH8K2n...DeF

# Add multiple contributors
igit add-contributor 9xH8K2n...DeF
igit add-contributor 5pQ7L3m...GhI
```

**Requirements:**
- Must be repository owner
- Valid Solana wallet address (base58 encoded)
- Contributor cannot already exist

### Removing Contributors

```bash
# Remove a contributor
igit remove-contributor 9xH8K2n...DeF

# Remove multiple contributors
igit remove-contributor 9xH8K2n...DeF
igit remove-contributor 5pQ7L3m...GhI
```

**Requirements:**
- Must be repository owner
- Contributor must exist in the list

### Listing Contributors

```bash
# List all contributors
igit list-contributors
```

**Output Example:**
```
Contributors for MyProject:
👑 7eYZ9K8s...AbC (owner) - Added: 2024-01-15 10:30:22
👤 9xH8K2n...DeF (contributor) - Added: 2024-01-15 11:45:33
👤 5pQ7L3m...GhI (contributor) - Added: 2024-01-15 14:20:11
```

## Collaboration Workflows

### Team Development Workflow

1. **Repository Owner**:
   ```bash
   # Create repository
   igit init "TeamProject"
   igit push
   
   # Add team members
   igit add-contributor DEVELOPER_1_ADDRESS
   igit add-contributor DEVELOPER_2_ADDRESS
   ```

2. **Team Members**:
   ```bash
   # Clone repository
   igit clone githirys.xyz/OWNER_ADDRESS/TeamProject
   
   # Create feature branch
   igit checkout -b feature/new-feature
   
   # Make changes and push
   igit push feature/new-feature
   ```

### Open Source Workflow

1. **Maintainer**:
   ```bash
   # Create public repository
   igit init "OpenSourceProject"
   igit push
   
   # Add trusted contributors
   igit add-contributor TRUSTED_CONTRIBUTOR_1
   igit add-contributor TRUSTED_CONTRIBUTOR_2
   ```

2. **Contributors**:
   ```bash
   # Clone and contribute
   igit clone githirys.xyz/MAINTAINER/OpenSourceProject
   
   # Work on features
   igit checkout -b feature/improvement
   # ... make changes ...
   igit push feature/improvement
   ```

### Code Review Process

Since IrysGit is decentralized, traditional pull request workflows are different:

1. **Branch-based Review**:
   ```bash
   # Contributor creates feature branch
   igit checkout -b feature/authentication
   igit push feature/authentication
   
   # Team reviews by pulling the branch
   igit pull TeamProject feature/authentication
   
   # After approval, merge to main
   igit checkout main
   igit merge feature/authentication
   igit push main
   ```

## Permission Security

### On-Chain Storage
- Contributor lists are stored on Irys as mutable data
- Only repository owners can modify contributor lists
- All changes are timestamped and verifiable

### Access Control
- Push operations verify contributor permissions
- Verification happens before upload to prevent unauthorized changes
- Failed permission checks are logged

### Audit Trail
Every permission change is recorded:
- Transaction ID for each change
- Timestamp of modification
- Wallet address of the modifier (always the owner)

## Best Practices

### For Repository Owners

1. **Careful Contributor Selection**:
   ```bash
   # Only add trusted contributors
   igit add-contributor TRUSTED_WALLET_ADDRESS
   ```

2. **Regular Audits**:
   ```bash
   # Regularly review contributor lists
   igit list-contributors
   ```

3. **Remove Inactive Contributors**:
   ```bash
   # Remove contributors who no longer need access
   igit remove-contributor FORMER_CONTRIBUTOR
   ```

### For Team Management

1. **Role-Based Access**:
   - Different repositories for different access levels
   - Separate repositories for production vs. development

2. **Time-Limited Access**:
   - Add contributors for specific projects
   - Remove access when projects complete

3. **Documentation**:
   - Keep track of who has access to what
   - Document reasons for contributor additions/removals

## Advanced Permission Scenarios

### Multi-Repository Management

```bash
# Add contributor to multiple repositories
cd project-frontend
igit add-contributor DEVELOPER_ADDRESS

cd ../project-backend
igit add-contributor DEVELOPER_ADDRESS

cd ../project-docs
igit add-contributor DEVELOPER_ADDRESS
```

### Temporary Access

```bash
# Add contributor for specific work
igit add-contributor CONTRACTOR_ADDRESS

# Remove after work is complete
igit remove-contributor CONTRACTOR_ADDRESS
```

### Emergency Access Revocation

```bash
# Immediately revoke access if needed
igit remove-contributor COMPROMISED_ADDRESS

# Verify removal
igit list-contributors
```

## Troubleshooting Permissions

### Common Permission Errors

**Error: Permission denied**
```bash
# Check if you're a contributor
igit list-contributors

# If not, contact repository owner
```

**Error: Contributor already exists**
```bash
# Check current contributors
igit list-contributors

# Remove and re-add if needed
igit remove-contributor ADDRESS
igit add-contributor ADDRESS
```

**Error: Invalid wallet address**
```bash
# Ensure address is valid base58 Solana address
# Should be 43-44 characters long
```

### Permission Verification

```bash
# Check your current permissions
igit repo-status

# Verify contributor list
igit list-contributors
```

## Migration and Ownership

### Repository Migration
Since ownership is immutable, you cannot transfer repository ownership. Instead:

1. **Create New Repository**:
   ```bash
   # New owner creates repository
   igit init "MigratedProject"
   
   # Add original owner as contributor
   igit add-contributor ORIGINAL_OWNER_ADDRESS
   ```

2. **Clone and Re-upload**:
   ```bash
   # Clone original repository
   igit clone githirys.xyz/ORIGINAL_OWNER/Project
   
   # Initialize new repository
   igit init "Project"
   igit push
   ```

### Backup Strategy
- Always maintain local copies of important repositories
- Document contributor lists externally
- Keep private keys secure and backed up

## Future Enhancements

The permission system may be enhanced with:
- Role-based permissions (read, write, admin)
- Time-based access controls
- Multi-signature requirements
- Integration with other identity systems

## Related Commands

- [`igit add-contributor`](../api/collaboration.md#add-contributor)
- [`igit remove-contributor`](../api/collaboration.md#remove-contributor)
- [`igit list-contributors`](../api/collaboration.md#list-contributors)
- [`igit repo-status`](../api/repository.md#repo-status) 