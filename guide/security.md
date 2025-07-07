# Security

IrysGit takes security seriously. This guide covers the security measures built into IrysGit and best practices for secure usage.

## Private Key Security

### Encryption
Your Solana private key is encrypted using AES-256-GCM encryption before being stored locally. The encryption key is derived from your password using PBKDF2 with a random salt.

### Local Storage
- Private keys are stored in `~/.igit/` directory
- Files are readable only by your user account
- Keys never leave your machine during normal operation

### Best Practices
- Use a strong password for encrypting your private key
- Never share your password or private key
- Consider using a dedicated wallet for IrysGit operations
- Regularly backup your `~/.igit/` directory

## Upload Security

### Cost Limits
IrysGit implements several cost protection measures:

```bash
# Default cost limit is 1 SOL
# You'll be prompted for confirmation if upload exceeds this limit
```

### File Restrictions
Certain file types are blocked for security:

- `.exe` - Executable files
- `.bat` - Batch files  
- `.cmd` - Command files
- `.scr` - Screen saver files
- `.com` - Command files
- `.pif` - Program information files
- `.jar` - Java archive files

### Size Limits
- Maximum file count per upload: 10,000 files
- Maximum individual file size: 100MB
- Maximum total upload size: 1GB

## Rate Limiting

IrysGit implements rate limiting to prevent abuse:

- **Default**: 10 requests per minute per wallet address
- **Push operations**: 5 requests per minute
- **Clone operations**: 20 requests per minute

## Network Security

### Transaction Signing
All uploads are signed with your private key, ensuring authenticity and preventing tampering.

### Verification
Anyone can verify the authenticity of uploads by checking the signature against your public key.

## Permission Security

### Access Control
- Only repository owners can add/remove contributors
- Contributors can only push to repositories they have permission for
- Permission changes are recorded on-chain for transparency

### Audit Trail
All permission changes are stored on Irys with timestamps and transaction IDs, providing a complete audit trail.

## Best Practices

### For Individual Users

1. **Dedicated Wallet**: Use a separate Solana wallet for IrysGit operations
2. **Strong Password**: Use a strong, unique password for key encryption
3. **Regular Backups**: Backup your `~/.igit/` directory regularly
4. **Monitor Costs**: Check upload costs before large operations
5. **Review Files**: Ensure you're not uploading sensitive data

### For Teams

1. **Contributor Management**: Regularly review and update contributor lists
2. **Permission Auditing**: Monitor who has access to your repositories
3. **Separate Repositories**: Use different repositories for different projects
4. **Access Reviews**: Periodically review contributor permissions

### For Organizations

1. **Wallet Management**: Implement proper wallet key management
2. **Cost Monitoring**: Set up monitoring for upload costs
3. **Access Policies**: Define clear policies for repository access
4. **Incident Response**: Have procedures for compromised wallets

## Common Security Scenarios

### Compromised Wallet
If your wallet is compromised:

1. **Immediate Action**: Stop using the wallet for IrysGit
2. **Create New Wallet**: Generate a new Solana wallet
3. **Re-authenticate**: Run `igit login` with the new wallet
4. **Update Repositories**: Transfer ownership of repositories
5. **Revoke Permissions**: Remove the old wallet from contributor lists

### Lost Password
If you forget your encryption password:

1. **No Recovery**: There's no way to recover the password
2. **Re-authenticate**: You'll need to run `igit login` again
3. **New Setup**: This will overwrite your existing configuration

### Unauthorized Access
If someone gains access to your repositories:

1. **Remove Contributors**: Use `igit remove-contributor` to revoke access
2. **Check Permissions**: Review all contributor permissions
3. **Monitor Activity**: Watch for unexpected changes
4. **Consider Migration**: Create new repositories if needed

## Security Monitoring

### Log Files
IrysGit maintains logs of operations:
- Location: `~/.igit/logs/`
- Contents: Commands executed, timestamps, transaction IDs
- Retention: 30 days by default

### Transaction Monitoring
Monitor your Solana wallet for:
- Unexpected transactions
- Large upload costs
- Frequent operations

## Reporting Security Issues

If you discover a security vulnerability:

1. **Don't Disclose Publicly**: Report privately first
2. **Contact**: Email security@irysgit.com
3. **Provide Details**: Include reproduction steps
4. **Wait for Response**: Allow time for investigation

## Security Updates

Stay informed about security updates:
- Subscribe to release notifications
- Update IrysGit regularly
- Follow security advisories

## Additional Resources

- [Solana Security Best Practices](https://docs.solana.com/developing/programming-model/security)
- [Arweave Security Overview](https://docs.arweave.org/developers/security)
- [IrysGit Security Advisories](https://github.com/yourname/irys-git/security) 