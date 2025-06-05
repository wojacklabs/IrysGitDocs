# Collaboration Commands

This section covers all commands related to managing collaborators and permissions in IrysGit repositories.

## igit add-contributor

Add a contributor to your repository (repository owner only).

### Syntax
```bash
igit add-contributor <wallet-address> [options]
```

### Parameters
- `wallet-address` - Solana wallet address of the contributor (required)

### Options
- `--message <msg>` - Add a message describing the contributor
- `--role <role>` - Set contributor role (future feature)
- `--force` - Force add even if contributor exists

### Examples

**Add a contributor:**
```bash
igit add-contributor 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL
```

**Add contributor with message:**
```bash
igit add-contributor 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL --message "Frontend developer"
```

**Add multiple contributors:**
```bash
igit add-contributor 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL
igit add-contributor 5pQ7L3m8nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Requirements
- Must be repository owner
- Valid Solana wallet address (43-44 characters, base58 encoded)
- Contributor cannot already exist in the repository

### Output
```
✅ Added contributor: 9xH8K2n...5kL
📝 Message: Frontend developer
🔗 Transaction ID: 8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Error Handling
- **Invalid wallet address**: Address must be valid base58 Solana address
- **Permission denied**: Only repository owner can add contributors
- **Contributor exists**: Cannot add existing contributor (use --force to override)
- **Network error**: Failed to update contributor list on Irys

---

## igit remove-contributor

Remove a contributor from your repository (repository owner only).

### Syntax
```bash
igit remove-contributor <wallet-address> [options]
```

### Parameters
- `wallet-address` - Solana wallet address of the contributor (required)

### Options
- `--message <msg>` - Add a message describing the removal reason
- `--force` - Force remove even if contributor doesn't exist

### Examples

**Remove a contributor:**
```bash
igit remove-contributor 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL
```

**Remove contributor with reason:**
```bash
igit remove-contributor 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL --message "Project completed"
```

**Remove multiple contributors:**
```bash
igit remove-contributor 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL
igit remove-contributor 5pQ7L3m8nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Requirements
- Must be repository owner
- Contributor must exist in the repository
- Cannot remove repository owner

### Output
```
✅ Removed contributor: 9xH8K2n...5kL
📝 Message: Project completed
🔗 Transaction ID: 8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### Error Handling
- **Permission denied**: Only repository owner can remove contributors
- **Contributor not found**: Cannot remove non-existent contributor
- **Cannot remove owner**: Repository owner cannot be removed
- **Network error**: Failed to update contributor list on Irys

---

## igit list-contributors

List all contributors for the current repository.

### Syntax
```bash
igit list-contributors [options]
```

### Options
- `--json` - Output in JSON format
- `--verbose` - Show detailed information
- `--sort <field>` - Sort by field (name, added, role)

### Examples

**List contributors:**
```bash
igit list-contributors
```

**Verbose output:**
```bash
igit list-contributors --verbose
```

**JSON output:**
```bash
igit list-contributors --json
```

**Sort by date added:**
```bash
igit list-contributors --sort added
```

### Standard Output
```
Contributors for MyProject:
👑 7eYZ9K8s...AbC (owner) - Added: 2024-01-15 10:30:22
👤 9xH8K2n...5kL (contributor) - Added: 2024-01-15 11:45:33
👤 5pQ7L3m...3jK (contributor) - Added: 2024-01-15 14:20:11

Total: 3 contributors
```

### Verbose Output
```
Contributors for MyProject:

👑 Owner
   Address: 7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ
   Added: 2024-01-15 10:30:22 UTC
   Role: owner
   Status: active

👤 Contributor
   Address: 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL
   Added: 2024-01-15 11:45:33 UTC
   Role: contributor
   Status: active
   Message: Frontend developer

👤 Contributor
   Address: 5pQ7L3m8nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
   Added: 2024-01-15 14:20:11 UTC
   Role: contributor
   Status: active
   Message: Backend developer

Total: 3 contributors
Last updated: 2024-01-15 14:20:11 UTC
Transaction ID: 8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK
```

### JSON Output
```json
{
  "repository": "MyProject",
  "owner": "7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ",
  "contributors": [
    {
      "address": "7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ",
      "role": "owner",
      "added": "2024-01-15T10:30:22Z",
      "status": "active"
    },
    {
      "address": "9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL",
      "role": "contributor",
      "added": "2024-01-15T11:45:33Z",
      "status": "active",
      "message": "Frontend developer"
    }
  ],
  "total": 3,
  "lastUpdated": "2024-01-15T14:20:11Z",
  "transactionId": "8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK"
}
```

---

## Permission Verification

### igit check-permissions

Check if a wallet address has permission to contribute to a repository.

### Syntax
```bash
igit check-permissions <wallet-address> [repository-url]
```

### Parameters
- `wallet-address` - Wallet address to check
- `repository-url` - Repository URL (optional, defaults to current repository)

### Examples

**Check permissions for current repository:**
```bash
igit check-permissions 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL
```

**Check permissions for specific repository:**
```bash
igit check-permissions 9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL githirys.xyz/alice/MyProject
```

### Output
```
✅ Permission check for: 9xH8K2n...5kL
🏠 Repository: MyProject
👤 Role: contributor
✅ Can push: Yes
✅ Can pull: Yes
📅 Added: 2024-01-15 11:45:33 UTC
```

---

## Collaboration Workflows

### Team Management

**Setting up a team:**
```bash
# Initialize repository
igit init "TeamProject"
igit push

# Add team members
igit add-contributor DEVELOPER_1_WALLET --message "Lead developer"
igit add-contributor DEVELOPER_2_WALLET --message "Frontend developer"
igit add-contributor DEVELOPER_3_WALLET --message "Backend developer"

# Verify team setup
igit list-contributors
```

**Managing team changes:**
```bash
# Add new team member
igit add-contributor NEW_DEVELOPER_WALLET --message "New team member"

# Remove former team member
igit remove-contributor FORMER_DEVELOPER_WALLET --message "Left the team"

# Update team status
igit list-contributors
```

### Access Auditing

**Regular access review:**
```bash
# List all contributors
igit list-contributors --verbose

# Check specific permissions
igit check-permissions SPECIFIC_WALLET_ADDRESS

# Review recent changes
igit log --contributors
```

### Bulk Operations

**Add multiple contributors:**
```bash
#!/bin/bash
CONTRIBUTORS=(
  "9xH8K2n4oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL"
  "5pQ7L3m8nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK"
  "3nM6J9k2lO5pQ8rS4tU7vW0xY3zA6bC9dE2fG5hI8jK"
)

for contributor in "${CONTRIBUTORS[@]}"; do
  igit add-contributor "$contributor" --message "Team member"
done
```

**Remove multiple contributors:**
```bash
#!/bin/bash
FORMER_CONTRIBUTORS=(
  "old-contributor-1-wallet"
  "old-contributor-2-wallet"
)

for contributor in "${FORMER_CONTRIBUTORS[@]}"; do
  igit remove-contributor "$contributor" --message "Project completed"
done
```

---

## Security and Best Practices

### Access Control

**Principle of least privilege:**
```bash
# Only add contributors who need access
igit add-contributor TRUSTED_DEVELOPER_WALLET

# Remove access when no longer needed
igit remove-contributor FORMER_CONTRIBUTOR_WALLET
```

**Regular audits:**
```bash
# Monthly access review
igit list-contributors --verbose > monthly-access-review.txt

# Check for unexpected contributors
igit list-contributors | grep -v "expected-contributor"
```

### Emergency Access Management

**Revoke compromised access:**
```bash
# Immediately remove compromised contributor
igit remove-contributor COMPROMISED_WALLET --message "Security incident"

# Verify removal
igit list-contributors
```

**Emergency access grant:**
```bash
# Grant temporary access for emergency
igit add-contributor EMERGENCY_RESPONDER_WALLET --message "Emergency access"

# Remove after emergency resolved
igit remove-contributor EMERGENCY_RESPONDER_WALLET --message "Emergency resolved"
```

---

## Integration with Other Commands

### Repository Status

```bash
# Check repository status including contributors
igit repo-status --verbose
```

### Push Verification

```bash
# Verify permissions before pushing
igit check-permissions $(igit config user.wallet)
igit push
```

### Clone with Permission Check

```bash
# Check if you can contribute after cloning
igit clone githirys.xyz/alice/MyProject
cd MyProject
igit check-permissions $(igit config user.wallet)
```

---

## Advanced Features

### Contributor Roles (Future Feature)

```bash
# Add contributor with specific role
igit add-contributor WALLET --role admin
igit add-contributor WALLET --role developer
igit add-contributor WALLET --role readonly
```

### Time-based Access (Future Feature)

```bash
# Add contributor with expiration
igit add-contributor WALLET --expires 2024-12-31

# List expiring contributors
igit list-contributors --expiring
```

### Approval Workflows (Future Feature)

```bash
# Require approval for contributor addition
igit add-contributor WALLET --require-approval

# Approve pending contributor
igit approve-contributor WALLET
```

---

## Error Codes

Collaboration commands use specific exit codes:

- `0` - Success
- `1` - General error
- `2` - Permission denied
- `3` - Invalid wallet address
- `4` - Contributor not found
- `5` - Contributor already exists
- `6` - Network error
- `7` - Repository not found

## Related Commands

- [`igit repo-status`](./repository.md#repo-status)
- [`igit push`](./repository.md#push)
- [`igit clone`](./repository.md#clone)
- [`igit list`](./repository.md#list) 