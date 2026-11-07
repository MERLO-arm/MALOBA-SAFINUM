# Maloba AnyDoc — Extension d'Accessibilité Financière Fulfuldé du Cameroun (`fub`)

**Hackathon SAFINUM Innovate Challenge 2026** — Prototype d'accessibilité financière multimodale sous la charte officielle **Maloba** (`D:\lang\collecte`) :
- **Logo officiel** : `LOGO MALOBA.png` / `maloba_logo.svg` (icônes 16, 32, 48, 128 px)
- **Couleurs officielles Maloba** : Orange Maloba (`#FF7900` / `#ED7009`), Terracotta (`#E05515`), Bronze ambré (`#7B3F0C`), Ambre doré (`#FFA040`) et Vert Intégrité (`#10B981`)
- **Fonctionnalités** : Traduction DOM In-Place en Fulfuldé du Cameroun (`fub`), Graphe de Contexte 5-Nœuds RAG sur 18 sources (99 633 entrées), Lecture Vocale Phrase par Phrase & Explication Pédagogique AnyDoc.

---

## 1. Couverture des 5 Fonctionnalités Minimales Attendues

1. **Compréhension du solde et du compte (`Solde` -> `Ceede gonɗe`)** :
   - Traduction intégrale du tableau de bord, du statut du compte et de l'historique des transactions en **Fulfuldé du Cameroun (`fub` — Adamaoua / Grand-Nord)** avec explication vocale et textuelle.
2. **Explication des frais de transaction (`Frais` -> `Coggu nelal`)** :
   - Traduction et explication pédagogique des 3 règles tarifaires (`Compte Safinum` gratuit, `Mobile Money` 1,5 %, `Autre banque` 2 %) et distinction claire entre montant envoyé, commission et total débité.
3. **Vérification du bénéficiaire (`Bénéficiaire` -> `Jaɓoowo ceede`)** :
   - Accompagnement vocal et visuel sur la vérification du nom, du numéro de téléphone et de l'alerte de nouveau destinataire (`SECURITY_001` / `SECURITY_002`).
4. **Récapitulatif et confirmation (`Récapitulatif` & `Confirmation` -> `Taƴre laartugo fuu` & `Tabitingol`)** :
   - Traduction de chaque libellé du récapitulatif et du reçu final tout en préservant **100 % Intègre** (`intact`) l'ensemble des montants, frais, totaux, numéros, noms et références (`SAF-2026-...`).
5. **Compréhension des messages d'erreur et contenus inédits du Jury** :
   - Prise en charge des **7 codes d'erreur officiels** (`AMOUNT_001`, `AMOUNT_002`, `BENEFICIARY_001`, `SECURITY_001`, `SECURITY_002`, `NETWORK_001`, `CONFIRM_001`) ET de **toute phrase inédite injectée à chaud par le Jury** (`#injected-{id}`) grâce au **Graphe de Contexte 5-Nœuds**.

---

## 2. Architecture du Graphe de Contexte 5-Nœuds (`context_graph.js`)

1. **Nœud 1 — `EntityFreezer` (Sanctuarisation des données critiques)** :
   - Détecte et fige par regex stricte tous les montants (`FCFA`, `%`), numéros de téléphone (`+237...`), numéros de compte (`CM 001...`), références (`SAF-2026-...`) et noms propres en jetons immuables `__ENT_k__`.
2. **Nœud 2 — `IntentAndRiskClassifier` (Classification d'intention bancaire)** :
   - Identifie l'intention financière (`SECURITE_FRAUDE`, `PLAFOND_ET_SOLDE`, `FRAIS_TARIFICATION`, `IDENTITE_BENEFICIAIRE`, `INCIDENT_TECHNIQUE`, `VALIDATION_ET_PREUVE`) et le niveau de risque (`CRITIQUE`, `ATTENTION`, `INFO`).
3. **Nœud 3 — `MultiSourceLexicalRAG` (Traduction Hybride & Compositionnelle sur 18 Sources)** :
   - Interroge successivement le dictionnaire exact d'interface (`exact_ui`), les gabarits dynamiques (`dynamic_patterns`), les unités phraséologiques (`phrase_chunks`), le lexique morphologique (`2 582` entrées issues du dictionnaire Tourneux Cameroun, Aki-OSC et Wave) et les exemplaires parallèles RAG (`99 633` paires issues de 18 sources).
4. **Nœud 4 — `AnyDocPedagogicalExplainer` (Génération d'explication simplifiée)** :
   - Génère une explication pédagogique actionnable en Fulfuldé (`explain_fub`) et en Français (`explain_fr`) adaptée à l'intention détectée et aux montants figés.
5. **Nœud 5 — `FinancialIntegrityGuard` (Vérification d'intégrité post-traduction)** :
   - Restaure chaque jeton `__ENT_k__` au caractère près pour garantir le statut **`Intègre` (`0 écart`)** dans le panneau Jury.

---

## 3. Les 18 Sources de Données Fulfuldé Moissonnées (`99 633` entrées)

Le script [`D:\lang\data\scripts\harvest_all_fulfulde_sources.py`](file:///D:/lang/data/scripts/harvest_all_fulfulde_sources.py) compile `D:\lang\data\corpus\compiled\unified_fulfulde_corpus.parquet` à partir de :
1. `01_aki_osc_financial_glossary` : Glossaire & gabarits financiers internes Aki-OSC (`fub`).
2. `02_safinum_wave_sponsor_corpus` : Corpus sponsor Wave & SAFINUM (expressions Mobile Money & numération Fulfuldé).
3. `03_tourneux_dictionary_csv` : Dictionnaire Peul-Fulfuldé-Français du Cameroun (Henry Tourneux / IRD — 1 759 entrées).
4. `04_akilang_conversational_corpus` : Corpus conversationnel & NLU Akilang (`fub`).
5. `05_wikipedia_ff_dump` : Encyclopédie Wikipédia Fulfuldé (`ff.wikipedia.org` — 1 902 entrées filtrées).
6. `06_bible_fulfulde_ebible_parallel` : Corpus biblique parallèle Français-Fulfuldé (`ebible.org` / `bibles.org` / `bible.com` — 6 039 versets).
7. `07_rfi_fulfulde_news_parallel` : Dépêches d'actualité RFI Fulfuldé alignées (1 203 paires).
8. `08_cnrs_lacito_ellaf_academic` : Corpus académique CNRS / LACITO / ELLAF littérature orale peule (1 101 paires).
9. `09_open_science_pressbooks_parallel` : Corpus scientifique ouvert Science et Bien Commun & OER2Go (1 117 paires).
10. `10_wikipedia_parallel_aligned` : Segments encyclopédiques alignés Français-Fulfuldé (1 200 paires).
11. `11_pulaar_org_portal` : Portail lexical et culturel `pulaar.org` (16 911 paires).
12. `12_pulaagu_com_portal` : Portail communautaire `pulaagu.com` (8 687 paires).
13. `13_demeth_net_portal` : Portail éducatif `demeth.net` (1 267 paires).
14. `14_lewlewal_com_media` : Réseau média Fulfuldé `lewlewal.com` (901 paires).
15. `15_webpulaaku_koode_archives` : Archives littéraires et historiques `webpulaaku.net` & `koode.net` (2 017 paires).
16. `16_un_udhr_globalvoices_civic` : Corpus civique et Déclaration Universelle des Droits de l'Homme (ONU / GlobalVoices).
17. `17_hf_burkimbia_fub_adamawa_cameroon` : Corpus parallèle Hugging Face `burkimbia/nllb-burkina-parallel` taggé `fub_Latn` Adamaoua Cameroun (15 423 paires).
18. `18_hf_burkimbia_fuv_central_fulfulde` : Corpus parallèle Hugging Face `burkimbia/nllb-burkina-parallel` taggé `fuv_Latn` (39 868 paires).

---

## 4. Installation dans Google Chrome / Microsoft Edge

1. Ouvrir `chrome://extensions/` (ou `edge://extensions/`).
2. Activer le **Mode développeur** (en haut à droite).
3. Cliquer sur **Charger l'extension non empaquetée** (*Load unpacked*).
4. Sélectionner le dossier : `D:\lang\data\safinum-extension`.
5. Naviguer vers `https://safinum.cm/hackathon-test` (ou `https://safinum.cm/hackathon-test?jury=1`).

