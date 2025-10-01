# Using Git & GitHub

Git helps us track changes to code, and GitHub is where we collaborate as an IEEE chapter.  

## 🔹 Basic Workflow

1. **Clone the repo**
    
    git clone https://github.com/STUM-IEEE/ieee-stmu-hub.git

2. **Create a branch**
    
    git checkout -b my-feature-branch

   Example:
    
    git checkout -b add-led-workshop

3. **Make changes and commit**
    
    git add .
    git commit -m "Added workshop notes"

4. **Push branch**
    
    git push origin my-feature-branch

5. **Open a Pull Request (PR)**
   - Go to the repo on GitHub.
   - Compare your branch with `main`.
   - Open PR → wait for review before merge.

## 🔹 Useful Commands

- `git status` → shows changed files.  
- `git pull origin main` → updates local repo.  
- `git log` → shows commit history.  
- `git branch` → lists all branches.  
- `git checkout branch-name` → switch to another branch.  

## 📖 Next Steps

- For workflow rules, see [CONTRIBUTING.md](../CONTRIBUTING.md).  
- For coding examples, check [Workshops](../workshops/).  
- For setup instructions, see [Installing VS Code](./install-vscode.md).  
