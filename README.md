# Portfolio — Raphaël Blessing

Portfolio professionnel statique hébergé sur [GitHub Pages](https://tenmakenz.github.io/).

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

Tout le contenu est dans `src/data/` — aucune connaissance d'Astro requise pour le modifier :

| Fichier | Contenu |
|---|---|
| `src/data/profile.ts` | Nom, titre, email, liens sociaux, résumé, ID Formspree |
| `src/data/experience.ts` | Postes et formations (timeline) |
| `src/data/projects.ts` | Projets (titre, description, stack, statut) |
| `src/data/skills.ts` | Compétences par catégorie |

Après modification : `git add`, `git commit`, `git push` → le déploiement GitHub Actions se déclenche automatiquement.

---

## Configurer le formulaire de contact (Formspree)

1. Créer un compte sur [formspree.io](https://formspree.io/) (gratuit, 50 soumissions/mois).
2. Créer un nouveau formulaire et copier l'ID (ex. `xpwzqabc`).
3. Remplacer `FORMSPREE_FORM_ID` dans `src/data/profile.ts` par cet ID.
4. Pousser les changements.

Sans Formspree configuré, le bouton d'envoi ouvre le client mail par défaut (`mailto:`).

---

## Déploiement GitHub Pages — procédure

Voir [checklist GitHub Pages](#) dans la documentation du projet ou suivre les étapes :

1. Créer le dépôt public `tenmakenz.github.io` sur GitHub.
2. Ajouter l'origine et pousser : `git remote add origin https://github.com/tenmakenz/tenmakenz.github.io.git && git push -u origin main`
3. Dans le dépôt GitHub → **Settings → Pages → Source : GitHub Actions**.
4. Le premier push déclenche le workflow. Vérifier sur `https://tenmakenz.github.io/`.
