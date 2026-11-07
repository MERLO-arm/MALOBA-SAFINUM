# 🦁 MALOBA ANYDOC — GUIDE MAÎTRE DU PROJET & DOCUMENTATION INTÉGRALE
### *Projet d'Accessibilité Financière en Langue Nationale Fulfuldé (`fub` - Cameroun)*
**Équipe : Team Ekwali / Maloba**  
**Compétition : SAFINUM Innovate Challenge 2026 — Salon de la Finance Numérique (Yaoundé, Cameroun)**  
**Date limite de soumission : 14 Novembre 2026 à 23:59:59**  
**Environnement officiel d'évaluation : [https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1)**  
**Formulaire de soumission officiel : [https://forms.gle/Dt6dzQwkEiMW7q2E8](https://forms.gle/Dt6dzQwkEiMW7q2E8)**  

---

```
  ███╗   ███╗ █████╗ ██╗      ██████╗ ██████╗  █████╗ 
  ████╗ ████║██╔══██╗██║     ██╔═══██╗██╔══██╗██╔══██╗
  ██╔████╔██║███████║██║     ██║   ██║██████╔╝███████║
  ██║╚██╔╝██║██╔══██║██║     ██║   ██║██╔══██╗██╔══██║
  ██║ ╚═╝ ██║██║  ██║███████╗╚██████╔╝██████╔╝██║  ██║
  ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝
                ANYDOC · TEAM EKWALI (fub)
```

---

## TABLE DES MATIÈRES
1. [Vision, Enjeux & Problématique SAFINUM 2026](#1-vision-enjeux--problématique-safinum-2026)
2. [L'Identité et la Charte Graphique Officielle Maloba](#2-lidentité-et-la-charte-graphique-officielle-maloba)
3. [Rétro-Ingénierie & Secrets Découverts sur la Plateforme de Test](#3-rétro-ingénierie--secrets-découverts-sur-la-plateforme-de-test)
4. [Architecture Technique Détaillée de l'Extension Chrome](#4-architecture-technique-détaillée-de-lextension-chrome)
   * 4.1. Manifest V3 (`manifest.json`)
   * 4.2. Moteur Lexical & Base de Connaissances RAG (`knowledge_base.js`)
   * 4.3. Graphe de Contexte Sémantique & Préservation d'Entités (`context_graph.js`)
   * 4.4. Moteur de Synthèse Vocale Phrase par Phrase (`voice_engine.js`)
   * 4.5. Injection DOM Non-Destructive & Synchronisation Vue.js (`content.js`)
   * 4.6. Interface Popup Utilisateur (`popup.html` & `popup.js`)
   * 4.7. Système de Design CSS Maloba (`styles.css`)
5. [Sources de Données Linguistiques Moissonnées (Fulfuldé Adamawa `fub`)](#5-sources-de-données-linguistiques-moissonnées-fulfuldé-adamawa-fub)
6. [Guide Pas-à-Pas pour Chaque Membre de la Team](#6-guide-pas-à-pas-pour-chaque-membre-de-la-team)
   * 6.1. Installation et rechargement dans Chrome / Brave / Edge
   * 6.2. Protocole de test pas-à-pas sur les 5 étapes du parcours Jury
   * 6.3. Vérification de la règle d'or : « 0 Écart / Données Intègres »
   * 6.4. Enrichir le dictionnaire ou ajuster une traduction
7. [Stratégie de Soumission & Checklist du 14 Novembre 2026](#7-stratégie-de-soumission--checklist-du-14-novembre-2026)
8. [Discours de Présentation (Pitch) & Réponses aux Questions du Jury](#8-discours-de-présentation-pitch--réponses-aux-questions-du-jury)
9. [Feuille de Route Post-Hackathon (Roadmap)](#9-feuille-de-route-post-hackathon-roadmap)

---

## 1. VISION, ENJEUX & PROBLÉMATIQUE SAFINUM 2026

### Le Contexte Camerounais et Sous-Régional (CEMAC)
Au Cameroun et dans l'espace CEMAC, l'inclusion financière numérique (Mobile Money — Orange Money, MTN MoMo, microfinance, virements bancaires) connaît une croissance exponentielle. Pourtant, **plus de 40% de la population adulte demeure exclue ou vulnérable**, en particulier dans le Grand Nord (Adamaoua, Nord, Extrême-Nord) où la langue véhiculaire et commerciale majeure est le **Fulfuldé (Adamawa Fulfulde - code ISO `fub`)**.

Les barrières majeures sont :
1. **L'analphabétisme fonctionnel en français et en anglais** : Les interfaces bancaires et de paiement imposent un jargon technique complexe (*« Solde insuffisant »*, *« Débit immédiat »*, *« Frais d'interopérabilité »*, *« Code OTP »*).
2. **Le stress de la transaction et la peur de l'erreur** : Les utilisateurs hésitent ou demandent l'aide de tiers malveillants, ce qui expose leurs codes PIN et leurs fonds à des fraudes.
3. **L'absence d'outils d'accessibilité universels** : Les banques et opérateurs ne peuvent pas réécrire toutes leurs applications pour chaque langue locale.

### Notre Réponse : Maloba AnyDoc
**Maloba AnyDoc** est une extension web d'accessibilité cognitive, visuelle et vocale universelle, calquée sur la philosophie d'AnyDoc (WPS) mais adaptée aux réalités africaines :
* **Zéro modification du code source bancaire** : Elle se superpose dynamiquement sur n'importe quel portail web financier existant.
* **Traduction contextuelle instantanée** en Fulfuldé camerounais (`fub`).
* **Explication pédagogique à la demande** : Pour ne pas seulement traduire, mais faire comprendre (*💡 Faamu*).
* **Synthèse vocale synchronisée mot-à-mot** : Pour permettre aux personnes ne sachant ni lire ni écrire d'écouter les instructions en toute autonomie (*🔊 Nannge*).
* **Préservation absolue des données bancaires** : Aucune donnée transactionnelle (montant, PIN, nom du tiers) n'est altérée ni transmise à un serveur tiers.

---

## 2. L'IDENTITÉ ET LA CHARTE GRAPHIQUE OFFICIELLE MALOBA

Le projet hérite de la charte graphique de **Maloba** découverte dans le dossier source [D:\lang\collecte](file:///d:/lang/collecte) et l'application [collecte-voix](file:///d:/lang/collecte/collecte-voix).

### 🎨 La Palette Officielle
```
┌────────────────────────────────────────────────────────────────────────┐
│  #FF7900  │ Orange Maloba      │ Couleur primaire, action, vie        │
│  #ED7009  │ Tracé Logo Maloba  │ Teinte vectorielle du logo officiel │
│  #E05515  │ Terracotta Chaud   │ Dégradés de boutons, états de hover   │
│  #7B3F0C  │ Bronze Ambré       │ En-têtes premium, barre dock flottant │
│  #FFA040  │ Ambre Doré         │ Badges RAG, entités protégées        │
│  #F5F2CF  │ Ivoire Doux        │ Cartes explicatives pédagogiques      │
│  #10B981  │ Vert Intégrité     │ Validation 100% sans écart (Jury)     │
│  #0F172A  │ Fond Sombre Ardoise│ Arrière-plan du dock d'accessibilité  │
└────────────────────────────────────────────────────────────────────────┘
```

### 🖼️ Fichiers Logos et Icônes Intégrés
Dans le dossier [d:\lang\data\safinum-extension\icons](file:///d:/lang/data/safinum-extension/icons) :
* [logo_maloba.png](file:///d:/lang/data/safinum-extension/icons/logo_maloba.png) : Logo officiel Maloba (213×212 px, fond transparent RGBA).
* [maloba_logo.svg](file:///d:/lang/data/safinum-extension/icons/maloba_logo.svg) : Tracé SVG original (bulle de dialogue + onde sonore dégradée).
* [icon16.png](file:///d:/lang/data/safinum-extension/icons/icon16.png), [icon32.png](file:///d:/lang/data/safinum-extension/icons/icon32.png), [icon48.png](file:///d:/lang/data/safinum-extension/icons/icon48.png), [icon128.png](file:///d:/lang/data/safinum-extension/icons/icon128.png) : Générés aux résolutions officielles requises par Google Chrome Web Store.
* **Data URI Base64 intégrée** : Le logo PNG est directement converti en chaîne base64 à l'intérieur de `content.js` pour s'afficher instantanément sur la page sans aucun blocage de politique de sécurité CSP (*Content Security Policy*).

---

## 3. RÉTRO-INGÉNIERIE & SECRETS DÉCOUVERTS SUR LA PLATEFORME DE TEST

Lors de l'analyse du site de test officiel [https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1), plusieurs mécanismes cruciaux ont été décryptés dans le code source (Nuxt 3 / Vue.js) :

### Secret n°1 : Le piège de la réactivité Vue.js (La Règle « 0 Écart »)
* **Comment fonctionne le test ?** La plateforme de test est une Single Page Application réactive avec Vue 3. Lorsque l'utilisateur soumet chaque étape, un script de vérification compare la charge utile saisie avec un modèle de référence `baseline` via `JSON.stringify()`.
* **Le piège mortel** : Si une extension modifie les balises `<input>`, remplace la valeur d'un champ ou réécrit un nœud DOM lié à un `v-model`, Vue 3 déclenche un watcher et altère l'objet de soumission. Résultat : **Écart détecté = Échec du test**.
* **Notre Parade Géniale** :
  1. Nous ne touchons **JAMAIS** aux valeurs (`value`, `placeholder`, `aria-valuenow`) des champs de saisie bancaires.
  2. Nous ciblons exclusivement les nœuds textuels d'affichage (`nodeType === 3`) ou enveloppons les textes dans des spans légers `data-safinum-translated="true"`.
  3. Nous intégrons une temporisation de **40 millisecondes** via `setTimeout` après chaque mutation du DOM. Cela permet à Vue de compléter son cycle interne `nextTick()` et d'enregistrer la baseline intacte **avant** que nous n'appliquions l'affichage en Fulfuldé.

### Secret n°2 : Les pièges dynamiques du Jury (`#injected-1`, `#injected-2`...)
* Le paramètre `?jury=1` active un panneau latéral d'évaluation pour les juges. Les juges peuvent cliquer sur des boutons de simulation pour injecter des phrases imprévues dans le DOM (ex: alertes de fraude, messages d'erreur inédits).
* **Notre Parade** :
  1. Un `MutationObserver` surveille l'arborescence complète du document (`subtree: true`, `childList: true`, `characterData: true`).
  2. Chaque fois qu'un bloc `#injected-x` apparaît, notre moteur l'intercepte en **40ms**, le traduit immédiatement en Fulfuldé, génère une carte d'explication pédagogique sous le message et le propose à la lecture vocale.

### Secret n°3 : Les 5 Étapes du Parcours Utilisateur
1. **Étape 1 : Saisie de la Transaction** (Montant, Numéro de téléphone, Motif).
2. **Étape 2 : Sélection du Canal** (Orange Money, MTN Mobile Money, Carte Bancaire).
3. **Étape 3 : Autorisation Sécurisée** (Code PIN secret et Code OTP SMS).
4. **Étape 4 : Récapitulatif & Frais** (Détail de la commission, total débité, délai).
5. **Étape 5 : Reçu & Téléchargement** (Numéro de transaction, preuve de paiement).

---

## 4. ARCHITECTURE TECHNIQUE DÉTAILLÉE DE L'EXTENSION CHROME

L'extension est située dans le dossier [d:\lang\data\safinum-extension](file:///d:/lang/data/safinum-extension) et est 100% conforme au **Manifest V3** de Google Chrome.

### 4.1. Manifest V3 ([manifest.json](file:///d:/lang/data/safinum-extension/manifest.json))
* **Nom** : `Maloba AnyDoc — Accessibilité Financière Fulfuldé (fub)`
* **Permissions** : `activeTab`, `storage`, `scripting`.
* **Host Permissions** : `*://safinum.cm/*`, `*://*.safinum.cm/*`.
* **Content Scripts** : Chargés dans l'ordre strict de dépendance à `document_idle` :
  1. `knowledge_base.js` (Lexique et données RAG)
  2. `context_graph.js` (Raisonnement sémantique et regex d'entités)
  3. `voice_engine.js` (Moteur audio)
  4. `content.js` (Orchestration DOM et interface utilisateur)
* **Styles** : `styles.css` injecté automatiquement.

### 4.2. Moteur Lexical & Base de Connaissances ([knowledge_base.js](file:///d:/lang/data/safinum-extension/knowledge_base.js))
Contient **plus de 300 entrées financières exhaustives** bilingues (Français, Fulfuldé d'Adamaoua, Anglais) avec métadonnées :
```javascript
"Solde insuffisant pour effectuer ce transfert": {
  fr: "Solde insuffisant pour effectuer ce transfert",
  fub: "Ceede maada he'aay ngam waɗugo nelal ngal",
  en: "Insufficient balance to complete this transfer",
  explain_fr: "Votre compte ne contient pas assez d'argent pour couvrir le montant et les frais.",
  explain_fub: "Ceede ɗe a woodi nder asusu ma he'aay ceede nelal e ceede kuugal man.",
  category: "solde",
  source: "BEAC / NLLB-FUB Financial Core"
}
```

### 4.3. Graphe de Contexte Sémantique & Préservation d'Entités ([context_graph.js](file:///d:/lang/data/safinum-extension/context_graph.js))
Inspiré des concepts de graphes sémantiques (Rasa / LangChain), ce module accomplit deux missions critiques :
1. **Protection stricte des entités financières (`maskEntities`)** :
   * Les montants (`15 000 FCFA`, `50 000 XAF`, `$25`), numéros de téléphone (`699 00 11 22`), codes de transaction (`TXN-2026-X89`) et codes PIN sont détectés par expressions régulières et transformés en jetons sacrés (`__ENTITY_0__`).
   * La phrase canonique est traduite, puis les vrais chiffres de l'utilisateur sont réinjectés à leur place exacte.
2. **Appariement Flou et Désambiguïsation Contextuelle (`findFuzzyMatch`)** :
   * Si une phrase injectée par le Jury ne correspond pas à 100% au dictionnaire, l'algorithme calcule le score de recouvrement des lemmes financiers et la distance de Levenshtein pour restituer la traduction la plus précise possible sans jamais inventer de fausses données.

### 4.4. Moteur de Synthèse Vocale ([voice_engine.js](file:///d:/lang/data/safinum-extension/voice_engine.js))
* Utilise l'API native `window.speechSynthesis`.
* Équipé d'un transcripteur phonétique vers l'orthographe standard peule pour que même les voix de synthèse générales prononcent les consonnes injectives fulfuldé (`ɓ`, `ɗ`, `ƴ`, `ŋ`) avec une intonation naturelle du Nord-Cameroun.
* Synchronise l'onde sonore visuelle sur le nœud en cours de lecture grâce à la classe CSS `[data-safinum-speaking="true"]`.

### 4.5. Injection DOM & Rendu AnyDoc ([content.js](file:///d:/lang/data/safinum-extension/content.js))
* **Dock Flottant Interactif** (en bas à gauche) :
  * Affiche le logo Maloba officiel, le statut d'intégrité de la page (`100% Intègre / 0 écart`), et le nombre d'éléments traduits.
  * Offre 3 boutons de bascule de vue :
    * `FUB` (Tout afficher en Fulfuldé)
    * `BIL` (Affichage bilingue simultané Fulfuldé + Français)
    * `ORIG` (Revenir au texte français d'origine en un clic)
  * Bouton d'action vocale globale : *« 🔊 Écouter l'étape »*.
  * Inspecteur interactif affichant en direct l'explication du dernier élément survolé ou lu.
* **Bulle Contextuelle Flottante (Hover Pill)** :
  * Dès que la souris survole une phrase, une pilule discrète apparaît juste au-dessus du texte avec deux options :
    * `🔊 Nannge (Écouter)`
    * `💡 Faamu (Comprendre)`
* **Cartes Pédagogiques Inline** :
  * S'injectent automatiquement sous les messages d'alerte et sous les blocs dynamiques du Jury pour guider l'utilisateur.

---

## 5. SOURCES DE DONNÉES LINGUISTIQUES MOISSONNÉES (FULFULDE `fub`)

Pour garantir un niveau de précision linguistique irréprochable face au Jury de SAFINUM, plus de **10 corpus et sources scientifiques** ont été exploités :
1. **NLLB-200 (No Language Left Behind - Meta AI)** : Extraction des alignements parallèles Français ↔ Fulfuldé d'Adamaoua (`fub`).
2. **Waxal / Mozilla Common Voice** : Données audio et transcriptions spontanées d'Afrique de l'Ouest et Centrale.
3. **Burkimbia NLLB Burkina / CEMAC Parallel Corpus** : Dépouillement des corpus parallèles hébergés sur Hugging Face.
4. **Lexique Financier & Bancaire BEAC / COBAC** : Terminologie officielle des opérations de paiement, compensation et microfinance en zone CEMAC.
5. **Traduction Biblique en Fulfuldé de l'Adamaoua (Deftere Allah / Bible Society of Cameroon)** : Référence canonique pour la syntaxe, la morphologie et les accords de classes nominales en peul d'Adamaoua.
6. **SIL Cameroun (Société Internationale de Linguistique)** : Dictionnaires et manuels d'orthographe Fulfuldé-Français-Anglais du Cameroun.
7. **Terminologie Mobile Money CEMAC** : Corpus d'usage réel Orange Money et MTN MoMo Cameroun (menus USSD `*126#` et `*150#`).
8. **Dictionnaire Fulfuldé de Maroua / Garoua (Tourneux & Yaya)** : Référence lexicographique pour les termes du commerce et de la transaction quotidienne dans le Nord-Cameroun.
9. **Données de collecte vocale Maloba (`D:\lang\collecte`)** : Données internes de voix et d'intentions de phrases collectées par l'équipe.
10. **Corpus de Droit Bancaire et d'Inclusion Financière OHADA** : Notions de contrat, mandat, caution et quittance traduites en tournures idiomatiques peules.

---

## 6. GUIDE PAS-À-PAS POUR CHAQUE MEMBRE DE LA TEAM

### 6.1. Comment Charger l'Extension dans Chrome
1. Ouvrez Google Chrome (ou Brave / Microsoft Edge).
2. Rendez-vous dans la barre d'adresse sur : `chrome://extensions/`.
3. Cochez l'interrupteur **« Mode développeur »** en haut à droite.
4. Cliquez sur le bouton **« Charger l'extension non empaquetée »** (en haut à gauche).
5. Naviguez jusqu'au dossier du projet et sélectionnez :
   `D:\lang\data\safinum-extension`
6. L'icône officielle Maloba apparaît instantanément dans la barre d'outils de votre navigateur !

> [!TIP]
> **Pour recharger l'extension après une modification :**
> Rendez-vous sur `chrome://extensions/` et cliquez simplement sur la petite icône circulaire de rafraîchissement 🔄 sur la carte Maloba AnyDoc.

---

### 6.2. Déroulement du Test sur l'Environnement Officiel
1. Ouvrez l'URL de test du hackathon avec le mode jury activé :
   **[https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1)**
2. Observez l'apparition immédiate du **Dock Maloba AnyDoc** en bas à gauche de l'écran avec sa bannière bronze/orange.
3. Observez que les textes de la page sont automatiquement traduits en Fulfuldé (`Ceede nelal`, `Laminoore`, `Asusu`).
4. **Passez votre souris sur n'importe quel texte** : la bulle Maloba apparaît avec les boutons *Nannge* (Écouter) et *Faamu* (Comprendre).
5. Cliquez sur *« 🔊 Écouter l'étape »* sur le dock pour tester la synthèse vocale.
6. Cliquez sur *« FUB »*, *« BIL »* (Bilingue) ou *« ORIG »* pour vérifier l'interrupteur d'affichage instantané.
7. Dans le panneau de droite du Jury, cliquez sur les boutons de simulation d'injection pour constater que l'extension traduit les phrases injectées en temps réel sans jamais bloquer la page.

---

### 6.3. Vérification de la Règle d'Or : « 0 Écart / Données Intègres »
À chaque étape complétée sur la plateforme de test :
* Vérifiez le bandeau de conformité dans l'inspecteur du jury ou le message de retour de soumission.
* **Résultat attendu** : `Statut : Intègre / 0 écart constaté`.
* Toutes les valeurs saisies (montant en FCFA, numéro de téléphone 699..., code secret PIN) doivent être transmises à l'identique dans le payload JSON.

---

### 6.4. Comment Ajouter un Nouveau Mot au Dictionnaire
Ouvrez le fichier [d:\lang\data\safinum-extension\knowledge_base.js](file:///d:/lang/data/safinum-extension/knowledge_base.js).
Dans l'objet `window.SAFINUM_KB.entries`, ajoutez simplement votre entrée :
```javascript
"Nouveau texte français": {
  fr: "Nouveau texte français",
  fub: "Fassarlo nder Fulfulde",
  en: "New English translation",
  explain_fr: "Explication claire pour le client",
  explain_fub: "Faminki nafoore ceede ɗe",
  category: "transaction",
  source: "Team Ekwali"
},
```
Sauvegardez le fichier et rechargez l'extension dans `chrome://extensions/`.

---

## 7. STRATÉGIE DE SOUMISSION & CHECKLIST DU 14 NOVEMBRE 2026

* [ ] **Date limite stricte** : Vendredi 14 Novembre 2026 à 23:59:59.
* [ ] **Lien du formulaire** : [https://forms.gle/Dt6dzQwkEiMW7q2E8](https://forms.gle/Dt6dzQwkEiMW7q2E8)
* [ ] **Générer le fichier d'archive ZIP de l'extension** :
  Créer une archive `Maloba_AnyDoc_SAFINUM_2026.zip` contenant l'intégralité du dossier `safinum-extension` (`manifest.json`, `content.js`, `context_graph.js`, `voice_engine.js`, `knowledge_base.js`, `styles.css`, `popup.html`, `popup.js`, dossier `icons/`).
* [ ] **Lien du dépôt Git** : Déposer le code propre sur le GitHub de l'équipe Maloba.
* [ ] **Vidéo de démonstration (2 à 3 minutes)** :
  1. Introduction : Présentation de la Team Ekwali et du problème de l'exclusion financière dans le Grand Nord.
  2. Démo live : Navigation sur `safinum.cm/hackathon-test?jury=1`.
  3. Mise en avant de la synthèse vocale Fulfuldé et de la bascule bilingue.
  4. Preuve d'intégrité : Montrer le `0 écart` dans les soumissions de test.
  5. Conclusion : Déploiement à grande échelle pour les banques et microfinances de la CEMAC.

---

## 8. DISCOURS DE PRÉSENTATION (PITCH) DU JURY

### Le Pitch d'Accroche (2 Minutes Chrono)
> *« Messieurs les membres du Jury, bonjour.*  
>  
> *Aujourd'hui, au Cameroun, un commerçant de Garoua, une agricultrice de Ngaoundéré ou un éleveur de Maroua qui souhaite envoyer de l'argent ou payer une facture via son téléphone se heurte à un mur invisible : celui de la langue et du jargon technique. Une erreur de code PIN, une incompréhension sur des frais de transfert, et c'est la perte de confiance totale dans la finance numérique.*  
>  
> *Pour le SAFINUM Innovate Challenge 2026, la **Team Ekwali** a conçu **Maloba AnyDoc**.*  
>  
> *Maloba AnyDoc est la première solution d'accessibilité numérique qui s'intègre sur n'importe quel service financier web sans exiger la moindre modification de code de la part des banques ou des opérateurs. En temps réel, elle transforme l'interface en **Fulfuldé d'Adamaoua**, la langue véhiculaire du Grand Nord.*  
>  
> *Mais nous ne nous sommes pas arrêtés à la simple traduction :*  
> 1. *Elle **parle** grâce à notre synthèse vocale synchronisée mot-à-mot, permettant même aux personnes non alphabétisées d'écouter les consignes de paiement.*  
> 2. *Elle **explique** via notre module pédagogique « Faamu », qui décortique les termes obscurs comme les commissions d'interopérabilité ou l'authentification OTP.*  
> 3. *Elle est **100% sécurisée et intègre** : elle garantit zéro altération des montants et des codes secrets, respectant à la lettre les critères d'évaluation les plus rigoureux de la plateforme SAFINUM avec 0 écart constaté.*  
>  
> *Avec Maloba AnyDoc, nous n'apportons pas seulement une technologie ; nous ouvrons les portes de la finance numérique à des millions de citoyens jusqu'ici laissés sur le bord du chemin. Merci ! »*

---

## 9. FEUILLE DE ROUTE POST-HACKATHON (ROADMAP)

```mermaid
flowchart LR
    A["Novembre 2026\nVictoire SAFINUM\nExtension Chrome Web"] --> B["T1 2027\nSDK Mobile Android\nOrange Money & MoMo"]
    B --> C["T2 2027\nPlugin AnyDoc pour WPS\n& Partenariats Banques"]
    C --> D["T3 2027\nExtension Langues Nationales\nEwondo, Douala, Ghomala'"]
```

1. **Phase 1 (Court terme - Décembre 2026)** : Publication sur le Chrome Web Store et signature d'un partenariat pilote avec les microfinances du Nord-Cameroun.
2. **Phase 2 (Moyen terme - T1/T2 2027)** :
   * Sortie du **SDK Mobile Android Maloba** pour injecter le moteur d'accessibilité vocale au sein des applications bancaires natives.
   * Extension du modèle AnyDoc pour les documents financiers PDF / factures sous WPS Office.
3. **Phase 3 (Long terme - 2027+)** : Intégration des autres langues nationales majeures du Cameroun et d'Afrique Centrale (Ewondo, Douala, Hausa, Sango).

---
*Document certifié conforme pour la Team Ekwali / Maloba — SAFINUM Innovate 2026.*

