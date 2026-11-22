# Rhojohn Medina - Portfolio (CC211)

One-page portfolio built with HTML, CSS and JavaScript.

## Files
- `index.html` - page structure (Home, About Me, Skills carousel, Contact)
- `style.css` - dark purple theme, rounded navbar, hover effects
- `script.js` - carousel, smooth active nav, form validation
- `images/` - put your photo here as `profile.jpg`

## Edit before pushing
1. Add your photo: `images/profile.jpg`
2. In `index.html`, replace the placeholder email, Facebook, phone, Instagram, Telegram and Twitter links.

---

# Git Bash + Git Push Guide (first time)

## A. One-time setup
1. Install Git for Windows (includes Git Bash): https://git-scm.com/download/win
2. Create a free GitHub account: https://github.com
3. On GitHub: click **+** > **New repository**
   - Name: `MedinaRhojohn_CC211` (or `portfolio`)
   - Keep it **Public**
   - Do NOT tick "Add a README" (we already have one)
   - Click **Create repository** and copy the URL, e.g.
     `https://github.com/YOUR-USERNAME/MedinaRhojohn_CC211.git`
4. Open Git Bash and tell Git who you are (only once per computer):

```bash
git config --global user.name "Rhojohn Medina"
git config --global user.email "your-github-email@example.com"
```

## B. Open the project in Git Bash
1. Unzip `medina-portfolio.zip`.
2. Open the unzipped folder in File Explorer, right-click an empty space, choose **Show more options** > **Open Git Bash here**.
   (Or in Git Bash: `cd /c/Users/YourName/Downloads/medina-portfolio`)
3. Check you are in the right folder:

```bash
pwd
ls
```
You should see `index.html`, `style.css`, `script.js`.

## C. Create the repo and push

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/MedinaRhojohn_CC211.git
git push -u origin main
```

- When asked to sign in, a browser window opens: log in to GitHub and authorize.
- If it asks for a password in the terminal, use a **Personal Access Token**
  (GitHub > Settings > Developer settings > Personal access tokens), not your account password.

## D. Put the site online (GitHub Pages)
1. On your repo page: **Settings** > **Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Choose branch **main**, folder **/ (root)**, click **Save**.
4. Wait 1-2 minutes. Your site will be at:
   `https://YOUR-USERNAME.github.io/MedinaRhojohn_CC211/`

## E. Pushing changes later
Every time you edit your files:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## F. Common problems
| Problem | Fix |
|---|---|
| `fatal: not a git repository` | You are in the wrong folder. Use `cd` to the project folder, or run `git init`. |
| `remote origin already exists` | Run `git remote set-url origin YOUR-REPO-URL` |
| `failed to push some refs` | Run `git pull origin main --allow-unrelated-histories`, then `git push` |
| `Author identity unknown` | Redo the two `git config --global` commands in step A4. |
| Site shows 404 on GitHub Pages | Make sure the file is named `index.html` (lowercase) in the repo root. |
