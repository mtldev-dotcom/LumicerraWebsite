# PowerShell script to clean up unnecessary files after migration to Next.js

# Directories to remove
$directoriesToRemove = @(
    ".\client",
    ".\server",
    ".\shared"
)

# Vite specific files to remove
$filesToRemove = @(
    ".\vite.config.ts",
    ".\drizzle.config.ts"
)

# Remove directories
foreach ($dir in $directoriesToRemove) {
    if (Test-Path $dir) {
        Write-Host "Removing directory: $dir"
        Remove-Item -Path $dir -Recurse -Force
    } else {
        Write-Host "Directory not found: $dir"
    }
}

# Remove files
foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        Write-Host "Removing file: $file"
        Remove-Item -Path $file -Force
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Cleanup completed! The project is now a clean Next.js application."
