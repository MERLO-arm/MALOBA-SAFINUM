# 🦁 MALOBA ANYDOC — ACCESSIBILITÉ FINANCIÈRE MULTILINGUE CAMEROUN : FULFULDE (`fub`) & EWONDO (`ewo`)
### *Prototype Officiel de la Team Ekwali / Maloba · SAFINUM Innovate Challenge 2026*
**Salon de la Finance Numérique (SAFINUM 2026) · Yaoundé, Cameroun**  
**Date limite de soumission : 14 Novembre 2026 à 23:59:59**  
**Plateforme d'évaluation officielle : [safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1)**  
**Dépôt GitHub : [https://github.com/MERLO-arm/MALOBA-SAFINUM](https://github.com/MERLO-arm/MALOBA-SAFINUM)**  
**Formulaire de dépôt : [forms.gle/Dt6dzQwkEiMW7q2E8](https://forms.gle/Dt6dzQwkEiMW7q2E8)**  

---

[![SAFINUM Challenge](https://img.shields.io/badge/SAFINUM-Innovate%202026-ff7900?style=for-the-badge&logo=safari)](https://safinum.cm/hackathon)
[![Langue Fulfulde](https://img.shields.io/badge/Langue-Fulfuld%C3%A9%20(fub%20Grand--Nord)-7b3f0c?style=for-the-badge)](https://fr.wikipedia.org/wiki/Peul)
[![Langue Ewondo](https://img.shields.io/badge/Langue-Ewondo%20(ewo%20Centre--Sud)-ea580c?style=for-the-badge)](https://fr.wikipedia.org/wiki/Ewondo)
[![Architecture N-Langues](https://img.shields.io/badge/Architecture-Extensible%20N--Langues-blueviolet?style=for-the-badge)]()
[![Intégrité Jury](https://img.shields.io/badge/Int%C3%A9grit%C3%A9-100%25%20(0%20%C3%89cart)-10b981?style=for-the-badge)]()
[![Manifest V3](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue?style=for-the-badge&logo=googlechrome)]()
[![Charte Maloba](https://img.shields.io/badge/Charte-Maloba%20Official-ea580c?style=for-the-badge)]()

---

## 🌟 Sommaire
1. [À Propos du Projet](#-à-propos-du-projet)
2. [Fonctionnalités Clés](#-fonctionnalités-clés)
3. [Architecture du Graphe de Contexte 5-Nœuds](#-architecture-du-graphe-de-contexte-5-nœuds)
4. [Architecture Extensible pour Plusieurs Langues](#-architecture-extensible-pour-plusieurs-langues)
5. [Rétro-Ingénierie & Secrets de la Plateforme SAFINUM](#-rétro-ingénierie--secrets-de-la-plateforme-safinum)
6. [Sources Linguistiques Moissonnées : Fulfuldé & Ewondo](#-sources-linguistiques-moissonnées--fulfuldé--ewondo)
7. [Structure du Dépôt](#-structure-du-dépôt)
8. [Installation & Déploiement en 30 Secondes](#-installation--déploiement-en-30-secondes)
9. [Protocole de Test & Validation Jury](#-protocole-de-test--validation-jury)
10. [Documentation Intégrale](#-documentation-intégrale)
11. [L'Équipe Ekwali / Maloba](#-léquipe-ekwali--maloba)

---

## 🎯 À Propos du Projet

Au Cameroun et dans l'espace CEMAC, plus de **40 % des populations adultes sont freinées dans l'adoption des services financiers numériques** (Mobile Money Orange Money, MTN MoMo, microfinance, virements). Cette barrière n'est pas technologique, elle est **linguistique et cognitive** :
* **Dans le Grand Nord (Adamaoua, Nord, Extrême-Nord)** : Le **Fulfuldé (code ISO `fub`)** est la langue commerciale de plus de 5 millions de citoyens.
* **Dans le Grand Centre, Sud et Est (Yaoundé, Mbalmayo, Sangmélima, Bertoua)** : L'**Ewondo (code ISO `ewo`)** est la langue vernaculaire et historique du bassin économique.

**Maloba AnyDoc** est une extension web d'accessibilité universelle qui s'injecte de façon non-intrusive sur n'importe quel portail financier web :
* 🗣️ **Traduction In-Place Instantanée** : Choix direct via menu déroulant entre le **Fulfuldé (`fub`)** et l'**Ewondo (`ewo`)**, sans rechargement de page.
* 🔊 **Synthèse Vocale Synchronisée** : Lecture phrase par phrase avec surbrillance dynamique pour les usagers non-lecteurs (*Nanugo* en peul, *Wóg* en ewondo).
* 💡 **Compréhension Pédagogique (*Famfingo* / *Fáám*)** : Explications claires des notions complexes (frais de transfert, authentification OTP, erreurs de solde).
* 🔒 **Sécurité & Intégrité Totale** : Aucune altération des montants, numéros ou codes PIN (**`0 écart` garanti sur la plateforme du Jury**).
* 🌐 **Conçu pour l'Avenir** : Architecture modulaire extensible à toutes les langues nationales (Douala `dua`, Ghomálá' `bbj`, Bassa `bas`, Haoussa `hau`).

---

## ⚡ Fonctionnalités Clés

| Fonctionnalité | Description & Bénéfice Usager |
| :--- | :--- |
| **Menu Déroulant Multilingue** | Bascule immédiate entre **Fulfuldé (`fub`)** et **Ewondo (`ewo`)** directement sur le dock flottant et la popup. |
| **Dock Flottant Maloba** | Interface escamotable aux couleurs de Maloba (`#FF7900` / `#E05515` / `#7B3F0C`) avec statistiques d'intégrité en direct. |
| **Bascule de Mode Instantanée** | 3 modes au choix : **Langue active**, **Bilingue simultané** (avec texte original entre crochets) et **Original** (Français pur). |
| **Bulle Contextuelle Hover Pill** | Apparaît au survol de chaque phrase avec boutons dynamiques : `🔊 Nanugo / Wóg (Écouter)` et `💡 Famfingo / Fáám (Comprendre)`. |
| **Lecture Vocale Intelligente** | Synthèse audio adaptée aux consonnes injectives peules (`ɓ`, `ɗ`, `ƴ`, `ŋ`) et aux tons de l'Ewondo (`ɔ`, `ɛ`, `ə`, `ô`). |
| **Défense Anti-Pièges Jury** | Interception et traduction en temps réel en 40ms de tous les messages injectés dynamiquement (`#injected-x`). |

---

## 🧠 Architecture du Graphe de Contexte 5-Nœuds

Pour traiter aussi bien les termes bancaires connus que les phrases inédites injectées par le Jury sans serveurs externes, nous avons développé un graphe sémantique embarqué :

```mermaid
flowchart TD
    A["Texte DOM Brut\n(ex: 'Solde insuffisant de 15 000 FCFA')"] --> B["Nœud 1 : EntityFreezer\nSanctuarisation des montants et numéros (__ENT_0__)"]
    B --> C["Nœud 2 : IntentClassifier\nClassification du risque (FRAIS, SOLDE, SECURITE)"]
    C --> D["Nœud 3 : MultiSourceLexicalRAG\nTraduction hybride multilingue (fub & ewo)"]
    D --> E["Nœud 4 : PedagogicalExplainer\nGénération d'explication AnyDoc (Famfingo / Fáám)"]
    E --> F["Nœud 5 : FinancialIntegrityGuard\nRestauration exacte des jetons __ENT_0__"]
    F --> G["Affichage Sécurisé & Vocal\nStatut Jury : 100% Intègre (0 Écart)"]
```

---

## 🌐 Architecture Extensible pour Plusieurs Langues

L'extension s'appuie sur le registre central `DEFAULT_LANGUAGES` :
```javascript
const DEFAULT_LANGUAGES = {
  fub: { code: "fub", name: "Fulfuldé", flag: "🇨🇲", listenWord: "Nanugo", explainWord: "Famfingo", active: true },
  ewo: { code: "ewo", name: "Ewondo", flag: "🇨🇲", listenWord: "Wóg", explainWord: "Fáám", active: true },
  dua: { code: "dua", name: "Douala", flag: "🇨🇲", listenWord: "Senga", explainWord: "Bwele", active: false, soon: true },
  bbj: { code: "bbj", name: "Ghomálá'", flag: "🇨🇲", listenWord: "Ju'", explainWord: "Fa'", active: false, soon: true },
  bas: { code: "bas", name: "Bassa", flag: "🇨🇲", listenWord: "Hɛp", explainWord: "Tégəl", active: false, soon: true }
};
```
Pour brancher une nouvelle langue nationale, **3 étapes suffisent sans retoucher le cœur du moteur DOM** :
1. **Déclarer** la langue dans `DEFAULT_LANGUAGES`.
2. **Ajouter** les paires lexicales et explications dans `knowledge_base.js`.
3. **Configurer** les règles phonétiques de lecture vocale dans `voice_engine.js`.

---

## 🕵️ Rétro-Ingénierie & Secrets de la Plateforme SAFINUM

L'audit approfondi de [https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1) a révélé deux défis techniques majeurs résolus avec brio :

1. **Le Piège de la Réactivité Vue 3 (Règle « 0 Écart »)** :
   * L'application compare la soumission JSON à une baseline. Si une extension manipule les inputs du formulaire, Vue 3 altère la soumission (`Écart détecté`).
   * **Notre Solution** : Nous ne touchons jamais aux inputs, et nous appliquons un **délai de temporisation de 40ms** post-mutation du DOM. Cela permet à Vue de valider sa baseline avant que nos spans de traduction ne s'affichent.
2. **Les Pièges Dynamiques du Jury (`#injected-1`, `#injected-2`)** :
   * Le Jury injecte à chaud des textes d'erreur ou d'alerte pour tester la robustesse des prototypes.
   * **Notre Solution** : Un `MutationObserver` non-destructif intercepte ces nœuds, les traduit immédiatement dans la langue active et insère une carte d'explication contextuelle.

---

## 📚 Sources Linguistiques Moissonnées : Fulfuldé & Ewondo

### A. Les 18 Sources Fulfuldé (`99 633` paires)
Compilées dans `corpus/compiled/unified_fulfulde_corpus.parquet` via [`scripts/harvest_all_fulfulde_sources.py`](scripts/harvest_all_fulfulde_sources.py) :
1. **Aki-OSC Financial Glossary** : Terminologie financière interne peule (`fub`).
2. **SAFINUM / Wave Mobile Money Corpus** : Expressions numéraires et Mobile Money.
3. **Dictionnaire Tourneux (Cameroun / IRD)** : 1 759 entrées lexicales peules du Nord-Cameroun.
4. **Akilang Conversational Corpus** : Intentions et dialogues bilingues `fub`.
5. **Wikipédia Fulfuldé (`ff.wikipedia.org`)** : 1 902 articles dépouillés et nettoyés.
6. **eBible Parallel Corpus (Cameroun)** : 6 039 versets alignés pour la syntaxe et les classes nominales.
7. **RFI Fulfuldé News** : 1 203 dépêches d'actualité économique et sociale.
8. **CNRS / LACITO / ELLAF** : Littérature orale et tournures idiomatiques peules (1 101 paires).
9. **Pressbooks Science & Bien Commun** : Corpus scientifique ouvert (1 117 paires).
10. **Alignements Encyclopédiques Parallèles** : 1 200 segments bilingues.
11. **Portail Pulaar.org** : 16 911 paires terminologiques.
12. **Portail Pulaagu.com** : 8 687 paires culturelles et pratiques.
13. **Portail Demeth.net** : 1 267 paires pédagogiques.
14. **Média Lewlewal.com** : 901 paires d'actualité contemporaine.
15. **Archives WebPulaaku & Koode** : 2 017 paires littéraires.
16. **ONU / DUDH / GlobalVoices** : Corpus de textes civiques et contractuels.
17. **Hugging Face Burkimbia `fub_Latn` (Adamaoua Cameroun)** : 15 423 paires ciblées.
18. **Hugging Face Burkimbia `fuv_Latn` (Fulfuldé Central)** : 39 868 paires complémentaires.

### B. Les Sources Linguistiques Ewondo
* **Apertium Ewondo-Français (`Ngue-Um/apertium-ewo-fra`)** : Corpus morphologique et dictionnaire bilingue dans `corpus/raw/apertium-ewo-fra`.
* **Meta FLORES-200 / NLLB (`ewo_Latn`)** : Benchmark de traduction et modèles multilingues.
* **Meta MMS TTS Ewondo (`OlameMend/mms-tts-ewo`)** : Phonétique et synthèse vocale.
* **Grammaires et Dictionnaires SIL Cameroun** : Morphologie et classes nominales Beti.

---

## 📁 Structure du Dépôt

```
MALOBA-SAFINUM/
├── safinum-extension/                 # Extension Chrome Manifest V3 prête à charger
│   ├── manifest.json                  # Déclaration Manifest V3 & permissions
│   ├── content.js                     # Injection DOM, menu déroulant & orchestration
│   ├── context_graph.js               # Graphe sémantique 5-nœuds & EntityFreezer
│   ├── voice_engine.js                # Synthèse vocale multilingue & surbrillance
│   ├── knowledge_base.js              # Base de connaissances bilingue FUB + EWO
│   ├── styles.css                     # Design System officiel Maloba & menu déroulant
│   ├── popup.html & popup.js          # Menu contextuel avec sélecteur de langue
│   └── icons/                         # Suite d'icônes officielles Maloba (16 à 128 px)
├── scripts/                           # Outils d'ingénierie linguistique
│   ├── harvest_all_fulfulde_sources.py# Moissonneur des 18 sources Fulfuldé
│   ├── ewondo_translations_map.py     # Dictionnaire et explications Ewondo
│   ├── update_knowledge_base_with_ewondo.py # Synchronisation de la KB multilingue
│   └── build_extension_kb.py          # Compilateur général de la base de connaissances
├── corpus/                            # Données brutes et compilées
│   ├── compiled/                      # unified_fulfulde_corpus.parquet (99 633 entrées)
│   └── raw/                           # Apertium ewo-fra, Tourneux, Burkimbia NLLB
├── DOCUMENTATION_COMPLETE_MALOBA_EKWALI_SAFINUM.md # Manuel technique exhaustif
└── README.md                          # Présentation générale du projet
```

---

## 🚀 Installation & Déploiement en 30 Secondes

1. Cloner ce dépôt :
   ```bash
   git clone https://github.com/MERLO-arm/MALOBA-SAFINUM.git
   ```
2. Ouvrir Google Chrome, Brave ou Microsoft Edge et accéder à :
   ```
   chrome://extensions/
   ```
3. Activer le commutateur **« Mode développeur »** en haut à droite.
4. Cliquer sur **« Charger l'extension non empaquetée »**.
5. Sélectionner le sous-dossier `safinum-extension/`.
6. Rendez-vous sur la plateforme officielle :
   **[https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1)**.

---

## 🧪 Protocole de Test & Validation Jury

Sur l'environnement de test :
1. **Bascule de Langue** : Utilisez le menu déroulant sur le dock pour tester **Fulfuldé (fub)** puis **Ewondo (ewo)**. Observez la traduction instantanée.
2. **Étape 1 (Saisie)** : Vérifiez que les libellés sont traduits et que vos saisies (`15 000 FCFA`, numéro de téléphone) restent intactes.
3. **Étape 2 (Mode de paiement)** : Choisissez Orange Money ou MTN MoMo et écoutez la consigne avec le bouton *Nanugo* / *Wóg*.
4. **Étape 3 (Code PIN & OTP)** : Saisissez votre code, observez l'explication sur la confidentialité du code secret (*Famfingo* / *Fáám*).
5. **Étape 4 (Frais)** : Observez la décomposition pédagogique des frais.
6. **Étape 5 (Reçu)** : Téléchargez le reçu.
7. **Vérification finale** : Observez l'indicateur d'intégrité sur le panneau Jury : **`0 écart constaté / Statut Intègre`**.

---

## 📖 Documentation Intégrale

Pour une lecture détaillée de l'architecture, du code source, de la charte graphique et de l'argumentaire de pitch, consultez :
👉 [DOCUMENTATION_COMPLETE_MALOBA_EKWALI_SAFINUM.md](DOCUMENTATION_COMPLETE_MALOBA_EKWALI_SAFINUM.md)

---

## 👥 L'Équipe Ekwali / Maloba

* **Projet** : Maloba AnyDoc
* **Événement** : Hackathon SAFINUM Innovate 2026 (Salon de la Finance Numérique)
* **Organisateurs** : Salon de la Finance Numérique · Yaoundé, Cameroun (26-28 novembre 2026)
* **Contact & Soumission** : [forms.gle/Dt6dzQwkEiMW7q2E8](https://forms.gle/Dt6dzQwkEiMW7q2E8)

*« Rendre la finance numérique accessible à chaque citoyen, dans sa propre langue, par la voix et l'explication. »*
