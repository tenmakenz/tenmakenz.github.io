# Portfolio — Raphaël Blessing

Portfolio professionnel  hébergé sur [GitHub Pages](https://tenmakenz.github.io/).

**Stack :** [Astro](https://astro.build/) · [Tailwind CSS v4](https://tailwindcss.com/) · GitHub Actions

---

## Commandes

| Commande | Description |
|---|---|
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur de développement sur `localhost:4321` |
| `npm run build` | Génère le site dans `dist/` |
| `npm run preview` | Prévisualise le build en local |

---

## Mettre à jour le contenu

Tout le contenu est dans `src/data/` — :

| Fichier | Contenu |
|---|---|
| `src/data/profile.ts` | Nom, titre, email, liens sociaux, résumé, ID Formspree |
| `src/data/experience.ts` | Postes et formations (timeline) |
| `src/data/projects.ts` | Projets (titre, description, stack, statut) |
| `src/data/skills.ts` | Compétences par catégorie |

Après modification : `git add`, `git commit`, `git push` → le déploiement GitHub Actions se déclenche automatiquement.
