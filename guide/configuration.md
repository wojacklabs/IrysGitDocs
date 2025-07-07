# Configuration

This guide covers how to configure IrysGit for your specific needs and environment.

## Configuration Files

### Global Configuration

IrysGit stores global configuration in `~/.igit/config`:

```json
{
  "user": {
    "wallet": "7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ",
    "encryptedPrivateKey": "...",
    "nickname": "alice"
  },
  "network": {
    "irysNode": "https://node1.irys.xyz",
    "solanaRPC": "https://api.mainnet-beta.solana.com"
  },
  "limits": {
    "maxCostSOL": 1.0,
    "maxFileSize": 104857600,
    "maxFileCount": 10000
  },
  "security": {
    "rateLimit": 10,
    "blockedExtensions": [".exe", ".bat", ".cmd", ".scr"]
  }
}
```

### Repository Configuration

Each repository has its own configuration in `.igit/config`:

```json
{
  "repository": {
    "name": "MyProject",
    "owner": "7eYZ9K8s4mN3pQ2tX6vA1bC8dE9fG2hI5jK7lM0nO3pQ",
    "created": "2024-01-15T10:30:22Z",
    "description": "My awesome project"
  },
  "remote": {
    "url": "githirys.xyz/alice/MyProject",
    "transactionId": "8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK"
  },
  "branches": {
    "main": "8fGH3L9m2nO4pQ5rS1tU6vW7xY8zA9bC0dE1fG2hI3jK",
    "develop": "9gHI4M0n3oP5qR6sT2uV7wX8yZ9aB1cD2eF3gH4iJ5kL"
  },
  "settings": {
    "defaultBranch": "main",
    "ignoreGitignore": false,
    "autoBackup": true
  }
}
```

## Configuration Commands

### View Current Configuration

```bash
# Show global configuration
igit config --global --list

# Show repository configuration
igit config --local --list

# Show specific configuration value
igit config user.wallet
```

### Set Configuration Values

```bash
# Set global configuration
igit config --global user.nickname alice
igit config --global limits.maxCostSOL 2.0

# Set repository configuration
igit config --local repository.description "My awesome project"
igit config --local settings.defaultBranch main
```

### Remove Configuration Values

```bash
# Remove global configuration
igit config --global --unset user.nickname

# Remove repository configuration
igit config --local --unset settings.autoBackup
```

## Network Configuration

### Irys Node Selection

```bash
# Set preferred Irys node
igit config --global network.irysNode https://node2.irys.xyz

# Test connection to Irys node
igit network test
```

### Solana RPC Configuration

```bash
# Set Solana RPC endpoint
igit config --global network.solanaRPC https://api.devnet.solana.com

# Use custom RPC
igit config --global network.solanaRPC https://my-custom-rpc.com
```

## Security Configuration

### Cost Limits

```bash
# Set maximum cost per upload
igit config --global limits.maxCostSOL 1.5

# Set file size limits
igit config --global limits.maxFileSize 52428800  # 50MB
igit config --global limits.maxFileCount 5000
```

### Rate Limiting

```bash
# Set requests per minute
igit config --global security.rateLimit 15

# Disable rate limiting (not recommended)
igit config --global security.rateLimit 0
```

### File Restrictions

```bash
# Add blocked file extensions
igit config --global security.blockedExtensions .exe,.bat,.cmd,.scr,.jar

# Remove all restrictions (not recommended)
igit config --global --unset security.blockedExtensions
```

## Repository Settings

### Default Branch

```bash
# Set default branch for new repositories
igit config --global repository.defaultBranch main

# Set default branch for current repository
igit config --local settings.defaultBranch develop
```

### Ignore Patterns

```bash
# Respect .gitignore by default
igit config --global settings.ignoreGitignore true

# Override for specific repository
igit config --local settings.ignoreGitignore false
```

### Auto Backup

```bash
# Enable automatic backups before pulls
igit config --global settings.autoBackup true

# Disable for specific repository
igit config --local settings.autoBackup false
```

## Development Configuration

### Debug Mode

```bash
# Enable debug logging
igit config --global debug.enabled true
igit config --global debug.level verbose

# Set log file location
igit config --global debug.logFile ~/.igit/debug.log
```

### Proxy Configuration

```bash
# Set HTTP proxy
igit config --global network.httpProxy http://proxy.company.com:8080

# Set HTTPS proxy
igit config --global network.httpsProxy https://proxy.company.com:8080
```

## Environment Variables

IrysGit respects these environment variables:

```bash
# Override configuration directory
export IGIT_CONFIG_DIR=/custom/path

# Set default repository
export IGIT_DEFAULT_REPO=githirys.xyz/alice/MyProject

# Override network settings
export IGIT_IRYS_NODE=https://node1.irys.xyz
export IGIT_SOLANA_RPC=https://api.mainnet-beta.solana.com

# Debug settings
export IGIT_DEBUG=true
export IGIT_LOG_LEVEL=verbose
```

## Configuration Profiles

### Creating Profiles

```bash
# Create development profile
igit config --profile dev network.irysNode https://devnet.irys.xyz
igit config --profile dev network.solanaRPC https://api.devnet.solana.com

# Create production profile
igit config --profile prod network.irysNode https://node1.irys.xyz
igit config --profile prod network.solanaRPC https://api.mainnet-beta.solana.com
```

### Using Profiles

```bash
# Use development profile
igit --profile dev push

# Set default profile
igit config --global user.defaultProfile dev
```

## Advanced Configuration

### Custom Templates

```bash
# Set repository template directory
igit config --global templates.repositoryTemplate ~/.igit/templates/repo

# Set file templates
igit config --global templates.readmeTemplate ~/.igit/templates/README.md
```

### Plugin Configuration

```bash
# Enable plugins
igit config --global plugins.enabled true

# Set plugin directory
igit config --global plugins.directory ~/.igit/plugins
```

## Configuration Validation

### Validate Configuration

```bash
# Check configuration validity
igit config --validate

# Check specific configuration
igit config --validate network.irysNode
```

### Reset Configuration

```bash
# Reset global configuration to defaults
igit config --global --reset

# Reset repository configuration
igit config --local --reset

# Reset specific configuration
igit config --global --reset limits.maxCostSOL
```

## Common Configuration Scenarios

### Corporate Environment

```bash
# Set corporate proxy
igit config --global network.httpProxy http://corporate-proxy:8080

# Set corporate limits
igit config --global limits.maxCostSOL 0.5
igit config --global security.rateLimit 5

# Use corporate Solana RPC
igit config --global network.solanaRPC https://corporate-solana-rpc.com
```

### Development Team

```bash
# Set team defaults
igit config --global repository.defaultBranch develop
igit config --global settings.autoBackup true

# Set team cost limits
igit config --global limits.maxCostSOL 2.0
```

### Open Source Maintainer

```bash
# Set higher limits for open source work
igit config --global limits.maxCostSOL 5.0
igit config --global limits.maxFileCount 50000

# Enable debug logging
igit config --global debug.enabled true
```

## Configuration Best Practices

### Security

1. **Set Appropriate Limits**: Configure cost and file size limits
2. **Use Rate Limiting**: Prevent abuse with rate limiting
3. **Secure Storage**: Keep configuration files secure
4. **Regular Audits**: Review configuration regularly

### Performance

1. **Choose Nearby Nodes**: Use geographically close Irys nodes
2. **Optimize RPC**: Use reliable Solana RPC endpoints
3. **Cache Settings**: Enable caching for better performance

### Team Management

1. **Standardize Configuration**: Use consistent settings across team
2. **Document Changes**: Keep track of configuration changes
3. **Use Profiles**: Separate development and production configurations

## Troubleshooting Configuration

### Common Issues

**Configuration Not Found**:
```bash
# Check configuration file exists
ls -la ~/.igit/config

# Create default configuration
igit config --global --create-defaults
```

**Invalid Configuration**:
```bash
# Validate configuration
igit config --validate

# Fix invalid values
igit config --global limits.maxCostSOL 1.0
```

**Permission Errors**:
```bash
# Fix file permissions
chmod 600 ~/.igit/config
chmod 700 ~/.igit/
```

### Configuration Backup

```bash
# Backup configuration
cp ~/.igit/config ~/.igit/config.backup

# Restore configuration
cp ~/.igit/config.backup ~/.igit/config
```

## Related Commands

- [`igit config`](../api/commands.md#config)
- [`igit login`](../api/commands.md#login)
- [`igit init`](../api/commands.md#init) 