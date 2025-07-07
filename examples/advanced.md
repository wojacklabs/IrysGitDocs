# Advanced Workflows

This guide covers advanced IrysGit workflows and techniques for complex development scenarios.

## Complex Branching Strategies

### GitFlow with IrysGit

GitFlow is a branching model that defines specific branch types and their purposes.

**Setup:**
```bash
# Initialize repository with GitFlow structure
igit init "MyProject"

# Create develop branch
igit checkout -b develop
igit push develop

# Create feature branch
igit checkout -b feature/user-management
```

**Feature Development:**
```bash
# Develop feature
echo "// User management code" > user-management.js
git add .
git commit -m "Add user management module"

# Push feature branch
igit push feature/user-management

# Merge back to develop
igit checkout develop
git merge feature/user-management
igit push develop

# Delete feature branch
igit branch -d feature/user-management
```

**Release Process:**
```bash
# Create release branch
igit checkout develop
igit checkout -b release/v1.0.0

# Version bump and final changes
echo "1.0.0" > VERSION
git add VERSION
git commit -m "Version 1.0.0"

# Push release branch
igit push release/v1.0.0

# Merge to main
igit checkout main
git merge release/v1.0.0
igit push main

# Tag release
git tag v1.0.0
git push origin v1.0.0

# Merge back to develop
igit checkout develop
git merge release/v1.0.0
igit push develop
```

### Monorepo Management

Managing multiple projects in a single repository.

**Repository Structure:**
```
monorepo/
├── packages/
│   ├── frontend/
│   ├── backend/
│   └── shared/
├── tools/
└── docs/
```

**Setup:**
```bash
# Initialize monorepo
mkdir monorepo
cd monorepo
igit init "MonorepoProject"

# Create package directories
mkdir -p packages/frontend packages/backend packages/shared
mkdir -p tools docs

# Create package.json files
echo '{"name": "@myorg/frontend"}' > packages/frontend/package.json
echo '{"name": "@myorg/backend"}' > packages/backend/package.json
echo '{"name": "@myorg/shared"}' > packages/shared/package.json

# Initial commit
git add .
git commit -m "Initial monorepo structure"
igit push
```

**Package-Specific Workflows:**
```bash
# Work on frontend package
cd packages/frontend
igit checkout -b feature/frontend-auth

# Make changes
echo "// Frontend auth code" > auth.js
git add .
git commit -m "Add frontend authentication"

# Push feature branch
igit push feature/frontend-auth

# Work on backend package
cd ../../packages/backend
igit checkout -b feature/backend-auth

# Make changes
echo "// Backend auth code" > auth.js
git add .
git commit -m "Add backend authentication"

# Push feature branch
igit push feature/backend-auth
```

**Cross-Package Dependencies:**
```bash
# Update shared package
cd packages/shared
igit checkout -b feature/shared-auth-utils

# Add shared utilities
echo "// Shared auth utilities" > auth-utils.js
git add .
git commit -m "Add shared authentication utilities"
igit push feature/shared-auth-utils

# Update frontend to use shared utilities
cd ../frontend
git checkout feature/frontend-auth
echo "// Import shared utils" >> auth.js
git add .
git commit -m "Use shared auth utilities"
igit push feature/frontend-auth
```

## Multi-Repository Workflows

### Microservices Architecture

Managing multiple related repositories for microservices.

**Service Repositories:**
```bash
# User service
igit init "UserService"
igit add-contributor team-member-1
igit add-contributor team-member-2

# Order service
igit init "OrderService"
igit add-contributor team-member-2
igit add-contributor team-member-3

# API Gateway
igit init "APIGateway"
igit add-contributor team-member-1
igit add-contributor team-member-3
```

**Coordinated Development:**
```bash
# Feature requiring changes across services
# 1. Update user service
igit clone githirys.xyz/team/UserService
cd UserService
igit checkout -b feature/user-profile-api

echo "// User profile API" > profile-api.js
git add .
git commit -m "Add user profile API"
igit push feature/user-profile-api

# 2. Update order service
cd ../
igit clone githirys.xyz/team/OrderService
cd OrderService
igit checkout -b feature/user-profile-integration

echo "// Integrate user profile" > user-integration.js
git add .
git commit -m "Integrate user profile API"
igit push feature/user-profile-integration

# 3. Update API gateway
cd ../
igit clone githirys.xyz/team/APIGateway
cd APIGateway
igit checkout -b feature/user-profile-routes

echo "// User profile routes" > user-routes.js
git add .
git commit -m "Add user profile routes"
igit push feature/user-profile-routes
```

### Deployment Coordination

**Deployment Scripts:**
```bash
#!/bin/bash
# deploy-microservices.sh

SERVICES=("UserService" "OrderService" "APIGateway")
BRANCH="main"

for service in "${SERVICES[@]}"; do
    echo "Deploying $service..."
    
    # Pull latest changes
    cd "$service"
    igit pull "$service" "$BRANCH"
    
    # Build and deploy
    npm run build
    npm run deploy
    
    cd ..
done
```

**Version Coordination:**
```bash
# Create version coordination file
cat > deployment-manifest.json << EOF
{
  "version": "1.2.0",
  "services": {
    "UserService": {
      "branch": "main",
      "commit": "abc123...",
      "image": "userservice:1.2.0"
    },
    "OrderService": {
      "branch": "main", 
      "commit": "def456...",
      "image": "orderservice:1.2.0"
    },
    "APIGateway": {
      "branch": "main",
      "commit": "ghi789...",
      "image": "apigateway:1.2.0"
    }
  }
}
EOF

# Commit and push manifest
git add deployment-manifest.json
git commit -m "Update deployment manifest to v1.2.0"
igit push
```

## Continuous Integration/Deployment

### CI/CD Pipeline Integration

**GitHub Actions Integration:**
```yaml
# .github/workflows/igit-deploy.yml
name: IrysGit Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install IrysGit
        run: npm install -g irys-git
        
      - name: Configure IrysGit
        run: |
          echo "$SOLANA_PRIVATE_KEY" | igit login --stdin
        env:
          SOLANA_PRIVATE_KEY: ${{ secrets.SOLANA_PRIVATE_KEY }}
          
      - name: Deploy to IrysGit
        run: |
          igit push
```

**Custom CI/CD Pipeline:**
```bash
#!/bin/bash
# ci-cd-pipeline.sh

# Build stage
echo "Building application..."
npm run build

# Test stage
echo "Running tests..."
npm test

# Security scan
echo "Running security scan..."
npm audit

# Deploy to staging
echo "Deploying to staging..."
igit push staging

# Run integration tests
echo "Running integration tests..."
npm run test:integration

# Deploy to production
echo "Deploying to production..."
igit push main

# Send notifications
echo "Deployment complete!"
```

## Advanced Permission Management

### Role-Based Access Control

**Setting up roles:**
```bash
# Create different repositories for different access levels
igit init "ProductionCode"
igit init "DevelopmentCode"
igit init "DocumentationCode"

# Add developers to development repo
igit add-contributor dev1-wallet --message "Junior Developer"
igit add-contributor dev2-wallet --message "Senior Developer"

# Add only senior developers to production repo
igit add-contributor dev2-wallet --message "Senior Developer"
igit add-contributor lead-wallet --message "Tech Lead"

# Add everyone to documentation repo
igit add-contributor dev1-wallet --message "Documentation Contributor"
igit add-contributor dev2-wallet --message "Documentation Contributor"
igit add-contributor lead-wallet --message "Documentation Maintainer"
```

**Permission Auditing:**
```bash
#!/bin/bash
# audit-permissions.sh

REPOSITORIES=("ProductionCode" "DevelopmentCode" "DocumentationCode")

for repo in "${REPOSITORIES[@]}"; do
    echo "=== $repo ==="
    cd "$repo"
    igit list-contributors --verbose
    echo ""
    cd ..
done
```

### Time-Based Access Management

**Temporary Access Script:**
```bash
#!/bin/bash
# grant-temporary-access.sh

REPOSITORY="$1"
CONTRIBUTOR="$2"
DURATION="$3"  # in days

# Grant access
cd "$REPOSITORY"
igit add-contributor "$CONTRIBUTOR" --message "Temporary access for $DURATION days"

# Schedule removal (using cron or similar)
echo "$(date -d "+$DURATION days" +%s) $REPOSITORY $CONTRIBUTOR" >> /tmp/temp-access.log

# Create removal script
cat > remove-temp-access.sh << EOF
#!/bin/bash
cd "$REPOSITORY"
igit remove-contributor "$CONTRIBUTOR" --message "Temporary access expired"
EOF

chmod +x remove-temp-access.sh
```

## Large-Scale Repository Management

### Repository Mirroring

**Setting up mirrors:**
```bash
# Primary repository
igit init "PrimaryRepo"
igit push

# Create mirror in different region
igit init "PrimaryRepo-Mirror"
igit add-contributor mirror-service-wallet

# Sync script
cat > sync-mirrors.sh << EOF
#!/bin/bash

# Pull from primary
igit pull PrimaryRepo main

# Push to mirror
igit push PrimaryRepo-Mirror main
EOF
```

### Backup and Recovery

**Automated Backup:**
```bash
#!/bin/bash
# backup-repositories.sh

REPOSITORIES=("Repo1" "Repo2" "Repo3")
BACKUP_DIR="/backup/igit/$(date +%Y%m%d)"

mkdir -p "$BACKUP_DIR"

for repo in "${REPOSITORIES[@]}"; do
    echo "Backing up $repo..."
    
    # Clone repository
    igit clone "githirys.xyz/org/$repo" "$BACKUP_DIR/$repo"
    
    # Export metadata
    cd "$BACKUP_DIR/$repo"
    igit list-contributors --json > contributors.json
    igit repo-status --json > status.json
    
    # Create archive
    cd "$BACKUP_DIR"
    tar -czf "$repo-backup.tar.gz" "$repo"
    rm -rf "$repo"
done
```

**Recovery Script:**
```bash
#!/bin/bash
# recover-repository.sh

BACKUP_FILE="$1"
RECOVERY_NAME="$2"

# Extract backup
tar -xzf "$BACKUP_FILE"

# Initialize new repository
cd "$(basename "$BACKUP_FILE" .tar.gz)"
igit init "$RECOVERY_NAME"

# Restore files
igit push

# Restore contributors
cat contributors.json | jq -r '.contributors[].address' | while read address; do
    igit add-contributor "$address"
done
```

## Performance Optimization

### Batch Operations

**Bulk Repository Creation:**
```bash
#!/bin/bash
# create-team-repositories.sh

REPOSITORIES=("frontend" "backend" "mobile" "docs")
TEAM_MEMBERS=("dev1-wallet" "dev2-wallet" "dev3-wallet")

for repo in "${REPOSITORIES[@]}"; do
    echo "Creating $repo..."
    
    # Initialize repository
    igit init "$repo"
    
    # Add team members
    for member in "${TEAM_MEMBERS[@]}"; do
        igit add-contributor "$member" --message "Team member"
    done
    
    # Push initial commit
    echo "# $repo" > README.md
    git add README.md
    git commit -m "Initial commit"
    igit push
done
```

**Optimized Synchronization:**
```bash
#!/bin/bash
# sync-repositories.sh

REPOSITORIES=("repo1" "repo2" "repo3")

# Parallel synchronization
for repo in "${REPOSITORIES[@]}"; do
    (
        cd "$repo"
        igit pull
        echo "Synced $repo"
    ) &
done

# Wait for all to complete
wait
echo "All repositories synchronized"
```

### Caching Strategies

**Local Cache Management:**
```bash
#!/bin/bash
# manage-cache.sh

# Clear old cache entries
igit config --global cache.maxAge 7d
igit config --global cache.maxSize 1g

# Preload frequently accessed repositories
FREQUENT_REPOS=("main-app" "shared-lib" "docs")

for repo in "${FREQUENT_REPOS[@]}"; do
    igit prefetch "githirys.xyz/org/$repo"
done
```

## Monitoring and Analytics

### Repository Analytics

**Usage Statistics:**
```bash
#!/bin/bash
# repo-analytics.sh

REPOSITORIES=("repo1" "repo2" "repo3")

for repo in "${REPOSITORIES[@]}"; do
    echo "=== $repo Analytics ==="
    cd "$repo"
    
    # Contributor activity
    igit list-contributors | wc -l
    
    # Push frequency
    igit log --since="1 month ago" --oneline | wc -l
    
    # Repository size
    du -sh .
    
    echo ""
    cd ..
done
```

**Automated Monitoring:**
```bash
#!/bin/bash
# monitor-repositories.sh

# Check repository health
for repo in $(igit list --json | jq -r '.repositories[].name'); do
    echo "Checking $repo..."
    
    # Check accessibility
    if igit repo-status "$repo" &>/dev/null; then
        echo "✅ $repo is accessible"
    else
        echo "❌ $repo is not accessible"
        # Send alert
        curl -X POST webhook-url -d "Repository $repo is not accessible"
    fi
done
```

## Security Best Practices

### Security Auditing

**Permission Audit:**
```bash
#!/bin/bash
# security-audit.sh

echo "=== Security Audit Report ==="
echo "Date: $(date)"
echo ""

# Check for unexpected contributors
for repo in $(igit list --json | jq -r '.repositories[].name'); do
    echo "Repository: $repo"
    igit list-contributors --json | jq -r '.contributors[] | select(.role != "owner") | .address' | while read addr; do
        echo "  Contributor: $addr"
    done
    echo ""
done

# Check for repositories with no contributors
echo "Repositories with no contributors:"
for repo in $(igit list --json | jq -r '.repositories[].name'); do
    contributors=$(igit list-contributors --json | jq '.contributors | length')
    if [ "$contributors" -eq 1 ]; then
        echo "  $repo (owner only)"
    fi
done
```

### Compliance Management

**Compliance Reporting:**
```bash
#!/bin/bash
# compliance-report.sh

echo "=== Compliance Report ==="
echo "Generated: $(date)"
echo ""

# Repository inventory
echo "Repository Inventory:"
igit list --json | jq -r '.repositories[] | "- \(.name) (Owner: \(.owner))"'
echo ""

# Access control review
echo "Access Control Review:"
for repo in $(igit list --json | jq -r '.repositories[].name'); do
    echo "$repo:"
    igit list-contributors --verbose | grep -E "(owner|contributor)"
    echo ""
done

# Security configuration
echo "Security Configuration:"
echo "Cost Limit: $(igit config limits.maxCostSOL)"
echo "Rate Limit: $(igit config security.rateLimit)"
echo "Blocked Extensions: $(igit config security.blockedExtensions)"
```

## Next Steps

These advanced workflows demonstrate the power and flexibility of IrysGit for complex development scenarios. Key takeaways:

1. **Scale Gradually**: Start with simple workflows and add complexity as needed
2. **Automate Repetitive Tasks**: Use scripts to handle bulk operations
3. **Monitor Performance**: Track repository health and performance metrics
4. **Maintain Security**: Regular audits and compliance checks
5. **Document Processes**: Keep workflows documented for team members

For more information:
- [Security Best Practices](../guide/security.md)
- [Configuration Guide](../guide/configuration.md)
- [API Reference](../api/commands.md)
- [Team Collaboration](./collaboration.md) 