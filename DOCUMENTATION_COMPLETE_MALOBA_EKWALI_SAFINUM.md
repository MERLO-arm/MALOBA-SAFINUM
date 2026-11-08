# 🦁 MALOBA ANYDOC — GUIDE MAÎTRE DU PROJET & DOCUMENTATION INTÉGRALE
### *Projet d'Accessibilité Financière Multilingue en Langues Nationales : Fulfuldé (`fub`) & Ewondo (`ewo`) · Architecture Extensible N-Langues*
**Équipe : Team Ekwali / Maloba**  
**Compétition : SAFINUM Innovate Challenge 2026 — Salon de la Finance Numérique (Yaoundé, Cameroun)**  
**Date limite de soumission : 14 Novembre 2026 à 23:59:59**  
**Dépôt GitHub officiel : [https://github.com/MERLO-arm/MALOBA-SAFINUM](https://github.com/MERLO-arm/MALOBA-SAFINUM)**  
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
           ANYDOC · TEAM EKWALI (FULFULDÉ & EWONDO)
```

---

## TABLE DES MATIÈRES
1. [Vision, Enjeux & Problématique SAFINUM 2026](#1-vision-enjeux--problématique-safinum-2026)
2. [L'Identité et la Charte Graphique Officielle Maloba](#2-lidentité-et-la-charte-graphique-officielle-maloba)
3. [Rétro-Ingénierie & Secrets Découverts sur la Plateforme de Test](#3-rétro-ingénierie--secrets-découverts-sur-la-plateforme-de-test)
4. [Architecture Technique Détaillée de l'Extension Chrome](#4-architecture-technique-détaillée-de-lextension-chrome)
   * 4.1. Manifest V3 (`manifest.json`)
   * 4.2. Base de Connaissances Multilingue (`knowledge_base.js`)
   * 4.3. Graphe de Contexte Sémantique 5-Nœuds (`context_graph.js`)
   * 4.4. Moteur de Synthèse Vocale Multilingue (`voice_engine.js`)
   * 4.5. Injection DOM Universelle & Registre N-Langues (`content.js`)
   * 4.6. Interface Popup Contrôleur (`popup.html` & `popup.js`)
   * 4.7. Système de Design CSS Maloba (`styles.css`)
   * 4.8. Guide d'Extension Futur : Ajouter une Nouvelle Langue en 3 Étapes
5. [Sources Moissonnées : Fulfuldé (`99 633` entrées) & Ewondo](#5-sources-moissonnées--fulfuldé-99-633-entrées--ewondo)
6. [Guide Pas-à-Pas pour Chaque Membre de la Team](#6-guide-pas-à-pas-pour-chaque-membre-de-la-team)
   * 6.1. Installation et rechargement dans Chrome / Brave / Edge
   * 6.2. Protocole de test pas-à-pas sur les 5 étapes du parcours Jury
   * 6.3. Vérification de la règle d'or : « 0 Écart / Données Intègres »
   * 6.4. Enrichir le dictionnaire ou ajouter une langue
7. [Stratégie de Soumission & Checklist du 14 Novembre 2026](#7-stratégie-de-soumission--checklist-du-14-novembre-2026)
8. [Discours de Présentation (Pitch) & Réponses aux Questions du Jury](#8-discours-de-présentation-pitch--réponses-aux-questions-du-jury)
9. [Feuille de Route Post-Hackathon (Roadmap)](#9-feuille-de-route-post-hackathon-roadmap)

---

## 1. VISION, ENJEUX & PROBLÉMATIQUE SAFINUM 2026

### Le Défi Linguistique et Financier du Cameroun
Au Cameroun et dans l'espace CEMAC, l'inclusion financière numérique (Mobile Money — Orange Money, MTN MoMo, microfinance, virements bancaires) explose. Pourtant, **plus de 40% de la population adulte demeure exclue ou vulnérable** face aux applications de paiement. 

Cette exclusion n'est pas technologique, elle est **linguistique et cognitive** :
* **Dans le Grand Nord (Adamaoua, Nord, Extrême-Nord)** : Le **Fulfuldé (code ISO `fub`)** est la langue véhiculaire et commerciale incontournable pour plus de 5 millions de commerçants, éleveurs et citoyens.
* **Dans le Grand Centre, Sud et Est (Yaoundé, Mbalmayo, Sangmélima, Bertoua)** : L'**Ewondo (code ISO `ewo`)** est la langue historique du bassin de la capitale et des zones agro-industrielles et forestières.
* **Les barrières majeures** :
  1. **Le jargon bancaire intimidant** : *« Solde insuffisant »*, *« Débit immédiat »*, *« Frais d'interopérabilité »*, *« Authentification OTP »*.
  2. **La peur de l'erreur et le stress de la transaction** : Les usagers demandent souvent l'aide d'inconnus, ce qui expose leurs codes secrets PIN et engendre des fraudes massives.
  3. **L'impossibilité pour les banques de réécrire toutes leurs applications** dans les 250+ langues nationales du Cameroun.

### Notre Réponse : Maloba AnyDoc Multilingue
**Maloba AnyDoc** est une extension web d'accessibilité cognitive, visuelle et vocale universelle, calquée sur la philosophie d'AnyDoc (WPS) mais nativement adaptée aux réalités camerounaises :
* **Zéro modification du code source bancaire** : Elle se superpose dynamiquement sur n'importe quel portail web financier existant (`safinum.cm`, portails bancaires, interfaces de paiement).
* **Bascule instantanée multilingue** : Choix direct via menu déroulant entre le **Fulfuldé (`fub`)** et l'**Ewondo (`ewo`)**, avec architecture prête pour le Douala, le Ghomálá' et le Bassa.
* **Explication pédagogique à la demande** : Pour ne pas seulement traduire mot-à-mot, mais faire comprendre l'opération (*💡 Famfingo* en Fulfuldé / *💡 Fáám* en Ewondo).
* **Synthèse vocale synchronisée mot-à-mot** : Pour permettre aux personnes ne sachant ni lire ni écrire d'écouter les instructions en toute autonomie (*🔊 Nanugo* / *🔊 Wóg*).
* **Préservation absolue des données bancaires** : Aucune donnée transactionnelle (montant, PIN, nom du tiers, référence) n'est altérée. Statut **100% Intègre (0 écart)** garanti.

---

## 2. L'IDENTITÉ ET LA CHARTE GRAPHIQUE OFFICIELLE MALOBA

Le projet hérite fidèlement de la charte graphique de **Maloba** découverte dans le dossier source [D:\lang\collecte](file:///d:/lang/collecte) et l'application [collecte-voix](file:///d:/lang/collecte/collecte-voix).

### 🎨 La Palette Officielle
```
┌────────────────────────────────────────────────────────────────────────┐
│  #FF7900  │ Orange Maloba      │ Couleur primaire, action, énergie     │
│  #ED7009  │ Tracé Logo Maloba  │ Teinte vectorielle du logo officiel  │
│  #E05515  │ Terracotta Chaud   │ Dégradés boutons & menu déroulant    │
│  #7B3F0C  │ Bronze Ambré       │ En-têtes premium, barre dock flottant │
│  #FFA040  │ Ambre Doré         │ Badges RAG, entités protégées        │
│  #F5F2CF  │ Ivoire Doux        │ Cartes explicatives pédagogiques      │
│  #10B981  │ Vert Intégrité     │ Validation 100% sans écart (Jury)     │
│  #0F172A  │ Fond Sombre Ardoise│ Arrière-plan du dock d'accessibilité  │
└────────────────────────────────────────────────────────────────────────┘
```

### 🖼️ Intégration du Logo & Menu Déroulant
* **Logo Maloba** : Présent dans le dock sous forme de Data URI Base64 dans `content.js` pour contourner sans restriction les politiques CSP (*Content Security Policy*) des sites bancaires.
* **Menu Déroulant Multilingue** : Positionné en tête du panneau de mode (`.safinum-mode-bar`), habillé d'un dégradé orange-terracotta avec flèche personnalisée SVG, options sombres `#0f172a` et transition fluide.

---

## 3. RÉTRO-INGÉNIERIE & SECRETS DÉCOUVERTS SUR LA PLATEFORME DE TEST

Lors de l'analyse du site de test officiel [https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1), plusieurs mécanismes cruciaux ont été décryptés dans le code source Nuxt 3 / Vue.js :

### Secret n°1 : Le piège de la réactivité Vue.js (La Règle « 0 Écart »)
* **Comment fonctionne le test ?** La plateforme de test est une Single Page Application réactive sous Vue 3. Lors de la soumission de chaque étape, un script de vérification compare la charge utile saisie avec un modèle de référence `baseline` via `JSON.stringify()`.
* **Le piège mortel** : Si une extension modifie les attributs `value`, `placeholder` ou réécrit un nœud DOM lié à un `v-model`, Vue 3 déclenche un watcher et altère l'objet de soumission. Résultat : **Écart détecté = Échec du test**.
* **Notre Parade** :
  1. Nous ne touchons **JAMAIS** aux valeurs (`value`, `placeholder`, `aria-valuenow`) des champs de saisie bancaires.
  2. Nous ciblons exclusivement les nœuds textuels d'affichage (`nodeType === 3`) ou enveloppons les textes dans des spans légers `data-safinum-translated="true"`.
  3. Nous intégrons une temporisation de **40 millisecondes** via `setTimeout` après chaque mutation du DOM pour laisser Vue compléter son cycle interne `nextTick()` et enregistrer la baseline intacte **avant** que la traduction ne soit injectée.

### Secret n°2 : Les pièges dynamiques du Jury (`#injected-1`, `#injected-2`...)
* Le paramètre `?jury=1` active un panneau latéral d'évaluation pour les juges. Les juges peuvent cliquer sur des boutons de simulation pour injecter des phrases imprévues dans le DOM (ex: alertes de fraude, messages d'erreur inédits).
* **Notre Parade** :
  1. Un `MutationObserver` surveille l'arborescence complète du document (`subtree: true`, `childList: true`, `characterData: true`).
  2. Chaque fois qu'un bloc `#injected-x` apparaît, notre moteur l'intercepte en **40ms**, le traduit immédiatement dans la langue active (Fulfuldé ou Ewondo), génère une carte d'explication pédagogique sous le message et le propose à la lecture vocale.

### Secret n°3 : Les 5 Étapes du Parcours Utilisateur
1. **Étape 1 : Saisie de la Transaction** (Montant, Numéro de téléphone, Motif).
2. **Étape 2 : Sélection du Canal** (Orange Money, MTN Mobile Money, Carte Bancaire).
3. **Étape 3 : Autorisation Sécurisée** (Code PIN secret et Code OTP SMS).
4. **Étape 4 : Récapitulatif & Frais** (Détail de la commission, total débité, délai).
5. **Étape 5 : Reçu & Téléchargement** (Numéro de transaction, preuve de paiement).

---

## 4. ARCHITECTURE TECHNIQUE DÉTAILLÉE DE L'EXTENSION CHROME

L'extension est située dans le dossier [safinum-extension](file:///d:/lang/data/safinum-extension) et est 100% conforme au **Manifest V3** de Google Chrome.

### 4.1. Manifest V3 ([manifest.json](file:///d:/lang/data/safinum-extension/manifest.json))
* **Nom** : `Maloba AnyDoc — Accessibilité Financière Cameroun (Fulfuldé & Ewondo)`
* **Permissions** : `activeTab`, `storage`, `scripting`.
* **Host Permissions** : `*://safinum.cm/*`, `http://localhost:*/*`, `http://127.0.0.1:*/*`.
* **Content Scripts** : Chargés dans l'ordre strict de dépendance à `document_idle` :
  1. `knowledge_base.js` (Lexique et données RAG multilingues)
  2. `context_graph.js` (Graphe sémantique 5-Nœuds)
  3. `voice_engine.js` (Moteur vocal multilingue)
  4. `content.js` (Orchestration DOM universelle)
* **Styles** : `styles.css` injecté automatiquement.

### 4.2. Base de Connaissances Multilingue ([knowledge_base.js](file:///d:/lang/data/safinum-extension/knowledge_base.js))
Contient **plus de 145 entrées financières complètes** bilingues (Français, Fulfuldé d'Adamaoua, Ewondo, Anglais) avec métadonnées :
```javascript
"Solde insuffisant pour effectuer ce transfert": {
  fr: "Solde insuffisant pour effectuer ce transfert",
  fub: "Ceede maada he'aay ngam waɗugo nelal ngal",
  phonetic: "Tchèèdé maada hé'aay ngam wadiougo nélal ngal",
  explain_fub: "Ceede ɗe a woodi nder asusu ma he'aay ceede nelal e ceede kuugal man.",
  explain_fub_phonetic: "Tchèèdé dé a woodi ndér asoussou ma hé'aay...",
  ewo: "Mɔni a nzi kôb asu ntómban nyina",
  phonetic_ewo: "Moni a nzi kôb asou ntomban nyina",
  explain_ewo: "Mɔni o nzi bəle e asúsu wô a nzi kôb asu ntómban nyina e mímvèñ miə́.",
  explain_ewo_phonetic: "Moni o nzi beulé é asousou wô a nzi kôb...",
  explain_fr: "Votre compte ne contient pas assez d'argent pour couvrir le montant et les frais.",
  category: "solde",
  source: "01_aki_osc_financial_glossary + Apertium EWO"
}
```

### 4.3. Graphe de Contexte Sémantique 5-Nœuds ([context_graph.js](file:///d:/lang/data/safinum-extension/context_graph.js))
Inspiré des architectures d'agents cognitifs, ce module orchestre 5 nœuds séquentiels :
1. **Nœud 1 — `EntityFreezer` (Sanctuarisation des données critiques)** :
   * Les montants (`15 000 FCFA`, `50 000 XAF`), numéros de téléphone (`699 00 11 22`), codes de transaction (`TXN-2026-X89`) et codes PIN sont détectés par expressions régulières et transformés en jetons sacrés (`__ENT_0__`).
2. **Nœud 2 — `IntentAndRiskClassifier` (Classification d'intention financière)** :
   * Détecte l'intention (`SECURITE_FRAUDE`, `PLAFOND_ET_SOLDE`, `FRAIS_TARIFICATION`, `IDENTITE_BENEFICIAIRE`, `INCIDENT_TECHNIQUE`) et le niveau de risque (`CRITIQUE`, `ATTENTION`, `INFO`).
3. **Nœud 3 — `MultiSourceLexicalRAG` (Traduction Hybride Multilingue)** :
   * Interroge le lexique exact, les gabarits dynamiques, les unités phraséologiques et les exemplaires RAG.
4. **Nœud 4 — `AnyDocPedagogicalExplainer` (Génération d'explication simplifiée)** :
   * Produit l'explication adaptée dans la langue cible (*Famfingo* pour Fulfuldé, *Fáám* pour Ewondo, *Sens simplifié* en Français).
5. **Nœud 5 — `FinancialIntegrityGuard` (Restauration d'intégrité)** :
   * Réinjecte chaque entité gelée `__ENT_k__` à sa position originale exacte sans décalage.

### 4.4. Moteur de Synthèse Vocale Multilingue ([voice_engine.js](file:///d:/lang/data/safinum-extension/voice_engine.js))
* Utilise l'API native `window.speechSynthesis`.
* Équipé d'un convertisseur phonétique adaptatif pour prononcer naturellement :
  * Les consonnes injectives du Fulfuldé (`ɓ`, `ɗ`, `ƴ`, `ŋ`).
  * Les voyelles ouvertes et tons de l'Ewondo (`ɔ`, `ɛ`, `ə`, `ô`, `è`).
* Méthode générique `speakPhraseAndExplanation(entry, lang)` qui lit la phrase puis enchaîne avec l'explication pédagogique introduite par le marqueur propre à la langue (*Famfingo* ou *Fáám*).

### 4.5. Injection DOM Universelle & Registre N-Langues ([content.js](file:///d:/lang/data/safinum-extension/content.js))
Le moteur implémente un registre central extensible :
```javascript
const DEFAULT_LANGUAGES = {
  fub: { code: "fub", name: "Fulfuldé", flag: "🇨🇲", listenWord: "Nanugo", explainWord: "Famfingo", active: true },
  ewo: { code: "ewo", name: "Ewondo", flag: "🇨🇲", listenWord: "Wóg", explainWord: "Fáám", active: true },
  dua: { code: "dua", name: "Douala", flag: "🇨🇲", listenWord: "Senga", explainWord: "Bwele", active: false, soon: true },
  bbj: { code: "bbj", name: "Ghomálá'", flag: "🇨🇲", listenWord: "Ju'", explainWord: "Fa'", active: false, soon: true },
  bas: { code: "bas", name: "Bassa", flag: "🇨🇲", listenWord: "Hɛp", explainWord: "Tégəl", active: false, soon: true }
};
```
* **Bascule en direct** : Changer de langue dans le menu déroulant recalcule et applique la traduction sur l'ensemble de la page sans recharger.
* **Pilule contextuelle (Hover Pill)** : Affiche le badge de la langue active (`🇨🇲 Maloba · Ewondo` ou `🇨🇲 Maloba · Fulfuldé`), avec les boutons d'action locaux.
* **Inspecteur AnyDoc** : Présente en temps réel la traduction, l'explication dans la langue choisie et le rappel en français.

---

### 4.8. Guide d'Extension Futur : Ajouter une Nouvelle Langue en 3 Étapes

L'architecture a été conçue pour que l'équipe Maloba puisse brancher n'importe quelle langue africaine en quelques minutes :

```mermaid
flowchart TD
    A["1. Déclarer la langue dans le registre\n(DEFAULT_LANGUAGES dans content.js & KB.meta)"] --> B["2. Ajouter les traductions dans knowledge_base.js\n(clés iso: e.g. dua, bbj, bas)"]
    B --> C["3. Ajouter les règles phonétiques TTS\n(dans voice_engine.js & context_graph.js)"]
    C --> D["✅ La langue apparaît instantanément dans le menu déroulant !"]
```

#### Étape 1 : Déclarer la langue dans `DEFAULT_LANGUAGES` (Exemple : Douala `dua`)
```javascript
dua: {
  code: "dua",
  name: "Douala",
  label: "Douala (dua) · Littoral",
  region: "Littoral / Sud-Ouest (Wouri)",
  flag: "🇨🇲",
  listenWord: "Senga",       // Écouter en Douala
  explainWord: "Bwele",      // Expliquer / Éclairer en Douala
  active: true
}
```

#### Étape 2 : Ajouter les traductions dans `knowledge_base.js`
Pour chaque entrée, ajouter simplement les champs `dua`, `phonetic_dua`, `explain_dua` :
```javascript
"Solde du compte": {
  fr: "Solde du compte",
  fub: "Ceede gonɗe nder asusu",
  ewo: "Mɔni a liè e asúsu",
  dua: "Mɔni menɛ o kɔbɔ",
  explain_dua: "Mɔni we nɔ́ o asúsu wɛmbɛ asu bolɛ myɛndi.",
  category: "solde"
}
```

#### Étape 3 : Ajouter les règles phonétiques simples dans `voice_engine.js`
Adapter les voyelles nasales et diphtongues pour la voix de synthèse.
**Résultat immédiat** : Le menu déroulant affiche le Douala, le survol affiche `🔊 Senga` et `💡 Bwele`, et le moteur vocal vocalise en Douala avec 0 modification du moteur DOM !

---

## 5. SOURCES MOISSONNÉES : FULFULDÉ (`99 633` entrées) & EWONDO

### A. Les 18 Sources Fulfuldé (`99 633` entrées parallèles et lexicales)
Compilées via [`harvest_all_fulfulde_sources.py`](file:///D:/lang/data/scripts/harvest_all_fulfulde_sources.py) dans `unified_fulfulde_corpus.parquet` :
1. `01_aki_osc_financial_glossary` : Glossaire & gabarits financiers internes Aki-OSC (`fub`).
2. `02_safinum_wave_sponsor_corpus` : Expressions Mobile Money & numération Fulfuldé.
3. `03_tourneux_dictionary_csv` : Dictionnaire Peul-Fulfuldé-Français du Cameroun (Henry Tourneux / IRD — 1 759 entrées).
4. `04_akilang_conversational_corpus` : Corpus conversationnel & NLU Akilang (`fub`).
5. `05_wikipedia_ff_dump` : Encyclopédie Wikipédia Fulfuldé (`ff.wikipedia.org` — 1 902 entrées).
6. `06_bible_fulfulde_ebible_parallel` : Corpus biblique parallèle Français-Fulfuldé (Deftere Allah — 6 039 versets).
7. `07_rfi_fulfulde_news_parallel` : Dépêches d'actualité RFI Fulfuldé alignées (1 203 paires).
8. `08_cnrs_lacito_ellaf_academic` : Littérature orale peule CNRS / LACITO / ELLAF (1 101 paires).
9. `09_open_science_pressbooks_parallel` : Corpus scientifique ouvert Science et Bien Commun (1 117 paires).
10. `10_wikipedia_parallel_aligned` : Segments encyclopédiques alignés Français-Fulfuldé (1 200 paires).
11. `11_pulaar_org_portal` : Portail lexical et culturel `pulaar.org` (16 911 paires).
12. `12_pulaagu_com_portal` : Portail communautaire `pulaagu.com` (8 687 paires).
13. `13_demeth_net_portal` : Portail éducatif `demeth.net` (1 267 paires).
14. `14_lewlewal_com_media` : Réseau média Fulfuldé `lewlewal.com` (901 paires).
15. `15_webpulaaku_koode_archives` : Archives littéraires et historiques `webpulaaku.net` (2 017 paires).
16. `16_un_udhr_globalvoices_civic` : Déclaration Universelle des Droits de l'Homme (ONU / GlobalVoices).
17. `17_hf_burkimbia_fub_adamawa_cameroon` : Corpus Hugging Face NLLB `fub_Latn` Adamaoua Cameroun (15 423 paires).
18. `18_hf_burkimbia_fuv_central_fulfulde` : Corpus Hugging Face NLLB `fuv_Latn` (39 868 paires).

### B. Les Sources Linguistiques Ewondo
1. **Apertium Ewondo-Français (`Ngue-Um/apertium-ewo-fra`)** : Corpus morphologique et dictionnaire bilingue hébergé dans `corpus/raw/apertium-ewo-fra`.
2. **Meta FLORES-200 / NLLB (`ewo_Latn`)** : Données d'évaluation et de benchmark de traduction pour l'Ewondo standardisé.
3. **Meta MMS TTS Ewondo (`OlameMend/mms-tts-ewo`)** : Modèle de synthèse vocale pour les phonèmes de l'Ewondo du Centre-Sud.
4. **SIL Cameroun (Société Internationale de Linguistique)** : Travaux lexicaux sur la structure verbale et les classes nominales de la langue Ewondo.

---

## 6. GUIDE PAS-À-PAS POUR CHAQUE MEMBRE DE LA TEAM

### 6.1. Comment Charger / Recharger l'Extension dans Chrome
1. Ouvrez Google Chrome (ou Brave / Microsoft Edge).
2. Rendez-vous dans la barre d'adresse sur : `chrome://extensions/`.
3. Activez le **« Mode développeur »** en haut à droite.
4. Cliquez sur **« Charger l'extension non empaquetée »** et sélectionnez :
   `D:\lang\data\safinum-extension`
5. L'icône officielle Maloba apparaît dans la barre d'outils.

> [!TIP]
> **Pour recharger l'extension après une modification :**
> Rendez-vous sur `chrome://extensions/` et cliquez sur l'icône de rafraîchissement 🔄 sur la carte Maloba AnyDoc.

---

### 6.2. Déroulement du Test sur l'Environnement Officiel
1. Ouvrez l'URL de test du hackathon avec le mode jury activé :
   **[https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1)**
2. Observez l'apparition immédiate du **Dock Maloba AnyDoc** en bas à gauche de l'écran avec sa bannière bronze/orange.
3. **Testez le menu déroulant** :
   * Choisissez **`Fulfuldé (fub)`** : les textes s'affichent en peul (*Ceede nelal*, *Laminoore*, *Asusu*). La bulle affiche *🔊 Nanugo* et *💡 Famfingo*.
   * Choisissez **`Ewondo (ewo)`** : les textes basculent instantanément en Ewondo (*Ntómban mɔni*, *Mɔni a liè*, *Nnyɔ a nɔŋ mɔni*). La bulle affiche *🔊 Wóg* et *💡 Fáám*.
4. **Testez les modes** :
   * Cliquez sur **`Bilingue`** : affiche le texte traduit suivi du texte français original entre crochets.
   * Cliquez sur **`Original`** : rétablit la page française d'origine à 100%.
5. **Testez l'action vocale** : Cliquez sur *« 🔊 Lire & Expliquer l'étape »* sur le dock pour tester la synthèse vocale complète avec explication de sécurité.
6. **Testez les injections Jury** : Dans le panneau de droite du Jury, cliquez sur les boutons de simulation d'erreurs ou d'injections. Constatez l'interception immédiate par le Graphe 5-Nœuds en 40ms.

---

### 6.3. Vérification de la Règle d'Or : « 0 Écart / Données Intègres »
À chaque étape complétée sur la plateforme de test :
* Vérifiez le bandeau de conformité dans l'inspecteur du jury ou le message de retour de soumission.
* **Résultat attendu** : `Statut : Intègre / 0 écart constaté`.
* Toutes les valeurs saisies (montant en FCFA, numéro de téléphone 699..., code secret PIN) doivent être transmises à l'identique dans le payload JSON.

---

## 7. STRATÉGIE DE SOUMISSION & CHECKLIST DU 14 NOVEMBRE 2026

* [ ] **Date limite stricte** : Vendredi 14 Novembre 2026 à 23:59:59.
* [ ] **Lien du formulaire** : [https://forms.gle/Dt6dzQwkEiMW7q2E8](https://forms.gle/Dt6dzQwkEiMW7q2E8)
* [ ] **Archive ZIP de l'extension** : Créer `Maloba_AnyDoc_SAFINUM_2026.zip` contenant le dossier `safinum-extension`.
* [ ] **Dépôt GitHub** : [https://github.com/MERLO-arm/MALOBA-SAFINUM](https://github.com/MERLO-arm/MALOBA-SAFINUM) synchronisé sur `main`.
* [ ] **Vidéo de démonstration (2 à 3 minutes)** :
  1. Présentation de la Team Ekwali / Maloba et du défi de l'inclusion financière au Cameroun.
  2. Démo live sur `safinum.cm/hackathon-test?jury=1`.
  3. Démonstration de la bascule fluide Fulfuldé ↔ Ewondo via le menu déroulant.
  4. Démonstration de la synthèse vocale (*Nanugo* / *Wóg*) et des explications pédagogiques (*Famfingo* / *Fáám*).
  5. Preuve formelle de la conformité : `0 écart` sur toutes les étapes de transaction.

---

## 8. DISCOURS DE PRÉSENTATION (PITCH) DU JURY

### Le Pitch d'Accroche (2 Minutes Chrono)
> *« Messieurs les membres du Jury, bonjour.*  
>  
> *Aujourd'hui au Cameroun, qu'il s'agisse d'un commerçant de Garoua parlant **Fulfuldé**, ou d'une agricultrice de Mbalmayo parlant **Ewondo**, l'accès aux services financiers numériques se heurte à un même mur : celui de la langue et de l'incompréhension des règles de sécurité. Un code PIN partagé par erreur, une confusion sur les frais d'envoi, et c'est l'épargne d'une vie qui s'envole.*  
>  
> *Pour le SAFINUM Innovate Challenge 2026, la **Team Ekwali** a développé **Maloba AnyDoc**.*  
>  
> *Maloba AnyDoc est une extension d'accessibilité universelle qui se déploie instantanément sur n'importe quel portail web financier, sans exiger des banques qu'elles réécrivent une seule ligne de code. En un clic sur notre sélecteur compact, l'utilisateur choisit sa langue maternelle : **Fulfuldé du Grand-Nord** ou **Ewondo du Centre/Sud**.*  
>  
> *Notre solution va bien au-delà de la traduction mot-à-mot :*  
> 1. *Elle **parle** grâce à notre synthèse vocale adaptée phonétiquement aux sonorités camerounaises (« Nanugo » en peul, « Wóg » en ewondo).*  
> 2. *Elle **explique** via notre module cognitif AnyDoc (« Famfingo » / « Fáám ») qui décortique les notions de plafond, de solde et de commission d'interopérabilité.*  
> 3. *Elle est **100% intègre et sécurisée** : notre Graphe de Contexte 5-Nœuds sanctuarise chaque montant, chaque numéro et chaque code secret, garantissant **0 écart** sur l'ensemble des critères d'évaluation de la plateforme SAFINUM.*  
> 4. *Elle est **conçue pour l'avenir** : son architecture modulaire permet de brancher le Douala, le Ghomálá' ou le Bassa en quelques heures.*  
>  
> *Avec Maloba AnyDoc, nous transformons la finance numérique d'un privilège technique en un droit universel pour chaque Camerounais. Merci ! »*

---

## 9. FEUILLE DE ROUTE POST-HACKATHON (ROADMAP)

```mermaid
flowchart LR
    A["Novembre 2026\nVictoire SAFINUM\nExtension Chrome\nFulfuldé & Ewondo"] --> B["T1 2027\nSDK Mobile Android\nOrange Money & MoMo\n+ Douala (dua)"]
    B --> C["T2 2027\nGhomálá' & Bassa\nPlugin AnyDoc pour WPS\n& Partenariats Banques"]
    C --> D["T3 2027+\nExpansion CEMAC\nSango (RCA), Haoussa (Tchad)"]
```

1. **Phase 1 (Novembre - Décembre 2026)** : Publication sur le Chrome Web Store et partenariats pilotes avec des microfinances et coopératives à Garoua, Maroua et Yaoundé.
2. **Phase 2 (T1 2027)** :
   * Sortie du **SDK Mobile Android Maloba** pour intégrer l'accessibilité vocale au cœur des applications bancaires natives.
   * Déploiement de la langue **Douala (`dua`)** sur le corridor littoral.
3. **Phase 3 (T2 2027)** :
   * Déploiement des langues **Ghomálá' (`bbj`)** et **Bassa (`bas`)**.
   * Plugin AnyDoc pour documents financiers PDF et factures sous WPS Office.
4. **Phase 4 (T3 2027+)** : Déploiement sous-régional CEMAC (Sango en Centrafrique, Haoussa au Tchad).

---
*Document certifié conforme pour la Team Ekwali / Maloba — SAFINUM Innovate 2026.*
