# Contributing to the IEEE STMU Hub

Thank you for contributing to the **IEEE Student Chapter at St. Mary’s University**!  
This repository serves as the central hub for our workshops, documentation, website, projects, and student highlights.  

To keep everything organized and consistent, please follow the guidelines below.  

---

## 🔹 General Workflow

Our `main` branch is **protected**. All changes must go through a Pull Request (PR).

1. Update your local repo:
   git pull origin main

2. Create a new branch:
   git checkout -b <branch-name>
   Example:
   git checkout -b add-led-workshop

3. Make your changes:
   - Place workshop code inside `/workshops/<date>-<name>/`.
   - Add docs in `/docs/` if needed.
   - Update `/students/` or `/projects/` only if highlighting a new member/project.

4. Stage and commit:
   git add .
   git commit -m "Description of changes"

5. Push your branch:
   git push origin <branch-name>

6. Open a Pull Request:
   - Go to the repo on GitHub.
   - Select your branch → click *Compare & pull request*.
   - Add a clear description of what you changed.

7. Review & Merge:
   - Another member or officer must review before merging.
   - Once approved, your changes will be added to `main`.

---

## 🔹 Adding a New Workshop

- Create a folder in `/workshops/` using this naming format:
  YYYY-MM-DD-Workshop-Name/

  Example:
  2025-09-30-Arduino-Workshop/

- Inside the folder:
  - `starter/` → minimal starter code.
  - `complete/` → full working code.
  - `README.md` → short explanation of the workshop, setup instructions, and any wiring diagrams.

---

## 🔹 Documentation

- Add setup guides, tutorials, and references to `/docs/`.
- Use Markdown format (`.md`).
- Keep guides concise and link to videos/resources where helpful.
- Update the Wiki if the guide is intended for long-term reference.

---

## 🔹 Borrowed Code

If you include code from another repo:
1. Make sure the license is **permissive** (MIT, Apache 2.0, BSD).
2. Copy the original `LICENSE` file into the borrowed folder.
3. Add an attribution line in that folder’s `README.md`.
4. Update the [Borrowed Code Index](./docs/Borrowed-Code-Index.md) with:
   - Repo name + link
   - License type
   - Where it is used in this repo

---

## 🔹 Projects & Student Highlights

- Chapter projects: Add a summary in `/projects/` with a link to its dedicated repo (if large).
- Student highlights: Add/update your info in `/students/`. Officers may review before merging.

---

## 🔹 Need Help?

- Check the [Wiki](../../wiki) for detailed guides.
- Ask an officer or maintainer if you’re unsure about repo structure or workflow.

---

✅ Following these rules keeps our repo clean, our website stable, and ensures every contribution is properly credited.
