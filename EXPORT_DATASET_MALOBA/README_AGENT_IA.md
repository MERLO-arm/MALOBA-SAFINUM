# EXPORT_DATASET_MALOBA — Guide complet pour agent IA

> Ce document explique **tout** ce que contient ce dossier, d'où viennent les données,
> comment elles sont reliées entre elles, leurs pièges connus, et comment les régénérer.
> Lis-le en entier avant de manipuler les fichiers.

---

## 1. Contexte du projet

- **Projet** : *Maloba / Ekwali* — collecte participative d'un corpus **parallèle texte + voix**
  en langues nationales du Cameroun (Éton, Ghomala', Duala, Lámnso', Fulfulde, Ewondo, Bassa, Kanuri…).
- **Principe** : un traducteur voit une phrase source en **français** (et anglais), il écrit la
  **traduction** dans sa langue, puis **enregistre sa voix** en la prononçant.
- **Usage visé** : entraînement / évaluation de modèles **ASR** (voix → texte), **TTS** (texte → voix)
  et **traduction automatique** (FR/EN ↔ langue locale), principalement pour des interfaces
  d'applications de paiement mobile (Wave, puis Safinum).
- **Application de collecte** : https://ekwali.vercel.app/ (code source : `D:\lang\collecte\collecte-voix`,
  dépôt GitHub `akilangekwali-afk/collecte-voix`, branches `main` et `maloba`).

---

## 2. Arborescence du dossier

```text
D:\lang\collecte\EXPORT_DATASET_MALOBA\
├── README_AGENT_IA.md          ← ce fichier
├── dataset_complet.csv         ← TOUTES les lignes, séparateur ";"  (Excel FR), UTF-8 avec BOM
├── dataset_complet_ia.csv      ← mêmes données, séparateur ","     (pandas / HuggingFace), UTF-8 avec BOM
├── dataset_complet.json        ← mêmes données, tableau JSON d'objets, UTF-8 avec BOM
├── profils_traducteurs.csv     ← profils des traducteurs (2 bases), séparateur ";"
│
├── <langue>\                   ← un dossier par langue (nom "assaini", voir §5)
│   ├── <langue>_traductions.csv    ← sous-ensemble de dataset_complet pour cette langue (";")
│   ├── <langue>_traductions.json   ← idem en JSON
│   └── audios\
│       └── <code>_take<N>_<id8>.webm   ← fichiers vocaux
```

Dossiers langue présents : `eton`, `ghomala`, `duala`, `lamnso`, `fulfulde`, `ewondo`, `bassa`,
`kanuri_traducteur_kanuri`.

---

## 3. Chiffres clés (export du 11/11/2026)

| Élément | Valeur |
|---|---|
| Lignes totales dans `dataset_complet.*` | **321** |
| Lignes réelles (traducteurs) | **318** (base `collecte_voix`) |
| Lignes de test | **3** (base `maloba_safinum`, voir §8) |
| Fichiers audio `.webm` présents sur disque | **317** |
| Taille totale du dossier | ~**25 Mo** |
| Lignes sans traduction écrite | 0 |

### Répartition par langue
| Langue | Lignes |
|---|---:|
| eton | 214 |
| ghomala | 48 |
| duala | 27 |
| lamnso | 21 |
| fulfulde | 6 (dont 3 tests) |
| ewondo | 2 |
| bassa | 2 |
| kanuri_traducteur_kanuri | 1 |

### Répartition par famille de code
| Préfixe | Lignes | Corpus |
|---|---:|---|
| `SAF_UI_xxx` | 130 | Safinum — textes d'écrans de l'application |
| `SAF_EXP_xxx` | 84 | Safinum — expressions / phrases explicatives |
| `SAF_NUM_xxx` | 37 | Safinum — nombres, montants, références |
| `SAF_CMD_xxx` | 16 | Safinum — commandes vocales |
| `Exxx` (E001…) | 53 | Ancien corpus **Wave** (onboarding, chiffres, sécurité…) |
| `SANS_CODE` | 1 | Code introuvable (voir §8) |

### Répartition par traducteur
| Traducteur | Lignes | Langue principale |
|---|---:|---|
| Muriel Menye | 212 | eton |
| Mensida | 47 | ghomala |
| NDOUMBE NDOUMBE | 27 | duala |
| Yaradze Godlove Nyuymenghea | 21 | lamnso |
| armel / ARMEL DOMGUIA / DOMGUIA ARMEL | 13 | tests (ewondo, bassa, fulfulde) |
| ABOUBAKAR ALI SIDDIK | 1 | kanuri |

> ⚠️ « armel », « ARMEL DOMGUIA » et « DOMGUIA ARMEL » sont **la même personne** (l'administrateur
> qui a fait des tests). Ses lignes ont souvent des traductions fictives (`ɓɓêěěěěěě`, `TEST 123`…)
> → **à exclure** d'un entraînement.

---

## 4. Dictionnaire des colonnes (`dataset_complet.*` et `<langue>_traductions.*`)

| Colonne | Type | Description |
|---|---|---|
| `id` | uuid | Identifiant unique de l'enregistrement dans Supabase (`public.recordings.id`). Clé primaire de la ligne. |
| `source_db` | texte | Base d'origine : `collecte_voix` (projet Supabase `phbhwijxdwkfgdkehqzf`) ou `maloba_safinum` (projet `rkctlfwairhsuxfqmhnw`). |
| `situation_code` | texte | Code de la phrase source (`SAF_UI_023`, `SAF_EXP_020`, `E001`…). **C'est la clé qui relie plusieurs langues à la même phrase source.** |
| `category` | texte | Catégorie de la phrase (« Navigation & Accueil », « Étape 2 : Frais & Simulation », « Chiffres », « Sécurité »…). |
| `phrase_francais` | texte | Phrase source en français (texte que le traducteur a vu). |
| `phrase_anglais` | texte | Phrase source en anglais. **Vide pour l'ancien corpus `Exxx`** (Wave n'avait que le français). |
| `langue` | texte | Langue cible telle qu'enregistrée (ex : `eton`, `lámnso'`, `kanuri(traducteur kanuri`). Si la langue est « autre », vaut `autre (<nom saisi>)`. |
| `dossier_langue` | texte | Nom de dossier normalisé (minuscules, sans accents ni apostrophes) → sert de **clé de langue fiable**. |
| `traduction_ecrite` | texte | Traduction écrite par le traducteur, dans la langue cible (caractères spéciaux : ɓ ɗ ƴ ŋ ɛ ɔ ə ʉ ʼ + tons á à â ǎ…). C'est la **transcription de référence** de l'audio. |
| `traducteur_nom` | texte | Nom saisi par le traducteur. |
| `traducteur_telephone` | texte | Téléphone du traducteur (si connu). **Donnée personnelle.** |
| `user_id` | uuid | Identifiant anonyme du navigateur/utilisateur dans l'app. Plusieurs lignes du même `user_id` = même personne/appareil. |
| `duree_secondes` | décimal | Durée de l'audio. ⚠️ **Virgule décimale** (`4,51`) car export en locale française — convertir en `4.51`. |
| `taille_octets` | entier | Taille du fichier audio en octets. |
| `take_number` | entier | Numéro de prise. Un traducteur peut réenregistrer la même phrase : `take 1`, `take 2`… (voir §7). |
| `fichier_audio_local` | texte | Chemin **relatif** au dossier d'export, séparateur Windows `\` (ex : `ghomala\audios\saf_ui_023_take1_5a24555c.webm`). |
| `url_audio_supabase` | url | URL publique de l'audio dans le bucket Supabase `recordings` (permet de re-télécharger). |
| `storage_path` | texte | Chemin brut dans le bucket : `{langue}/{user_id}/{CODE}_take_{N}_{timestamp_ms}.webm`. |
| `statut_audio` | texte | `OK (Telecharge)`, `OK (Deja present)` ou `ERREUR: …` (fichier non récupéré). **Ne garder que les lignes commençant par `OK`.** |
| `created_at` | datetime ISO 8601 UTC | Date d'enregistrement en base. |

### `profils_traducteurs.csv`
Colonnes : `source_db`, `id`, `translator_name`, `phone`, `email`, `target_language`, `region`,
`recordings_count`, `points`, `created_at`. ~51 profils (37 de `collecte_voix` + 14 de `maloba_safinum`).
Beaucoup de profils sont anonymes (nom/téléphone vides) : ce sont des visiteurs qui n'ont rien enregistré.
Lien avec le dataset : `profils_traducteurs.id` ↔ `dataset_complet.user_id` (pas toujours présent).

---

## 5. Format des fichiers audio

- **Conteneur / codec** : WebM + **Opus** (`audio/webm;codecs=opus`), enregistré par le navigateur via `MediaRecorder`.
- **Canal** : mono en pratique ; **fréquence** : 48 kHz (standard Opus).
- **Taille** : ~30 à 500 Ko par fichier ; durée typique 2 à 30 s (max 30 s imposé par l'app).
- **Nommage local** : `<code_minuscule>_take<N>_<8 premiers caractères de id>.webm`
  → unique, et retrouvable depuis la colonne `id`.
- **Conversion recommandée pour l'IA** (WAV 16 kHz mono) :
  ```bash
  ffmpeg -i entree.webm -ar 16000 -ac 1 sortie.wav
  ```
- Les audios contiennent parfois du silence au début/à la fin → prévoir un trim (VAD / `silenceremove`).

---

## 6. D'où viennent les données (architecture)

### 6.1 Flux d'enregistrement dans l'application
1. **Affichage** : les phrases `SAF_*` viennent du fichier `src/lib/corpus_data.ts` (`INITIAL_SITUATIONS`)
   embarqué dans l'app (pas lues depuis la base).
2. **Capture** (`src/components/collect/RecordingStudio.tsx`) : texte traduit + voix (`MediaRecorder`).
3. **Cache local** : audio dans **IndexedDB** (`maloba_collecte_db_v1` → `cached_recordings`),
   métadonnées dans **localStorage** (`maloba_user_recordings_v1`).
4. **Upload** (`src/lib/audioUploader.ts`) : fichier vers Supabase Storage, bucket `recordings`,
   chemin `{langue}/{user_id}/{CODE}_take_{N}_{timestamp}.webm`.
5. **Insertion** : `resilientInsertRecording()` insère dans `public.recordings`. Si la clé étrangère
   `situation_id` est refusée, il réessaie avec `situation_id = NULL` en gardant `situation_code`
   → aucune perte de données. Toutes les infos (nom, phrase FR, langue…) sont aussi copiées dans le
   champ JSON `device_info`.
6. **Rattrapage** (`src/lib/syncAllLocalData.ts`) : à chaque ouverture du site, tout ce qui est resté
   en cache local est renvoyé automatiquement vers Supabase.

### 6.2 Les deux bases Supabase
| | `collecte_voix` | `maloba_safinum` |
|---|---|---|
| Ref projet | `phbhwijxdwkfgdkehqzf` | `rkctlfwairhsuxfqmhnw` |
| Rôle réel | **Base de production** utilisée par ekwali.vercel.app (variables d'env Vercel) | Nouvelle base prévue, configurée dans `.env` local |
| `recordings` | **318 vrais enregistrements** + tous les audios | 3 lignes de test sans audio |
| `situations` | 234 phrases de l'ancien corpus (`Exxx`, `Nxxx`…) | **192 phrases Safinum** (`SAF_*`) |
| `profiles` | 37 | 14 |

➡️ C'est pour ça que l'export **croise les deux bases** : les enregistrements viennent de
`collecte_voix`, mais les textes FR/EN des codes `SAF_*` viennent de la table `situations` de `maloba_safinum`.

### 6.3 Règle de rattachement phrase source ← enregistrement (dans le script)
1. `situation_code` de la ligne ; sinon `device_info.situation_code` ; sinon extrait du nom de fichier
   (`^CODE_take_`).
2. Recherche du code dans les tables `situations` des **deux** bases.
3. À défaut, recherche par `situation_id` (`00000001-…` → base Safinum, `11111111-…`/autres → base collecte_voix).
4. À défaut de phrase FR, utilisation de `device_info.source_fr`.

---

## 7. Comment utiliser le dataset (recettes)

### Charger et filtrer proprement (Python / pandas)
```python
import pandas as pd
from pathlib import Path

ROOT = Path(r"D:\lang\collecte\EXPORT_DATASET_MALOBA")
df = pd.read_csv(ROOT / "dataset_complet_ia.csv", encoding="utf-8-sig")

# 1) garder uniquement les audios présents
df = df[df["statut_audio"].str.startswith("OK")]
# 2) exclure les tests de l'administrateur
df = df[~df["traducteur_nom"].str.lower().str.contains("armel", na=False)]
df = df[df["source_db"] == "collecte_voix"]
# 3) durée en float
df["duree_secondes"] = df["duree_secondes"].astype(str).str.replace(",", ".").astype(float)
# 4) chemin audio absolu (multi-plateforme)
df["audio_path"] = df["fichier_audio_local"].apply(lambda p: str(ROOT / Path(p.replace("\\", "/"))))
# 5) une seule prise par (code, langue, traducteur) : la plus récente
df = df.sort_values("created_at").drop_duplicates(
    ["situation_code", "dossier_langue", "user_id"], keep="last")
```

### Manifeste ASR (format NeMo / HuggingFace)
Une ligne JSON par échantillon : `{"audio_filepath": audio_path, "text": traduction_ecrite, "duration": duree_secondes, "lang": dossier_langue}`.

### Corpus parallèle de traduction
Paires `phrase_francais` ↔ `traduction_ecrite` (et `phrase_anglais` ↔ `traduction_ecrite` pour les `SAF_*`).
Pour aligner plusieurs langues sur la même phrase : **grouper par `situation_code`**.

### Découpage train / test conseillé
Séparer **par traducteur** (`user_id`) ou **par `situation_code`**, jamais aléatoirement ligne par ligne
(sinon fuite : même voix ou même phrase dans train et test). Avec si peu de locuteurs par langue,
préférer un split par `situation_code`.

---

## 8. Pièges et anomalies connus

| # | Problème | Lignes concernées | Que faire |
|---|---|---|---|
| 1 | **Audio manquant** dans le bucket (HTTP 400) | `id 4f9e2078-…` — `SAF_EXP_062`, eton, Muriel Menye | Le texte existe mais pas l'audio → exclure (ou faire réenregistrer). |
| 2 | **3 lignes de test** `storage_path = local://…`, sans audio | `00000000-…-037/038/039` (base `maloba_safinum`, « ARMEL DOMGUIA ») | Exclure. |
| 3 | **Traductions fictives** de l'admin | traducteur « armel » (ewondo, bassa, quelques fulfulde) | Exclure. |
| 4 | **1 ligne `SANS_CODE`** sans phrase française | 1 ligne | Vérifier manuellement ou exclure. |
| 5 | **Prises multiples** (`take_number` 2, 3…) pour une même phrase | ex : `E002` duala, `SAF_UI_037` ghomala | Garder la dernière, ou toutes comme augmentation de données. |
| 6 | **Nom de langue mal saisi** : `kanuri(traducteur kanuri` | 1 ligne | Utiliser `dossier_langue` / considérer = `kanuri`. |
| 7 | `lámnso'` (avec accent + apostrophe) | 21 lignes | `dossier_langue = lamnso`. |
| 8 | **Virgule décimale** dans `duree_secondes` (`4,51`) | toutes | Remplacer `,` par `.`. |
| 9 | Certaines traductions contiennent des **guillemets « »**, des **placeholders** (`{numéro}` → traduit par `(musiŋga)`) ou des fautes de frappe | variable | Nettoyer le texte avant ASR/TTS (retirer « » et ponctuation superflue). |
| 10 | `phrase_anglais` vide pour le corpus `Exxx` | 53 lignes | Normal (corpus Wave FR uniquement). |
| 11 | Fortement **déséquilibré** : ~67 % des lignes = Éton, d'une seule locutrice | — | Ne pas évaluer les autres langues comme si elles avaient assez de données. |

---

## 9. Données personnelles

`traducteur_nom`, `traducteur_telephone` et `profils_traducteurs.csv` contiennent des **données personnelles**.
Avant de publier ou partager le dataset (ex : HuggingFace), **supprimer ces colonnes** et remplacer les
noms par un identifiant anonyme (`spk_01`, `spk_02`… dérivé de `user_id`). Les voix elles-mêmes sont
aussi des données biométriques : vérifier le consentement des traducteurs.

---

## 10. Régénérer / mettre à jour l'export

Script : `D:\lang\collecte\collecte-voix\scripts\export_dataset.ps1`

```powershell
powershell -ExecutionPolicy Bypass -File "D:\lang\collecte\collecte-voix\scripts\export_dataset.ps1"
```

- Interroge les deux projets Supabase via l'API REST (clés **anon** publiques, lecture seule).
- Télécharge uniquement les audios **absents** du disque (les existants sont marqués `OK (Deja present)`).
- Réécrit entièrement les CSV / JSON globaux et par langue.
- ⚠️ Limite actuelle : `limit=1000` lignes par table. Au-delà de 1000 enregistrements, ajouter de la
  pagination (`&offset=` ou en-tête `Range`) dans le script.
- ⚠️ Lecture seule : le script **ne modifie ni ne supprime rien** dans Supabase.

---

## 11. Résumé en 5 lignes pour un agent pressé

1. `dataset_complet_ia.csv` = 1 ligne par enregistrement vocal ; `fichier_audio_local` pointe vers le `.webm`, `traduction_ecrite` est sa transcription, `phrase_francais`/`phrase_anglais` est la source.
2. Filtrer : `statut_audio` commence par `OK`, `source_db == collecte_voix`, traducteur ≠ armel.
3. Clé de langue = `dossier_langue` ; clé de phrase multilingue = `situation_code`.
4. Audio WebM/Opus 48 kHz → convertir en WAV 16 kHz mono ; durée avec virgule à corriger.
5. Données très déséquilibrées (Éton ≈ 212 lignes d'une seule voix) et contenant des données personnelles.

