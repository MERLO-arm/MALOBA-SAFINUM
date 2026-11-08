# Maloba AnyDoc — Extension d'Accessibilité Financière Multilingue Cameroun (`fub` & `ewo`)

**Hackathon SAFINUM Innovate Challenge 2026** — Prototype d'accessibilité financière multimodale sous la charte officielle **Maloba** (`D:\lang\collecte`) :
- **Langues Nationales supportées** : **Fulfuldé du Cameroun (`fub` — Grand-Nord)** & **Ewondo (`ewo` — Yaoundé / Centre / Sud / Est)**, avec architecture extensible N-langues (Douala `dua`, Ghomálá' `bbj`, Bassa `bas`).
- **Logo officiel** : `LOGO MALOBA.png` / `maloba_logo.svg` (icônes 16, 32, 48, 128 px intégrées en Data URI Base64).
- **Couleurs officielles Maloba** : Orange Maloba (`#FF7900` / `#ED7009`), Terracotta (`#E05515`), Bronze ambré (`#7B3F0C`), Ambre doré (`#FFA040`) et Vert Intégrité (`#10B981`).
- **Fonctionnalités** : Menu déroulant multilingue direct, Traduction DOM In-Place sans rechargement, Graphe de Contexte 5-Nœuds RAG (18 sources Fulfuldé + Apertium Ewondo), Lecture Vocale Phrase par Phrase (*Nanugo* / *Wóg*) & Explication Pédagogique AnyDoc (*Famfingo* / *Fáám*).

---

## 1. Couverture des 5 Fonctionnalités Minimales Attendues

1. **Compréhension du solde et du compte** :
   * **Fulfuldé (`fub`)** : `Solde` $\rightarrow$ `Ceede gonɗe` / `Ceede leydi`
   * **Ewondo (`ewo`)** : `Solde` $\rightarrow$ `Mɔni a liè` / `Mɔni a nzi kôb`
   * Traduction intégrale du tableau de bord, du statut du compte et de l'historique des transactions avec explications vocale et textuelle.
2. **Explication des frais de transaction** :
   * **Fulfuldé (`fub`)** : `Frais` $\rightarrow$ `Coggu nelal`
   * **Ewondo (`ewo`)** : `Frais` $\rightarrow$ `Mímvèñ mi ntómban`
   * Traduction et explication pédagogique des 3 règles tarifaires (`Compte Safinum` gratuit, `Mobile Money` 1,5 %, `Autre banque` 2 %) et distinction claire entre montant envoyé, commission et total débité.
3. **Vérification du bénéficiaire** :
   * **Fulfuldé (`fub`)** : `Bénéficiaire` $\rightarrow$ `Jaɓoowo ceede`
   * **Ewondo (`ewo`)** : `Bénéficiaire` $\rightarrow$ `Nnyɔ a nɔŋ mɔni`
   * Accompagnement vocal et visuel sur la vérification du nom, du numéro de téléphone et des alertes de sécurité (`SECURITY_001` / `SECURITY_002`).
4. **Récapitulatif et confirmation** :
   * **Fulfuldé (`fub`)** : `Taƴre laartugo fuu` & `Tabitingol`
   * **Ewondo (`ewo`)** : `Ntílán mebə̀lə̀ mé mɔni` & `Fíndí / Kaməla`
   * Traduction de chaque libellé du récapitulatif et du reçu final tout en préservant **100 % Intègre** (`intact`) l'ensemble des montants, frais, totaux, numéros, noms et références (`SAF-2026-...`).
5. **Compréhension des messages d'erreur et contenus inédits du Jury** :
   * Prise en charge des **7 codes d'erreur officiels** (`AMOUNT_001` à `CONFIRM_001`) ET de **toute phrase inédite injectée à chaud par le Jury** (`#injected-{id}`) en Fulfuldé et en Ewondo grâce au **Graphe de Contexte 5-Nœuds**.

---

## 2. Architecture du Graphe de Contexte 5-Nœuds Multilingue (`context_graph.js`)

1. **Nœud 1 — `EntityFreezer` (Sanctuarisation des données critiques)** :
   - Détecte et fige par regex stricte tous les montants (`FCFA`, `%`), numéros de téléphone (`+237...`), numéros de compte (`CM 001...`), références (`SAF-2026-...`) et noms propres en jetons immuables `__ENT_k__`.
2. **Nœud 2 — `IntentAndRiskClassifier` (Classification d'intention bancaire)** :
   - Identifie l'intention financière (`SECURITE_FRAUDE`, `PLAFOND_ET_SOLDE`, `FRAIS_TARIFICATION`, `IDENTITE_BENEFICIAIRE`, `INCIDENT_TECHNIQUE`, `VALIDATION_ET_PREUVE`) et le niveau de risque (`CRITIQUE`, `ATTENTION`, `INFO`).
3. **Nœud 3 — `MultiSourceLexicalRAG` (Traduction Hybride Multilingue)** :
   - Interroge successivement le dictionnaire exact d'interface (`exact_ui`), les gabarits dynamiques (`dynamic_patterns`), les unités phraséologiques (`phrase_chunks`), le lexique morphologique et les exemplaires parallèles RAG dans la langue active.
4. **Nœud 4 — `AnyDocPedagogicalExplainer` (Génération d'explication simplifiée)** :
   - Génère une explication pédagogique actionnable en Fulfuldé (`explain_fub`), en Ewondo (`explain_ewo`) et en Français (`explain_fr`) adaptée à l'intention détectée et aux montants figés.
5. **Nœud 5 — `FinancialIntegrityGuard` (Vérification d'intégrité post-traduction)** :
   - Restaure chaque jeton `__ENT_k__` au caractère près pour garantir le statut **`Intègre` (`0 écart`)** dans le panneau Jury.

---

## 3. Architecture Extensible N-Langues (`content.js` & `voice_engine.js`)

L'extension s'appuie sur le registre central `DEFAULT_LANGUAGES` :
- **Langues Actives** :
  - `fub` : Fulfuldé du Cameroun (`🇨🇲`, écoute : *Nanugo*, explication : *Famfingo*)
  - `ewo` : Ewondo (`🇨🇲`, écoute : *Wóg*, explication : *Fáám*)
- **Feuille de Route Prête (Roadmap)** :
  - `dua` : Douala (`🇨🇲`, écoute : *Senga*, explication : *Bwele*)
  - `bbj` : Ghomálá' (`🇨🇲`, écoute : *Ju'*, explication : *Fa'*)
  - `bas` : Bassa (`🇨🇲`, écoute : *Hɛp*, explication : *Tégəl*)

Pour ajouter une nouvelle langue, 3 étapes suffisent :
1. Déclarer la langue dans `DEFAULT_LANGUAGES` dans `content.js` et `knowledge_base.js`.
2. Ajouter les traductions `[code]`, `explain_[code]`, `phonetic_[code]` dans `knowledge_base.js`.
3. Ajouter les règles de prononciation phonétique dans `voice_engine.js`.

---

## 4. Sources Moissonnées : Fulfuldé (`99 633` entrées) & Ewondo

* **18 Sources Fulfuldé (`99 633` entrées parallèles et lexicales)** :
  1. Glossaire Aki-OSC & Wave SAFINUM, 2. Dictionnaire Tourneux Cameroun (1 759 entrées), 3. Akilang NLU, 4. Wikipédia FF, 5. Bible Deftere Allah (6 039 versets), 6. RFI Fulfuldé, 7. CNRS ELLAF, 8. Science et Bien Commun OER2Go, 9. Wikipédia Aligné, 10. Pulaar.org (16 911 paires), 11. Pulaagu.com (8 687 paires), 12. Demeth.net, 13. Lewlewal.com, 14. Webpulaaku, 15. ONU UDHR, 16. Burkimbia NLLB `fub` Adamaoua (15 423 paires), 17. Burkimbia NLLB `fuv` (39 868 paires).
* **Sources Linguistiques Ewondo** :
  - Apertium Ewondo-Français (`Ngue-Um/apertium-ewo-fra`).
  - Meta FLORES-200 / NLLB (`ewo_Latn`).
  - Meta MMS TTS Ewondo (`OlameMend/mms-tts-ewo`).
  - Grammaire et dictionnaires SIL Cameroun.

---

## 5. Guide d'Installation Rapide

1. Ouvrez Google Chrome sur `chrome://extensions/`.
2. Activez le **Mode développeur** (en haut à droite).
3. Cliquez sur **Charger l'extension non empaquetée** et sélectionnez le dossier `safinum-extension`.
4. Ouvrez `https://safinum.cm/hackathon-test?jury=1` et profitez de l'accessibilité multilingue Maloba AnyDoc !
