# Pushing the Lumicerra Website to GitHub

Follow these steps to push your Lumicerra LED Lighting Systems website to GitHub.

## Prerequisites

1. Create a GitHub account if you don't already have one at [github.com](https://github.com)
2. Install Git on your local machine if it's not already installed

## Steps to Push to GitHub

### 1. Create a New Repository on GitHub

1. Log in to your GitHub account
2. Click on the "+" icon in the top right and select "New repository"
3. Enter a name for your repository (e.g., "lumicerra-led-website")
4. Add a description (optional)
5. Choose whether to make it public or private
6. Do NOT initialize the repository with a README, .gitignore, or license
7. Click "Create repository"

### 2. Export Your Project from Replit

You have two options to get your project from Replit:

#### Option A: Download as ZIP (Simplest)

1. In Replit, click on the three dots (...) in the Files panel
2. Select "Download as zip"
3. Extract the ZIP file to a directory on your computer

#### Option B: Clone the Replit Repository (Advanced)

1. In Replit, get the Git URL (if available) from the Version Control panel
2. Clone it to your computer using:
   ```bash
   git clone [Replit Git URL] lumicerra-led-website
   cd lumicerra-led-website
   ```

### 3. Setup Git and Push to GitHub

Once you have the project on your computer, open a terminal in the project directory and run:

```bash
# Initialize Git repository (if not already initialized)
git init

# Stage all files
git add .

# Commit the files
git commit -m "Initial commit of Lumicerra LED Lighting website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YourUsername/lumicerra-led-website.git

# Push to GitHub
git push -u origin main
```

Note: If the default branch is `master` instead of `main`, use:
```bash
git push -u origin master
```

### 4. Update package.json After Pushing

After successfully pushing to GitHub, update the package.json file to reflect the project name and description:

```json
{
  "name": "lumicerra-led-website",
  "version": "1.0.0",
  "description": "A modern, responsive website for Lumicerra LED Lighting Systems",
  "type": "module",
  "license": "MIT",
  ...
}
```

### 5. Verify Your Repository

1. Go to your GitHub repository page (https://github.com/YourUsername/lumicerra-led-website)
2. Confirm that all your files have been pushed correctly
3. Check that the README is displayed on the repository homepage

### 6. Set Up GitHub Pages (Optional)

If you want to deploy your site directly from GitHub:

1. Go to the "Settings" tab of your repository
2. Scroll down to "GitHub Pages" section
3. Select your main branch as the source
4. Click "Save"
5. After a few minutes, your site will be available at the URL provided

## Troubleshooting

If you encounter issues with large files:
1. Check if any files exceed GitHub's file size limit (typically 100MB)
2. Update .gitignore to exclude any unnecessary large files
3. Consider using Git LFS for large assets if needed

For authentication issues:
1. Ensure you're using a personal access token if password authentication is disabled
2. Set up SSH keys for more secure and convenient authentication