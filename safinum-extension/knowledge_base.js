/**
 * =============================================================================
 * MALOBA ANYDOC — MULTILINGUAL KNOWLEDGE BASE: FULFULDE, EWONDO & ÉTON
 * =============================================================================
 * Unified linguistic knowledge base compiled for the SAFINUM 2026 Challenge.
 * Contains 99,633 records aggregated from verified sources, exact UI mappings,
 * dynamic patterns, phrase chunks, morphological lexicons, and RAG exemplars.
 * Fully enriched with authentic Éton (eto) translations from Muriel Menye.
 * All comments and documentation are strictly in English.
 * =============================================================================
 */
window.SAFINUM_KB = {
  "meta": {
    "language_name": "Fulfuldé du Cameroun (Adamaoua / Grand-Nord)",
    "iso_code": "fub",
    "macro_code": "ff / fuv",
    "total_harvested_records": 99633,
    "distinct_sources_count": 18,
    "sources_breakdown": {
      "01_aki_osc_financial_glossary": 103,
      "02_safinum_wave_sponsor_corpus": 76,
      "03_tourneux_dictionary_csv": 1759,
      "04_akilang_conversational_corpus": 39,
      "05_wikipedia_ff_dump": 1902,
      "18_hf_burkimbia_fuv_central_fulfulde": 39868,
      "12_pulaagu_com_portal": 8687,
      "09_open_science_pressbooks_parallel": 1117,
      "06_bible_fulfulde_ebible_parallel": 6039,
      "08_cnrs_lacito_ellaf_academic": 1101,
      "17_hf_burkimbia_fub_adamawa_cameroon": 15423,
      "10_wikipedia_parallel_aligned": 1200,
      "11_pulaar_org_portal": 16911,
      "15_webpulaaku_koode_archives": 2017,
      "14_lewlewal_com_media": 901,
      "07_rfi_fulfulde_news_parallel": 1203,
      "13_demeth_net_portal": 1267,
      "16_un_udhr_globalvoices_civic": 20
    },
    "exact_ui_entries_count": 266,
    "lexicon_words_count": 216,
    "phrase_chunks_count": 34,
    "rag_exemplars_count": 216,
    "supported_languages": [
      "fub",
      "ewo",
      "eto"
    ],
    "language_names": {
      "fub": "Fulfuldé du Cameroun (Adamaoua / Grand-Nord)",
      "ewo": "Ewondo (Yaoundé / Centre / Sud)",
      "eto": "Éton du Cameroun (Lékié / Obala / Sa'a)"
    },
    "languages": {
      "fub": {
        "code": "fub",
        "name": "Fulfuldé",
        "fullName": "Fulfuldé du Cameroun (Adamaoua / Grand-Nord)",
        "flag": "🇨🇲",
        "region": "Grand-Nord (Adamaoua, Nord, Extrême-Nord)",
        "listenWord": "Nanugo",
        "explainWord": "Famfingo",
        "active": true
      },
      "ewo": {
        "code": "ewo",
        "name": "Ewondo",
        "fullName": "Ewondo (Yaoundé / Centre / Sud / Est)",
        "flag": "🇨🇲",
        "region": "Centre, Sud, Est (Zone Beti-Fang)",
        "listenWord": "Wóg",
        "explainWord": "Fáám",
        "active": true
      },
      "dua": {
        "code": "dua",
        "name": "Douala",
        "fullName": "Douala (Littoral / Wouri / Sud-Ouest)",
        "flag": "🇨🇲",
        "region": "Littoral, Sud-Ouest",
        "listenWord": "Senga",
        "explainWord": "Bwele",
        "active": false,
        "soon": true
      },
      "bbj": {
        "code": "bbj",
        "name": "Ghomálá'",
        "fullName": "Ghomálá' / Bamiléké (Hauts-Plateaux / Ouest)",
        "flag": "🇨🇲",
        "region": "Ouest (Grassfields)",
        "listenWord": "Ju'",
        "explainWord": "Fa'",
        "active": false,
        "soon": true
      },
      "bas": {
        "code": "bas",
        "name": "Bassa",
        "fullName": "Bassa (Sanaga-Maritime / Centre-Littoral)",
        "flag": "🇨🇲",
        "region": "Centre, Littoral",
        "listenWord": "Hɛp",
        "explainWord": "Tégəl",
        "active": false,
        "soon": true
      },
      "eto": {
        "code": "eto",
        "name": "Éton",
        "fullName": "Éton du Cameroun (Lékié / Obala / Sa'a)",
        "flag": "🇨🇲",
        "region": "Centre (Lékié, Obala, Sa'a)",
        "listenWord": "Wɔ́g",
        "explainWord": "Fáám",
        "active": true
      }
    }
  },
  "exact_ui": {
    "Environnement de test — données fictives, aucune transaction réelle.": {
      "fub": "Nokkuure jarribo — kabaruuji jarribo tan, walaa nelal ceede goonga.",
      "phonetic": "Nokkôuôure djarribo — kabarôuôuji djarribo tan, walâ nelal tchééde gônga.",
      "explain_fub": "Nokkuure ndee ɗum ngam jarribo kuugal Safinum Pay tan; ceede goonga ittataako.",
      "explain_fub_phonetic": "Nokkôuôure ndéé d'oum ngam djarribo kôuôugal Safinoum Pay tan; tchééde gônga ittatâko.",
      "explain_fr": "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fə́la mejaríba — bibuk bi m̀bálá, téé ésəle mɔni ya amba.",
      "phonetic_ewo": "Feula médjariba — bibouk bi mbala, téé éséulé moni ya amba.",
      "explain_ewo": "Fə́la nyina é ne ve asu mejaríba ya Safinum Pay; mɔni ya amba a téé kə.",
      "explain_ewo_phonetic": "Fə́la nyina é ne ve asu mejaríba ya Safinum Pay; mɔni ya amba a téé kə.",
      "eto": "Ípǝ̀ yi dâm ɛ́sǝ tɔ́",
      "phonetic_eto": "Ípǝ̀ yi dâm ésǝ tó",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Test environment — fictional data, no real transaction.": {
      "fub": "Nokkuure jarribo — kabaruuji jarribo tan, walaa nelal ceede goonga.",
      "phonetic": "Nokkôuôure djarribo — kabarôuôuji djarribo tan, walâ nelal tchééde gônga.",
      "explain_fub": "Nokkuure ndee ɗum ngam jarribo kuugal Safinum Pay tan; ceede goonga ittataako.",
      "explain_fub_phonetic": "Nokkôuôure ndéé d'oum ngam djarribo kôuôugal Safinoum Pay tan; tchééde gônga ittatâko.",
      "explain_fr": "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fə́la mejaríba — bibuk bi m̀bálá, téé ésəle mɔni ya amba.",
      "phonetic_ewo": "Feula médjariba — bibouk bi mbala, téé éséulé moni ya amba.",
      "explain_ewo": "Fə́la nyina é ne ve asu mejaríba ya Safinum Pay; mɔni ya amba a téé kə.",
      "explain_ewo_phonetic": "Fə́la nyina é ne ve asu mejaríba ya Safinum Pay; mɔni ya amba a téé kə.",
      "eto": "Ípǝ̀ yi dâm ɛ́sǝ tɔ́",
      "phonetic_eto": "Ípǝ̀ yi dâm ésǝ tó",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Banque en ligne": {
      "fub": "Banki dow enternet (Ceede Waya)",
      "phonetic": "Banki dow enternet (Tchééde Waya)",
      "explain_fub": "Kuugal banki Safinum Pay ngam laartugo e neldugo ceede bee waya.",
      "explain_fub_phonetic": "Kôuôugal banki Safinoum Pay ngam lârtougo e neldougo tchééde béé waya.",
      "explain_fr": "Service bancaire numérique accessible depuis votre téléphone ou ordinateur.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Banki ya enternet (Mɔni Waya)",
      "phonetic_ewo": "Banki ya enternet (Moni Waya)",
      "explain_ewo": "Ésəle banki Safinum Pay asu na o laart e o lóm mɔni e fón.",
      "explain_ewo_phonetic": "Ésəle banki Safinum Pay asu na o laart e o lóm mɔni e fón.",
      "eto": "Báŋ á intɛnɛd",
      "phonetic_eto": "Báng á intènèd",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Online banking": {
      "fub": "Banki dow enternet (Ceede Waya)",
      "phonetic": "Banki dow enternet (Tchééde Waya)",
      "explain_fub": "Kuugal banki Safinum Pay ngam laartugo e neldugo ceede bee waya.",
      "explain_fub_phonetic": "Kôuôugal banki Safinoum Pay ngam lârtougo e neldougo tchééde béé waya.",
      "explain_fr": "Service bancaire numérique accessible depuis votre téléphone ou ordinateur.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Banki ya enternet (Mɔni Waya)",
      "phonetic_ewo": "Banki ya enternet (Moni Waya)",
      "explain_ewo": "Ésəle banki Safinum Pay asu na o laart e o lóm mɔni e fón.",
      "explain_ewo_phonetic": "Ésəle banki Safinum Pay asu na o laart e o lóm mɔni e fón.",
      "eto": "Báŋ á intɛnɛd",
      "phonetic_eto": "Báng á intènèd",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Protocole de test": {
      "fub": "Dokaaji jarribo",
      "phonetic": "Dokâji djarribo",
      "explain_fub": "Laawol e dokaaji ɗi jury huutinirta ngam ɓetugo kuugal ngal.",
      "explain_fub_phonetic": "Lâwol e dokâji d'i djoury hôuôutinirta ngam b'etougo kôuôugal ngal.",
      "explain_fr": "Document officiel présentant les consignes et le barème de test du hackathon.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Metəla me mejaríba",
      "phonetic_ewo": "Météula mé médjariba",
      "explain_ewo": "Melep me jury a nzi huutinir ngam ɓet ésəle.",
      "explain_ewo_phonetic": "Melep me jury a nzi huutinir ngam ɓet ésəle.",
      "eto": "protokól abɔ́ tɛ́d",
      "phonetic_eto": "protokól abó téd",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Test protocol": {
      "fub": "Dokaaji jarribo",
      "phonetic": "Dokâji djarribo",
      "explain_fub": "Laawol e dokaaji ɗi jury huutinirta ngam ɓetugo kuugal ngal.",
      "explain_fub_phonetic": "Lâwol e dokâji d'i djoury hôuôutinirta ngam b'etougo kôuôugal ngal.",
      "explain_fr": "Document officiel présentant les consignes et le barème de test du hackathon.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Metəla me mejaríba",
      "phonetic_ewo": "Météula mé médjariba",
      "explain_ewo": "Melep me jury a nzi huutinir ngam ɓet ésəle.",
      "explain_ewo_phonetic": "Melep me jury a nzi huutinir ngam ɓet ésəle.",
      "eto": "protokól abɔ́ tɛ́d",
      "phonetic_eto": "protokól abó téd",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Retour au hackathon": {
      "fub": "Rutto haa hello Hackathon",
      "phonetic": "Routto hâ hello Hatchkathon",
      "explain_fub": "Ruttoraago haa hello mawngo SAFINUM Innovate Challenge.",
      "explain_fub_phonetic": "Routtorâgo hâ hello mawngo SAFINUM Innovate Tchhallenge.",
      "explain_fr": "Revenir à la page principale de présentation du Hackathon SAFINUM.",
      "category": "navigation",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Kóbəla haa Hackathon",
      "phonetic_ewo": "Kobeula ha Hackathon",
      "explain_ewo": "Kóbəla e fə́la énen ya SAFINUM Innovate Challenge.",
      "explain_ewo_phonetic": "Kóbəla e fə́la énen ya SAFINUM Innovate Challenge.",
      "eto": "Dúgnǝ kǝ́ á hakatɔ́ŋ",
      "phonetic_eto": "Dúgnǝ kǝ́ á hakatóng",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Back to hackathon": {
      "fub": "Rutto haa hello Hackathon",
      "phonetic": "Routto hâ hello Hatchkathon",
      "explain_fub": "Ruttoraago haa hello mawngo SAFINUM Innovate Challenge.",
      "explain_fub_phonetic": "Routtorâgo hâ hello mawngo SAFINUM Innovate Tchhallenge.",
      "explain_fr": "Revenir à la page principale de présentation du Hackathon SAFINUM.",
      "category": "navigation",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Kóbəla haa Hackathon",
      "phonetic_ewo": "Kobeula ha Hackathon",
      "explain_ewo": "Kóbəla e fə́la énen ya SAFINUM Innovate Challenge.",
      "explain_ewo_phonetic": "Kóbəla e fə́la énen ya SAFINUM Innovate Challenge.",
      "eto": "Dúgnǝ kǝ́ á hakatɔ́ŋ",
      "phonetic_eto": "Dúgnǝ kǝ́ á hakatóng",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Solde": {
      "fub": "Ceede gonɗe",
      "phonetic": "Tchééde gond'e",
      "explain_fub": "Yaaduure 1 : Limngal ceede ɗe ngoni nder kofru maa jooni.",
      "explain_fub_phonetic": "Yâdôuôure 1 : Limngal tchééde d'e ngoni nder kofrou mâ djôni.",
      "explain_fr": "Étape 1 : Somme d'argent actuellement disponible sur votre compte.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè (Kɔb)",
      "phonetic_ewo": "Moni a lié (Kob)",
      "explain_ewo": "Ékaat 1 : Akɔŋ mɔni o nzi bəle e asúsu wô éyɔŋ nyina.",
      "explain_ewo_phonetic": "Ékaat 1 : Akɔŋ mɔni o nzi bəle e asúsu wô éyɔŋ nyina.",
      "eto": "Táŋ ī mwání inǝ́ á mpǝ̄g",
      "phonetic_eto": "Táng ī mwání inǝ́ á mpǝ̄g",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Balance": {
      "fub": "Ceede gonɗe",
      "phonetic": "Tchééde gond'e",
      "explain_fub": "Yaaduure 1 : Limngal ceede ɗe ngoni nder kofru maa jooni.",
      "explain_fub_phonetic": "Yâdôuôure 1 : Limngal tchééde d'e ngoni nder kofrou mâ djôni.",
      "explain_fr": "Étape 1 : Somme d'argent actuellement disponible sur votre compte.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè (Kɔb)",
      "phonetic_ewo": "Moni a lié (Kob)",
      "explain_ewo": "Ékaat 1 : Akɔŋ mɔni o nzi bəle e asúsu wô éyɔŋ nyina.",
      "explain_ewo_phonetic": "Ékaat 1 : Akɔŋ mɔni o nzi bəle e asúsu wô éyɔŋ nyina.",
      "eto": "Táŋ ī mwání inǝ́ á mpǝ̄g",
      "phonetic_eto": "Táng ī mwání inǝ́ á mpǝ̄g",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Frais": {
      "fub": "Coggu nelal",
      "phonetic": "Tchoggou nelal",
      "explain_fub": "Ceede cewɗe ɗe banki malla kampaniiru hoosata ngam neldugo ceede maa.",
      "explain_fub_phonetic": "Tchééde tchewd'e d'e banki malla kampanîrou hôsata ngam neldougo tchééde mâ.",
      "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Mɔni banki ya fón a nzi téé ngam lóm mɔni wô.",
      "explain_ewo_phonetic": "Mɔni banki ya fón a nzi téé ngam lóm mɔni wô.",
      "eto": "Bɔ frɛ́",
      "phonetic_eto": "Bo fré",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Fees": {
      "fub": "Coggu nelal",
      "phonetic": "Tchoggou nelal",
      "explain_fub": "Ceede cewɗe ɗe banki malla kampaniiru hoosata ngam neldugo ceede maa.",
      "explain_fub_phonetic": "Tchééde tchewd'e d'e banki malla kampanîrou hôsata ngam neldougo tchééde mâ.",
      "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Mɔni banki ya fón a nzi téé ngam lóm mɔni wô.",
      "explain_ewo_phonetic": "Mɔni banki ya fón a nzi téé ngam lóm mɔni wô.",
      "eto": "Bɔ frɛ́",
      "phonetic_eto": "Bo fré",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Fee": {
      "fub": "Coggu nelal",
      "phonetic": "Tchoggou nelal",
      "explain_fub": "Ceede cewɗe ɗe banki malla kampaniiru hoosata ngam neldugo ceede maa.",
      "explain_fub_phonetic": "Tchééde tchewd'e d'e banki malla kampanîrou hôsata ngam neldougo tchééde mâ.",
      "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ",
      "phonetic_ewo": "Mimvègn",
      "explain_ewo": "Asúŋa mɔni asu ésəle.",
      "explain_ewo_phonetic": "Asúŋa mɔni asu ésəle.",
      "eto": "Bɔ frɛ́",
      "phonetic_eto": "Bo fré",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Bénéficiaire": {
      "fub": "Jaɓoowo ceede",
      "phonetic": "Djab'ôwo tchééde",
      "explain_fub": "Neɗɗo mo a yiɗi neldugo mo ceede ɗe.",
      "explain_fub_phonetic": "Ned'd'o mo a yid'i neldougo mo tchééde d'e.",
      "explain_fr": "La personne qui va recevoir l'argent que vous envoyez.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Ékaat 3 : Mɔt w'a lóm nyə mɔni e fón ya dze.",
      "explain_ewo_phonetic": "Ékaat 3 : Mɔt w'a lóm nyə mɔni e fón ya dze.",
      "eto": "Ímôdee gbǝ mwání",
      "phonetic_eto": "Ímôdee gbǝ mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Beneficiary": {
      "fub": "Jaɓoowo ceede",
      "phonetic": "Djab'ôwo tchééde",
      "explain_fub": "Neɗɗo mo a yiɗi neldugo mo ceede ɗe.",
      "explain_fub_phonetic": "Ned'd'o mo a yid'i neldougo mo tchééde d'e.",
      "explain_fr": "La personne qui va recevoir l'argent que vous envoyez.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Ékaat 3 : Mɔt w'a lóm nyə mɔni e fón ya dze.",
      "explain_ewo_phonetic": "Ékaat 3 : Mɔt w'a lóm nyə mɔni e fón ya dze.",
      "eto": "Ímôdee gbǝ mwání",
      "phonetic_eto": "Ímôdee gbǝ mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Récapitulatif": {
      "fub": "Taƴre laartugo fuu",
      "phonetic": "Tay're lârtougo fôuôu",
      "explain_fub": "Yaaduure 4 : Laartugo kabaruuji nelal fuu hidde a tabitina.",
      "explain_fub_phonetic": "Yâdôuôure 4 : Lârtougo kabarôuôuji nelal fôuôu hidde a tabitina.",
      "explain_fr": "Étape 4 : Résumé complet de votre opération pour tout vérifier avant le paiement définitif.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Ékaat 4 : Fáám e laart mësə́ osu na o kaməla ntómban.",
      "explain_ewo_phonetic": "Ékaat 4 : Fáám e laart mësə́ osu na o kaməla ntómban.",
      "eto": "Dâm ɛ́sǝ úkwâm",
      "phonetic_eto": "Dâm ésǝ úkwâm",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Summary": {
      "fub": "Taƴre laartugo fuu",
      "phonetic": "Tay're lârtougo fôuôu",
      "explain_fub": "Yaaduure 4 : Laartugo kabaruuji nelal fuu hidde a tabitina.",
      "explain_fub_phonetic": "Yâdôuôure 4 : Lârtougo kabarôuôuji nelal fôuôu hidde a tabitina.",
      "explain_fr": "Étape 4 : Résumé complet de votre opération pour tout vérifier avant le paiement définitif.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Ékaat 4 : Fáám e laart mësə́ osu na o kaməla ntómban.",
      "explain_ewo_phonetic": "Ékaat 4 : Fáám e laart mësə́ osu na o kaməla ntómban.",
      "eto": "Dâm ɛ́sǝ úkwâm",
      "phonetic_eto": "Dâm ésǝ úkwâm",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Confirmation": {
      "fub": "Tabitingol kuugal",
      "phonetic": "Tabitingol kôuôugal",
      "explain_fub": "Yaaduure 5 : Talkuru seedamku kollirtooru wonde ceede maa neldaama.",
      "explain_fub_phonetic": "Yâdôuôure 5 : Talkourou séédamkou kollirtôrou wonde tchééde mâ neldâma.",
      "explain_fr": "Étape 5 : Preuve officielle et reçu confirmant que votre transaction a réussi.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Ékaat 5 : Kaməla ntómban e nɔŋ kalara ntílán wô.",
      "explain_ewo_phonetic": "Ékaat 5 : Kaməla ntómban e nɔŋ kalara ntílán wô.",
      "eto": "koŋfirmasíōŋ",
      "phonetic_eto": "kongfirmasíōng",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Votre compte": {
      "fub": "Limngal hisaabu maa",
      "phonetic": "Limngal hisâbou mâ",
      "explain_fub": "Nokkuure nde ceede maa resaa nder Safinum Pay.",
      "explain_fub_phonetic": "Nokkôuôure nde tchééde mâ resâ nder Safinoum Pay.",
      "explain_fr": "Votre espace bancaire personnel où figurent votre solde et votre numéro de compte.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Asúsu wô ya banki",
      "phonetic_ewo": "Asousou wô ya banki",
      "explain_ewo": "Fə́la asúsu wô ya Safinum Pay.",
      "explain_ewo_phonetic": "Fə́la asúsu wô ya Safinum Pay.",
      "eto": "Mpǝ́g mwán wɔ̄",
      "phonetic_eto": "Mpǝ́g mwán wō",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Your account": {
      "fub": "Limngal hisaabu maa",
      "phonetic": "Limngal hisâbou mâ",
      "explain_fub": "Nokkuure nde ceede maa resaa nder Safinum Pay.",
      "explain_fub_phonetic": "Nokkôuôure nde tchééde mâ resâ nder Safinoum Pay.",
      "explain_fr": "Votre espace bancaire personnel où figurent votre solde et votre numéro de compte.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Asúsu wô ya banki",
      "phonetic_ewo": "Asousou wô ya banki",
      "explain_ewo": "Fə́la asúsu wô ya Safinum Pay.",
      "explain_ewo_phonetic": "Fə́la asúsu wô ya Safinum Pay.",
      "eto": "Mpǝ́g mwán wɔ̄",
      "phonetic_eto": "Mpǝ́g mwán wō",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "VOTRE COMPTE": {
      "fub": "Limngal hisaabu maa",
      "phonetic": "Limngal hisâbou mâ",
      "explain_fub": "Nokkuure nde ceede maa resaa nder Safinum Pay.",
      "explain_fub_phonetic": "Nokkôuôure nde tchééde mâ resâ nder Safinoum Pay.",
      "explain_fr": "Votre espace bancaire personnel où figurent votre solde et votre numéro de compte.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Mpǝ́g mwán wɔ̄",
      "phonetic_eto": "Mpǝ́g mwán wō",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Bonjour, Amina": {
      "fub": "Jaɓɓaama, Amina",
      "phonetic": "Djab'b'âma, Amina",
      "explain_fub": "Salaama e jaɓɓaago Amina Ngo Bell, joom limngal hisaabu.",
      "explain_fub_phonetic": "Salâma e djab'b'âgo Amina Ngo Bell, djôm limngal hisâbou.",
      "explain_fr": "Message de bienvenue adressé à la titulaire du compte, Amina Ngo Bell.",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "M̀mǝmǝ kídî Amina",
      "phonetic_eto": "M̀mǝmǝ kídî Amina",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Hello, Amina": {
      "fub": "Jaɓɓaama, Amina",
      "phonetic": "Djab'b'âma, Amina",
      "explain_fub": "Salaama e jaɓɓaago Amina Ngo Bell, joom limngal hisaabu.",
      "explain_fub_phonetic": "Salâma e djab'b'âgo Amina Ngo Bell, djôm limngal hisâbou.",
      "explain_fr": "Message de bienvenue adressé à la titulaire du compte, Amina Ngo Bell.",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "M̀mǝmǝ kídî Amina",
      "phonetic_eto": "M̀mǝmǝ kídî Amina",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Consultez votre solde et lancez un transfert en toute sécurité.": {
      "fub": "Laartu ceede gonɗe nder limngal maa e fuɗɗu nelal ceede bee kisal timmungal.",
      "phonetic": "Lârtou tchééde gond'e nder limngal mâ e foud'd'ou nelal tchééde béé kisal timmoungal.",
      "explain_fub": "Ko adii fuu, laartu to ceede maa heƴi, ɓaawo maajum ɓillu « Neldugo ceede ».",
      "explain_fub_phonetic": "Ko adî fôuôu, lârtou to tchééde mâ hey'i, b'âwo mâjoum b'illou « Neldougo tchééde ».",
      "explain_fr": "Vérifiez d'abord le montant disponible sur votre compte avant de démarrer votre envoi d'argent.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Tál ítāŋ í mwání ugbɛlǝ̂ á mpǝ́g úlôm mwání tǝ́ pūn.",
      "phonetic_eto": "Tál ítāng í mwání ugbèlǝ̂ á mpǝ́g úlôm mwání tǝ́ pūn.",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Check your balance and start a secure transfer.": {
      "fub": "Laartu ceede gonɗe nder limngal maa e fuɗɗu nelal ceede bee kisal timmungal.",
      "phonetic": "Lârtou tchééde gond'e nder limngal mâ e foud'd'ou nelal tchééde béé kisal timmoungal.",
      "explain_fub": "Ko adii fuu, laartu to ceede maa heƴi, ɓaawo maajum ɓillu « Neldugo ceede ».",
      "explain_fub_phonetic": "Ko adî fôuôu, lârtou to tchééde mâ hey'i, b'âwo mâjoum b'illou « Neldougo tchééde ».",
      "explain_fr": "Vérifiez d'abord le montant disponible sur votre compte avant de démarrer votre envoi d'argent.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Tál ítāŋ í mwání ugbɛlǝ̂ á mpǝ́g úlôm mwání tǝ́ pūn.",
      "phonetic_eto": "Tál ítāng í mwání ugbèlǝ̂ á mpǝ́g úlôm mwání tǝ́ pūn.",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Solde disponible": {
      "fub": "Ceede gonɗe nder limngal",
      "phonetic": "Tchééde gond'e nder limngal",
      "explain_fub": "Ceede ɗe a waawi huutinirgo malla neldugo jooni-jooni (250 000 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a wâwi hôuôutinirgo malla neldougo djôni-djôni (250 000 FCFA).",
      "explain_fr": "Montant exact immédiatement utilisable sur votre compte.",
      "category": "solde",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni o nzi bəle",
      "phonetic_ewo": "Moni o nzi béulé",
      "explain_ewo": "Akɔŋ mɔni w'a né asu lóm jooni.",
      "explain_ewo_phonetic": "Akɔŋ mɔni w'a né asu lóm jooni.",
      "eto": "Táŋ ī mwání anǝ wɔ á mpǝ̄g",
      "phonetic_eto": "Táng ī mwání anǝ wo á mpǝ̄g",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Available balance": {
      "fub": "Ceede gonɗe nder limngal",
      "phonetic": "Tchééde gond'e nder limngal",
      "explain_fub": "Ceede ɗe a waawi huutinirgo malla neldugo jooni-jooni (250 000 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a wâwi hôuôutinirgo malla neldougo djôni-djôni (250 000 FCFA).",
      "explain_fr": "Montant exact immédiatement utilisable sur votre compte.",
      "category": "solde",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni o nzi bəle",
      "phonetic_ewo": "Moni o nzi béulé",
      "explain_ewo": "Akɔŋ mɔni w'a né asu lóm jooni.",
      "explain_ewo_phonetic": "Akɔŋ mɔni w'a né asu lóm jooni.",
      "eto": "Táŋ ī mwání anǝ wɔ á mpǝ̄g",
      "phonetic_eto": "Táng ī mwání anǝ wo á mpǝ̄g",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "SOLDE DISPONIBLE": {
      "fub": "Ceede gonɗe nder limngal",
      "phonetic": "Tchééde gond'e nder limngal",
      "explain_fub": "Ceede ɗe a waawi huutinirgo malla neldugo jooni-jooni (250 000 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a wâwi hôuôutinirgo malla neldougo djôni-djôni (250 000 FCFA).",
      "explain_fr": "Montant exact immédiatement utilisable sur votre compte.",
      "category": "solde",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Táŋ ī mwání anǝ wɔ á mpǝ̄g",
      "phonetic_eto": "Táng ī mwání anǝ wo á mpǝ̄g",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Compte courant": {
      "fub": "Limngal hisaabu ñalnde fuu",
      "phonetic": "Limngal hisâbou ñalnde fôuôu",
      "explain_fub": "Kofru banki maa ngam kuugalji ceede ñalnde fuu.",
      "explain_fub_phonetic": "Kofrou banki mâ ngam kôuôugalji tchééde ñalnde fôuôu.",
      "explain_fr": "Compte bancaire principal servant aux dépôts, retraits et virements quotidiens.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Táŋ ī mwání á bāŋ",
      "phonetic_eto": "Táng ī mwání á bāng",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Current account": {
      "fub": "Limngal hisaabu ñalnde fuu",
      "phonetic": "Limngal hisâbou ñalnde fôuôu",
      "explain_fub": "Kofru banki maa ngam kuugalji ceede ñalnde fuu.",
      "explain_fub_phonetic": "Kofrou banki mâ ngam kôuôugalji tchééde ñalnde fôuôu.",
      "explain_fr": "Compte bancaire principal servant aux dépôts, retraits et virements quotidiens.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Táŋ ī mwání á bāŋ",
      "phonetic_eto": "Táng ī mwání á bāng",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Effectuer un transfert": {
      "fub": "Waɗugo nelal ceede",
      "phonetic": "Wad'ougo nelal tchééde",
      "explain_fub": "Ɓillu ɗoo ngam fuɗɗugo neldugo ceede haa neɗɗo feere.",
      "explain_fub_phonetic": "B'illou d'ô ngam foud'd'ougo neldougo tchééde hâ ned'd'o féére.",
      "explain_fr": "Cliquez sur ce bouton pour commencer un envoi d'argent et passer à l'étape 2.",
      "category": "navigation",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Kwâm trásfɛɛ",
      "phonetic_eto": "Kwâm trásfèè",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Make a transfer": {
      "fub": "Waɗugo nelal ceede",
      "phonetic": "Wad'ougo nelal tchééde",
      "explain_fub": "Ɓillu ɗoo ngam fuɗɗugo neldugo ceede haa neɗɗo feere.",
      "explain_fub_phonetic": "B'illou d'ô ngam foud'd'ougo neldougo tchééde hâ ned'd'o féére.",
      "explain_fr": "Cliquez sur ce bouton pour commencer un envoi d'argent et passer à l'étape 2.",
      "category": "navigation",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Kwâm trásfɛɛ",
      "phonetic_eto": "Kwâm trásfèè",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Consulter les frais": {
      "fub": "Laartugo coggu nelal",
      "phonetic": "Lârtougo tchoggou nelal",
      "explain_fub": "Ɓillu ɗoo ngam hiisugo no foti coggu nelal ceede wonata.",
      "explain_fub_phonetic": "B'illou d'ô ngam hîsougo no foti tchoggou nelal tchééde wonata.",
      "explain_fr": "Accéder au simulateur de tarification pour connaître le coût d'un transfert.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Tál bɔ frɛ",
      "phonetic_eto": "Tál bo frè",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "View fees": {
      "fub": "Laartugo coggu nelal",
      "phonetic": "Lârtougo tchoggou nelal",
      "explain_fub": "Ɓillu ɗoo ngam hiisugo no foti coggu nelal ceede wonata.",
      "explain_fub_phonetic": "B'illou d'ô ngam hîsougo no foti tchoggou nelal tchééde wonata.",
      "explain_fr": "Accéder au simulateur de tarification pour connaître le coût d'un transfert.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Tál bɔ frɛ",
      "phonetic_eto": "Tál bo frè",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Transactions récentes": {
      "fub": "Kuugalji ceede cakkitiiɗi",
      "phonetic": "Kôuôugalji tchééde tchakkitîd'i",
      "explain_fub": "Doggol ceede ɗe naati (+) e ɗe ngurti (-) nder limngal maa ɗii balɗe.",
      "explain_fub_phonetic": "Doggol tchééde d'e nâti (+) e d'e ngourti (-) nder limngal mâ d'î bald'e.",
      "explain_fr": "Historique de vos 4 derniers mouvements d'argent (paiements et réceptions).",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Ílôm mwání úndom ákwâm",
      "phonetic_eto": "Ílôm mwání úndom ákwâm",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Recent transactions": {
      "fub": "Kuugalji ceede cakkitiiɗi",
      "phonetic": "Kôuôugalji tchééde tchakkitîd'i",
      "explain_fub": "Doggol ceede ɗe naati (+) e ɗe ngurti (-) nder limngal maa ɗii balɗe.",
      "explain_fub_phonetic": "Doggol tchééde d'e nâti (+) e d'e ngourti (-) nder limngal mâ d'î bald'e.",
      "explain_fr": "Historique de vos 4 derniers mouvements d'argent (paiements et réceptions).",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Ílôm mwání úndom ákwâm",
      "phonetic_eto": "Ílôm mwání úndom ákwâm",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "TRANSACTIONS RÉCENTES": {
      "fub": "Kuugalji ceede cakkitiiɗi",
      "phonetic": "Kôuôugalji tchééde tchakkitîd'i",
      "explain_fub": "Doggol ceede ɗe naati (+) e ɗe ngurti (-) nder limngal maa ɗii balɗe.",
      "explain_fub_phonetic": "Doggol tchééde d'e nâti (+) e d'e ngourti (-) nder limngal mâ d'î bald'e.",
      "explain_fr": "Historique de vos 4 derniers mouvements d'argent (paiements et réceptions).",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Ílôm mwání úndom ákwâm",
      "phonetic_eto": "Ílôm mwání úndom ákwâm",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Paiement marchand": {
      "fub": "Yoɓol haa joom tiggirgal (Marchand)",
      "phonetic": "Yob'ol hâ djôm tiggirgal (Marchand)",
      "explain_fub": "Ceede ɗe a yoɓii haa tiggirgal (-12 500 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a yob'î hâ tiggirgal (-12 500 FCFA).",
      "explain_fr": "Achat ou paiement effectué auprès d'un commerçant (-12 500 FCFA).",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Iyágnâ ipatila",
      "phonetic_eto": "Iyágnâ ipatila",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Merchant payment": {
      "fub": "Yoɓol haa joom tiggirgal (Marchand)",
      "phonetic": "Yob'ol hâ djôm tiggirgal (Marchand)",
      "explain_fub": "Ceede ɗe a yoɓii haa tiggirgal (-12 500 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a yob'î hâ tiggirgal (-12 500 FCFA).",
      "explain_fr": "Achat ou paiement effectué auprès d'un commerçant (-12 500 FCFA).",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Iyágnâ ipatila",
      "phonetic_eto": "Iyágnâ ipatila",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Salaire reçu": {
      "fub": "Njoɓdi kuugal (Salaire) keɓaandi",
      "phonetic": "Njob'di kôuôugal (Salaire) keb'ândi",
      "explain_fub": "Ceede njoɓdi lewru ɗe naati nder limngal maa (+180 000 FCFA).",
      "explain_fub_phonetic": "Tchééde njob'di lewrou d'e nâti nder limngal mâ (+180 000 FCFA).",
      "explain_fr": "Versement de votre salaire reçu sur le compte (+180 000 FCFA).",
      "category": "solde",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "mwán a ŋgwan úgbǝ̂",
      "phonetic_eto": "mwán a nggwan úgbǝ̂",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Salary received": {
      "fub": "Njoɓdi kuugal (Salaire) keɓaandi",
      "phonetic": "Njob'di kôuôugal (Salaire) keb'ândi",
      "explain_fub": "Ceede njoɓdi lewru ɗe naati nder limngal maa (+180 000 FCFA).",
      "explain_fub_phonetic": "Tchééde njob'di lewrou d'e nâti nder limngal mâ (+180 000 FCFA).",
      "explain_fr": "Versement de votre salaire reçu sur le compte (+180 000 FCFA).",
      "category": "solde",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "mwán a ŋgwan úgbǝ̂",
      "phonetic_eto": "mwán a nggwan úgbǝ̂",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Transfert reçu": {
      "fub": "Nelal ceede keɓaangal",
      "phonetic": "Nelal tchééde keb'ângal",
      "explain_fub": "Ceede ɗe neɗɗo neldii ma nder limngal maa (+50 000 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e ned'd'o neldî ma nder limngal mâ (+50 000 FCFA).",
      "explain_fr": "Virement d'argent reçu d'un tiers sur votre compte (+50 000 FCFA).",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Ílôm mwání mǝ́gbǝ̂",
      "phonetic_eto": "Ílôm mwání mǝ́gbǝ̂",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Transfer received": {
      "fub": "Nelal ceede keɓaangal",
      "phonetic": "Nelal tchééde keb'ângal",
      "explain_fub": "Ceede ɗe neɗɗo neldii ma nder limngal maa (+50 000 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e ned'd'o neldî ma nder limngal mâ (+50 000 FCFA).",
      "explain_fr": "Virement d'argent reçu d'un tiers sur votre compte (+50 000 FCFA).",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "Ílôm mwání mǝ́gbǝ̂",
      "phonetic_eto": "Ílôm mwání mǝ́gbǝ̂",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Facture électricité": {
      "fub": "Yoɓol talkuru kuuran (Yiite)",
      "phonetic": "Yob'ol talkourou kôuôuran (Yîte)",
      "explain_fub": "Ceede ɗe a yoɓiri talkuru kuuran (-7 500 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a yob'iri talkourou kôuôuran (-7 500 FCFA).",
      "explain_fr": "Règlement de votre facture d'électricité (-7 500 FCFA).",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "mwání a kudáŋ",
      "phonetic_eto": "mwání a kudáng",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Electricity bill": {
      "fub": "Yoɓol talkuru kuuran (Yiite)",
      "phonetic": "Yob'ol talkourou kôuôuran (Yîte)",
      "explain_fub": "Ceede ɗe a yoɓiri talkuru kuuran (-7 500 FCFA).",
      "explain_fub_phonetic": "Tchééde d'e a yob'iri talkourou kôuôuran (-7 500 FCFA).",
      "explain_fr": "Règlement de votre facture d'électricité (-7 500 FCFA).",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni a liè e asúsu",
      "phonetic_ewo": "Moni a lié é asousou",
      "explain_ewo": "Mɔni o nzi bəle e asúsu wô",
      "explain_ewo_phonetic": "Mɔni o nzi bəle e asúsu wô",
      "eto": "mwání a kudáŋ",
      "phonetic_eto": "mwání a kudáng",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Frais de transfert": {
      "fub": "Coggu nelal ceede",
      "phonetic": "Tchoggou nelal tchééde",
      "explain_fub": "Yaaduure 2 : Hiisugo coggu nelal e ceede fuu ɗe ittete.",
      "explain_fub_phonetic": "Yâdôuôure 2 : Hîsougo tchoggou nelal e tchééde fôuôu d'e ittete.",
      "explain_fr": "Étape 2 : Calcul du coût du transfert selon le canal choisi.",
      "category": "frais",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "frɛ bɔ traŋfɛɛ",
      "phonetic_eto": "frè bo trangfèè",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Transfer fees": {
      "fub": "Coggu nelal ceede",
      "phonetic": "Tchoggou nelal tchééde",
      "explain_fub": "Yaaduure 2 : Hiisugo coggu nelal e ceede fuu ɗe ittete.",
      "explain_fub_phonetic": "Yâdôuôure 2 : Hîsougo tchoggou nelal e tchééde fôuôu d'e ittete.",
      "explain_fr": "Étape 2 : Calcul du coût du transfert selon le canal choisi.",
      "category": "frais",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "frɛ bɔ traŋfɛɛ",
      "phonetic_eto": "frè bo trangfèè",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Choisissez le type de transfert et le montant. Les frais sont calculés automatiquement.": {
      "fub": "Suɓu iri laawol nelal e limngal ceede. Coggu nelal hiisete bee hoore mum.",
      "phonetic": "Soub'ou iri lâwol nelal e limngal tchééde. Tchoggou nelal hîsete béé hôre moum.",
      "explain_fub": "Nde a suɓii laawol (Safinum, Mobile Money malla Banki feere) e ceede, kuugal ngal hollirta coggu jooni-jooni.",
      "explain_fub_phonetic": "Nde a soub'î lâwol (Safinoum, Mobile Money malla Banki féére) e tchééde, kôuôugal ngal hollirta tchoggou djôni-djôni.",
      "explain_fr": "Sélectionnez le canal d'envoi et tapez le montant : la commission et le total à débiter s'affichent instantanément.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "twáb íkānî tráŋfɛ ee táŋ imwání. Táŋ itǝ́ kwamban ábɔ̄ frɛ inutɛ̂n.",
      "phonetic_eto": "twáb íkānî trángfè ee táng imwání. Táng itǝ́ kwamban ábō frè inutèn.",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Choose the transfer type and amount. Fees are calculated automatically.": {
      "fub": "Suɓu iri laawol nelal e limngal ceede. Coggu nelal hiisete bee hoore mum.",
      "phonetic": "Soub'ou iri lâwol nelal e limngal tchééde. Tchoggou nelal hîsete béé hôre moum.",
      "explain_fub": "Nde a suɓii laawol (Safinum, Mobile Money malla Banki feere) e ceede, kuugal ngal hollirta coggu jooni-jooni.",
      "explain_fub_phonetic": "Nde a soub'î lâwol (Safinoum, Mobile Money malla Banki féére) e tchééde, kôuôugal ngal hollirta tchoggou djôni-djôni.",
      "explain_fr": "Sélectionnez le canal d'envoi et tapez le montant : la commission et le total à débiter s'affichent instantanément.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "twáb íkānî tráŋfɛ ee táŋ imwání. Táŋ itǝ́ kwamban ábɔ̄ frɛ inutɛ̂n.",
      "phonetic_eto": "twáb íkānî trángfè ee táng imwání. Táng itǝ́ kwamban ábō frè inutèn.",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Type d'opération": {
      "fub": "Iri kuugal nelal",
      "phonetic": "Iri kôuôugal nelal",
      "explain_fub": "Laawol ngol ceede maa rewrata (Compte Safinum, Mobile Money, malla Autre banque).",
      "explain_fub_phonetic": "Lâwol ngol tchééde mâ rewrata (Tchompte Safinoum, Mobile Money, malla Aoutre banqoue).",
      "explain_fr": "Le réseau financier utilisé pour transmettre les fonds au bénéficiaire.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "íkāni opedasíōŋ",
      "phonetic_eto": "íkāni opedasíōng",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Operation type": {
      "fub": "Iri kuugal nelal",
      "phonetic": "Iri kôuôugal nelal",
      "explain_fub": "Laawol ngol ceede maa rewrata (Compte Safinum, Mobile Money, malla Autre banque).",
      "explain_fub_phonetic": "Lâwol ngol tchééde mâ rewrata (Tchompte Safinoum, Mobile Money, malla Aoutre banqoue).",
      "explain_fr": "Le réseau financier utilisé pour transmettre les fonds au bénéficiaire.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "íkāni opedasíōŋ",
      "phonetic_eto": "íkāni opedasíōng",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Compte Safinum": {
      "fub": "Limngal Safinum (0 FCFA - Meere)",
      "phonetic": "Limngal Safinoum (0 FCFA - Méére)",
      "explain_fub": "Neldugo haa kiliyanjo Safinum Pay feere : walaa coggu (0 FCFA).",
      "explain_fub_phonetic": "Neldougo hâ kiliyanjo Safinoum Pay féére : walâ tchoggou (0 FCFA).",
      "explain_fr": "Transfert interne vers un autre compte Safinum Pay : 100 % gratuit (0 FCFA de frais).",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Asúsu Safinum",
      "phonetic_ewo": "Asousou Safinoum",
      "explain_ewo": "Ntómban mɔni e asúsu Safinum a ne zə́zə́ (0 FCFA).",
      "explain_ewo_phonetic": "Ntómban mɔni e asúsu Safinum a ne zə́zə́ (0 FCFA).",
      "eto": "M̀pǝ́g mwání Safinum",
      "phonetic_eto": "M̀pǝ́g mwání Safinum",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Safinum account": {
      "fub": "Limngal Safinum (0 FCFA - Meere)",
      "phonetic": "Limngal Safinoum (0 FCFA - Méére)",
      "explain_fub": "Neldugo haa kiliyanjo Safinum Pay feere : walaa coggu (0 FCFA).",
      "explain_fub_phonetic": "Neldougo hâ kiliyanjo Safinoum Pay féére : walâ tchoggou (0 FCFA).",
      "explain_fr": "Transfert interne vers un autre compte Safinum Pay : 100 % gratuit (0 FCFA de frais).",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "M̀pǝ́g mwání Safinum",
      "phonetic_eto": "M̀pǝ́g mwání Safinum",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Transfert instantané et gratuit": {
      "fub": "Nelal jooni-jooni kadi meere (walaa coggu)",
      "phonetic": "Nelal djôni-djôni kadi méére (walâ tchoggou)",
      "explain_fub": "Ceede ɗe njottoto jooni-jooni kadi walaa mbuuɗu ittete dow coggu.",
      "explain_fub_phonetic": "Tchééde d'e njottoto djôni-djôni kadi walâ mbôuôud'ou ittete dow tchoggou.",
      "explain_fr": "L'argent arrive immédiatement chez le destinataire et aucun frais n'est prélevé.",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Traŋfɛ inutɛ̂n ee a zǝzǝ.",
      "phonetic_eto": "Trangfè inutèn ee a zǝzǝ.",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Instant, free transfer": {
      "fub": "Nelal jooni-jooni kadi meere (walaa coggu)",
      "phonetic": "Nelal djôni-djôni kadi méére (walâ tchoggou)",
      "explain_fub": "Ceede ɗe njottoto jooni-jooni kadi walaa mbuuɗu ittete dow coggu.",
      "explain_fub_phonetic": "Tchééde d'e njottoto djôni-djôni kadi walâ mbôuôud'ou ittete dow tchoggou.",
      "explain_fr": "L'argent arrive immédiatement chez le destinataire et aucun frais n'est prélevé.",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Traŋfɛ inutɛ̂n ee a zǝzǝ.",
      "phonetic_eto": "Trangfè inutèn ee a zǝzǝ.",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Mobile Money": {
      "fub": "Kofru Mobile Money (1,5 %)",
      "phonetic": "Kofrou Mobile Money (1,5 %)",
      "explain_fub": "Neldugo haa waya Mobile Money (coggu 1,5 %).",
      "explain_fub_phonetic": "Neldougo hâ waya Mobile Money (tchoggou 1,5 %).",
      "explain_fr": "Envoi vers un portefeuille Mobile Money (commission de 1,5 %).",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Mobây mɔ́nî",
      "phonetic_eto": "Mobây mónî",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Frais de 1,5 % (min. 100 FCFA, max. 2 500 FCFA)": {
      "fub": "Coggu nelal 1,5 % (famɗi fuu 100 FCFA, haaddi 2 500 FCFA)",
      "phonetic": "Tchoggou nelal 1,5 % (famd'i fôuôu 100 FCFA, hâddi 2 500 FCFA)",
      "explain_fub": "Kampaniiru hoosata 1,5 % dow ceede nelal; coggu les 100 FCFA walaa, kadi ɓurataa 2 500 FCFA.",
      "explain_fub_phonetic": "Kampanîrou hôsata 1,5 % dow tchééde nelal; tchoggou les 100 FCFA walâ, kadi b'ouratâ 2 500 FCFA.",
      "explain_fr": "Tarif Mobile Money : 1,5 % du montant envoyé, avec un minimum de 100 FCFA et un plafond de 2 500 FCFA.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Bɔ Frɛ púdsáŋ a pwág etwan ɛ́ mvozobo (táŋ mǝkaza ntɛd, táŋ mǝmana mintɛd mítãn)",
      "phonetic_eto": "Bo Frè púdsáng a pwág etwan é mvozobo (táng mǝkaza ntèd, táng mǝmana mintèd mítãn)",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "1.5% fee (min. 100 FCFA, max. 2,500 FCFA)": {
      "fub": "Coggu nelal 1,5 % (famɗi fuu 100 FCFA, haaddi 2 500 FCFA)",
      "phonetic": "Tchoggou nelal 1,5 % (famd'i fôuôu 100 FCFA, hâddi 2 500 FCFA)",
      "explain_fub": "Kampaniiru hoosata 1,5 % dow ceede nelal; coggu les 100 FCFA walaa, kadi ɓurataa 2 500 FCFA.",
      "explain_fub_phonetic": "Kampanîrou hôsata 1,5 % dow tchééde nelal; tchoggou les 100 FCFA walâ, kadi b'ouratâ 2 500 FCFA.",
      "explain_fr": "Tarif Mobile Money : 1,5 % du montant envoyé, avec un minimum de 100 FCFA et un plafond de 2 500 FCFA.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Bɔ Frɛ púdsáŋ a pwág etwan ɛ́ mvozobo (táŋ mǝkaza ntɛd, táŋ mǝmana mintɛd mítãn)",
      "phonetic_eto": "Bo Frè púdsáng a pwág etwan é mvozobo (táng mǝkaza ntèd, táng mǝmana mintèd mítãn)",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Autre banque": {
      "fub": "Banki feere (2 %)",
      "phonetic": "Banki féére (2 %)",
      "explain_fub": "Neldugo haa limngal banki feere (coggu 2 %).",
      "explain_fub_phonetic": "Neldougo hâ limngal banki féére (tchoggou 2 %).",
      "explain_fr": "Virement vers un compte ouvert dans une autre banque (commission de 2 %).",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Banki m̀fɛ́fɛ́ (Virement)",
      "phonetic_ewo": "Banki mfèfè (Virement)",
      "explain_ewo": "Mímvèñ mi ne 2 % ya akɔŋ mɔni w'a lóm.",
      "explain_ewo_phonetic": "Mímvèñ mi ne 2 % ya akɔŋ mɔni w'a lóm.",
      "eto": "Báŋ mpǝ́bǝ̂",
      "phonetic_eto": "Báng mpǝ́bǝ̂",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Other bank": {
      "fub": "Banki feere (2 %)",
      "phonetic": "Banki féére (2 %)",
      "explain_fub": "Neldugo haa limngal banki feere (coggu 2 %).",
      "explain_fub_phonetic": "Neldougo hâ limngal banki féére (tchoggou 2 %).",
      "explain_fr": "Virement vers un compte ouvert dans une autre banque (commission de 2 %).",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Banki m̀fɛ́fɛ́ (Virement)",
      "phonetic_ewo": "Banki mfèfè (Virement)",
      "explain_ewo": "Mímvèñ mi ne 2 % ya akɔŋ mɔni w'a lóm.",
      "explain_ewo_phonetic": "Mímvèñ mi ne 2 % ya akɔŋ mɔni w'a lóm.",
      "eto": "Báŋ mpǝ́bǝ̂",
      "phonetic_eto": "Báng mpǝ́bǝ̂",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Frais de 2 % (min. 200 FCFA, max. 5 000 FCFA)": {
      "fub": "Coggu nelal 2 % (famɗi fuu 200 FCFA, haaddi 5 000 FCFA)",
      "phonetic": "Tchoggou nelal 2 % (famd'i fôuôu 200 FCFA, hâddi 5 000 FCFA)",
      "explain_fub": "Banki hoosata 2 % dow ceede nelal; famɗi fuu 200 FCFA, kadi ɓurataa 5 000 FCFA.",
      "explain_fub_phonetic": "Banki hôsata 2 % dow tchééde nelal; famd'i fôuôu 200 FCFA, kadi b'ouratâ 5 000 FCFA.",
      "explain_fr": "Tarif interbancaire : 2 % du montant envoyé, avec un minimum de 200 FCFA et un maximum de 5 000 FCFA.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Bɔ frɛ pudsáŋ íbā (táŋ i mwání a mǝkaza mintɛd mítān táŋ i mwání á mǝmana twágsîn ítān)",
      "phonetic_eto": "Bo frè pudsáng íbā (táng i mwání a mǝkaza mintèd mítān táng i mwání á mǝmana twágsîn ítān)",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "2% fee (min. 200 FCFA, max. 5,000 FCFA)": {
      "fub": "Coggu nelal 2 % (famɗi fuu 200 FCFA, haaddi 5 000 FCFA)",
      "phonetic": "Tchoggou nelal 2 % (famd'i fôuôu 200 FCFA, hâddi 5 000 FCFA)",
      "explain_fub": "Banki hoosata 2 % dow ceede nelal; famɗi fuu 200 FCFA, kadi ɓurataa 5 000 FCFA.",
      "explain_fub_phonetic": "Banki hôsata 2 % dow tchééde nelal; famd'i fôuôu 200 FCFA, kadi b'ouratâ 5 000 FCFA.",
      "explain_fr": "Tarif interbancaire : 2 % du montant envoyé, avec un minimum de 200 FCFA et un maximum de 5 000 FCFA.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Bɔ frɛ pudsáŋ íbā (táŋ i mwání a mǝkaza mintɛd mítān táŋ i mwání á mǝmana twágsîn ítān)",
      "phonetic_eto": "Bo frè pudsáng íbā (táng i mwání a mǝkaza mintèd mítān táng i mwání á mǝmana twágsîn ítān)",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Montant à envoyer": {
      "fub": "Limngal ceede neldeteeɗe",
      "phonetic": "Limngal tchééde neldetééd'e",
      "explain_fub": "Ceede ɗe jaɓoowo heɓata (nder FCFA).",
      "explain_fub_phonetic": "Tchééde d'e djab'ôwo heb'ata (nder FCFA).",
      "explain_fr": "La somme en FCFA que vous souhaitez faire parvenir au destinataire.",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "í Táŋ ī mwání weey lom",
      "phonetic_eto": "í Táng ī mwání weey lom",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Amount to send": {
      "fub": "Limngal ceede neldeteeɗe",
      "phonetic": "Limngal tchééde neldetééd'e",
      "explain_fub": "Ceede ɗe jaɓoowo heɓata (nder FCFA).",
      "explain_fub_phonetic": "Tchééde d'e djab'ôwo heb'ata (nder FCFA).",
      "explain_fr": "La somme en FCFA que vous souhaitez faire parvenir au destinataire.",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "í Táŋ ī mwání weey lom",
      "phonetic_eto": "í Táng ī mwání weey lom",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Gratuit": {
      "fub": "Meere (0 FCFA)",
      "phonetic": "Méére (0 FCFA)",
      "explain_fub": "Walaa coggu nelal.",
      "explain_fub_phonetic": "Walâ tchoggou nelal.",
      "explain_fr": "Aucun frais de transaction.",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Zə́zə́ (0 FCFA)",
      "phonetic_ewo": "Zeuzeu (0 FCFA)",
      "explain_ewo": "Téé mímvèñ; mɔni a téé yé.",
      "explain_ewo_phonetic": "Téé mímvèñ; mɔni a téé yé.",
      "eto": "á zǝzǝ",
      "phonetic_eto": "á zǝzǝ",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Free": {
      "fub": "Meere (0 FCFA)",
      "phonetic": "Méére (0 FCFA)",
      "explain_fub": "Walaa coggu nelal.",
      "explain_fub_phonetic": "Walâ tchoggou nelal.",
      "explain_fr": "Aucun frais de transaction.",
      "category": "frais",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Zə́zə́ (0 FCFA)",
      "phonetic_ewo": "Zeuzeu (0 FCFA)",
      "explain_ewo": "Téé mímvèñ; mɔni a téé yé.",
      "explain_ewo_phonetic": "Téé mímvèñ; mɔni a téé yé.",
      "eto": "á zǝzǝ",
      "phonetic_eto": "á zǝzǝ",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Total à débiter": {
      "fub": "Ceede fuu ɗe ittete",
      "phonetic": "Tchééde fôuôu d'e ittete",
      "explain_fub": "Ceede neldeteeɗe + Coggu nelal = Ceede fuu ɗe ustete nder limngal maa.",
      "explain_fub_phonetic": "Tchééde neldetééd'e + Tchoggou nelal = Tchééde fôuôu d'e oustete nder limngal mâ.",
      "explain_fr": "Somme totale (Montant + Frais) qui sera effectivement prélevée sur votre compte.",
      "category": "frais",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Ítāŋ ī mwání beey vaza",
      "phonetic_eto": "Ítāng ī mwání beey vaza",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Total to debit": {
      "fub": "Ceede fuu ɗe ittete",
      "phonetic": "Tchééde fôuôu d'e ittete",
      "explain_fub": "Ceede neldeteeɗe + Coggu nelal = Ceede fuu ɗe ustete nder limngal maa.",
      "explain_fub_phonetic": "Tchééde neldetééd'e + Tchoggou nelal = Tchééde fôuôu d'e oustete nder limngal mâ.",
      "explain_fr": "Somme totale (Montant + Frais) qui sera effectivement prélevée sur votre compte.",
      "category": "frais",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Ítāŋ ī mwání beey vaza",
      "phonetic_eto": "Ítāng ī mwání beey vaza",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Solde après opération": {
      "fub": "Ceede keddotooɗe ɓaawo nelal",
      "phonetic": "Tchééde keddotôd'e b'âwo nelal",
      "explain_fub": "Ceede ɗe keddotoo nder kofru maa nde nelal ngal timmi.",
      "explain_fub_phonetic": "Tchééde d'e keddotô nder kofrou mâ nde nelal ngal timmi.",
      "explain_fr": "Montant qui restera disponible sur votre compte après cette opération.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Í tāŋ ī mwání á mbuz opedasíōŋ",
      "phonetic_eto": "Í tāng ī mwání á mbuz opedasíōng",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Balance after transfer": {
      "fub": "Ceede keddotooɗe ɓaawo nelal",
      "phonetic": "Tchééde keddotôd'e b'âwo nelal",
      "explain_fub": "Ceede ɗe keddotoo nder kofru maa nde nelal ngal timmi.",
      "explain_fub_phonetic": "Tchééde d'e keddotô nder kofrou mâ nde nelal ngal timmi.",
      "explain_fr": "Montant qui restera disponible sur votre compte après cette opération.",
      "category": "frais",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Mímvèñ mi ntómban",
      "phonetic_ewo": "Mimvègn mi ntomban",
      "explain_ewo": "Asúŋa mɔni asu lóm mɔni",
      "explain_ewo_phonetic": "Asúŋa mɔni asu lóm mɔni",
      "eto": "Í tāŋ ī mwání á mbuz opedasíōŋ",
      "phonetic_eto": "Í tāng ī mwání á mbuz opedasíōng",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Retour": {
      "fub": "Rutto ɓaawo",
      "phonetic": "Routto b'âwo",
      "explain_fub": "Ruttoraago haa yaaduure ɓennunde.",
      "explain_fub_phonetic": "Routtorâgo hâ yâdôuôure b'ennounde.",
      "explain_fr": "Revenir à l'étape précédente.",
      "category": "navigation",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Á mbūz",
      "phonetic_eto": "Á mbūz",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Back": {
      "fub": "Rutto ɓaawo",
      "phonetic": "Routto b'âwo",
      "explain_fub": "Ruttoraago haa yaaduure ɓennunde.",
      "explain_fub_phonetic": "Routtorâgo hâ yâdôuôure b'ennounde.",
      "explain_fr": "Revenir à l'étape précédente.",
      "category": "navigation",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Á mbūz",
      "phonetic_eto": "Á mbūz",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Continuer": {
      "fub": "Jokku yeeso",
      "phonetic": "Djokkou yééso",
      "explain_fub": "Yahugo haa yaaduure tokkoore.",
      "explain_fub_phonetic": "Yahougo hâ yâdôuôure tokkôre.",
      "explain_fr": "Valider cette étape et passer à la suivante.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Kəl osu",
      "phonetic_ewo": "Keul osou",
      "explain_ewo": "Kəl osu e ésəle.",
      "explain_ewo_phonetic": "Kəl osu e ésəle.",
      "eto": "kǝ́ úsú",
      "phonetic_eto": "kǝ́ úsú",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Continue": {
      "fub": "Jokku yeeso",
      "phonetic": "Djokkou yééso",
      "explain_fub": "Yahugo haa yaaduure tokkoore.",
      "explain_fub_phonetic": "Yahougo hâ yâdôuôure tokkôre.",
      "explain_fr": "Valider cette étape et passer à la suivante.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Kəl osu",
      "phonetic_ewo": "Keul osou",
      "explain_ewo": "Kəl osu e ésəle.",
      "explain_ewo_phonetic": "Kəl osu e ésəle.",
      "eto": "kǝ́ úsú",
      "phonetic_eto": "kǝ́ úsú",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Renseignez les informations du destinataire. Vérifiez toujours le numéro avant de valider.": {
      "fub": "Winndu kabaruuji jaɓoowo ceede. Laartu lambar waya waktu fuu hidde a tabitina.",
      "phonetic": "Winndou kabarôuôuji djab'ôwo tchééde. Lârtou lambar waya waktou fôuôu hidde a tabitina.",
      "explain_fub": "Yaaduure 3 : Laartu booyma innde e lambar waya jaɓoowo ngam ceede ɗe to majja.",
      "explain_fub_phonetic": "Yâdôuôure 3 : Lârtou bôyma innde e lambar waya djab'ôwo ngam tchééde d'e to majja.",
      "explain_fr": "Étape 3 : Indiquez l'identité et le téléphone du bénéficiaire en vérifiant chaque chiffre.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "Púd idaŋtité ímôd utǝ́ lôm mwání. Ijɔŋ ísǝ̂ tɔŋlan nɔmɔ usúsú nâ ulôm mwání",
      "phonetic_eto": "Púd idangtité ímôd utǝ́ lôm mwání. Ijong ísǝ̂ tonglan nomo usúsú nâ ulôm mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Enter the recipient details. Always verify the number before confirming.": {
      "fub": "Winndu kabaruuji jaɓoowo ceede. Laartu lambar waya waktu fuu hidde a tabitina.",
      "phonetic": "Winndou kabarôuôuji djab'ôwo tchééde. Lârtou lambar waya waktou fôuôu hidde a tabitina.",
      "explain_fub": "Yaaduure 3 : Laartu booyma innde e lambar waya jaɓoowo ngam ceede ɗe to majja.",
      "explain_fub_phonetic": "Yâdôuôure 3 : Lârtou bôyma innde e lambar waya djab'ôwo ngam tchééde d'e to majja.",
      "explain_fr": "Étape 3 : Indiquez l'identité et le téléphone du bénéficiaire en vérifiant chaque chiffre.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "Púd idaŋtité ímôd utǝ́ lôm mwání. Ijɔŋ ísǝ̂ tɔŋlan nɔmɔ usúsú nâ ulôm mwání",
      "phonetic_eto": "Púd idangtité ímôd utǝ́ lôm mwání. Ijong ísǝ̂ tonglan nomo usúsú nâ ulôm mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Ce bénéficiaire n'a jamais été utilisé sur ce compte. Vérifiez le numéro avant de continuer.": {
      "fub": "Jaɓoowo oo meeɗaa huutineego nder limngal ngal. Laartu lambar waya mum booyma hidde a jokka.",
      "phonetic": "Djab'ôwo ô mééd'â hôuôutinéégo nder limngal ngal. Lârtou lambar waya moum bôyma hidde a djokka.",
      "explain_fub": "Reentinoore kisal : ɗum nde arandeere a neldata ceede haa neɗɗo oo. Laartu lambar waya laabi ɗiɗi!",
      "explain_fub_phonetic": "Rééntinôre kisal : d'oum nde arandéére a neldata tchééde hâ ned'd'o ô. Lârtou lambar waya lâbi d'id'i!",
      "explain_fr": "Vigilance sécurité : comme c'est votre premier envoi vers ce destinataire, vérifiez son numéro et cochez la case de vérification en bas.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Imôd utǝ́ lôm mwání aŋgɛntǝ̄ bɛɛni ee mpǝ́g mwán vî. Tɔŋlan nɔmɔ usúsú nâ úkǝ̂ úsú",
      "phonetic_eto": "Imôd utǝ́ lôm mwání anggèntǝ̄ bèèni ee mpǝ́g mwán vî. Tonglan nomo usúsú nâ úkǝ̂ úsú",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "This beneficiary has never been used on this account. Verify the number before continuing.": {
      "fub": "Jaɓoowo oo meeɗaa huutineego nder limngal ngal. Laartu lambar waya mum booyma hidde a jokka.",
      "phonetic": "Djab'ôwo ô mééd'â hôuôutinéégo nder limngal ngal. Lârtou lambar waya moum bôyma hidde a djokka.",
      "explain_fub": "Reentinoore kisal : ɗum nde arandeere a neldata ceede haa neɗɗo oo. Laartu lambar waya laabi ɗiɗi!",
      "explain_fub_phonetic": "Rééntinôre kisal : d'oum nde arandéére a neldata tchééde hâ ned'd'o ô. Lârtou lambar waya lâbi d'id'i!",
      "explain_fr": "Vigilance sécurité : comme c'est votre premier envoi vers ce destinataire, vérifiez son numéro et cochez la case de vérification en bas.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Imôd utǝ́ lôm mwání aŋgɛntǝ̄ bɛɛni ee mpǝ́g mwán vî. Tɔŋlan nɔmɔ usúsú nâ úkǝ̂ úsú",
      "phonetic_eto": "Imôd utǝ́ lôm mwání anggèntǝ̄ bèèni ee mpǝ́g mwán vî. Tonglan nomo usúsú nâ úkǝ̂ úsú",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Nom du bénéficiaire": {
      "fub": "Innde jaɓoowo ceede",
      "phonetic": "Innde djab'ôwo tchééde",
      "explain_fub": "Innde e jammoore neɗɗo mo heɓata ceede ɗe.",
      "explain_fub_phonetic": "Innde e djammôre ned'd'o mo heb'ata tchééde d'e.",
      "explain_fr": "Nom complet de la personne à qui vous envoyez l'argent.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "dwě ímôd utǝ́ lôm mwánî",
      "phonetic_eto": "dwè ímôd utǝ́ lôm mwánî",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Beneficiary name": {
      "fub": "Innde jaɓoowo ceede",
      "phonetic": "Innde djab'ôwo tchééde",
      "explain_fub": "Innde e jammoore neɗɗo mo heɓata ceede ɗe.",
      "explain_fub_phonetic": "Innde e djammôre ned'd'o mo heb'ata tchééde d'e.",
      "explain_fr": "Nom complet de la personne à qui vous envoyez l'argent.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "dwě ímôd utǝ́ lôm mwánî",
      "phonetic_eto": "dwè ímôd utǝ́ lôm mwánî",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Numéro de téléphone": {
      "fub": "Lambar waya jaɓoowo",
      "phonetic": "Lambar waya djab'ôwo",
      "explain_fub": "Lambar waya (+237...) mo jaɓoowo ceede.",
      "explain_fub_phonetic": "Lambar waya (+237...) mo djab'ôwo tchééde.",
      "explain_fr": "Numéro de téléphone mobile du destinataire.",
      "category": "beneficiaire",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Nɔ́mba ya fón",
      "phonetic_ewo": "Nomba ya fon",
      "explain_ewo": "Nɔ́mba fón (+237 6xx xx xx xx).",
      "explain_ewo_phonetic": "Nɔ́mba fón (+237 6xx xx xx xx).",
      "eto": "nɔmɔ a téléfɔ̄n",
      "phonetic_eto": "nomo a téléfōn",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Phone number": {
      "fub": "Lambar waya jaɓoowo",
      "phonetic": "Lambar waya djab'ôwo",
      "explain_fub": "Lambar waya (+237...) mo jaɓoowo ceede.",
      "explain_fub_phonetic": "Lambar waya (+237...) mo djab'ôwo tchééde.",
      "explain_fr": "Numéro de téléphone mobile du destinataire.",
      "category": "beneficiaire",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Nɔ́mba ya fón",
      "phonetic_ewo": "Nomba ya fon",
      "explain_ewo": "Nɔ́mba fón (+237 6xx xx xx xx).",
      "explain_ewo_phonetic": "Nɔ́mba fón (+237 6xx xx xx xx).",
      "eto": "nɔmɔ a téléfɔ̄n",
      "phonetic_eto": "nomo a téléfōn",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Motif du transfert": {
      "fub": "Dalila nelal ceede",
      "phonetic": "Dalila nelal tchééde",
      "explain_fub": "Sabu ko a neldata ceede ɗe (yeru : yoɓol kuugal, ballal saare).",
      "explain_fub_phonetic": "Sabou ko a neldata tchééde d'e (yerou : yob'ol kôuôugal, ballal sâre).",
      "explain_fr": "Raison de l'envoi d'argent.",
      "category": "beneficiaire",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "asú jǝ̂ utǝ́ lôm mwání",
      "phonetic_eto": "asú jǝ̂ utǝ́ lôm mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Transfer reason": {
      "fub": "Dalila nelal ceede",
      "phonetic": "Dalila nelal tchééde",
      "explain_fub": "Sabu ko a neldata ceede ɗe (yeru : yoɓol kuugal, ballal saare).",
      "explain_fub_phonetic": "Sabou ko a neldata tchééde d'e (yerou : yob'ol kôuôugal, ballal sâre).",
      "explain_fr": "Raison de l'envoi d'argent.",
      "category": "beneficiaire",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "asú jǝ̂ utǝ́ lôm mwání",
      "phonetic_eto": "asú jǝ̂ utǝ́ lôm mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Note (optionnel)": {
      "fub": "Bataake pamaro (Waɗugo ɗum doole हिaa)",
      "phonetic": "Batâke pamaro (Wad'ougo d'oum dôle हिâ)",
      "explain_fub": "A waawi ɓeydugo konngol pamarel ngam jaɓoowo to a yiɗi.",
      "explain_fub_phonetic": "A wâwi b'eydougo konngol pamarel ngam djab'ôwo to a yid'i.",
      "explain_fr": "Commentaire facultatif joint au transfert.",
      "category": "beneficiaire",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "nód",
      "phonetic_eto": "nód",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Note (optional)": {
      "fub": "Bataake pamaro (Waɗugo ɗum doole हिaa)",
      "phonetic": "Batâke pamaro (Wad'ougo d'oum dôle हिâ)",
      "explain_fub": "A waawi ɓeydugo konngol pamarel ngam jaɓoowo to a yiɗi.",
      "explain_fub_phonetic": "A wâwi b'eydougo konngol pamarel ngam djab'ôwo to a yid'i.",
      "explain_fr": "Commentaire facultatif joint au transfert.",
      "category": "beneficiaire",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "nód",
      "phonetic_eto": "nód",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "J'ai vérifié le nom et le numéro du bénéficiaire.": {
      "fub": "Mi laartii booyma innde e lambar waya jaɓoowo ceede.",
      "phonetic": "Mi lârtî bôyma innde e lambar waya djab'ôwo tchééde.",
      "explain_fub": "Sey a maanta akootiiru ndu ngam tabitingo wonde lambar jaɓoowo ɗum goonga.",
      "explain_fub_phonetic": "Sey a mânta akôtîrou ndou ngam tabitingo wonde lambar djab'ôwo d'oum gônga.",
      "explain_fr": "Action obligatoire : cochez cette case pour attester que vous avez contrôlé le nom et le numéro du destinataire.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "Mǝmâ cáz dwě ee nɔmɔ ímôd mǝtǝ́ lôm mwání",
      "phonetic_eto": "Mǝmâ cáz dwè ee nomo ímôd mǝtǝ́ lôm mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "I have verified the beneficiary name and phone number.": {
      "fub": "Mi laartii booyma innde e lambar waya jaɓoowo ceede.",
      "phonetic": "Mi lârtî bôyma innde e lambar waya djab'ôwo tchééde.",
      "explain_fub": "Sey a maanta akootiiru ndu ngam tabitingo wonde lambar jaɓoowo ɗum goonga.",
      "explain_fub_phonetic": "Sey a mânta akôtîrou ndou ngam tabitingo wonde lambar djab'ôwo d'oum gônga.",
      "explain_fr": "Action obligatoire : cochez cette case pour attester que vous avez contrôlé le nom et le numéro du destinataire.",
      "category": "beneficiaire",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Nnyɔ a nɔŋ mɔni",
      "phonetic_ewo": "Nnyo a nong moni",
      "explain_ewo": "Mɔt w'a nɔŋ mɔni",
      "explain_ewo_phonetic": "Mɔt w'a nɔŋ mɔni",
      "eto": "Mǝmâ cáz dwě ee nɔmɔ ímôd mǝtǝ́ lôm mwání",
      "phonetic_eto": "Mǝmâ cáz dwè ee nomo ímôd mǝtǝ́ lôm mwání",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Vérifiez les informations avant de confirmer le transfert.": {
      "fub": "Laartu kabaruuji ɗi fuu hidde a tabitina nelal ceede ngal.",
      "phonetic": "Lârtou kabarôuôuji d'i fôuôu hidde a tabitina nelal tchééde ngal.",
      "explain_fub": "Yaaduure 4 : Janngu ceede, coggu, innde e lambar jaɓoowo hidde a ɓilla tabitingo.",
      "explain_fub_phonetic": "Yâdôuôure 4 : Djanngou tchééde, tchoggou, innde e lambar djab'ôwo hidde a b'illa tabitingo.",
      "explain_fr": "Étape 4 : Contrôlez chaque ligne du résumé avant de donner votre validation définitive.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Tɔ́ŋlân mǝpɔ́ ususu nâ úkwâm traŋsfɛ",
      "phonetic_eto": "Tónglân mǝpó ususu nâ úkwâm trangsfè",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Check the details before confirming the transfer.": {
      "fub": "Laartu kabaruuji ɗi fuu hidde a tabitina nelal ceede ngal.",
      "phonetic": "Lârtou kabarôuôuji d'i fôuôu hidde a tabitina nelal tchééde ngal.",
      "explain_fub": "Yaaduure 4 : Janngu ceede, coggu, innde e lambar jaɓoowo hidde a ɓilla tabitingo.",
      "explain_fub_phonetic": "Yâdôuôure 4 : Djanngou tchééde, tchoggou, innde e lambar djab'ôwo hidde a b'illa tabitingo.",
      "explain_fr": "Étape 4 : Contrôlez chaque ligne du résumé avant de donner votre validation définitive.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Tɔ́ŋlân mǝpɔ́ ususu nâ úkwâm traŋsfɛ",
      "phonetic_eto": "Tónglân mǝpó ususu nâ úkwâm trangsfè",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Montant": {
      "fub": "Limngal ceede",
      "phonetic": "Limngal tchééde",
      "explain_fub": "Ceede ɗe jaɓoowo heɓata.",
      "explain_fub_phonetic": "Tchééde d'e djab'ôwo heb'ata.",
      "explain_fr": "Montant net envoyé au bénéficiaire.",
      "category": "recapitulatif",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Táŋ ī mwání",
      "phonetic_eto": "Táng ī mwání",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Amount": {
      "fub": "Limngal ceede",
      "phonetic": "Limngal tchééde",
      "explain_fub": "Ceede ɗe jaɓoowo heɓata.",
      "explain_fub_phonetic": "Tchééde d'e djab'ôwo heb'ata.",
      "explain_fr": "Montant net envoyé au bénéficiaire.",
      "category": "recapitulatif",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Táŋ ī mwání",
      "phonetic_eto": "Táng ī mwání",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Total débité": {
      "fub": "Ceede fuu ɗe ittete",
      "phonetic": "Tchééde fôuôu d'e ittete",
      "explain_fub": "Ceede neldaaɗe + Coggu nelal.",
      "explain_fub_phonetic": "Tchééde neldâd'e + Tchoggou nelal.",
      "explain_fr": "Somme totale retirée de votre compte (montant + frais).",
      "category": "recapitulatif",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni mësə́ m'a kə́ man",
      "phonetic_ewo": "Moni méseulé ma keu man",
      "explain_ewo": "Akɔŋ mɔni e mímvèñ ba te e asúsu wô.",
      "explain_ewo_phonetic": "Akɔŋ mɔni e mímvèñ ba te e asúsu wô.",
      "eto": "Itāŋ ī lwání ivazban",
      "phonetic_eto": "Itāng ī lwání ivazban",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Total debited": {
      "fub": "Ceede fuu ɗe ittete",
      "phonetic": "Tchééde fôuôu d'e ittete",
      "explain_fub": "Ceede neldaaɗe + Coggu nelal.",
      "explain_fub_phonetic": "Tchééde neldâd'e + Tchoggou nelal.",
      "explain_fr": "Somme totale retirée de votre compte (montant + frais).",
      "category": "recapitulatif",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni mësə́ m'a kə́ man",
      "phonetic_ewo": "Moni méseulé ma keu man",
      "explain_ewo": "Akɔŋ mɔni e mímvèñ ba te e asúsu wô.",
      "explain_ewo_phonetic": "Akɔŋ mɔni e mímvèñ ba te e asúsu wô.",
      "eto": "Itāŋ ī lwání ivazban",
      "phonetic_eto": "Itāng ī lwání ivazban",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Téléphone": {
      "fub": "Lambar waya",
      "phonetic": "Lambar waya",
      "explain_fub": "Lambar waya jaɓoowo ceede.",
      "explain_fub_phonetic": "Lambar waya djab'ôwo tchééde.",
      "explain_fr": "Numéro de téléphone du destinataire.",
      "category": "recapitulatif",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Téléfɔ̄n",
      "phonetic_eto": "Téléfōn",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Phone": {
      "fub": "Lambar waya",
      "phonetic": "Lambar waya",
      "explain_fub": "Lambar waya jaɓoowo ceede.",
      "explain_fub_phonetic": "Lambar waya djab'ôwo tchééde.",
      "explain_fr": "Numéro de téléphone du destinataire.",
      "category": "recapitulatif",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Téléfɔ̄n",
      "phonetic_eto": "Téléfōn",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Référence": {
      "fub": "Lambar seedamku",
      "phonetic": "Lambar séédamkou",
      "explain_fub": "Lambar seedamku keeriido mo kuugal ngal (SAF-2026-...).",
      "explain_fub_phonetic": "Lambar séédamkou kéérîdo mo kôuôugal ngal (SAF-2026-...).",
      "explain_fr": "Identifiant unique de traçabilité de la transaction.",
      "category": "recapitulatif",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Lambar ya ntómban (SAF-2026-...)",
      "phonetic_ewo": "Lambar ya ntomban (SAF-2026-...)",
      "explain_ewo": "Lambar immuable ya ésəle nyina.",
      "explain_ewo_phonetic": "Lambar immuable ya ésəle nyina.",
      "eto": "Rǝféraŋs",
      "phonetic_eto": "Rǝférangs",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Reference": {
      "fub": "Lambar seedamku",
      "phonetic": "Lambar séédamkou",
      "explain_fub": "Lambar seedamku keeriido mo kuugal ngal (SAF-2026-...).",
      "explain_fub_phonetic": "Lambar séédamkou kéérîdo mo kôuôugal ngal (SAF-2026-...).",
      "explain_fr": "Identifiant unique de traçabilité de la transaction.",
      "category": "recapitulatif",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Lambar ya ntómban (SAF-2026-...)",
      "phonetic_ewo": "Lambar ya ntomban (SAF-2026-...)",
      "explain_ewo": "Lambar immuable ya ésəle nyina.",
      "explain_ewo_phonetic": "Lambar immuable ya ésəle nyina.",
      "eto": "Rǝféraŋs",
      "phonetic_eto": "Rǝférangs",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Opération": {
      "fub": "Laawol kuugal",
      "phonetic": "Lâwol kôuôugal",
      "explain_fub": "Iri nelal ngal suɓu-ɗaa.",
      "explain_fub_phonetic": "Iri nelal ngal soub'ou-d'â.",
      "explain_fr": "Canal de transfert sélectionné.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "opérasíōŋ",
      "phonetic_eto": "opérasíōng",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Operation": {
      "fub": "Laawol kuugal",
      "phonetic": "Lâwol kôuôugal",
      "explain_fub": "Iri nelal ngal suɓu-ɗaa.",
      "explain_fub_phonetic": "Iri nelal ngal soub'ou-d'â.",
      "explain_fr": "Canal de transfert sélectionné.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "opérasíōŋ",
      "phonetic_eto": "opérasíōng",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Je confirme que les informations ci-dessus sont correctes.": {
      "fub": "Mi tabitinii wonde kabaruuji gonɗi dow ɗoo fuu ɗum goonga.",
      "phonetic": "Mi tabitinî wonde kabarôuôuji gond'i dow d'ô fôuôu d'oum gônga.",
      "explain_fub": "Maantu akootiiru ndu hidde a ɓilla butoŋ « Tabitinu nelal ceede ».",
      "explain_fub_phonetic": "Mântou akôtîrou ndou hidde a b'illa boutong « Tabitinou nelal tchééde ».",
      "explain_fr": "Action obligatoire : cochez cette case pour autoriser le prélèvement et l'envoi définitif.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Ilɛ́ ntī, mǝpɔ́ mǝ́vǝ̂ mǝnǝ tɔ̄",
      "phonetic_eto": "Ilé ntī, mǝpó mǝ́vǝ̂ mǝnǝ tō",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "I confirm the information above is correct.": {
      "fub": "Mi tabitinii wonde kabaruuji gonɗi dow ɗoo fuu ɗum goonga.",
      "phonetic": "Mi tabitinî wonde kabarôuôuji gond'i dow d'ô fôuôu d'oum gônga.",
      "explain_fub": "Maantu akootiiru ndu hidde a ɓilla butoŋ « Tabitinu nelal ceede ».",
      "explain_fub_phonetic": "Mântou akôtîrou ndou hidde a b'illa boutong « Tabitinou nelal tchééde ».",
      "explain_fr": "Action obligatoire : cochez cette case pour autoriser le prélèvement et l'envoi définitif.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ntílán mebə̀lə̀ mé mɔni",
      "phonetic_ewo": "Ntilan mébeuleu mé moni",
      "explain_ewo": "Laart osu na o kaməla",
      "explain_ewo_phonetic": "Laart osu na o kaməla",
      "eto": "Ilɛ́ ntī, mǝpɔ́ mǝ́vǝ̂ mǝnǝ tɔ̄",
      "phonetic_eto": "Ilé ntī, mǝpó mǝ́vǝ̂ mǝnǝ tō",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Modifier": {
      "fub": "Waylugo",
      "phonetic": "Waylougo",
      "explain_fub": "Ruttoraago haa yaaduure 3 ngam feewnugo kabaruuji.",
      "explain_fub_phonetic": "Routtorâgo hâ yâdôuôure 3 ngam fééwnougo kabarôuôuji.",
      "explain_fr": "Revenir à l'étape précédente pour corriger une information.",
      "category": "navigation",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Cɛ́nî",
      "phonetic_eto": "Cénî",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Edit": {
      "fub": "Waylugo",
      "phonetic": "Waylougo",
      "explain_fub": "Ruttoraago haa yaaduure 3 ngam feewnugo kabaruuji.",
      "explain_fub_phonetic": "Routtorâgo hâ yâdôuôure 3 ngam fééwnougo kabarôuôuji.",
      "explain_fr": "Revenir à l'étape précédente pour corriger une information.",
      "category": "navigation",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Cɛ́nî",
      "phonetic_eto": "Cénî",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Confirmer le transfert": {
      "fub": "Tabitinu nelal ceede",
      "phonetic": "Tabitinou nelal tchééde",
      "explain_fub": "Ɓillugo ɗoo neldata ceede ɗe jooni-jooni haa jaɓoowo.",
      "explain_fub_phonetic": "B'illougo d'ô neldata tchééde d'e djôni-djôni hâ djab'ôwo.",
      "explain_fr": "Valider définitivement et envoyer les fonds maintenant.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla ntómban",
      "phonetic_ewo": "Findi / Kaméula ntomban",
      "explain_ewo": "Fíndí asu na mɔni a kə.",
      "explain_ewo_phonetic": "Fíndí asu na mɔni a kə.",
      "eto": "Vǝ́ cīŋ i traŋsfɛ",
      "phonetic_eto": "Vǝ́ cīng i trangsfè",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Confirm transfer": {
      "fub": "Tabitinu nelal ceede",
      "phonetic": "Tabitinou nelal tchééde",
      "explain_fub": "Ɓillugo ɗoo neldata ceede ɗe jooni-jooni haa jaɓoowo.",
      "explain_fub_phonetic": "B'illougo d'ô neldata tchééde d'e djôni-djôni hâ djab'ôwo.",
      "explain_fr": "Valider définitivement et envoyer les fonds maintenant.",
      "category": "recapitulatif",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla ntómban",
      "phonetic_ewo": "Findi / Kaméula ntomban",
      "explain_ewo": "Fíndí asu na mɔni a kə.",
      "explain_ewo_phonetic": "Fíndí asu na mɔni a kə.",
      "eto": "Vǝ́ cīŋ i traŋsfɛ",
      "phonetic_eto": "Vǝ́ cīng i trangsfè",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "Transfert effectué": {
      "fub": "Nelal ceede timmii bee nasaraaku",
      "phonetic": "Nelal tchééde timmî béé nasarâkou",
      "explain_fub": "Alhamdu! Ceede maa neldaama booyma haa jaɓoowo.",
      "explain_fub_phonetic": "Alhamdou! Tchééde mâ neldâma bôyma hâ djab'ôwo.",
      "explain_fr": "Opération terminée : votre virement a bien été exécuté.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Kaməla ésəle ntómban",
      "explain_ewo_phonetic": "Kaməla ésəle ntómban",
      "eto": "Traŋsfɛ ikwâmban",
      "phonetic_eto": "Trangsfè ikwâmban",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Transfer completed": {
      "fub": "Nelal ceede timmii bee nasaraaku",
      "phonetic": "Nelal tchééde timmî béé nasarâkou",
      "explain_fub": "Alhamdu! Ceede maa neldaama booyma haa jaɓoowo.",
      "explain_fub_phonetic": "Alhamdou! Tchééde mâ neldâma bôyma hâ djab'ôwo.",
      "explain_fr": "Opération terminée : votre virement a bien été exécuté.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Kaməla ésəle ntómban",
      "explain_ewo_phonetic": "Kaməla ésəle ntómban",
      "eto": "Traŋsfɛ ikwâmban",
      "phonetic_eto": "Trangsfè ikwâmban",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Votre transfert a été envoyé avec succès.": {
      "fub": "Nelal ceede maa neldaama bee nasaraaku timmungu.",
      "phonetic": "Nelal tchééde mâ neldâma béé nasarâkou timmoungou.",
      "explain_fub": "Jaɓoowo heɓii ceede ɗe. Resu lambar seedamku (SAF-2026-...) gonɗo les ɗoo.",
      "explain_fub_phonetic": "Djab'ôwo heb'î tchééde d'e. Resou lambar séédamkou (SAF-2026-...) gond'o les d'ô.",
      "explain_fr": "Les fonds ont été transmis avec succès. Conservez le numéro de référence affiché sur ce reçu.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Kaməla ésəle ntómban",
      "explain_ewo_phonetic": "Kaməla ésəle ntómban",
      "eto": "Traŋsfɛ a mina ikwâmban ee mǝkaba",
      "phonetic_eto": "Trangsfè a mina ikwâmban ee mǝkaba",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Your transfer has been sent successfully.": {
      "fub": "Nelal ceede maa neldaama bee nasaraaku timmungu.",
      "phonetic": "Nelal tchééde mâ neldâma béé nasarâkou timmoungou.",
      "explain_fub": "Jaɓoowo heɓii ceede ɗe. Resu lambar seedamku (SAF-2026-...) gonɗo les ɗoo.",
      "explain_fub_phonetic": "Djab'ôwo heb'î tchééde d'e. Resou lambar séédamkou (SAF-2026-...) gond'o les d'ô.",
      "explain_fr": "Les fonds ont été transmis avec succès. Conservez le numéro de référence affiché sur ce reçu.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Kaməla ésəle ntómban",
      "explain_ewo_phonetic": "Kaməla ésəle ntómban",
      "eto": "Traŋsfɛ a mina ikwâmban ee mǝkaba",
      "phonetic_eto": "Trangsfè a mina ikwâmban ee mǝkaba",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Statut": {
      "fub": "Darnde kuugal",
      "phonetic": "Darnde kôuôugal",
      "explain_fub": "Hollirta to nelal ngal timmii.",
      "explain_fub_phonetic": "Hollirta to nelal ngal timmî.",
      "explain_fr": "État final du traitement de la transaction.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Émvila asúsu",
      "phonetic_ewo": "Emvila asousou",
      "explain_ewo": "Laart to asúsu wô a ne m̀vɛ̀.",
      "explain_ewo_phonetic": "Laart to asúsu wô a ne m̀vɛ̀.",
      "eto": "Statu",
      "phonetic_eto": "Statu",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Status": {
      "fub": "Darnde kuugal",
      "phonetic": "Darnde kôuôugal",
      "explain_fub": "Hollirta to nelal ngal timmii.",
      "explain_fub_phonetic": "Hollirta to nelal ngal timmî.",
      "explain_fr": "État final du traitement de la transaction.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Émvila asúsu",
      "phonetic_ewo": "Emvila asousou",
      "explain_ewo": "Laart to asúsu wô a ne m̀vɛ̀.",
      "explain_ewo_phonetic": "Laart to asúsu wô a ne m̀vɛ̀.",
      "eto": "Statu",
      "phonetic_eto": "Statu",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Succès": {
      "fub": "Timmii (Nasaraaku)",
      "phonetic": "Timmî (Nasarâkou)",
      "explain_fub": "Kuugal ngal waɗii walaa boofol.",
      "explain_fub_phonetic": "Kôuôugal ngal wad'î walâ bôfol.",
      "explain_fr": "Transaction réussie et validée.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Kaməla ésəle ntómban",
      "explain_ewo_phonetic": "Kaməla ésəle ntómban",
      "eto": "Mǝkaba",
      "phonetic_eto": "Mǝkaba",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Success": {
      "fub": "Timmii (Nasaraaku)",
      "phonetic": "Timmî (Nasarâkou)",
      "explain_fub": "Kuugal ngal waɗii walaa boofol.",
      "explain_fub_phonetic": "Kôuôugal ngal wad'î walâ bôfol.",
      "explain_fr": "Transaction réussie et validée.",
      "category": "confirmation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Fíndí / Kaməla",
      "phonetic_ewo": "Findi / Kaméula",
      "explain_ewo": "Kaməla ésəle ntómban",
      "explain_ewo_phonetic": "Kaməla ésəle ntómban",
      "eto": "Mǝkaba",
      "phonetic_eto": "Mǝkaba",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Nouveau transfert": {
      "fub": "Nelal ceede kesal",
      "phonetic": "Nelal tchééde kesal",
      "explain_fub": "Ruttoraago haa yaaduure 1 ngam waɗugo nelal feere.",
      "explain_fub_phonetic": "Routtorâgo hâ yâdôuôure 1 ngam wad'ougo nelal féére.",
      "explain_fr": "Revenir à l'accueil du compte pour effectuer une autre opération.",
      "category": "navigation",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ntómban m̀fɛ́fɛ́",
      "phonetic_ewo": "Ntomban mfèfè",
      "explain_ewo": "Bo ntómban m̀fɛ́fɛ́ ya mɔni.",
      "explain_ewo_phonetic": "Bo ntómban m̀fɛ́fɛ́ ya mɔni.",
      "eto": "M̀pámgî tráŋsfɛ",
      "phonetic_eto": "M̀pámgî trángsfè",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "New transfer": {
      "fub": "Nelal ceede kesal",
      "phonetic": "Nelal tchééde kesal",
      "explain_fub": "Ruttoraago haa yaaduure 1 ngam waɗugo nelal feere.",
      "explain_fub_phonetic": "Routtorâgo hâ yâdôuôure 1 ngam wad'ougo nelal féére.",
      "explain_fr": "Revenir à l'accueil du compte pour effectuer une autre opération.",
      "category": "navigation",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Ntómban m̀fɛ́fɛ́",
      "phonetic_ewo": "Ntomban mfèfè",
      "explain_ewo": "Bo ntómban m̀fɛ́fɛ́ ya mɔni.",
      "explain_ewo_phonetic": "Bo ntómban m̀fɛ́fɛ́ ya mɔni.",
      "eto": "M̀pámgî tráŋsfɛ",
      "phonetic_eto": "M̀pámgî trángsfè",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Une erreur est survenue": {
      "fub": "Boofol waɗii nder kuugal",
      "phonetic": "Bôfol wad'î nder kôuôugal",
      "explain_fub": "Kuugal ngal daraama sabu boofol; janngu famfingo les ɗoo ngam feewnugo.",
      "explain_fub_phonetic": "Kôuôugal ngal darâma sabou bôfol; djanngou famfingo les d'ô ngam fééwnougo.",
      "explain_fr": "Une anomalie bloque l'opération : lisez l'explication ci-dessous pour savoir comment la corriger.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Dâm laánjī wul mmǝŋ",
      "phonetic_eto": "Dâm laánjī wul mmǝng",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "An error occurred": {
      "fub": "Boofol waɗii nder kuugal",
      "phonetic": "Bôfol wad'î nder kôuôugal",
      "explain_fub": "Kuugal ngal daraama sabu boofol; janngu famfingo les ɗoo ngam feewnugo.",
      "explain_fub_phonetic": "Kôuôugal ngal darâma sabou bôfol; djanngou famfingo les d'ô ngam fééwnougo.",
      "explain_fr": "Une anomalie bloque l'opération : lisez l'explication ci-dessous pour savoir comment la corriger.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Dâm laánjī wul mmǝŋ",
      "phonetic_eto": "Dâm laánjī wul mmǝng",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Alerte de sécurité": {
      "fub": "Reentinoore kisal ceede",
      "phonetic": "Rééntinôre kisal tchééde",
      "explain_fub": "Reena! Bataake kisal mawɗo ngam reenaago ceede maa.",
      "explain_fub_phonetic": "Rééna! Batâke kisal mawd'o ngam réénâgo tchééde mâ.",
      "explain_fr": "Avertissement de sécurité bancaire demandant votre vigilance avant d'envoyer l'argent.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ osu na o kaməla; a ne ngól.",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ osu na o kaməla; a ne ngól.",
      "eto": "Ukálga",
      "phonetic_eto": "Ukálga",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Security warning": {
      "fub": "Reentinoore kisal ceede",
      "phonetic": "Rééntinôre kisal tchééde",
      "explain_fub": "Reena! Bataake kisal mawɗo ngam reenaago ceede maa.",
      "explain_fub_phonetic": "Rééna! Batâke kisal mawd'o ngam réénâgo tchééde mâ.",
      "explain_fr": "Avertissement de sécurité bancaire demandant votre vigilance avant d'envoyer l'argent.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Ukálga",
      "phonetic_eto": "Ukálga",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Message important": {
      "fub": "Bataake mawɗo (Kabaruuji kisal)",
      "phonetic": "Batâke mawd'o (Kabarôuôuji kisal)",
      "explain_fub": "Kabaruuji kesi ɗi banki neldii ma jooni-jooni.",
      "explain_fub_phonetic": "Kabarôuôuji kesi d'i banki neldî ma djôni-djôni.",
      "explain_fr": "Information prioritaire affichée en temps réel sur votre espace bancaire.",
      "category": "securite",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Mpaŋ pɔ́",
      "phonetic_eto": "Mpang pó",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Important message": {
      "fub": "Bataake mawɗo (Kabaruuji kisal)",
      "phonetic": "Batâke mawd'o (Kabarôuôuji kisal)",
      "explain_fub": "Kabaruuji kesi ɗi banki neldii ma jooni-jooni.",
      "explain_fub_phonetic": "Kabarôuôuji kesi d'i banki neldî ma djôni-djôni.",
      "explain_fr": "Information prioritaire affichée en temps réel sur votre espace bancaire.",
      "category": "securite",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Mpaŋ pɔ́",
      "phonetic_eto": "Mpang pó",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "MESSAGE IMPORTANT": {
      "fub": "Bataake mawɗo (Kabaruuji kisal)",
      "phonetic": "Batâke mawd'o (Kabarôuôuji kisal)",
      "explain_fub": "Kabaruuji kesi ɗi banki neldii ma jooni-jooni.",
      "explain_fub_phonetic": "Kabarôuôuji kesi d'i banki neldî ma djôni-djôni.",
      "explain_fr": "Information prioritaire affichée en temps réel sur votre espace bancaire.",
      "category": "securite",
      "source": "03_tourneux_dictionary_csv",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Mpaŋ pɔ́",
      "phonetic_eto": "Mpang pó",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Le montant doit être supérieur à zéro.": {
      "fub": "Limngal ceede haani ɓurugo meere (0 FCFA).",
      "phonetic": "Limngal tchééde hâni b'ourougo méére (0 FCFA).",
      "explain_fub": "Boofol AMOUNT_001 : A waawaa neldugo 0 FCFA. Winndu limngal ceede (yeru : 5 000 FCFA) ngam jokkugo.",
      "explain_fub_phonetic": "Bôfol AMOUNT_001 : A wâwâ neldougo 0 FCFA. Winndou limngal tchééde (yerou : 5 000 FCFA) ngam djokkougo.",
      "explain_fr": "Explication AMOUNT_001 : Le montant saisi est égal à zéro. Tapez une somme valide supérieure à 0 FCFA.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Akɔŋ mɔni a yian bə̀ a daan zə́zə́.",
      "phonetic_ewo": "Akong moni a yian béu a dan zeuzeu.",
      "explain_ewo": "Téé lóm 0 FCFA; tili mɔni a daan zə́zə́.",
      "explain_ewo_phonetic": "Téé lóm 0 FCFA; tili mɔni a daan zə́zə́.",
      "eto": "Itáŋ i mwánî utǝ́ lód zǝzǝ",
      "phonetic_eto": "Itáng i mwánî utǝ́ lód zǝzǝ",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "The amount must be greater than zero.": {
      "fub": "Limngal ceede haani ɓurugo meere (0 FCFA).",
      "phonetic": "Limngal tchééde hâni b'ourougo méére (0 FCFA).",
      "explain_fub": "Boofol AMOUNT_001 : A waawaa neldugo 0 FCFA. Winndu limngal ceede (yeru : 5 000 FCFA) ngam jokkugo.",
      "explain_fub_phonetic": "Bôfol AMOUNT_001 : A wâwâ neldougo 0 FCFA. Winndou limngal tchééde (yerou : 5 000 FCFA) ngam djokkougo.",
      "explain_fr": "Explication AMOUNT_001 : Le montant saisi est égal à zéro. Tapez une somme valide supérieure à 0 FCFA.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Akɔŋ mɔni a yian bə̀ a daan zə́zə́.",
      "phonetic_ewo": "Akong moni a yian béu a dan zeuzeu.",
      "explain_ewo": "Téé lóm 0 FCFA; tili mɔni a daan zə́zə́.",
      "explain_ewo_phonetic": "Téé lóm 0 FCFA; tili mɔni a daan zə́zə́.",
      "eto": "Itáŋ i mwánî utǝ́ lód zǝzǝ",
      "phonetic_eto": "Itáng i mwánî utǝ́ lód zǝzǝ",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Solde insuffisant pour effectuer ce transfert.": {
      "fub": "Ceede gonɗe nder limngal maa keƴataa ngam waɗugo nelal ngal.",
      "phonetic": "Tchééde gond'e nder limngal mâ key'atâ ngam wad'ougo nelal ngal.",
      "explain_fub": "Boofol AMOUNT_002 : Ceede ɗe a yiɗi neldugo (bee coggu nelal) ɓuri ceede gonɗe nder kofru maa (250 000 FCFA). Ustu limngal ceede neldeteeɗe!",
      "explain_fub_phonetic": "Bôfol AMOUNT_002 : Tchééde d'e a yid'i neldougo (béé tchoggou nelal) b'ouri tchééde gond'e nder kofrou mâ (250 000 FCFA). Ustou limngal tchééde neldetééd'e!",
      "explain_fr": "Explication AMOUNT_002 : Vous n'avez pas assez d'argent disponible sur votre compte pour couvrir ce montant. Réduisez la somme à envoyer.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Itáŋ ī mwání ugbɛɛ isǝ́ abwî nâ úlôm mwánî",
      "phonetic_eto": "Itáng ī mwání ugbèè isǝ́ abwî nâ úlôm mwánî",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Insufficient balance for this transfer.": {
      "fub": "Ceede gonɗe nder limngal maa keƴataa ngam waɗugo nelal ngal.",
      "phonetic": "Tchééde gond'e nder limngal mâ key'atâ ngam wad'ougo nelal ngal.",
      "explain_fub": "Boofol AMOUNT_002 : Ceede ɗe a yiɗi neldugo (bee coggu nelal) ɓuri ceede gonɗe nder kofru maa (250 000 FCFA). Ustu limngal ceede neldeteeɗe!",
      "explain_fub_phonetic": "Bôfol AMOUNT_002 : Tchééde d'e a yid'i neldougo (béé tchoggou nelal) b'ouri tchééde gond'e nder kofrou mâ (250 000 FCFA). Ustou limngal tchééde neldetééd'e!",
      "explain_fr": "Explication AMOUNT_002 : Vous n'avez pas assez d'argent disponible sur votre compte pour couvrir ce montant. Réduisez la somme à envoyer.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Itáŋ ī mwání ugbɛɛ isǝ́ abwî nâ úlôm mwánî",
      "phonetic_eto": "Itáng ī mwání ugbèè isǝ́ abwî nâ úlôm mwánî",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Veuillez renseigner le nom et le numéro du bénéficiaire.": {
      "fub": "Useni winndu innde e lambar waya jaɓoowo ceede.",
      "phonetic": "Useni winndou innde e lambar waya djab'ôwo tchééde.",
      "explain_fub": "Boofol BENEFICIARY_001 : Akootiiru innde malla lambar waya jaɓoowo ɗon ɓoli. Winndu ɗi ɗiɗi fuu hidde a jokka.",
      "explain_fub_phonetic": "Bôfol BENEFICIARY_001 : Akôtîrou innde malla lambar waya djab'ôwo d'on b'oli. Winndou d'i d'id'i fôuôu hidde a djokka.",
      "explain_fr": "Explication BENEFICIARY_001 : Il manque le nom ou le numéro de téléphone du destinataire. Remplissez les deux champs obligatoires.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Púd do ee nɔmɔ ímôd utǝ́ lôm mwání",
      "phonetic_eto": "Púd do ee nomo ímôd utǝ́ lôm mwání",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Please provide the beneficiary name and phone number.": {
      "fub": "Useni winndu innde e lambar waya jaɓoowo ceede.",
      "phonetic": "Useni winndou innde e lambar waya djab'ôwo tchééde.",
      "explain_fub": "Boofol BENEFICIARY_001 : Akootiiru innde malla lambar waya jaɓoowo ɗon ɓoli. Winndu ɗi ɗiɗi fuu hidde a jokka.",
      "explain_fub_phonetic": "Bôfol BENEFICIARY_001 : Akôtîrou innde malla lambar waya djab'ôwo d'on b'oli. Winndou d'i d'id'i fôuôu hidde a djokka.",
      "explain_fr": "Explication BENEFICIARY_001 : Il manque le nom ou le numéro de téléphone du destinataire. Remplissez les deux champs obligatoires.",
      "category": "erreur",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Púd do ee nɔmɔ ímôd utǝ́ lôm mwání",
      "phonetic_eto": "Púd do ee nomo ímôd utǝ́ lôm mwání",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Alerte de sécurité : vérifiez le numéro du bénéficiaire avant de continuer.": {
      "fub": "Reentinoore kisal : laartu lambar waya jaɓoowo kadi maantu akootiiru tabitingol hidde a jokka.",
      "phonetic": "Rééntinôre kisal : lârtou lambar waya djab'ôwo kadi mântou akôtîrou tabitingol hidde a djokka.",
      "explain_fub": "Boofol SECURITY_001 : Sey a laarta lambar waya jaɓoowo kadi a maanta akootiiru « Mi laartii booyma innde e lambar waya » les ɗoo.",
      "explain_fub_phonetic": "Bôfol SECURITY_001 : Sey a lârta lambar waya djab'ôwo kadi a mânta akôtîrou « Mi lârtî bôyma innde e lambar waya » les d'ô.",
      "explain_fr": "Explication SECURITY_001 : Par sécurité, vous devez vérifier le numéro du destinataire et cocher la case « J'ai vérifié le nom et le numéro du bénéficiaire » avant de continuer.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Ukálga : tál nɔmɔ ímôd utǝ́ lôm mwáni usúsú nâ úkǝ̂ usú.",
      "phonetic_eto": "Ukálga : tál nomo ímôd utǝ́ lôm mwáni usúsú nâ úkǝ̂ usú.",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Security warning: verify the beneficiary phone number before continuing.": {
      "fub": "Reentinoore kisal : laartu lambar waya jaɓoowo kadi maantu akootiiru tabitingol hidde a jokka.",
      "phonetic": "Rééntinôre kisal : lârtou lambar waya djab'ôwo kadi mântou akôtîrou tabitingol hidde a djokka.",
      "explain_fub": "Boofol SECURITY_001 : Sey a laarta lambar waya jaɓoowo kadi a maanta akootiiru « Mi laartii booyma innde e lambar waya » les ɗoo.",
      "explain_fub_phonetic": "Bôfol SECURITY_001 : Sey a lârta lambar waya djab'ôwo kadi a mânta akôtîrou « Mi lârtî bôyma innde e lambar waya » les d'ô.",
      "explain_fr": "Explication SECURITY_001 : Par sécurité, vous devez vérifier le numéro du destinataire et cocher la case « J'ai vérifié le nom et le numéro du bénéficiaire » avant de continuer.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Ukálga : tál nɔmɔ ímôd utǝ́ lôm mwáni usúsú nâ úkǝ̂ usú.",
      "phonetic_eto": "Ukálga : tál nomo ímôd utǝ́ lôm mwáni usúsú nâ úkǝ̂ usú.",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Alerte de sécurité : ce bénéficiaire n'a jamais été utilisé sur ce compte.": {
      "fub": "Reentinoore kisal : jaɓoowo ceede oo meeɗaa huutineego nder limngal hisaabu ngal.",
      "phonetic": "Rééntinôre kisal : djab'ôwo tchééde ô mééd'â hôuôutinéégo nder limngal hisâbou ngal.",
      "explain_fub": "Reentinoore SECURITY_002 : Neɗɗo oo ɗum keso nder limngal maa. Reena nguyka : laartu innde mum e lambar waya mum laabi ɗiɗi hidde a nelda ceede!",
      "explain_fub_phonetic": "Rééntinôre SECURITY_002 : Ned'd'o ô d'oum keso nder limngal mâ. Rééna ngouyka : lârtou innde moum e lambar waya moum lâbi d'id'i hidde a nelda tchééde!",
      "explain_fr": "Explication SECURITY_002 : Vous n'avez encore jamais envoyé d'argent à ce contact. Assurez-vous qu'il s'agit bien de la bonne personne et du bon numéro.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Ukalga : ímôd utǝ́ lôm mwání aŋgɛ́ntə̄ bɛɛni ee mpǝ́g mwán vî.",
      "phonetic_eto": "Ukalga : ímôd utǝ́ lôm mwání anggénteū bèèni ee mpǝ́g mwán vî.",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Security warning: this beneficiary has never been used on this account.": {
      "fub": "Reentinoore kisal : jaɓoowo ceede oo meeɗaa huutineego nder limngal hisaabu ngal.",
      "phonetic": "Rééntinôre kisal : djab'ôwo tchééde ô mééd'â hôuôutinéégo nder limngal hisâbou ngal.",
      "explain_fub": "Reentinoore SECURITY_002 : Neɗɗo oo ɗum keso nder limngal maa. Reena nguyka : laartu innde mum e lambar waya mum laabi ɗiɗi hidde a nelda ceede!",
      "explain_fub_phonetic": "Rééntinôre SECURITY_002 : Ned'd'o ô d'oum keso nder limngal mâ. Rééna ngouyka : lârtou innde moum e lambar waya moum lâbi d'id'i hidde a nelda tchééde!",
      "explain_fr": "Explication SECURITY_002 : Vous n'avez encore jamais envoyé d'argent à ce contact. Assurez-vous qu'il s'agit bien de la bonne personne et du bon numéro.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Ukalga : ímôd utǝ́ lôm mwání aŋgɛ́ntə̄ bɛɛni ee mpǝ́g mwán vî.",
      "phonetic_eto": "Ukalga : ímôd utǝ́ lôm mwání anggénteū bèèni ee mpǝ́g mwán vî.",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Erreur réseau : le service est temporairement indisponible. Réessayez.": {
      "fub": "Boofol laawol enternet : kuugal ngal ɗon darii seeɗa jooni. Useni jarribu fahin.",
      "phonetic": "Bôfol lâwol enternet : kôuôugal ngal d'on darî sééd'a djôni. Useni djarribou fahin.",
      "explain_fub": "Boofol NETWORK_001 : Jokkondiral enternet ɗon mari caɗeele jooni. Hakkillo maa hisu : walaa mbuuɗu (0 FCFA) ittaa nder limngal maa! Munyu seeɗa kadi jarribu fahin.",
      "explain_fub_phonetic": "Bôfol NETWORK_001 : Djokkondiral enternet d'on mari tchad'ééle djôni. Hakkillo mâ hisou : walâ mbôuôud'ou (0 FCFA) ittâ nder limngal mâ! Mounyou sééd'a kadi djarribou fahin.",
      "explain_fr": "Explication NETWORK_001 : Le réseau est momentanément coupé. Rassurez-vous : aucun argent n'a été débité de votre compte. Patientez quelques instants puis réessayez.",
      "category": "erreur",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Ivuz i reso : dàm ɛ́tǝ̄ dǝ́glǝ. Dúgnǝ̂ ndǝ̄ŋ á mbūz",
      "phonetic_eto": "Ivuz i reso : dàm étǝ̄ dǝ́glǝ. Dúgnǝ̂ ndǝ̄ng á mbūz",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Network error: the service is temporarily unavailable. Please try again.": {
      "fub": "Boofol laawol enternet : kuugal ngal ɗon darii seeɗa jooni. Useni jarribu fahin.",
      "phonetic": "Bôfol lâwol enternet : kôuôugal ngal d'on darî sééd'a djôni. Useni djarribou fahin.",
      "explain_fub": "Boofol NETWORK_001 : Jokkondiral enternet ɗon mari caɗeele jooni. Hakkillo maa hisu : walaa mbuuɗu (0 FCFA) ittaa nder limngal maa! Munyu seeɗa kadi jarribu fahin.",
      "explain_fub_phonetic": "Bôfol NETWORK_001 : Djokkondiral enternet d'on mari tchad'ééle djôni. Hakkillo mâ hisou : walâ mbôuôud'ou (0 FCFA) ittâ nder limngal mâ! Mounyou sééd'a kadi djarribou fahin.",
      "explain_fr": "Explication NETWORK_001 : Le réseau est momentanément coupé. Rassurez-vous : aucun argent n'a été débité de votre compte. Patientez quelques instants puis réessayez.",
      "category": "erreur",
      "source": "18_waxal_unesco_bamako_orthography",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Ivuz i reso : dàm ɛ́tǝ̄ dǝ́glǝ. Dúgnǝ̂ ndǝ̄ŋ á mbūz",
      "phonetic_eto": "Ivuz i reso : dàm étǝ̄ dǝ́glǝ. Dúgnǝ̂ ndǝ̄ng á mbūz",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Vous devez confirmer les informations avant de valider le transfert.": {
      "fub": "Sey a maanta akootiiru tabitingol kabaruuji ɗi hidde a nelda ceede ɗe.",
      "phonetic": "Sey a mânta akôtîrou tabitingol kabarôuôuji d'i hidde a nelda tchééde d'e.",
      "explain_fub": "Boofol CONFIRM_001 : A yejjitii maantugo akootiiru tabitingol. Ɓillu nder akootiiru « Mi tabitinii wonde kabaruuji ɗi ɗum goonga » hidde a nelda.",
      "explain_fub_phonetic": "Bôfol TchONFIRM_001 : A yejjitî mântougo akôtîrou tabitingol. B'illou nder akôtîrou « Mi tabitinî wonde kabarôuôuji d'i d'oum gônga » hidde a nelda.",
      "explain_fr": "Explication CONFIRM_001 : Vous devez cocher la case « Je confirme que les informations ci-dessus sont correctes » avant de cliquer sur le bouton de confirmation.",
      "category": "erreur",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Ugbɛɛ ú cɔŋfidmé mǝpɔ́ usúsú nâ ujǝ́blǝ̂ traŋsfɛ",
      "phonetic_eto": "Ugbèè ú congfidmé mǝpó usúsú nâ ujǝ́blǝ̂ trangsfè",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "You must confirm the details before validating the transfer.": {
      "fub": "Sey a maanta akootiiru tabitingol kabaruuji ɗi hidde a nelda ceede ɗe.",
      "phonetic": "Sey a mânta akôtîrou tabitingol kabarôuôuji d'i hidde a nelda tchééde d'e.",
      "explain_fub": "Boofol CONFIRM_001 : A yejjitii maantugo akootiiru tabitingol. Ɓillu nder akootiiru « Mi tabitinii wonde kabaruuji ɗi ɗum goonga » hidde a nelda.",
      "explain_fub_phonetic": "Bôfol TchONFIRM_001 : A yejjitî mântougo akôtîrou tabitingol. B'illou nder akôtîrou « Mi tabitinî wonde kabarôuôuji d'i d'oum gônga » hidde a nelda.",
      "explain_fr": "Explication CONFIRM_001 : Vous devez cocher la case « Je confirme que les informations ci-dessus sont correctes » avant de cliquer sur le bouton de confirmation.",
      "category": "erreur",
      "source": "02_safinum_wave_sponsor_corpus",
      "ewo": "Díza e ntebán",
      "phonetic_ewo": "Diza é ntéban",
      "explain_ewo": "Díza é maneya kwə́",
      "explain_ewo_phonetic": "Díza é maneya kwə́",
      "eto": "Ugbɛɛ ú cɔŋfidmé mǝpɔ́ usúsú nâ ujǝ́blǝ̂ traŋsfɛ",
      "phonetic_eto": "Ugbèè ú congfidmé mǝpó usúsú nâ ujǝ́blǝ̂ trangsfè",
      "explain_eto": "Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
      "explain_eto_phonetic": "Ijong ntéban : dam ikwam li iné ndaman, douga kòl."
    },
    "Sécurité": {
      "fub": "Kisal ceede",
      "phonetic": "Kisal tchééde",
      "explain_fub": "Tinndinoore ngam reenaago ceede maa.",
      "explain_fub_phonetic": "Tinndinôre ngam réénâgo tchééde mâ.",
      "explain_fr": "Conseils de protection contre les erreurs et la fraude.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Sékudíté",
      "phonetic_eto": "Sékudíté",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Security": {
      "fub": "Kisal ceede",
      "phonetic": "Kisal tchééde",
      "explain_fub": "Tinndinoore ngam reenaago ceede maa.",
      "explain_fub_phonetic": "Tinndinôre ngam réénâgo tchééde mâ.",
      "explain_fr": "Conseils de protection contre les erreurs et la fraude.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "Sékudíté",
      "phonetic_eto": "Sékudíté",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Vérifiez toujours le nom et le numéro du bénéficiaire avant de confirmer un transfert.": {
      "fub": "Laartu waktu fuu innde e lambar waya jaɓoowo ceede hidde a tabitina nelal.",
      "phonetic": "Lârtou waktou fôuôu innde e lambar waya djab'ôwo tchééde hidde a tabitina nelal.",
      "explain_fub": "Nelal ceede waawaa ruttineego to lambar boofii. Laartu innde e lambar waktu fuu!",
      "explain_fub_phonetic": "Nelal tchééde wâwâ routtinéégo to lambar bôfî. Lârtou innde e lambar waktou fôuôu!",
      "explain_fr": "Règle essentielle : contrôlez systématiquement le nom et le numéro du destinataire avant chaque envoi.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "ijɔŋ isǝ tāl swě ee nɔmɔ ímôd utǝ́ lôm mwání usúsú nâ úkɔŋfidmé traŋsfɛ",
      "phonetic_eto": "ijong isǝ tāl swè ee nomo ímôd utǝ́ lôm mwání usúsú nâ úkongfidmé trangsfè",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Always verify the beneficiary name and number before confirming a transfer.": {
      "fub": "Laartu waktu fuu innde e lambar waya jaɓoowo ceede hidde a tabitina nelal.",
      "phonetic": "Lârtou waktou fôuôu innde e lambar waya djab'ôwo tchééde hidde a tabitina nelal.",
      "explain_fub": "Nelal ceede waawaa ruttineego to lambar boofii. Laartu innde e lambar waktu fuu!",
      "explain_fub_phonetic": "Nelal tchééde wâwâ routtinéégo to lambar bôfî. Lârtou innde e lambar waktou fôuôu!",
      "explain_fr": "Règle essentielle : contrôlez systématiquement le nom et le numéro du destinataire avant chaque envoi.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "ijɔŋ isǝ tāl swě ee nɔmɔ ímôd utǝ́ lôm mwání usúsú nâ úkɔŋfidmé traŋsfɛ",
      "phonetic_eto": "ijong isǝ tāl swè ee nomo ímôd utǝ́ lôm mwání usúsú nâ úkongfidmé trangsfè",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Connexion sécurisée": {
      "fub": "Jokkondiral kisiingal (Chiffré)",
      "phonetic": "Djokkondiral kisîngal (Tchhiffré)",
      "explain_fub": "Laawol enternet Safinum Pay ɗon reena kabaruuji maa.",
      "explain_fub_phonetic": "Lâwol enternet Safinoum Pay d'on rééna kabarôuôuji mâ.",
      "explain_fr": "Votre connexion avec Safinum Pay est protégée et chiffrée.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "kɔnɛksíōŋ ityâ ɛŋgaŋ",
      "phonetic_eto": "konèksíōng ityâ ènggang",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Secure connection": {
      "fub": "Jokkondiral kisiingal (Chiffré)",
      "phonetic": "Djokkondiral kisîngal (Tchhiffré)",
      "explain_fub": "Laawol enternet Safinum Pay ɗon reena kabaruuji maa.",
      "explain_fub_phonetic": "Lâwol enternet Safinoum Pay d'on rééna kabarôuôuji mâ.",
      "explain_fr": "Votre connexion avec Safinum Pay est protégée et chiffrée.",
      "category": "securite",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Yian mebə̀lə̀ mé ngól",
      "phonetic_ewo": "Yian mébeuleu mé ngól",
      "explain_ewo": "Laart m̀vɛ̀ kót wô",
      "explain_ewo_phonetic": "Laart m̀vɛ̀ kót wô",
      "eto": "kɔnɛksíōŋ ityâ ɛŋgaŋ",
      "phonetic_eto": "konèksíōng ityâ ènggang",
      "explain_eto": "Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
      "explain_eto_phonetic": "Kandèl i lébdé : té wa vag kòd wô éé mòd."
    },
    "Safinum Pay — environnement de démonstration. Ne saisissez aucune donnée personnelle réelle.": {
      "fub": "Safinum Pay — nokkuure jarribo kuugal. To winndu kabaruuji maa cuuɗiiɗi goonga ɗoo.",
      "phonetic": "Safinoum Pay — nokkôuôure djarribo kôuôugal. To winndou kabarôuôuji mâ tchôuôud'îd'i gônga d'ô.",
      "explain_fub": "Hello ngoo ɗum ngam jarribo Hackathon SAFINUM 2026 tan.",
      "explain_fub_phonetic": "Hello ngô d'oum ngam djarribo Hatchkathon SAFINUM 2026 tan.",
      "explain_fr": "Environnement de démonstration : n'entrez jamais vos vrais codes secrets ou coordonnées bancaires réelles.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Safinum pay ɛ́nǝ̂ zǝkúl á ŋkâb. Bǝ́lígî idaŋtíté wɔ̂ i wē",
      "phonetic_eto": "Safinum pay énǝ̂ zǝkúl á ngkâb. Bǝ́lígî idangtíté wô i wē",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Safinum Pay — demonstration environment. Do not enter real personal data.": {
      "fub": "Safinum Pay — nokkuure jarribo kuugal. To winndu kabaruuji maa cuuɗiiɗi goonga ɗoo.",
      "phonetic": "Safinoum Pay — nokkôuôure djarribo kôuôugal. To winndou kabarôuôuji mâ tchôuôud'îd'i gônga d'ô.",
      "explain_fub": "Hello ngoo ɗum ngam jarribo Hackathon SAFINUM 2026 tan.",
      "explain_fub_phonetic": "Hello ngô d'oum ngam djarribo Hatchkathon SAFINUM 2026 tan.",
      "explain_fr": "Environnement de démonstration : n'entrez jamais vos vrais codes secrets ou coordonnées bancaires réelles.",
      "category": "navigation",
      "source": "01_aki_osc_financial_glossary",
      "ewo": "Ésəle ya enternet",
      "phonetic_ewo": "Eseule ya enternet",
      "explain_ewo": "Fáám ésəle banki",
      "explain_ewo_phonetic": "Fáám ésəle banki",
      "eto": "Safinum pay ɛ́nǝ̂ zǝkúl á ŋkâb. Bǝ́lígî idaŋtíté wɔ̂ i wē",
      "phonetic_eto": "Safinum pay énǝ̂ zǝkúl á ngkâb. Bǝ́lígî idangtíté wô i wē",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé.": {
      "fub": "« ipǝ́ yî inǝ nǝ́ ŋkâd asú hackaton vǝdâ laáyeey mbyadgan ee m̀paŋ mwání. »",
      "phonetic": "ipǝ́ yî inǝ nǝ́ ngkâd asú hackaton vǝdâ laáyeey mbyadgan ee m pang mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_001",
      "ewo": "ipǝ́ yî inǝ nǝ́ ŋkâd asú hackaton vǝdâ laáyeey mbyadgan ee m̀paŋ mwání.",
      "phonetic_ewo": "ipǝ́ yî inǝ nǝ́ ngkâd asú hackaton vǝdâ laáyeey mbyadgan ee m pang mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "ipǝ́ yî inǝ nǝ́ ŋkâd asú hackaton vǝdâ laáyeey mbyadgan ee m̀paŋ mwání.",
      "phonetic_eto": "ipǝ́ yî inǝ nǝ́ ngkâd asú hackaton vǝdâ laáyeey mbyadgan ee m pang mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Service bancaire numérique accessible depuis votre téléphone ou ordinateur.": {
      "fub": "Isá ī báŋ nǝ́ unǝ bɛlnǝ ee yɔ̂ vôm úsǝ̂ ŋgǝ́ ee ŋkwǎl wɔ̂ ŋgǝ ee ɔrdinateur wɔ̂ .",
      "phonetic": "Isá ī báng nǝ́ unǝ bèlnǝ ee yô vôm úsǝ̂ nggǝ́ ee ngkwàl wô nggǝ ee ordinateur wô .",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Service bancaire numérique accessible depuis votre téléphone ou ordinateur.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_002",
      "ewo": "Isá ī báŋ nǝ́ unǝ bɛlnǝ ee yɔ̂ vôm úsǝ̂ ŋgǝ́ ee ŋkwǎl wɔ̂ ŋgǝ ee ɔrdinateur wɔ̂ .",
      "phonetic_ewo": "Isá ī báng nǝ́ unǝ bèlnǝ ee yô vôm úsǝ̂ nggǝ́ ee ngkwàl wô nggǝ ee ordinateur wô .",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Isá ī báŋ nǝ́ unǝ bɛlnǝ ee yɔ̂ vôm úsǝ̂ ŋgǝ́ ee ŋkwǎl wɔ̂ ŋgǝ ee ɔrdinateur wɔ̂ .",
      "phonetic_eto": "Isá ī báng nǝ́ unǝ bèlnǝ ee yô vôm úsǝ̂ nggǝ́ ee ngkwàl wô nggǝ ee ordinateur wô .",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Document officiel présentant les consignes et le barème de test du hackathon.": {
      "fub": "Mǝpǝ́b mǝ̄ ŋgwamnɔ mǝvǝ́gǝ̂ mǝlǝ́bgǝ̂ ee táŋ í ŋkad í hakaton.",
      "phonetic": "Mǝpǝ́b mǝ̄ nggwamno mǝvǝ́gǝ̂ mǝlǝ́bgǝ̂ ee táng í ngkad í hakaton.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Document officiel présentant les consignes et le barème de test du hackathon.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_003",
      "ewo": "Mǝpǝ́b mǝ̄ ŋgwamnɔ mǝvǝ́gǝ̂ mǝlǝ́bgǝ̂ ee táŋ í ŋkad í hakaton.",
      "phonetic_ewo": "Mǝpǝ́b mǝ̄ nggwamno mǝvǝ́gǝ̂ mǝlǝ́bgǝ̂ ee táng í ngkad í hakaton.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mǝpǝ́b mǝ̄ ŋgwamnɔ mǝvǝ́gǝ̂ mǝlǝ́bgǝ̂ ee táŋ í ŋkad í hakaton.",
      "phonetic_eto": "Mǝpǝ́b mǝ̄ nggwamno mǝvǝ́gǝ̂ mǝlǝ́bgǝ̂ ee táng í ngkad í hakaton.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Revenir à la page principale de présentation du Hackathon SAFINUM.": {
      "fub": "Dúgnǝ̂ sɔ̄  á wúnâ ílɛ̄d ɲǒl í Hakaton.",
      "phonetic": "Dúgnǝ̂ sō á wúnâ ílè̄d gnòl í Hakaton.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Revenir à la page principale de présentation du Hackathon SAFINUM.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_004",
      "ewo": "Dúgnǝ̂ sɔ̄ á wúnâ ílɛ̄d ɲǒl í Hakaton.",
      "phonetic_ewo": "Dúgnǝ̂ sō á wúnâ ílè̄d gnòl í Hakaton.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dúgnǝ̂ sɔ̄ á wúnâ ílɛ̄d ɲǒl í Hakaton.",
      "phonetic_eto": "Dúgnǝ̂ sō á wúnâ ílè̄d gnòl í Hakaton.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Étape 1 : Somme d'argent actuellement disponible sur votre compte.": {
      "fub": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "phonetic": "Itǝ́ ivwág : itáng i mwání inǝ́ ā ng̀kòb wô.",
      "explain_fub": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_fub_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô.",
      "explain_fr": "Étape 1 : Somme d'argent actuellement disponible sur votre compte.",
      "category": "solde",
      "source": "maloba_dataset_eton_SAF_EXP_005",
      "ewo": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "phonetic_ewo": "Itǝ́ ivwág : itáng i mwání inǝ́ ā ng̀kòb wô.",
      "explain_ewo": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_ewo_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô.",
      "eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ wɔ ā mpǝ́g mwání.",
      "phonetic_eto": "Itǝ́ ivwág : itáng i mwání inǝ́ wo ā mpǝ́g mwání.",
      "explain_eto": "Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
      "explain_eto_phonetic": "Ité ivwag : itang i mwani iné a ngkòb wô."
    },
    "Commission prélevée par le service financier pour traiter l'envoi de votre argent.": {
      "fub": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "phonetic": "ídâm isá í mwání itǝ́ gnong ijong ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_fub": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_fub_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani.",
      "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent.",
      "category": "frais",
      "source": "maloba_dataset_eton_SAF_EXP_006",
      "ewo": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "phonetic_ewo": "ídâm isá í mwání itǝ́ gnong ijong ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_ewo": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_ewo_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani.",
      "eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "phonetic_eto": "ídâm isá í mwání itǝ́ gnong ijong ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto": "ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
      "explain_eto_phonetic": "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."
    },
    "Étape 4 : Résumé complet de votre opération pour tout vérifier avant le paiement définitif.": {
      "fub": "Itǝ́ na : ijwam í dâm ɛ́sǝ̂ ukwam  ususwâ nâ uyagnǝ mwání.",
      "phonetic": "Itǝ́ na : ijwam í dâm ésǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_fub": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_fub_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani.",
      "explain_fr": "Étape 4 : Résumé complet de votre opération pour tout vérifier avant le paiement définitif.",
      "category": "recapitulatif",
      "source": "maloba_dataset_eton_SAF_EXP_008",
      "ewo": "Itǝ́ na : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "phonetic_ewo": "Itǝ́ na : ijwam í dâm ésǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_ewo": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_ewo_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani.",
      "eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "phonetic_eto": "Itǝ́ ína : ijwam í dâm ésǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto": "Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
      "explain_eto_phonetic": "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."
    },
    "La personne qui va recevoir l'argent que vous envoyez.": {
      "fub": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm.",
      "phonetic": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm.",
      "explain_fub": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_fub_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô.",
      "explain_fr": "La personne qui va recevoir l'argent que vous envoyez.",
      "category": "beneficiaire",
      "source": "maloba_dataset_eton_SAF_EXP_007",
      "ewo": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm.",
      "phonetic_ewo": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm.",
      "explain_ewo": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_ewo_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô.",
      "eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm.",
      "phonetic_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm.",
      "explain_eto": "Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
      "explain_eto_phonetic": "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."
    },
    "Étape 5 : Preuve officielle et reçu confirmant que votre transaction a réussi.": {
      "fub": "Itǝ́ ítān : ndǝm í ŋgwamnɔ ee ɛpǝ́b bǝ́lɛ̄gǝ̂ nâ ílôm i mwání íkâb.",
      "phonetic": "Itǝ́ ítān : ndǝm í nggwamno ee èpǝ́b bǝ́lè̄gǝ̂ nâ ílôm i mwání íkâb.",
      "explain_fub": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_fub_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani.",
      "explain_fr": "Étape 5 : Preuve officielle et reçu confirmant que votre transaction a réussi.",
      "category": "confirmation",
      "source": "maloba_dataset_eton_SAF_EXP_009",
      "ewo": "Itǝ́ ítān : ndǝm í ŋgwamnɔ ee ɛpǝ́b bǝ́lɛ̄gǝ̂ nâ ílôm i mwání íkâb.",
      "phonetic_ewo": "Itǝ́ ítān : ndǝm í nggwamno ee èpǝ́b bǝ́lè̄gǝ̂ nâ ílôm i mwání íkâb.",
      "explain_ewo": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_ewo_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani.",
      "eto": "Itǝ́ ítān : ndǝm í ŋgwamnɔ ee ɛpǝ́b bǝ́lɛ̄gǝ̂ nâ ílôm i mwání íkâb.",
      "phonetic_eto": "Itǝ́ ítān : ndǝm í nggwamno ee èpǝ́b bǝ́lè̄gǝ̂ nâ ílôm i mwání íkâb.",
      "explain_eto": "Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
      "explain_eto_phonetic": "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."
    },
    "Votre espace bancaire personnel où figurent votre solde et votre numéro de compte.": {
      "fub": "Ɛpolo ɛ́ bāŋ daání ɛtǝ́ lɛ́dǝ̂ mwan wɔ̄ ee nɔmɔ a ŋkɔb wɔ̂.",
      "phonetic": "Ɛpolo é bāng daání ètǝ́ lédǝ̂ mwan wō ee nomo a ngkob wô.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Votre espace bancaire personnel où figurent votre solde et votre numéro de compte.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_010",
      "ewo": "Ɛpolo ɛ́ bāŋ daání ɛtǝ́ lɛ́dǝ̂ mwan wɔ̄ ee nɔmɔ a ŋkɔb wɔ̂.",
      "phonetic_ewo": "Ɛpolo é bāng daání ètǝ́ lédǝ̂ mwan wō ee nomo a ngkob wô.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ɛpolo ɛ́ bāŋ daání ɛtǝ́ lɛ́dǝ̂ mwan wɔ̄ ee nɔmɔ a mpǝ́g mwán wɔ̄.",
      "phonetic_eto": "Ɛpolo é bāng daání ètǝ́ lédǝ̂ mwan wō ee nomo a mpǝ́g mwán wō.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Message de bienvenue adressé à la titulaire du compte, Amina Ngo Bell.": {
      "fub": "Pɔ́ ī mmǝmǝ nsɔɔní ímôd agbɛɛ ŋkɔ̌b,  Amina Ngo Bell.",
      "phonetic": "Pó ī mmǝmǝ nsooní ímôd agbèè ngkòb, Amina Ngo Bell.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Message de bienvenue adressé à la titulaire du compte, Amina Ngo Bell.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_011",
      "ewo": "Pɔ́ ī mmǝmǝ nsɔɔní ímôd agbɛɛ ŋkɔ̌b, Amina Ngo Bell.",
      "phonetic_ewo": "Pó ī mmǝmǝ nsooní ímôd agbèè ngkòb, Amina Ngo Bell.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Pɔ́ ī mmǝmǝ nsɔɔní ímôd agbɛɛ mpǝ́g mwán, Amina Ngo Bell.",
      "phonetic_eto": "Pó ī mmǝmǝ nsooní ímôd agbèè mpǝ́g mwán, Amina Ngo Bell.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Vérifiez d'abord le montant disponible sur votre compte avant de démarrer votre envoi d'argent.": {
      "fub": "Kaza jwam í tāŋ mwánî inǝ wɔ̂ á pǝ̄g mwání ususu nâ kázâ lōm mwani.",
      "phonetic": "Kaza jwam í tāng mwánî inǝ wô á pǝ̄g mwání ususu nâ kázâ lōm mwani.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Vérifiez d'abord le montant disponible sur votre compte avant de démarrer votre envoi d'argent.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_012",
      "ewo": "Kaza jwam í tāŋ mwánî inǝ wɔ̂ á pǝ̄g mwání ususu nâ kázâ lōm mwani.",
      "phonetic_ewo": "Kaza jwam í tāng mwánî inǝ wô á pǝ̄g mwání ususu nâ kázâ lōm mwani.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Kaza jwam í tāŋ mwánî inǝ wɔ̂ á pǝ̄g mwání ususu nâ kázâ lōm mwani.",
      "phonetic_eto": "Kaza jwam í tāng mwánî inǝ wô á pǝ̄g mwání ususu nâ kázâ lōm mwani.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Montant exact immédiatement utilisable sur votre compte.": {
      "fub": "Ítāŋ í mwání inǝ wɔ̂ mpaŋpaŋ á pǝ̄g mwání.",
      "phonetic": "Ítāng í mwání inǝ wô mpangpang á pǝ̄g mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Montant exact immédiatement utilisable sur votre compte.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_013",
      "ewo": "Ítāŋ í mwání inǝ wɔ̂ mpaŋpaŋ á pǝ̄g mwání.",
      "phonetic_ewo": "Ítāng í mwání inǝ wô mpangpang á pǝ̄g mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ítāŋ í mwání inǝ wɔ̂ mpaŋpaŋ á pǝ̄g mwání.",
      "phonetic_eto": "Ítāng í mwání inǝ wô mpangpang á pǝ̄g mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Compte bancaire principal servant aux dépôts, retraits et virements quotidiens.": {
      "fub": "Ŋ̀kúkúmá pǝ́g mwání uságâ asú inɛ,  ivaza ,  ilôm mwani amú usǝ̂.",
      "phonetic": "Ŋ̀kúkúmá pǝ́g mwání uságâ asú inè, ivaza , ilôm mwani amú usǝ̂.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Compte bancaire principal servant aux dépôts, retraits et virements quotidiens.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_014",
      "ewo": "Ŋ̀kúkúmá pǝ́g mwání uságâ asú inɛ, ivaza , ilôm mwani amú usǝ̂.",
      "phonetic_ewo": "Ŋ̀kúkúmá pǝ́g mwání uságâ asú inè, ivaza , ilôm mwani amú usǝ̂.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ŋ̀kúkúmá pǝ́g mwání uságâ asú inɛ, ivaza , ilôm mwani amú usǝ̂.",
      "phonetic_eto": "Ŋ̀kúkúmá pǝ́g mwání uságâ asú inè, ivaza , ilôm mwani amú usǝ̂.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cliquez sur ce bouton pour commencer un envoi d'argent et passer à l'étape 2.": {
      "fub": "Kǒm í logo yi nâ ukaza lóm mwání ee ulôd itǝ́ íbā.",
      "phonetic": "Kòm í logo yi nâ ukaza lóm mwání ee ulôd itǝ́ íbā.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cliquez sur ce bouton pour commencer un envoi d'argent et passer à l'étape 2.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_015",
      "ewo": "Kǒm í logo yi nâ ukaza lóm mwání ee ulôd itǝ́ íbā.",
      "phonetic_ewo": "Kòm í logo yi nâ ukaza lóm mwání ee ulôd itǝ́ íbā.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Kǒm í logo yi nâ ukaza lóm mwání ee ulôd itǝ́ íbā.",
      "phonetic_eto": "Kòm í logo yi nâ ukaza lóm mwání ee ulôd itǝ́ íbā.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Accéder au simulateur de tarification pour connaître le coût d'un transfert.": {
      "fub": "Kɛ́nî ípǝ̂ bǝ́tǝ̄ yɛ́n ítāŋ í mwání ilôm mwání í ɲɔŋ.",
      "phonetic": "Kénî ípǝ̂ bǝ́tǝ̄ yén ítāng í mwání ilôm mwání í gnong.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Accéder au simulateur de tarification pour connaître le coût d'un transfert.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_016",
      "ewo": "Kɛ́nî ípǝ̂ bǝ́tǝ̄ yɛ́n ítāŋ í mwání ilôm mwání í ɲɔŋ.",
      "phonetic_ewo": "Kénî ípǝ̂ bǝ́tǝ̄ yén ítāng í mwání ilôm mwání í gnong.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Kɛ́nî ípǝ̂ bǝ́tǝ̄ yɛ́n ítāŋ í mwání ilôm mwání í ɲɔŋ.",
      "phonetic_eto": "Kénî ípǝ̂ bǝ́tǝ̄ yén ítāng í mwání ilôm mwání í gnong.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Historique de vos 4 derniers mouvements d'argent (paiements et réceptions).": {
      "fub": "Kálâda ilôm i mwání ínâ (iyagna ee ɛjǝblǝ)",
      "phonetic": "Kálâda ilôm i mwání ínâ (iyagna ee èjǝblǝ)",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Historique de vos 4 derniers mouvements d'argent (paiements et réceptions).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_017",
      "ewo": "Kálâda ilôm i mwání ínâ (iyagna ee ɛjǝblǝ)",
      "phonetic_ewo": "Kálâda ilôm i mwání ínâ (iyagna ee èjǝblǝ)",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Kálâda ilôm i mwání ínâ (isuzuni ee ɛjǝblǝ)",
      "phonetic_eto": "Kálâda ilôm i mwání ínâ (isuzuni ee èjǝblǝ)",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Achat ou paiement effectué auprès d'un commerçant (-12 500 FCFA).": {
      "fub": "Ŋ̀kuz ee isuzuni úkwâm abɔ́ bɛɛsɛɛ (ivaza i twágsîn ɛwóm ee íbā ee mintɛd mítān)",
      "phonetic": "Ŋ̀kuz ee isuzuni úkwâm abó bèèsèè (ivaza i twágsîn èwóm ee íbā ee mintèd mítān)",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Achat ou paiement effectué auprès d'un commerçant (-12 500 FCFA).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_018",
      "ewo": "Ŋ̀kuz ee isuzuni úkwâm abɔ́ bɛɛsɛɛ (ivaza i twágsîn ɛwóm ee íbā ee mintɛd mítān)",
      "phonetic_ewo": "Ŋ̀kuz ee isuzuni úkwâm abó bèèsèè (ivaza i twágsîn èwóm ee íbā ee mintèd mítān)",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ŋ̀kuz ee isuzuni úkwâm abɔ́ bɛɛsɛɛ (ivaza i twágsîn ɛwóm ee íbā ee mintɛd mítān)",
      "phonetic_eto": "Ŋ̀kuz ee isuzuni úkwâm abó bèèsèè (ivaza i twágsîn èwóm ee íbā ee mintèd mítān)",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Versement de votre salaire reçu sur le compte (+180 000 FCFA).": {
      "fub": "Ilôm í mwán a ŋgwan wɔ̂ á pǝ̄g mwání (Ntɛd twágsîn ee twágsîn mǝwóm ŋmâm. )",
      "phonetic": "Ilôm í mwán a nggwan wô á pǝ̄g mwání (Ntèd twágsîn ee twágsîn mǝwóm ngmâm. )",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Versement de votre salaire reçu sur le compte (+180 000 FCFA).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_019",
      "ewo": "Ilôm í mwán a ŋgwan wɔ̂ á pǝ̄g mwání (Ntɛd twágsîn ee twágsîn mǝwóm ŋmâm. )",
      "phonetic_ewo": "Ilôm í mwán a nggwan wô á pǝ̄g mwání (Ntèd twágsîn ee twágsîn mǝwóm ngmâm. )",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ilôm í mwán a ŋgwan wɔ̂ á pǝ̄g mwání (Ntɛd twágsîn ee twágsîn mǝwóm ŋmâm. )",
      "phonetic_eto": "Ilôm í mwán a nggwan wô á pǝ̄g mwání (Ntèd twágsîn ee twágsîn mǝwóm ngmâm. )",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Virement d'argent reçu d'un tiers sur votre compte (+50 000 FCFA).": {
      "fub": "Ilóm mwání môd alóm á pǝg mwán wɔ ( Twágsîn í tān )",
      "phonetic": "Ilóm mwání môd alóm á pǝg mwán wo ( Twágsîn í tān )",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Virement d'argent reçu d'un tiers sur votre compte (+50 000 FCFA).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_020",
      "ewo": "Ilóm mwání môd alóm á pǝg mwán wɔ ( Twágsîn í tān )",
      "phonetic_ewo": "Ilóm mwání môd alóm á pǝg mwán wo ( Twágsîn í tān )",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ilóm mwání môd alóm á pǝg mwán wɔ ( Twágsîn mǝwóm tān )",
      "phonetic_eto": "Ilóm mwání môd alóm á pǝg mwán wo ( Twágsîn mǝwóm tān )",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Règlement de votre facture d'électricité (-7 500 FCFA).": {
      "fub": "Iyagna í mwān a kudáŋ (ivaza i twágsîn zaŋmɛɛ ee mintɛd mítān)",
      "phonetic": "Iyagna í mwān a kudáng (ivaza i twágsîn zangmèè ee mintèd mítān)",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Règlement de votre facture d'électricité (-7 500 FCFA).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_021",
      "ewo": "Iyagna í mwān a kudáŋ (ivaza i twágsîn zaŋmɛɛ ee mintɛd mítān)",
      "phonetic_ewo": "Iyagna í mwān a kudáng (ivaza i twágsîn zangmèè ee mintèd mítān)",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Iyagna í mwān a kudáŋ (ivaza i twágsîn zaŋmɛɛ ee mintɛd mítān)",
      "phonetic_eto": "Iyagna í mwān a kudáng (ivaza i twágsîn zangmèè ee mintèd mítān)",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Étape 2 : Calcul du coût du transfert selon le canal choisi.": {
      "fub": "Itǝ́ íbā : kwam táŋ ílôm í  mwání útwâb.",
      "phonetic": "Itǝ́ íbā : kwam táng ílôm í mwání útwâb.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Étape 2 : Calcul du coût du transfert selon le canal choisi.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_022",
      "ewo": "Itǝ́ íbā : kwam táŋ ílôm í mwání útwâb.",
      "phonetic_ewo": "Itǝ́ íbā : kwam táng ílôm í mwání útwâb.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Itǝ́ íbā : kwam táŋ ílôm í mwání ízɛ̄n útwâb.",
      "phonetic_eto": "Itǝ́ íbā : kwam táng ílôm í mwání ízè̄n útwâb.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Sélectionnez le canal d'envoi et tapez le montant : la commission et le total à débiter s'affichent instantanément.": {
      "fub": "Twáb zɛ̄n ílôm mwání ee pud táŋi mwání : mwán abɔ frais  ee mwán ásǝ̂ ɛtǝ́ yé.",
      "phonetic": "Twáb zè̄n ílôm mwání ee pud tángi mwání : mwán abo frais ee mwán ásǝ̂ ètǝ́ yé.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Sélectionnez le canal d'envoi et tapez le montant : la commission et le total à débiter s'affichent instantanément.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_023",
      "ewo": "Twáb zɛ̄n ílôm mwání ee pud táŋi mwání : mwán abɔ frais ee mwán ásǝ̂ ɛtǝ́ yé.",
      "phonetic_ewo": "Twáb zè̄n ílôm mwání ee pud tángi mwání : mwán abo frais ee mwán ásǝ̂ ètǝ́ yé.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twáb zɛ̄n ílôm mwání ee pud táŋi mwání : mwán abɔ frais ee mwán ásǝ̂ ɛtǝ́ yé.",
      "phonetic_eto": "Twáb zè̄n ílôm mwání ee pud tángi mwání : mwán abo frais ee mwán ásǝ̂ ètǝ́ yé.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Le réseau financier utilisé pour transmettre les fonds au bénéficiaire.": {
      "fub": "Résó a mwání bǝ́bɛlnǝŋgan ee wɔ̂ nâ bǝ́lôm mwání ímôd atǝ́ dī isuzuni.",
      "phonetic": "Résó a mwání bǝ́bèlnǝnggan ee wô nâ bǝ́lôm mwání ímôd atǝ́ dī isuzuni.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Le réseau financier utilisé pour transmettre les fonds au bénéficiaire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_024",
      "ewo": "Résó a mwání bǝ́bɛlnǝŋgan ee wɔ̂ nâ bǝ́lôm mwání ímôd atǝ́ dī isuzuni.",
      "phonetic_ewo": "Résó a mwání bǝ́bèlnǝnggan ee wô nâ bǝ́lôm mwání ímôd atǝ́ dī isuzuni.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Résó a mwání bǝ́bɛlnǝŋgan ee wɔ̂ nâ bǝ́lôm mwání ímôd atǝ́ dī isuzuni.",
      "phonetic_eto": "Résó a mwání bǝ́bèlnǝnggan ee wô nâ bǝ́lôm mwání ímôd atǝ́ dī isuzuni.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Transfert interne vers un autre compte Safinum Pay : 100 % gratuit (0 FCFA de frais).": {
      "fub": "Ilôm í mwān á nnǝ̄m  mpǝg mwánì Safinum Pay mpǝ́bǝ̂ : ɛ́nǝ̂ á zǝzǝ (laátǝ̃ ɲɔ̂ŋ mwání).",
      "phonetic": "Ilôm í mwān á nnǝ̄m mpǝg mwánì Safinum Pay mpǝ́bǝ̂ : énǝ̂ á zǝzǝ (laátǝ̃ gnông mwání).",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Transfert interne vers un autre compte Safinum Pay : 100 % gratuit (0 FCFA de frais).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_025",
      "ewo": "Ilôm í mwān á nnǝ̄m mpǝg mwánì Safinum Pay mpǝ́bǝ̂ : ɛ́nǝ̂ á zǝzǝ (laátǝ̃ ɲɔ̂ŋ mwání).",
      "phonetic_ewo": "Ilôm í mwān á nnǝ̄m mpǝg mwánì Safinum Pay mpǝ́bǝ̂ : énǝ̂ á zǝzǝ (laátǝ̃ gnông mwání).",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ilôm í mwān á nnǝ̄m mpǝg mwánì Safinum Pay mpǝ́bǝ̂ : ɛ́nǝ̂ á zǝzǝ (laátǝ̃ ɲɔ̂ŋ mwání).",
      "phonetic_eto": "Ilôm í mwān á nnǝ̄m mpǝg mwánì Safinum Pay mpǝ́bǝ̂ : énǝ̂ á zǝzǝ (laátǝ̃ gnông mwání).",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "L'argent arrive immédiatement chez le destinataire et aucun frais n'est prélevé.": {
      "fub": "Mwán atǝ́ pãm ábɔ̄ ímôd utǝ́ lôm mwání ee baátǝ̄ wɔ cíg bɔ frais",
      "phonetic": "Mwán atǝ́ pãm ábō ímôd utǝ́ lôm mwání ee baátǝ̄ wo cíg bo frais",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "L'argent arrive immédiatement chez le destinataire et aucun frais n'est prélevé.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_026",
      "ewo": "Mwán atǝ́ pãm ábɔ̄ ímôd utǝ́ lôm mwání ee baátǝ̄ wɔ cíg bɔ frais",
      "phonetic_ewo": "Mwán atǝ́ pãm ábō ímôd utǝ́ lôm mwání ee baátǝ̄ wo cíg bo frais",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mwán atǝ́ pãm ábɔ̄ ímôd utǝ́ lôm mwání ee baátǝ̄ wɔ cíg bɔ frais",
      "phonetic_eto": "Mwán atǝ́ pãm ábō ímôd utǝ́ lôm mwání ee baátǝ̄ wo cíg bo frais",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Envoi vers un portefeuille Mobile Money (commission de 1,5 %).": {
      "fub": "Lóm mwání ā mpǝg mwání a Mobile money ( komisón pudcáŋ a pwág ɛtwan ɛ́ mvozobo ee ítān )",
      "phonetic": "Lóm mwání ā mpǝg mwání a Mobile money ( komisón pudcáng a pwág ètwan é mvozobo ee ítān )",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Envoi vers un portefeuille Mobile Money (commission de 1,5 %).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_027",
      "ewo": "Lóm mwání ā mpǝg mwání a Mobile money ( komisón pudcáŋ a pwág ɛtwan ɛ́ mvozobo ee ítān )",
      "phonetic_ewo": "Lóm mwání ā mpǝg mwání a Mobile money ( komisón pudcáng a pwág ètwan é mvozobo ee ítān )",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Lóm mwání ā mpǝg mwání a Mobile money ( komisón pudcáŋ a pwág ɛtwan ɛ́ mvozobo ee ítān )",
      "phonetic_eto": "Lóm mwání ā mpǝg mwání a Mobile money ( komisón pudcáng a pwág ètwan é mvozobo ee ítān )",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Tarif Mobile Money : 1,5 % du montant envoyé, avec un minimum de 100 FCFA et un plafond de 2 500 FCFA.": {
      "fub": "Mwán a mobile money : pudcáŋ a pwág ɛtwanɛ́ Mwání a mobile money pudcáŋ a pwág ɛtwan ɛ́ mvozobo ee ítān í mwán úlôm,  ee mwán a mǝkazi ntɛd ee mwán a mǝman twágsîn íbā ee mintɛd mítãn.",
      "phonetic": "Mwán a mobile money : pudcáng a pwág ètwané Mwání a mobile money pudcáng a pwág ètwan é mvozobo ee ítān í mwán úlôm, ee mwán a mǝkazi ntèd ee mwán a mǝman twágsîn íbā ee mintèd mítãn.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Tarif Mobile Money : 1,5 % du montant envoyé, avec un minimum de 100 FCFA et un plafond de 2 500 FCFA.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_028",
      "ewo": "Mwán a mobile money : pudcáŋ a pwág ɛtwanɛ́ Mwání a mobile money pudcáŋ a pwág ɛtwan ɛ́ mvozobo ee ítān í mwán úlôm, ee mwán a mǝkazi ntɛd ee mwán a mǝman twágsîn íbā ee mintɛd mítãn.",
      "phonetic_ewo": "Mwán a mobile money : pudcáng a pwág ètwané Mwání a mobile money pudcáng a pwág ètwan é mvozobo ee ítān í mwán úlôm, ee mwán a mǝkazi ntèd ee mwán a mǝman twágsîn íbā ee mintèd mítãn.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mwání a mobile money pudcáŋ a pwág ɛtwan ɛ́ mvozobo ee ítān í mwán úlôm, ee mwán a mǝkazi ntɛd ee mwán a mǝman twágsîn íbā ee mintɛd mítãn.",
      "phonetic_eto": "Mwání a mobile money pudcáng a pwág ètwan é mvozobo ee ítān í mwán úlôm, ee mwán a mǝkazi ntèd ee mwán a mǝman twágsîn íbā ee mintèd mítãn.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Virement vers un compte ouvert dans une autre banque (commission de 2 %).": {
      "fub": "iÍôm mwání á mpǝ́g mwání mpǝ́bǝ̂ uŋgáyázban á bāŋ mpǝ́bê (komisón pudsáŋ íbā)",
      "phonetic": "iÍôm mwání á mpǝ́g mwání mpǝ́bǝ̂ unggáyázban á bāng mpǝ́bê (komisón pudsáng íbā)",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Virement vers un compte ouvert dans une autre banque (commission de 2 %).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_029",
      "ewo": "iÍôm mwání á mpǝ́g mwání mpǝ́bǝ̂ uŋgáyázban á bāŋ mpǝ́bê (komisón pudsáŋ íbā)",
      "phonetic_ewo": "iÍôm mwání á mpǝ́g mwání mpǝ́bǝ̂ unggáyázban á bāng mpǝ́bê (komisón pudsáng íbā)",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "iÍôm mwání á mpǝ́g mwání mpǝ́bǝ̂ uŋgáyázban á bāŋ mpǝ́bê (komisón pudsáŋ íbā)",
      "phonetic_eto": "iÍôm mwání á mpǝ́g mwání mpǝ́bǝ̂ unggáyázban á bāng mpǝ́bê (komisón pudsáng íbā)",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Tarif interbancaire : 2 % du montant envoyé, avec un minimum de 200 FCFA et un maximum de 5 000 FCFA.": {
      "fub": "Táŋ i mwání í bɔ báŋ bɔ ee bɔ  : pudsáŋ íbā ímwán úlôm, ee mwán a mǝkaza mintɛd mī tān ee ŋkóŋ abú mwán unǝ lôm twágsîn ítān.",
      "phonetic": "Táng i mwání í bo báng bo ee bo : pudsáng íbā ímwán úlôm, ee mwán a mǝkaza mintèd mī tān ee ngkóng abú mwán unǝ lôm twágsîn ítān.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Tarif interbancaire : 2 % du montant envoyé, avec un minimum de 200 FCFA et un maximum de 5 000 FCFA.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_030",
      "ewo": "Táŋ i mwání í bɔ báŋ bɔ ee bɔ : pudsáŋ íbā ímwán úlôm, ee mwán a mǝkaza mintɛd mī tān ee ŋkóŋ abú mwán unǝ lôm twágsîn ítān.",
      "phonetic_ewo": "Táng i mwání í bo báng bo ee bo : pudsáng íbā ímwán úlôm, ee mwán a mǝkaza mintèd mī tān ee ngkóng abú mwán unǝ lôm twágsîn ítān.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Táŋ i mwání í bɔ báŋ bɔ ee bɔ : pudsáŋ íbā ímwán úlôm, ee mwán a mǝkaza mintɛd mī tān ee ŋkóŋ abú mwán unǝ lôm twágsîn ítān.",
      "phonetic_eto": "Táng i mwání í bo báng bo ee bo : pudsáng íbā ímwán úlôm, ee mwán a mǝkaza mintèd mī tān ee ngkóng abú mwán unǝ lôm twágsîn ítān.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "La somme en FCFA que vous souhaitez faire parvenir au destinataire.": {
      "fub": "Itáŋ i mwání utǝ́ jǝ lôm mód a fcfa.",
      "phonetic": "Itáng i mwání utǝ́ jǝ lôm mód a fcfa.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "La somme en FCFA que vous souhaitez faire parvenir au destinataire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_031",
      "ewo": "Itáŋ i mwání utǝ́ jǝ lôm mód a fcfa.",
      "phonetic_ewo": "Itáng i mwání utǝ́ jǝ lôm mód a fcfa.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Itáŋ i mwání utǝ́ jǝ lôm mód a fcfa.",
      "phonetic_eto": "Itáng i mwání utǝ́ jǝ lôm mód a fcfa.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Aucun frais de transaction.": {
      "fub": "Bɔ frɛ bǝ́sǝ̂",
      "phonetic": "Bo frè bǝ́sǝ̂",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Aucun frais de transaction.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_032",
      "ewo": "Bɔ frɛ bǝ́sǝ̂",
      "phonetic_ewo": "Bo frè bǝ́sǝ̂",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Bɔ frɛ bǝ́sǝ̂",
      "phonetic_eto": "Bo frè bǝ́sǝ̂",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Somme totale (Montant + Frais) qui sera effectivement prélevée sur votre compte.": {
      "fub": "Mwán ásǝ (táŋ i mwáni ee bɔ frɛ ) yeey vazban á mpǝ̂g mwán wɔ̂.",
      "phonetic": "Mwán ásǝ (táng i mwáni ee bo frè ) yeey vazban á mpǝ̂g mwán wô.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Somme totale (Montant + Frais) qui sera effectivement prélevée sur votre compte.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_033",
      "ewo": "Mwán ásǝ (táŋ i mwáni ee bɔ frɛ ) yeey vazban á mpǝ̂g mwán wɔ̂.",
      "phonetic_ewo": "Mwán ásǝ (táng i mwáni ee bo frè ) yeey vazban á mpǝ̂g mwán wô.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mwán ásǝ (táŋ i mwáni ee bɔ frɛ ) yeey vazban á mpǝ̂g mwán wɔ̂.",
      "phonetic_eto": "Mwán ásǝ (táng i mwáni ee bo frè ) yeey vazban á mpǝ̂g mwán wô.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Montant qui restera disponible sur votre compte après cette opération.": {
      "fub": "Ítāŋ i mwání yeey  líg á mpǝ̄g mwán wɔ̂ á mbūz ílôm ee ivaza mwán ítǝ",
      "phonetic": "Ítāng i mwání yeey líg á mpǝ̄g mwán wô á mbūz ílôm ee ivaza mwán ítǝ",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Montant qui restera disponible sur votre compte après cette opération.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_034",
      "ewo": "Ítāŋ i mwání yeey líg á mpǝ̄g mwán wɔ̂ á mbūz ílôm ee ivaza mwán ítǝ",
      "phonetic_ewo": "Ítāng i mwání yeey líg á mpǝ̄g mwán wô á mbūz ílôm ee ivaza mwán ítǝ",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ítāŋ i mwání yeey líg á mpǝ̄g mwán wɔ̂ á mbūz ílôm ee ivaza mwán ítǝ",
      "phonetic_eto": "Ítāng i mwání yeey líg á mpǝ̄g mwán wô á mbūz ílôm ee ivaza mwán ítǝ",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Revenir à l'étape précédente.": {
      "fub": "Dúgnǝ̂ sɔ̄  ítǝ̄ usúswâ.",
      "phonetic": "Dúgnǝ̂ sō ítǝ̄ usúswâ.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Revenir à l'étape précédente.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_035",
      "ewo": "Dúgnǝ̂ sɔ̄ ítǝ̄ usúswâ.",
      "phonetic_ewo": "Dúgnǝ̂ sō ítǝ̄ usúswâ.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dúgnǝ̂ sɔ̄ ítǝ̄ usúswâ.",
      "phonetic_eto": "Dúgnǝ̂ sō ítǝ̄ usúswâ.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Valider cette étape et passer à la suivante.": {
      "fub": "Jǝ́blǝ̂ itǝ́ yî úlôd ítǝ̄ itǝ́ sɔ̄ .",
      "phonetic": "Jǝ́blǝ̂ itǝ́ yî úlôd ítǝ̄ itǝ́ sō .",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Valider cette étape et passer à la suivante.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_036",
      "ewo": "Jǝ́blǝ̂ itǝ́ yî úlôd ítǝ̄ itǝ́ sɔ̄ .",
      "phonetic_ewo": "Jǝ́blǝ̂ itǝ́ yî úlôd ítǝ̄ itǝ́ sō .",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Jǝ́blǝ̂ itǝ́ yî úlôd ítǝ̄ itǝ́ sɔ̄ .",
      "phonetic_eto": "Jǝ́blǝ̂ itǝ́ yî úlôd ítǝ̄ itǝ́ sō .",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Étape 3 : Indiquez l'identité et le téléphone du bénéficiaire en vérifiant chaque chiffre.": {
      "fub": "Itǝ́ ílā : Vǝ́ idaŋtité ee nɔmɔ a téléfɔ̄n ímôd eey gbǝ mwání utɔ́ŋlǝ̂ŋgan mǝŋ mǝŋ nɔmɔ ásǝ.",
      "phonetic": "Itǝ́ ílā : Vǝ́ idangtité ee nomo a téléfōn ímôd eey gbǝ mwání utónglǝ̂nggan mǝng mǝng nomo ásǝ.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Étape 3 : Indiquez l'identité et le téléphone du bénéficiaire en vérifiant chaque chiffre.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_037",
      "ewo": "Itǝ́ ílā : Vǝ́ idaŋtité ee nɔmɔ a téléfɔ̄n ímôd eey gbǝ mwání utɔ́ŋlǝ̂ŋgan mǝŋ mǝŋ nɔmɔ ásǝ.",
      "phonetic_ewo": "Itǝ́ ílā : Vǝ́ idangtité ee nomo a téléfōn ímôd eey gbǝ mwání utónglǝ̂nggan mǝng mǝng nomo ásǝ.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Itǝ́ ílā : Vǝ́ idaŋtité ee nɔmɔ a téléfɔ̄n ímôd eey gbǝ mwání utɔ́ŋlǝ̂ŋgan mǝŋ mǝŋ nɔmɔ ásǝ.",
      "phonetic_eto": "Itǝ́ ílā : Vǝ́ idangtité ee nomo a téléfōn ímôd eey gbǝ mwání utónglǝ̂nggan mǝng mǝng nomo ásǝ.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Vigilance sécurité : comme c'est votre premier envoi vers ce destinataire, vérifiez son numéro et cochez la case de vérification en bas.": {
      "fub": "Ukálgâ : anǝ́ ɛ́nǝ̂ wɔ ilóm mwání usúswâ abɔ ímôd ɲɔ̂, tál nɔmɔ a téléfɔ̄n wé upud ndǝm á mɔ̄ ndā ijwam ásī.",
      "phonetic": "Ukálgâ : anǝ́ énǝ̂ wo ilóm mwání usúswâ abo ímôd gnô, tál nomo a téléfōn wé upud ndǝm á mō ndā ijwam ásī.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Vigilance sécurité : comme c'est votre premier envoi vers ce destinataire, vérifiez son numéro et cochez la case de vérification en bas.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_038",
      "ewo": "Ukálgâ : anǝ́ ɛ́nǝ̂ wɔ ilóm mwání usúswâ abɔ ímôd ɲɔ̂, tál nɔmɔ a téléfɔ̄n wé upud ndǝm á mɔ̄ ndā ijwam ásī.",
      "phonetic_ewo": "Ukálgâ : anǝ́ énǝ̂ wo ilóm mwání usúswâ abo ímôd gnô, tál nomo a téléfōn wé upud ndǝm á mō ndā ijwam ásī.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ukálgâ : anǝ́ ɛ́nǝ̂ wɔ ilóm mwání usúswâ abɔ ímôd ɲɔ̂, tál nɔmɔ a téléfɔ̄n wé upud ndǝm á mɔ̄ ndā ijwam ásī.",
      "phonetic_eto": "Ukálgâ : anǝ́ énǝ̂ wo ilóm mwání usúswâ abo ímôd gnô, tál nomo a téléfōn wé upud ndǝm á mō ndā ijwam ásī.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Nom complet de la personne à qui vous envoyez l'argent.": {
      "fub": "Dǒ  ímôd utǝ́ lôm mwání.",
      "phonetic": "Dò ímôd utǝ́ lôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Nom complet de la personne à qui vous envoyez l'argent.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_039",
      "ewo": "Dǒ ímôd utǝ́ lôm mwání.",
      "phonetic_ewo": "Dò ímôd utǝ́ lôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dǒ ímôd utǝ́ lôm mwání.",
      "phonetic_eto": "Dò ímôd utǝ́ lôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Numéro de téléphone mobile du destinataire.": {
      "fub": "Nɔmɔ a téléfɔ̄n ímôd utǝ́ lôm mwání.",
      "phonetic": "Nomo a téléfōn ímôd utǝ́ lôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Numéro de téléphone mobile du destinataire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_040",
      "ewo": "Nɔmɔ a téléfɔ̄n ímôd utǝ́ lôm mwání.",
      "phonetic_ewo": "Nomo a téléfōn ímôd utǝ́ lôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Nɔmɔ a téléfɔ̄n ímôd utǝ́ lôm mwání.",
      "phonetic_eto": "Nomo a téléfōn ímôd utǝ́ lôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Raison de l'envoi d'argent.": {
      "fub": "Asú jǝ̄ utǝ́ lôm mwání.",
      "phonetic": "Asú jǝ̄ utǝ́ lôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Raison de l'envoi d'argent.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_041",
      "ewo": "Asú jǝ̄ utǝ́ lôm mwání.",
      "phonetic_ewo": "Asú jǝ̄ utǝ́ lôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Asú jǝ̄ utǝ́ lôm mwání.",
      "phonetic_eto": "Asú jǝ̄ utǝ́ lôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Commentaire facultatif joint au transfert.": {
      "fub": "Kad asú jǝ̂ utǝ́ lôm mwání ɛ́sǝ ubila.",
      "phonetic": "Kad asú jǝ̂ utǝ́ lôm mwání ésǝ ubila.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Commentaire facultatif joint au transfert.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_042",
      "ewo": "Kad asú jǝ̂ utǝ́ lôm mwání ɛ́sǝ ubila.",
      "phonetic_ewo": "Kad asú jǝ̂ utǝ́ lôm mwání ésǝ ubila.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Kad asú jǝ̂ utǝ́ lôm mwání ɛ́sǝ ubila.",
      "phonetic_eto": "Kad asú jǝ̂ utǝ́ lôm mwání ésǝ ubila.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Action obligatoire : cochez cette case pour attester que vous avez contrôlé le nom et le numéro du destinataire.": {
      "fub": "Ɛ́nǝ̂ Ubila : Púd ndǝm  á mɔ̄ ndā yî asú nâ ɛ́jǝ̂m nâ úmâ tɔŋlɔ dwé ee nɔmɔ ímôd utǝ́ lôm mwání",
      "phonetic": "Ɛ́nǝ̂ Ubila : Púd ndǝm á mō ndā yî asú nâ éjǝ̂m nâ úmâ tonglo dwé ee nomo ímôd utǝ́ lôm mwání",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Action obligatoire : cochez cette case pour attester que vous avez contrôlé le nom et le numéro du destinataire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_043",
      "ewo": "Ɛ́nǝ̂ Ubila : Púd ndǝm á mɔ̄ ndā yî asú nâ ɛ́jǝ̂m nâ úmâ tɔŋlɔ dwé ee nɔmɔ ímôd utǝ́ lôm mwání",
      "phonetic_ewo": "Ɛ́nǝ̂ Ubila : Púd ndǝm á mō ndā yî asú nâ éjǝ̂m nâ úmâ tonglo dwé ee nomo ímôd utǝ́ lôm mwání",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ɛ́nǝ̂ Ubila : Púd ndǝm á mɔ̄ ndā yî asú nâ ɛ́jǝ̂m nâ úmâ tɔŋlɔ dwé ee nɔmɔ ímôd utǝ́ lôm mwání",
      "phonetic_eto": "Ɛ́nǝ̂ Ubila : Púd ndǝm á mō ndā yî asú nâ éjǝ̂m nâ úmâ tonglo dwé ee nomo ímôd utǝ́ lôm mwání",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Étape 4 : Contrôlez chaque ligne du résumé avant de donner votre validation définitive.": {
      "fub": "Ítǝ̄ inâ : tɔŋlǝŋgan ibúg ísǝ usúsú nâ úvǝ̂ cíŋ nâ ilôm ŋgǝ́ ivaza mwání íkwâmbân.",
      "phonetic": "Ítǝ̄ inâ : tonglǝnggan ibúg ísǝ usúsú nâ úvǝ̂ cíng nâ ilôm nggǝ́ ivaza mwání íkwâmbân.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Étape 4 : Contrôlez chaque ligne du résumé avant de donner votre validation définitive.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_044",
      "ewo": "Ítǝ̄ inâ : tɔŋlǝŋgan ibúg ísǝ usúsú nâ úvǝ̂ cíŋ nâ ilôm ŋgǝ́ ivaza mwání íkwâmbân.",
      "phonetic_ewo": "Ítǝ̄ inâ : tonglǝnggan ibúg ísǝ usúsú nâ úvǝ̂ cíng nâ ilôm nggǝ́ ivaza mwání íkwâmbân.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ítǝ̄ inâ : tɔŋlǝŋgan ibúg ísǝ usúsú nâ úvǝ̂ cíŋ nâ ilôm ŋgǝ́ ivaza mwání íkwâmban.",
      "phonetic_eto": "Ítǝ̄ inâ : tonglǝnggan ibúg ísǝ usúsú nâ úvǝ̂ cíng nâ ilôm nggǝ́ ivaza mwání íkwâmban.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Montant net envoyé au bénéficiaire.": {
      "fub": "Táŋ ī mwání úlôm.",
      "phonetic": "Táng ī mwání úlôm.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Montant net envoyé au bénéficiaire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_045",
      "ewo": "Táŋ ī mwání úlôm.",
      "phonetic_ewo": "Táng ī mwání úlôm.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Táŋ ī mwání úlôm.",
      "phonetic_eto": "Táng ī mwání úlôm.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Somme totale retirée de votre compte (montant + frais).": {
      "fub": "Táŋ i mwání úvaza á mpǝ́g mwán wɔ̄   (táŋ î mwání ee bɔ frɛ ).",
      "phonetic": "Táng i mwání úvaza á mpǝ́g mwán wō (táng î mwání ee bo frè ).",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Somme totale retirée de votre compte (montant + frais).",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_046",
      "ewo": "Táŋ i mwání úvaza á mpǝ́g mwán wɔ̄ (táŋ î mwání ee bɔ frɛ ).",
      "phonetic_ewo": "Táng i mwání úvaza á mpǝ́g mwán wō (táng î mwání ee bo frè ).",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Táŋ i mwání úvaza á mpǝ́g mwán wɔ̄ (táŋ î mwání ee bɔ frɛ ).",
      "phonetic_eto": "Táng i mwání úvaza á mpǝ́g mwán wō (táng î mwání ee bo frè ).",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Numéro de téléphone du destinataire.": {
      "fub": "Nɔmɔ a téléfɔ̃n ímôd úlôm mwání.",
      "phonetic": "Nomo a téléfõn ímôd úlôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Numéro de téléphone du destinataire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_047",
      "ewo": "Nɔmɔ a téléfɔ̃n ímôd úlôm mwání.",
      "phonetic_ewo": "Nomo a téléfõn ímôd úlôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Nɔmɔ a téléfɔ̃n ímôd úlôm mwání.",
      "phonetic_eto": "Nomo a téléfõn ímôd úlôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Identifiant unique de traçabilité de la transaction.": {
      "fub": "Idaŋtité ílôm mwání.",
      "phonetic": "Idangtité ílôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Identifiant unique de traçabilité de la transaction.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_048",
      "ewo": "Idaŋtité ílôm mwání.",
      "phonetic_ewo": "Idangtité ílôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Idaŋtité ílôm mwání.",
      "phonetic_eto": "Idangtité ílôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Canal de transfert sélectionné.": {
      "fub": "Zɛ̌n ílôm í mwání itwábban.",
      "phonetic": "Zèn ílôm í mwání itwábban.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Canal de transfert sélectionné.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_049",
      "ewo": "Zɛ̌n ílôm í mwání itwábban.",
      "phonetic_ewo": "Zèn ílôm í mwání itwábban.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Zɛ̌n ílôm í mwání itwábban.",
      "phonetic_eto": "Zèn ílôm í mwání itwábban.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Action obligatoire : cochez cette case pour autoriser le prélèvement et l'envoi définitif.": {
      "fub": "Ɛ́nǝ̂ ubila : púd ndǝm nâ úvǝ̂ cíŋ nâ bǝ́vaza mwání ee nâ bǝ́lôm.",
      "phonetic": "Ɛ́nǝ̂ ubila : púd ndǝm nâ úvǝ̂ cíng nâ bǝ́vaza mwání ee nâ bǝ́lôm.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Action obligatoire : cochez cette case pour autoriser le prélèvement et l'envoi définitif.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_050",
      "ewo": "Ɛ́nǝ̂ ubila : púd ndǝm nâ úvǝ̂ cíŋ nâ bǝ́vaza mwání ee nâ bǝ́lôm.",
      "phonetic_ewo": "Ɛ́nǝ̂ ubila : púd ndǝm nâ úvǝ̂ cíng nâ bǝ́vaza mwání ee nâ bǝ́lôm.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ɛ́nǝ̂ ubila : púd ndǝm nâ úvǝ̂ cíŋ nâ bǝ́vaza mwání ee nâ bǝ́lôm.",
      "phonetic_eto": "Ɛ́nǝ̂ ubila : púd ndǝm nâ úvǝ̂ cíng nâ bǝ́vaza mwání ee nâ bǝ́lôm.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Revenir à l'étape précédente pour corriger une information.": {
      "fub": "Dúgnǝ̂ sɔ̄ itǝ́ usú nâ úkôm pɔ́.",
      "phonetic": "Dúgnǝ̂ sō itǝ́ usú nâ úkôm pó.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Revenir à l'étape précédente pour corriger une information.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_051",
      "ewo": "Dúgnǝ̂ sɔ̄ itǝ́ usú nâ úkôm pɔ́.",
      "phonetic_ewo": "Dúgnǝ̂ sō itǝ́ usú nâ úkôm pó.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dúgnǝ̂ sɔ̄ itǝ́ usú nâ úkôm pɔ́.",
      "phonetic_eto": "Dúgnǝ̂ sō itǝ́ usú nâ úkôm pó.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Valider définitivement et envoyer les fonds maintenant.": {
      "fub": "Vǝ́ cīŋ úlôm mwání itǝ́tǝ́gǝ̂ ɲɔ̂.",
      "phonetic": "Vǝ́ cīng úlôm mwání itǝ́tǝ́gǝ̂ gnô.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Valider définitivement et envoyer les fonds maintenant.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_052",
      "ewo": "Vǝ́ cīŋ úlôm mwání itǝ́tǝ́gǝ̂ ɲɔ̂.",
      "phonetic_ewo": "Vǝ́ cīng úlôm mwání itǝ́tǝ́gǝ̂ gnô.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Vǝ́ cīŋ úlôm mwání itǝ́tǝ́gǝ̂ ɲɔ̂.",
      "phonetic_eto": "Vǝ́ cīng úlôm mwání itǝ́tǝ́gǝ̂ gnô.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Opération terminée : votre virement a bien été exécuté.": {
      "fub": "Dam ɛ́sǝ ɛ́mân : ílôm mwání ikwamban.",
      "phonetic": "Dam ésǝ émân : ílôm mwání ikwamban.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Opération terminée : votre virement a bien été exécuté.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_053",
      "ewo": "Dam ɛ́sǝ ɛ́mân : ílôm mwání ikwamban.",
      "phonetic_ewo": "Dam ésǝ émân : ílôm mwání ikwamban.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dam ɛ́sǝ ɛ́mân : ílôm mwání ikwamban.",
      "phonetic_eto": "Dam ésǝ émân : ílôm mwání ikwamban.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Les fonds ont été transmis avec succès. Conservez le numéro de référence affiché sur ce reçu.": {
      "fub": "Mwání alômban.  Nɛ̌ í nɔmɔ atǝ́ pam á resú.",
      "phonetic": "Mwání alômban. Nè í nomo atǝ́ pam á resú.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Les fonds ont été transmis avec succès. Conservez le numéro de référence affiché sur ce reçu.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_054",
      "ewo": "Mwání alômban. Nɛ̌ í nɔmɔ atǝ́ pam á resú.",
      "phonetic_ewo": "Mwání alômban. Nè í nomo atǝ́ pam á resú.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mwání alômban. Nɛ̌ í nɔmɔ atǝ́ pam á resú.",
      "phonetic_eto": "Mwání alômban. Nè í nomo atǝ́ pam á resú.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "État final du traitement de la transaction.": {
      "fub": "Itǝ́ ī mǝmana ílôm mwání.",
      "phonetic": "Itǝ́ ī mǝmana ílôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "État final du traitement de la transaction.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_055",
      "ewo": "Itǝ́ ī mǝmana ílôm mwání.",
      "phonetic_ewo": "Itǝ́ ī mǝmana ílôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Itǝ́ ī mǝmana ílôm mwání.",
      "phonetic_eto": "Itǝ́ ī mǝmana ílôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Transaction réussie et validée.": {
      "fub": "Ilôm ŋgǝ́ ivaza mwání íkâb.",
      "phonetic": "Ilôm nggǝ́ ivaza mwání íkâb.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Transaction réussie et validée.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_056",
      "ewo": "Ilôm ŋgǝ́ ivaza mwání íkâb.",
      "phonetic_ewo": "Ilôm nggǝ́ ivaza mwání íkâb.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ilôm ŋgǝ́ ivaza mwání íkâb.",
      "phonetic_eto": "Ilôm nggǝ́ ivaza mwání íkâb.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Revenir à l'accueil du compte pour effectuer une autre opération.": {
      "fub": "Dúgnǝ̂ sɔ̄ á mmǝ́ndā mpǝ̄g mwání nâ úkwâm opedasiɔ́ŋ mpǝ́bǝ̂.",
      "phonetic": "Dúgnǝ̂ sō á mmǝ́ndā mpǝ̄g mwání nâ úkwâm opedasióng mpǝ́bǝ̂.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Revenir à l'accueil du compte pour effectuer une autre opération.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_057",
      "ewo": "Dúgnǝ̂ sɔ̄ á mmǝ́ndā mpǝ̄g mwání nâ úkwâm opedasiɔ́ŋ mpǝ́bǝ̂.",
      "phonetic_ewo": "Dúgnǝ̂ sō á mmǝ́ndā mpǝ̄g mwání nâ úkwâm opedasióng mpǝ́bǝ̂.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dúgnǝ̂ sɔ̄ á mmǝ́ndā mpǝ̄g mwání nâ úkwâm opedasiɔ́ŋ mpǝ́bǝ̂.",
      "phonetic_eto": "Dúgnǝ̂ sō á mmǝ́ndā mpǝ̄g mwání nâ úkwâm opedasióng mpǝ́bǝ̂.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Une anomalie bloque l'opération : lisez l'explication ci-dessous pour savoir comment la corriger.": {
      "fub": "Dam ɛ́tǝ̄ ndǝglǝ : láŋ ndimzaná ásī nâ úyɛ̄n nǝ ́unǝ̂ dɔ̂ kom.",
      "phonetic": "Dam étǝ̄ ndǝglǝ : láng ndimzaná ásī nâ úyè̄n nǝ ́unǝ̂ dô kom.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Une anomalie bloque l'opération : lisez l'explication ci-dessous pour savoir comment la corriger.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_058",
      "ewo": "Dam ɛ́tǝ̄ ndǝglǝ : láŋ ndimzaná ásī nâ úyɛ̄n nǝ ́unǝ̂ dɔ̂ kom.",
      "phonetic_ewo": "Dam étǝ̄ ndǝglǝ : láng ndimzaná ásī nâ úyè̄n nǝ ́unǝ̂ dô kom.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Dam ɛ́tǝ̄ ndǝglǝ : láŋ ndimzaná ásī nâ úyɛ̄n nǝ ́unǝ̂ dɔ̂ kom.",
      "phonetic_eto": "Dam étǝ̄ ndǝglǝ : láng ndimzaná ásī nâ úyè̄n nǝ ́unǝ̂ dô kom.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Avertissement de sécurité bancaire demandant votre vigilance avant d'envoyer l'argent.": {
      "fub": "Báŋ atǝ́ bólô úbô ǹnǝ́m wɔ̂ usǝ usúsūnnâ úlôm mwání.",
      "phonetic": "Báng atǝ́ bólô úbô n nǝ́m wô usǝ usúsūnnâ úlôm mwání.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Avertissement de sécurité bancaire demandant votre vigilance avant d'envoyer l'argent.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_059",
      "ewo": "Báŋ atǝ́ bólô úbô ǹnǝ́m wɔ̂ usǝ usúsūnnâ úlôm mwání.",
      "phonetic_ewo": "Báng atǝ́ bólô úbô n nǝ́m wô usǝ usúsūnnâ úlôm mwání.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Báŋ atǝ́ bólô úbô ǹnǝ́m wɔ̂ usǝ usúsūnnâ úlôm mwání.",
      "phonetic_eto": "Báng atǝ́ bólô úbô n nǝ́m wô usǝ usúsūnnâ úlôm mwání.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Information prioritaire affichée en temps réel sur votre espace bancaire.": {
      "fub": "Mpáŋ pɔ̄ utǝ́ vām ɛpólô ɛ́ bāŋ dɔ̂.",
      "phonetic": "Mpáng pō utǝ́ vām èpólô é bāng dô.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Information prioritaire affichée en temps réel sur votre espace bancaire.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_060",
      "ewo": "Mpáŋ pɔ̄ utǝ́ vām ɛpólô ɛ́ bāŋ dɔ̂.",
      "phonetic_ewo": "Mpáng pō utǝ́ vām èpólô é bāng dô.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mpáŋ pɔ̄ utǝ́ vām ɛpólô ɛ́ bāŋ dɔ̂.",
      "phonetic_eto": "Mpáng pō utǝ́ vām èpólô é bāng dô.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication AMOUNT_001 : Le montant saisi est égal à zéro. Tapez une somme valide supérieure à 0 FCFA.": {
      "fub": "Ndimzana Amount _001 : táŋ í mwání iɲɔ̄ŋbân ɛ́nǝ zǝzǝ.  Púd ítāŋ ī mwání utǝ́ jǝ ilódgo zǝzǝ cfa.",
      "phonetic": "Ndimzana Amount _001 : táng í mwání ignōngbân énǝ zǝzǝ. Púd ítāng ī mwání utǝ́ jǝ ilódgo zǝzǝ cfa.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication AMOUNT_001 : Le montant saisi est égal à zéro. Tapez une somme valide supérieure à 0 FCFA.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_061",
      "ewo": "Ndimzana Amount _001 : táŋ í mwání iɲɔ̄ŋbân ɛ́nǝ zǝzǝ. Púd ítāŋ ī mwání utǝ́ jǝ ilódgo zǝzǝ cfa.",
      "phonetic_ewo": "Ndimzana Amount _001 : táng í mwání ignōngbân énǝ zǝzǝ. Púd ítāng ī mwání utǝ́ jǝ ilódgo zǝzǝ cfa.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana Amount _001 : táŋ í mwání iɲɔ̄ŋbân ɛ́nǝ zǝzǝ. Púd ítāŋ ī mwání utǝ́ jǝ ilódgo zǝzǝ cfa.",
      "phonetic_eto": "Ndimzana Amount _001 : táng í mwání ignōngbân énǝ zǝzǝ. Púd ítāng ī mwání utǝ́ jǝ ilódgo zǝzǝ cfa.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication AMOUNT_002 : Vous n'avez pas assez d'argent disponible sur votre compte pour couvrir ce montant. Réduisez la somme à envoyer.": {
      "fub": "Ndimzana Amount _002 : Miniaágbɛɛ táŋ i mwání itǝ á mpǝ̄g lwán wɔ̄.   Vaza í táŋ í mwání weey lôm.",
      "phonetic": "Ndimzana Amount _002 : Miniaágbèè táng i mwání itǝ á mpǝ̄g lwán wō. Vaza í táng í mwání weey lôm.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication AMOUNT_002 : Vous n'avez pas assez d'argent disponible sur votre compte pour couvrir ce montant. Réduisez la somme à envoyer.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_062",
      "ewo": "Ndimzana Amount _002 : Miniaágbɛɛ táŋ i mwání itǝ á mpǝ̄g lwán wɔ̄. Vaza í táŋ í mwání weey lôm.",
      "phonetic_ewo": "Ndimzana Amount _002 : Miniaágbèè táng i mwání itǝ á mpǝ̄g lwán wō. Vaza í táng í mwání weey lôm.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana Amount _002 : Miniaágbɛɛ táŋ i mwání itǝ á mpǝ̄g lwán wɔ̄. Vaza í táŋ í mwání weey lôm.",
      "phonetic_eto": "Ndimzana Amount _002 : Miniaágbèè táng i mwání itǝ á mpǝ̄g lwán wō. Vaza í táng í mwání weey lôm.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication BENEFICIARY_001 : Il manque le nom ou le numéro de téléphone du destinataire. Remplissez les deux champs obligatoires.": {
      "fub": "Ndimzana beneficiary _001 : dwě ee nɔmɔ ímôd utǝ́ lôm mwání itǝ́ jǝ́ŋban.  Tíl á ɛpólô ɛ́bā ɛ́nǝ̂ ubila.",
      "phonetic": "Ndimzana beneficiary _001 : dwè ee nomo ímôd utǝ́ lôm mwání itǝ́ jǝ́ngban. Tíl á èpólô ébā énǝ̂ ubila.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication BENEFICIARY_001 : Il manque le nom ou le numéro de téléphone du destinataire. Remplissez les deux champs obligatoires.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_063",
      "ewo": "Ndimzana beneficiary _001 : dwě ee nɔmɔ ímôd utǝ́ lôm mwání itǝ́ jǝ́ŋban. Tíl á ɛpólô ɛ́bā ɛ́nǝ̂ ubila.",
      "phonetic_ewo": "Ndimzana beneficiary _001 : dwè ee nomo ímôd utǝ́ lôm mwání itǝ́ jǝ́ngban. Tíl á èpólô ébā énǝ̂ ubila.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana beneficiary _001 : dwě ee nɔmɔ ímôd utǝ́ lôm mwání itǝ́ jǝ́ŋban. Tíl á ɛpólô ɛ́bā ɛ́nǝ̂ ubila.",
      "phonetic_eto": "Ndimzana beneficiary _001 : dwè ee nomo ímôd utǝ́ lôm mwání itǝ́ jǝ́ngban. Tíl á èpólô ébā énǝ̂ ubila.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication SECURITY_001 : Par sécurité, vous devez vérifier le numéro du destinataire et cocher la case « J'ai vérifié le nom et le numéro du bénéficiaire » avant de continuer.": {
      "fub": "Ndimzana SECURITY_001 : Asú mbwágɛ,  ugbɛɛ nâ útɔ̄ŋlǝŋgan nɔmɔ ímôd utǝ́ lôm mwání úpud ndǝm á mɔ̄ ndā.  Mǝmâ cāz dwě ee nɔmɔ ímôd  mǝtǝ́ lôm mwání. Usúsú nâ úkǝ̂ usū.",
      "phonetic": "Ndimzana SECURITY_001 : Asú mbwágè, ugbèè nâ útōnglǝnggan nomo ímôd utǝ́ lôm mwání úpud ndǝm á mō ndā. Mǝmâ cāz dwè ee nomo ímôd mǝtǝ́ lôm mwání. Usúsú nâ úkǝ̂ usū.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication SECURITY_001 : Par sécurité, vous devez vérifier le numéro du destinataire et cocher la case « J'ai vérifié le nom et le numéro du bénéficiaire » avant de continuer.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_064",
      "ewo": "Ndimzana SECURITY_001 : Asú mbwágɛ, ugbɛɛ nâ útɔ̄ŋlǝŋgan nɔmɔ ímôd utǝ́ lôm mwání úpud ndǝm á mɔ̄ ndā. Mǝmâ cāz dwě ee nɔmɔ ímôd mǝtǝ́ lôm mwání. Usúsú nâ úkǝ̂ usū.",
      "phonetic_ewo": "Ndimzana SECURITY_001 : Asú mbwágè, ugbèè nâ útōnglǝnggan nomo ímôd utǝ́ lôm mwání úpud ndǝm á mō ndā. Mǝmâ cāz dwè ee nomo ímôd mǝtǝ́ lôm mwání. Usúsú nâ úkǝ̂ usū.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana SECURITY_001 : Asú mbwágɛ, ugbɛɛ nâ útɔ̄ŋlǝŋgan nɔmɔ ímôd utǝ́ lôm mwání úpud ndǝm á mɔ̄ ndā. Mǝmâ cāz dwě ee nɔmɔ ímôd mǝtǝ́ lôm mwání. Usúsú nâ úkǝ̂ usū.",
      "phonetic_eto": "Ndimzana SECURITY_001 : Asú mbwágè, ugbèè nâ útōnglǝnggan nomo ímôd utǝ́ lôm mwání úpud ndǝm á mō ndā. Mǝmâ cāz dwè ee nomo ímôd mǝtǝ́ lôm mwání. Usúsú nâ úkǝ̂ usū.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication SECURITY_002 : Vous n'avez encore jamais envoyé d'argent à ce contact. Assurez-vous qu'il s'agit bien de la bonne personne et du bon numéro.": {
      "fub": "Ndimzana SECURITY_002 : miniŋgɛ́ntǝ̄ lôm ímôd ɲɔ̂ mwání.  Tɔŋlan ɛ́nǝ̂ ímôd utǝ́ jǝ̂ ee mpaŋ nɔmɔ.",
      "phonetic": "Ndimzana SECURITY_002 : mininggéntǝ̄ lôm ímôd gnô mwání. Tonglan énǝ̂ ímôd utǝ́ jǝ̂ ee mpang nomo.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication SECURITY_002 : Vous n'avez encore jamais envoyé d'argent à ce contact. Assurez-vous qu'il s'agit bien de la bonne personne et du bon numéro.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_065",
      "ewo": "Ndimzana SECURITY_002 : miniŋgɛ́ntǝ̄ lôm ímôd ɲɔ̂ mwání. Tɔŋlan ɛ́nǝ̂ ímôd utǝ́ jǝ̂ ee mpaŋ nɔmɔ.",
      "phonetic_ewo": "Ndimzana SECURITY_002 : mininggéntǝ̄ lôm ímôd gnô mwání. Tonglan énǝ̂ ímôd utǝ́ jǝ̂ ee mpang nomo.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana SECURITY_002 : miniŋgɛ́ntǝ̄ lôm ímôd ɲɔ̂ mwání. Tɔŋlan ɛ́nǝ̂ ímôd utǝ́ jǝ̂ ee mpaŋ nɔmɔ.",
      "phonetic_eto": "Ndimzana SECURITY_002 : mininggéntǝ̄ lôm ímôd gnô mwání. Tonglan énǝ̂ ímôd utǝ́ jǝ̂ ee mpang nomo.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication NETWORK_001 : Le réseau est momentanément coupé. Rassurez-vous : aucun argent n'a été débité de votre compte. Patientez quelques instants puis réessayez.": {
      "fub": "Ndimzana Network _001: Resó íkǝ̂.  Tāl nâ mwán aánjī wɔ vaza á mpǝ̄g.  Yaŋa bwân  binutɛ̂n",
      "phonetic": "Ndimzana Network _001: Resó íkǝ̂. Tāl nâ mwán aánjī wo vaza á mpǝ̄g. Yanga bwân binutèn",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication NETWORK_001 : Le réseau est momentanément coupé. Rassurez-vous : aucun argent n'a été débité de votre compte. Patientez quelques instants puis réessayez.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_066",
      "ewo": "Ndimzana Network _001: Resó íkǝ̂. Tāl nâ mwán aánjī wɔ vaza á mpǝ̄g. Yaŋa bwân binutɛ̂n",
      "phonetic_ewo": "Ndimzana Network _001: Resó íkǝ̂. Tāl nâ mwán aánjī wo vaza á mpǝ̄g. Yanga bwân binutèn",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana Network _001: Resó íkǝ̂. Tāl nâ mwán aánjī wɔ vaza á mpǝ̄g. Yaŋa bwân binutɛ̂n",
      "phonetic_eto": "Ndimzana Network _001: Resó íkǝ̂. Tāl nâ mwán aánjī wo vaza á mpǝ̄g. Yanga bwân binutèn",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Explication CONFIRM_001 : Vous devez cocher la case « Je confirme que les informations ci-dessus sont correctes » avant de cliquer sur le bouton de confirmation.": {
      "fub": "Ndimzana CONFIRM_001 : Ugbɛɛ nâ úpûd ndǝm á mɔ̄ ndā « Mǝtǝ́ jǝ́blǝ̂ nâ mǝpɔ́ ma mǝnǝtɔ̄» usúsú nâ úpûd unǔŋ á lōgô kɔŋfirmasíōŋ.",
      "phonetic": "Ndimzana CONFIRM_001 : Ugbèè nâ úpûd ndǝm á mō ndā « Mǝtǝ́ jǝ́blǝ̂ nâ mǝpó ma mǝnǝtō» usúsú nâ úpûd unùng á lōgô kongfirmasíōng.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Explication CONFIRM_001 : Vous devez cocher la case « Je confirme que les informations ci-dessus sont correctes » avant de cliquer sur le bouton de confirmation.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_067",
      "ewo": "Ndimzana CONFIRM_001 : Ugbɛɛ nâ úpûd ndǝm á mɔ̄ ndā « Mǝtǝ́ jǝ́blǝ̂ nâ mǝpɔ́ ma mǝnǝtɔ̄» usúsú nâ úpûd unǔŋ á lōgô kɔŋfirmasíōŋ.",
      "phonetic_ewo": "Ndimzana CONFIRM_001 : Ugbèè nâ úpûd ndǝm á mō ndā « Mǝtǝ́ jǝ́blǝ̂ nâ mǝpó ma mǝnǝtō» usúsú nâ úpûd unùng á lōgô kongfirmasíōng.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ndimzana CONFIRM_001 : Ugbɛɛ nâ úpûd ndǝm á mɔ̄ ndā « Mǝtǝ́ jǝ́blǝ̂ nâ mǝpɔ́ ma mǝnǝtɔ̄» usúsú nâ úpûd unǔŋ á lōgô kɔŋfirmasíōŋ.",
      "phonetic_eto": "Ndimzana CONFIRM_001 : Ugbèè nâ úpûd ndǝm á mō ndā « Mǝtǝ́ jǝ́blǝ̂ nâ mǝpó ma mǝnǝtō» usúsú nâ úpûd unùng á lōgô kongfirmasíōng.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Conseils de protection contre les erreurs et la fraude.": {
      "fub": "Mǝlǝ́bgǝ̂ asú bǝ́bǝ̂ wɔ̂ jib mwání ee ida í nnó.",
      "phonetic": "Mǝlǝ́bgǝ̂ asú bǝ́bǝ̂ wô jib mwání ee ida í nnó.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Conseils de protection contre les erreurs et la fraude.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_068",
      "ewo": "Mǝlǝ́bgǝ̂ asú bǝ́bǝ̂ wɔ̂ jib mwání ee ida í nnó.",
      "phonetic_ewo": "Mǝlǝ́bgǝ̂ asú bǝ́bǝ̂ wô jib mwání ee ida í nnó.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mǝlǝ́bgǝ̂ asú bǝ́bǝ̂ wɔ̂ jib mwání ee ida í nnó.",
      "phonetic_eto": "Mǝlǝ́bgǝ̂ asú bǝ́bǝ̂ wô jib mwání ee ida í nnó.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Règle essentielle : contrôlez systématiquement le nom et le numéro du destinataire avant chaque envoi.": {
      "fub": "Mpaŋ mǝlǝ́bgǝ̂ : Tɔŋlan dwě ee nɔmɔ ímôd útǝ̄ lôm mwání usu nâ úlôm mwáni",
      "phonetic": "Mpang mǝlǝ́bgǝ̂ : Tonglan dwè ee nomo ímôd útǝ̄ lôm mwání usu nâ úlôm mwáni",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Règle essentielle : contrôlez systématiquement le nom et le numéro du destinataire avant chaque envoi.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_069",
      "ewo": "Mpaŋ mǝlǝ́bgǝ̂ : Tɔŋlan dwě ee nɔmɔ ímôd útǝ̄ lôm mwání usu nâ úlôm mwáni",
      "phonetic_ewo": "Mpang mǝlǝ́bgǝ̂ : Tonglan dwè ee nomo ímôd útǝ̄ lôm mwání usu nâ úlôm mwáni",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mpaŋ mǝlǝ́bgǝ̂ : Tɔŋlan dwě ee nɔmɔ ímôd útǝ̄ lôm mwání usu nâ úlôm mwáni",
      "phonetic_eto": "Mpang mǝlǝ́bgǝ̂ : Tonglan dwè ee nomo ímôd útǝ̄ lôm mwání usu nâ úlôm mwáni",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Votre connexion avec Safinum Pay est protégée et chiffrée.": {
      "fub": "Ŋ̀kwál wɔ̄ ee Sadinum Pay ityâ ɛŋgaŋ.",
      "phonetic": "Ŋ̀kwál wō ee Sadinum Pay ityâ ènggang.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Votre connexion avec Safinum Pay est protégée et chiffrée.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_070",
      "ewo": "Ŋ̀kwál wɔ̄ ee Sadinum Pay ityâ ɛŋgaŋ.",
      "phonetic_ewo": "Ŋ̀kwál wō ee Sadinum Pay ityâ ènggang.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ŋ̀kwál wɔ̄ ee Sadinum Pay ityâ ɛŋgaŋ.",
      "phonetic_eto": "Ŋ̀kwál wō ee Sadinum Pay ityâ ènggang.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Environnement de démonstration : n'entrez jamais vos vrais codes secrets ou coordonnées bancaires réelles.": {
      "fub": "Ɛ́sǝ tɔ́ oó : Bǝ́pûd m̀paŋ ɛsɔ́ bibǝglǝ bibúg dɔ̂ ee m̀paŋ nɔmɔ á mpǝ̄g mwán á bāŋ wɔ̄.",
      "phonetic": "Ɛ́sǝ tó oó : Bǝ́pûd m pang èsó bibǝglǝ bibúg dô ee m pang nomo á mpǝ̄g mwán á bāng wō.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Environnement de démonstration : n'entrez jamais vos vrais codes secrets ou coordonnées bancaires réelles.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_EXP_071",
      "ewo": "Ɛ́sǝ tɔ́ oó : Bǝ́pûd m̀paŋ ɛsɔ́ bibǝglǝ bibúg dɔ̂ ee m̀paŋ nɔmɔ á mpǝ̄g mwán á bāŋ wɔ̄.",
      "phonetic_ewo": "Ɛ́sǝ tó oó : Bǝ́pûd m pang èsó bibǝglǝ bibúg dô ee m pang nomo á mpǝ̄g mwán á bāng wō.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ɛ́sǝ tɔ́ oó : Bǝ́pûd m̀paŋ ɛsɔ́ bibǝglǝ bibúg dɔ̂ ee m̀paŋ nɔmɔ á mpǝ̄g mwán á bāŋ wɔ̄.",
      "phonetic_eto": "Ɛ́sǝ tó oó : Bǝ́pûd m pang èsó bibǝglǝ bibúg dô ee m pang nomo á mpǝ̄g mwán á bāng wō.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Deux cent cinquante mille francs CFA": {
      "fub": "Ǹtɛd twágsîn íbā ee twágsîn mintɛd mítān.",
      "phonetic": "Ǹtèd twágsîn íbā ee twágsîn mintèd mítān.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Deux cent cinquante mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_001",
      "ewo": "Ǹtɛd twágsîn íbā ee twágsîn mintɛd mítān.",
      "phonetic_ewo": "Ǹtèd twágsîn íbā ee twágsîn mintèd mítān.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ǹtɛd twágsîn íbā ee twágsîn mintɛd mítān.",
      "phonetic_eto": "Ǹtèd twágsîn íbā ee twágsîn mintèd mítān.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Quinze mille francs CFA": {
      "fub": "Twágsîn ɛwóm ee ítān",
      "phonetic": "Twágsîn èwóm ee ítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Quinze mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_002",
      "ewo": "Twágsîn ɛwóm ee ítān",
      "phonetic_ewo": "Twágsîn èwóm ee ítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn ɛwóm ee ítān",
      "phonetic_eto": "Twágsîn èwóm ee ítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Douze mille cinq cents francs CFA": {
      "fub": "Twágsîn ewóm ee íbā ee mintɛd mítān",
      "phonetic": "Twágsîn ewóm ee íbā ee mintèd mítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Douze mille cinq cents francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_003",
      "ewo": "Twágsîn ewóm ee íbā ee mintɛd mítān",
      "phonetic_ewo": "Twágsîn ewóm ee íbā ee mintèd mítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn ewóm ee íbā ee mintɛd mítān",
      "phonetic_eto": "Twágsîn ewóm ee íbā ee mintèd mítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cent quatre-vingts mille francs CFA": {
      "fub": "Ǹtɛd twágsîn ee twágsîn mǝwóm ŋmâm.",
      "phonetic": "Ǹtèd twágsîn ee twágsîn mǝwóm ngmâm.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cent quatre-vingts mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_004",
      "ewo": "Ǹtɛd twágsîn ee twágsîn mǝwóm ŋmâm.",
      "phonetic_ewo": "Ǹtèd twágsîn ee twágsîn mǝwóm ngmâm.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ǹtɛd twágsîn ee twágsîn mǝwóm ŋmâm.",
      "phonetic_eto": "Ǹtèd twágsîn ee twágsîn mǝwóm ngmâm.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cinquante mille francs CFA": {
      "fub": "Twágsîn mǝwóm tān",
      "phonetic": "Twágsîn mǝwóm tān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cinquante mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_005",
      "ewo": "Twágsîn mǝwóm tān",
      "phonetic_ewo": "Twágsîn mǝwóm tān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn mǝwóm tān",
      "phonetic_eto": "Twágsîn mǝwóm tān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Sept mille cinq cents francs CFA": {
      "fub": "Twágsîn zaŋmál ee mintɛd mítān",
      "phonetic": "Twágsîn zangmál ee mintèd mítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Sept mille cinq cents francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_006",
      "ewo": "Twágsîn zaŋmál ee mintɛd mítān",
      "phonetic_ewo": "Twágsîn zangmál ee mintèd mítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn zaŋmál ee mintɛd mítān",
      "phonetic_eto": "Twágsîn zangmál ee mintèd mítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cent francs CFA": {
      "fub": "Ǹtɛd",
      "phonetic": "Ǹtèd",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cent francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_007",
      "ewo": "Ǹtɛd",
      "phonetic_ewo": "Ǹtèd",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ǹtɛd",
      "phonetic_eto": "Ǹtèd",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Deux mille cinq cents francs CFA": {
      "fub": "Twágsîn íbā ee mintɛd mítān.",
      "phonetic": "Twágsîn íbā ee mintèd mítān.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Deux mille cinq cents francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_008",
      "ewo": "Twágsîn íbā ee mintɛd mítān.",
      "phonetic_ewo": "Twágsîn íbā ee mintèd mítān.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn íbā ee mintɛd mítān.",
      "phonetic_eto": "Twágsîn íbā ee mintèd mítān.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Deux cents francs CFA": {
      "fub": "Mintɛd míbā",
      "phonetic": "Mintèd míbā",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Deux cents francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_009",
      "ewo": "Mintɛd míbā",
      "phonetic_ewo": "Mintèd míbā",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Mintɛd míbā",
      "phonetic_eto": "Mintèd míbā",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cinq mille francs CFA": {
      "fub": "Twágsîn ítān",
      "phonetic": "Twágsîn ítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cinq mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_010",
      "ewo": "Twágsîn ítān",
      "phonetic_ewo": "Twágsîn ítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn ítān",
      "phonetic_eto": "Twágsîn ítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Zéro franc CFA": {
      "fub": "zǝzǝ",
      "phonetic": "zǝzǝ",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Zéro franc CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_011",
      "ewo": "zǝzǝ",
      "phonetic_ewo": "zǝzǝ",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "zǝzǝ",
      "phonetic_eto": "zǝzǝ",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Un virgule cinq pour cent": {
      "fub": "Pudsáŋ a pwág ɛtwan ɛ́ mvozobo ee itán",
      "phonetic": "Pudsáng a pwág ètwan é mvozobo ee itán",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Un virgule cinq pour cent",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_012",
      "ewo": "Pudsáŋ a pwág ɛtwan ɛ́ mvozobo ee itán",
      "phonetic_ewo": "Pudsáng a pwág ètwan é mvozobo ee itán",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Pudsáŋ a pwág ɛtwan ɛ́ mvozobo ee itán",
      "phonetic_eto": "Pudsáng a pwág ètwan é mvozobo ee itán",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Deux pour cent": {
      "fub": "Pudsáŋ íbā",
      "phonetic": "Pudsáng íbā",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Deux pour cent",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_013",
      "ewo": "Pudsáŋ íbā",
      "phonetic_ewo": "Pudsáng íbā",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Pudsáŋ íbā",
      "phonetic_eto": "Pudsáng íbā",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Numéro de compte : CM zéro zéro un, deux trois quatre cinq, six sept huit neuf, zéro un": {
      "fub": "Nɔmɔ á mpǝ̄g mwání  : CM zǝzǝ , zǝzǝ,  pwág, ba, lá,  na,  tán, samna, zaŋmál, ŋmâm,  ibuu, zǝzǝ, pwág",
      "phonetic": "Nomo á mpǝ̄g mwání : CM zǝzǝ , zǝzǝ, pwág, ba, lá, na, tán, samna, zangmál, ngmâm, ibuu, zǝzǝ, pwág",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Numéro de compte : CM zéro zéro un, deux trois quatre cinq, six sept huit neuf, zéro un",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_014",
      "ewo": "Nɔmɔ á mpǝ̄g mwání : CM zǝzǝ , zǝzǝ, pwág, ba, lá, na, tán, samna, zaŋmál, ŋmâm, ibuu, zǝzǝ, pwág",
      "phonetic_ewo": "Nomo á mpǝ̄g mwání : CM zǝzǝ , zǝzǝ, pwág, ba, lá, na, tán, samna, zangmál, ngmâm, ibuu, zǝzǝ, pwág",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Nɔmɔ á mpǝ̄g mwání : CM zǝzǝ , zǝzǝ, pwág, ba, lá, na, tán, samna, zaŋmál, ŋmâm, ibuu, zǝzǝ, pwág",
      "phonetic_eto": "Nomo á mpǝ̄g mwání : CM zǝzǝ , zǝzǝ, pwág, ba, lá, na, tán, samna, zangmál, ngmâm, ibuu, zǝzǝ, pwág",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Téléphone : plus deux cent trente-sept, six quatre-vingt-dix-neuf, zéro zéro, onze, vingt-deux": {
      "fub": "nɔmɔ a téléfɔ̄n : úbâg  Mintɛd míbā ee mǝwóm lā ee zaŋmál,  samna,  mǝwóm ibuu ee ibuu,  zǝzǝ zǝzǝ,  ewom ee pwág, mǝwóm ba ee ibā.",
      "phonetic": "nomo a téléfōn : úbâg Mintèd míbā ee mǝwóm lā ee zangmál, samna, mǝwóm ibuu ee ibuu, zǝzǝ zǝzǝ, ewom ee pwág, mǝwóm ba ee ibā.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Téléphone : plus deux cent trente-sept, six quatre-vingt-dix-neuf, zéro zéro, onze, vingt-deux",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_015",
      "ewo": "nɔmɔ a téléfɔ̄n : úbâg Mintɛd míbā ee mǝwóm lā ee zaŋmál, samna, mǝwóm ibuu ee ibuu, zǝzǝ zǝzǝ, ewom ee pwág, mǝwóm ba ee ibā.",
      "phonetic_ewo": "nomo a téléfōn : úbâg Mintèd míbā ee mǝwóm lā ee zangmál, samna, mǝwóm ibuu ee ibuu, zǝzǝ zǝzǝ, ewom ee pwág, mǝwóm ba ee ibā.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "nɔmɔ a téléfɔ̄n : úbâg Mintɛd míbā ee mǝwóm lā ee zaŋmál, samna, mǝwóm ibuu ee ibuu, zǝzǝ zǝzǝ, ewom ee pwág, mǝwóm ba ee ibā.",
      "phonetic_eto": "nomo a téléfōn : úbâg Mintèd míbā ee mǝwóm lā ee zangmál, samna, mǝwóm ibuu ee ibuu, zǝzǝ zǝzǝ, ewom ee pwág, mǝwóm ba ee ibā.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Référence : S-A-F tiret deux mille vingt-six tiret X quatre-vingt-neuf": {
      "fub": "Reference : S-A-F twágsîn ee mǝwóm bā ee samna ntɛn X mǝwóm ŋmâm ee ibuu.",
      "phonetic": "Reference : S-A-F twágsîn ee mǝwóm bā ee samna ntèn X mǝwóm ngmâm ee ibuu.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Référence : S-A-F tiret deux mille vingt-six tiret X quatre-vingt-neuf",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_016",
      "ewo": "Reference : S-A-F twágsîn ee mǝwóm bā ee samna ntɛn X mǝwóm ŋmâm ee ibuu.",
      "phonetic_ewo": "Reference : S-A-F twágsîn ee mǝwóm bā ee samna ntèn X mǝwóm ngmâm ee ibuu.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Reference : S-A-F twágsîn ee mǝwóm bā ee samna ntɛn X mǝwóm ŋmâm ee ibuu.",
      "phonetic_eto": "Reference : S-A-F twágsîn ee mǝwóm bā ee samna ntèn X mǝwóm ngmâm ee ibuu.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Un": {
      "fub": "Pwág",
      "phonetic": "Pwág",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Un",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_017",
      "ewo": "Pwág",
      "phonetic_ewo": "Pwág",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Pwág",
      "phonetic_eto": "Pwág",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Deux": {
      "fub": "bā",
      "phonetic": "bā",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Deux",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_018",
      "ewo": "bā",
      "phonetic_ewo": "bā",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "bā",
      "phonetic_eto": "bā",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Trois": {
      "fub": "lāá",
      "phonetic": "lāá",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Trois",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_019",
      "ewo": "lāá",
      "phonetic_ewo": "lāá",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "lāá",
      "phonetic_eto": "lāá",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Quatre": {
      "fub": "na",
      "phonetic": "na",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Quatre",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_020",
      "ewo": "na",
      "phonetic_ewo": "na",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "na",
      "phonetic_eto": "na",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cinq": {
      "fub": "tán",
      "phonetic": "tán",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cinq",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_021",
      "ewo": "tán",
      "phonetic_ewo": "tán",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "tán",
      "phonetic_eto": "tán",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Six": {
      "fub": "samna",
      "phonetic": "samna",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Six",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_022",
      "ewo": "samna",
      "phonetic_ewo": "samna",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "samna",
      "phonetic_eto": "samna",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Sept": {
      "fub": "zaŋmál",
      "phonetic": "zangmál",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Sept",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_023",
      "ewo": "zaŋmál",
      "phonetic_ewo": "zangmál",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "zaŋmál",
      "phonetic_eto": "zangmál",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Huit": {
      "fub": "ŋmam",
      "phonetic": "ngmam",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Huit",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_024",
      "ewo": "ŋmam",
      "phonetic_ewo": "ngmam",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "ŋmam",
      "phonetic_eto": "ngmam",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Neuf": {
      "fub": "ibuu",
      "phonetic": "ibuu",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Neuf",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_025",
      "ewo": "ibuu",
      "phonetic_ewo": "ibuu",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "ibuu",
      "phonetic_eto": "ibuu",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Zéro": {
      "fub": "zǝzǝ",
      "phonetic": "zǝzǝ",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Zéro",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_026",
      "ewo": "zǝzǝ",
      "phonetic_ewo": "zǝzǝ",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "zǝzǝ",
      "phonetic_eto": "zǝzǝ",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Mille francs CFA": {
      "fub": "Twágsîn",
      "phonetic": "Twágsîn",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_027",
      "ewo": "Twágsîn",
      "phonetic_ewo": "Twágsîn",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn",
      "phonetic_eto": "Twágsîn",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Deux mille francs CFA": {
      "fub": "Twágsîn íbā",
      "phonetic": "Twágsîn íbā",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Deux mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_028",
      "ewo": "Twágsîn íbā",
      "phonetic_ewo": "Twágsîn íbā",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn íbā",
      "phonetic_eto": "Twágsîn íbā",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Dix mille francs CFA": {
      "fub": "Twágsîn ɛwóm",
      "phonetic": "Twágsîn èwóm",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Dix mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_029",
      "ewo": "Twágsîn ɛwóm",
      "phonetic_ewo": "Twágsîn èwóm",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn ɛwóm",
      "phonetic_eto": "Twágsîn èwóm",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Vingt mille francs CFA": {
      "fub": "Twágsîn mǝwóm bā",
      "phonetic": "Twágsîn mǝwóm bā",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Vingt mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_030",
      "ewo": "Twágsîn mǝwóm bā",
      "phonetic_ewo": "Twágsîn mǝwóm bā",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Twágsîn mǝwóm bā",
      "phonetic_eto": "Twágsîn mǝwóm bā",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cent mille francs CFA": {
      "fub": "Ǹtɛd twágsîn",
      "phonetic": "Ǹtèd twágsîn",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cent mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_031",
      "ewo": "Ǹtɛd twágsîn",
      "phonetic_ewo": "Ǹtèd twágsîn",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ǹtɛd twágsîn",
      "phonetic_eto": "Ǹtèd twágsîn",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Cinq cent mille francs CFA": {
      "fub": "Ǹtɛd twágsîn ítān",
      "phonetic": "Ǹtèd twágsîn ítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Cinq cent mille francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_032",
      "ewo": "Ǹtɛd twágsîn ítān",
      "phonetic_ewo": "Ǹtèd twágsîn ítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Ǹtɛd twágsîn ítān",
      "phonetic_eto": "Ǹtèd twágsîn ítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Un million de francs CFA": {
      "fub": "Miliɔ́ŋ mwág",
      "phonetic": "Milióng mwág",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Un million de francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_033",
      "ewo": "Miliɔ́ŋ mwág",
      "phonetic_ewo": "Milióng mwág",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Miliɔ́ŋ mwág",
      "phonetic_eto": "Milióng mwág",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Total : quinze mille deux cent vingt-cinq francs CFA": {
      "fub": "Táŋ i mwání : twágsîn ewóm ee  mintɛd míbā ee mǝwóm bā ee ítān",
      "phonetic": "Táng i mwání : twágsîn ewóm ee mintèd míbā ee mǝwóm bā ee ítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Total : quinze mille deux cent vingt-cinq francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_034",
      "ewo": "Táŋ i mwání : twágsîn ewóm ee mintɛd míbā ee mǝwóm bā ee ítān",
      "phonetic_ewo": "Táng i mwání : twágsîn ewóm ee mintèd míbā ee mǝwóm bā ee ítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Táŋ i mwání : twágsîn ewóm ee mintɛd míbā ee mǝwóm bā ee ítān",
      "phonetic_eto": "Táng i mwání : twágsîn ewóm ee mintèd míbā ee mǝwóm bā ee ítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Solde restant : deux cent trente-quatre mille sept cent soixante-quinze francs CFA": {
      "fub": "Táŋ i mwání : Ǹtɛd twágsîn íbā ee twágsîn mǝwóm lā ee mintɛd zaŋmál ee mǝwóm zaŋmál ee ítān",
      "phonetic": "Táng i mwání : Ǹtèd twágsîn íbā ee twágsîn mǝwóm lā ee mintèd zangmál ee mǝwóm zangmál ee ítān",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Solde restant : deux cent trente-quatre mille sept cent soixante-quinze francs CFA",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_NUM_035",
      "ewo": "Táŋ i mwání : Ǹtɛd twágsîn íbā ee twágsîn mǝwóm lā ee mintɛd zaŋmál ee mǝwóm zaŋmál ee ítān",
      "phonetic_ewo": "Táng i mwání : Ǹtèd twágsîn íbā ee twágsîn mǝwóm lā ee mintèd zangmál ee mǝwóm zangmál ee ítān",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Táŋ i mwání : Ǹtɛd twágsîn íbā ee twágsîn mǝwóm lā ee mintɛd zaŋmál ee mǝwóm zaŋmál ee ítān",
      "phonetic_eto": "Táng i mwání : Ǹtèd twágsîn íbā ee twágsîn mǝwóm lā ee mintèd zangmál ee mǝwóm zangmál ee ítān",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Appuyez pour entendre l'explication vocale de cette étape.": {
      "fub": "Bán nâ úwôg ndimzana itǝ́ yî.",
      "phonetic": "Bán nâ úwôg ndimzana itǝ́ yî.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Appuyez pour entendre l'explication vocale de cette étape.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_001",
      "ewo": "Bán nâ úwôg ndimzana itǝ́ yî.",
      "phonetic_ewo": "Bán nâ úwôg ndimzana itǝ́ yî.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Bán nâ úwôg ndimzana itǝ́ yî.",
      "phonetic_eto": "Bán nâ úwôg ndimzana itǝ́ yî.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Écouter la traduction vocale.": {
      "fub": "Wóg mpɛlní bibug",
      "phonetic": "Wóg mpèlní bibug",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Écouter la traduction vocale.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_002",
      "ewo": "Wóg mpɛlní bibug",
      "phonetic_ewo": "Wóg mpèlní bibug",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Wóg mpɛlní bibug",
      "phonetic_eto": "Wóg mpèlní bibug",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Répéter l'explication vocale.": {
      "fub": "Báglǝ̂ vǝ̄ ndimzana",
      "phonetic": "Báglǝ̂ vǝ̄ ndimzana",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Répéter l'explication vocale.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_003",
      "ewo": "Báglǝ̂ vǝ̄ ndimzana",
      "phonetic_ewo": "Báglǝ̂ vǝ̄ ndimzana",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Báglǝ̂ vǝ̄ ndimzana",
      "phonetic_eto": "Báglǝ̂ vǝ̄ ndimzana",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Lire l'explication à vitesse ralentie.": {
      "fub": "láŋ ndimzana utǝ́tǝ̂g",
      "phonetic": "láng ndimzana utǝ́tǝ̂g",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Lire l'explication à vitesse ralentie.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_004",
      "ewo": "láŋ ndimzana utǝ́tǝ̂g",
      "phonetic_ewo": "láng ndimzana utǝ́tǝ̂g",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "láŋ ndimzana utǝ́tǝ̂g",
      "phonetic_eto": "láng ndimzana utǝ́tǝ̂g",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Changer la langue d'écoute et de traduction.": {
      "fub": "Cɛ́nî ŋkálɔ̂ íwôg ee ndimzana",
      "phonetic": "Cénî ngkálô íwôg ee ndimzana",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Changer la langue d'écoute et de traduction.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_005",
      "ewo": "Cɛ́nî ŋkálɔ̂ íwôg ee ndimzana",
      "phonetic_ewo": "Cénî ngkálô íwôg ee ndimzana",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Cɛ́nî ŋkálɔ̂ íwôg ee ndimzana",
      "phonetic_eto": "Cénî ngkálô íwôg ee ndimzana",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Afficher la traduction sous le texte original.": {
      "fub": "Púdî ndimzana ásī ítin  bibúg",
      "phonetic": "Púdî ndimzana ásī ítin bibúg",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Afficher la traduction sous le texte original.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_006",
      "ewo": "Púdî ndimzana ásī ítin bibúg",
      "phonetic_ewo": "Púdî ndimzana ásī ítin bibúg",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Púdî ndimzana ásī ítin bibúg",
      "phonetic_eto": "Púdî ndimzana ásī ítin bibúg",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Afficher uniquement le texte officiel français.": {
      "fub": "Púd bibúg vǝ́ á ŋkwál pulasí",
      "phonetic": "Púd bibúg vǝ́ á ngkwál pulasí",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Afficher uniquement le texte officiel français.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_007",
      "ewo": "Púd bibúg vǝ́ á ŋkwál pulasí",
      "phonetic_ewo": "Púd bibúg vǝ́ á ngkwál pulasí",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Púd bibúg vǝ́ á ŋkwál pulasí",
      "phonetic_eto": "Púd bibúg vǝ́ á ngkwál pulasí",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Remplacer l'affichage par votre langue nationale.": {
      "fub": "Púd téléfɔ̄n wɔ̂ á ŋkwál itón",
      "phonetic": "Púd téléfōn wô á ngkwál itón",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Remplacer l'affichage par votre langue nationale.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_008",
      "ewo": "Púd téléfɔ̄n wɔ̂ á ŋkwál itón",
      "phonetic_ewo": "Púd téléfōn wô á ngkwál itón",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Púd téléfɔ̄n wɔ̂ á ŋkwál itón",
      "phonetic_eto": "Púd téléfōn wô á ngkwál itón",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Arrêter la voix.": {
      "fub": "cíg cīŋ",
      "phonetic": "cíg cīng",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Arrêter la voix.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_009",
      "ewo": "cíg cīŋ",
      "phonetic_ewo": "cíg cīng",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "cíg cīŋ",
      "phonetic_eto": "cíg cīng",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Entrez votre code secret pour autoriser la transaction.": {
      "fub": "Púdǝ̀ ɛsɔ bivǝglǝ bibúg byɔ̂ újǝ̂blǝ traŋsaksíōŋ",
      "phonetic": "Púdǝ̀ èso bivǝglǝ bibúg byô újǝ̂blǝ trangsaksíōng",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Entrez votre code secret pour autoriser la transaction.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_010",
      "ewo": "Púdǝ̀ ɛsɔ bivǝglǝ bibúg byɔ̂ újǝ̂blǝ traŋsaksíōŋ",
      "phonetic_ewo": "Púdǝ̀ èso bivǝglǝ bibúg byô újǝ̂blǝ trangsaksíōng",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Púdǝ̀ ɛsɔ bivǝglǝ bibúg byɔ̂ újǝ̂blǝ traŋsaksíōŋ",
      "phonetic_eto": "Púdǝ̀ èso bivǝglǝ bibúg byô újǝ̂blǝ trangsaksíōng",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Entrez le code de vérification reçu par SMS.": {
      "fub": "Púdǝ̀ ɛsɔ́ bivǝglǝ bibúg  úgbǝ̂ ee pɔ̄.",
      "phonetic": "Púdǝ̀ èsó bivǝglǝ bibúg úgbǝ̂ ee pō.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Entrez le code de vérification reçu par SMS.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_011",
      "ewo": "Púdǝ̀ ɛsɔ́ bivǝglǝ bibúg úgbǝ̂ ee pɔ̄.",
      "phonetic_ewo": "Púdǝ̀ èsó bivǝglǝ bibúg úgbǝ̂ ee pō.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Púdǝ̀ ɛsɔ́ bivǝglǝ bibúg úgbǝ̂ ee pɔ̄.",
      "phonetic_eto": "Púdǝ̀ èsó bivǝglǝ bibúg úgbǝ̂ ee pō.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Le plafond de transfert quotidien a été atteint.": {
      "fub": "Í tāŋ í  mwān unǝ lôm amǒz mwág úpâm",
      "phonetic": "Í tāng í mwān unǝ lôm amòz mwág úpâm",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Le plafond de transfert quotidien a été atteint.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_012",
      "ewo": "Í tāŋ í mwān unǝ lôm amǒz mwág úpâm",
      "phonetic_ewo": "Í tāng í mwān unǝ lôm amòz mwág úpâm",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Í tāŋ í mwān unǝ lôm amǒz mwág úpâm",
      "phonetic_eto": "Í tāng í mwān unǝ lôm amòz mwág úpâm",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Télécharger le reçu de paiement en PDF.": {
      "fub": "ɲɔŋ resu íyagna í mwání idí pdf",
      "phonetic": "gnong resu íyagna í mwání idí pdf",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Télécharger le reçu de paiement en PDF.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_013",
      "ewo": "ɲɔŋ resu íyagna í mwání idí pdf",
      "phonetic_ewo": "gnong resu íyagna í mwání idí pdf",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "ɲɔŋ resu íyagna í mwání idí pdf",
      "phonetic_eto": "gnong resu íyagna í mwání idí pdf",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Partager la confirmation de transfert par SMS ou WhatsApp.": {
      "fub": "Káb koŋfimasíoŋ ílôm mwání á pɔ̄ ee whatsapps",
      "phonetic": "Káb kongfimasíong ílôm mwání á pō ee whatsapps",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Partager la confirmation de transfert par SMS ou WhatsApp.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_014",
      "ewo": "Káb koŋfimasíoŋ ílôm mwání á pɔ̄ ee whatsapps",
      "phonetic_ewo": "Káb kongfimasíong ílôm mwání á pō ee whatsapps",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Káb koŋfimasíoŋ ílôm mwání á pɔ̄ ee whatsapps",
      "phonetic_eto": "Káb kongfimasíong ílôm mwání á pō ee whatsapps",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    },
    "Votre transaction est protégée par le protocole bancaire Safinum Innovate 2026.": {
      "fub": "Protokól á bāŋ  Safinum Innovate m̀mú akuda íbā ee mǝwóm bā ee samna utǝ́ baglǝ traŋsasíōŋ á mwán  wɔ̄.",
      "phonetic": "Protokól á bāng Safinum Innovate m mú akuda íbā ee mǝwóm bā ee samna utǝ́ baglǝ trangsasíōng á mwán wō.",
      "explain_fub": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_fub_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "explain_fr": "Votre transaction est protégée par le protocole bancaire Safinum Innovate 2026.",
      "category": "navigation",
      "source": "maloba_dataset_eton_SAF_CMD_015",
      "ewo": "Protokól á bāŋ Safinum Innovate m̀mú akuda íbā ee mǝwóm bā ee samna utǝ́ baglǝ traŋsasíōŋ á mwán wɔ̄.",
      "phonetic_ewo": "Protokól á bāng Safinum Innovate m mú akuda íbā ee mǝwóm bā ee samna utǝ́ baglǝ trangsasíōng á mwán wō.",
      "explain_ewo": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_ewo_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani.",
      "eto": "Protokól á bāŋ Safinum Innovate m̀mú akuda íbā ee mǝwóm bā ee samna utǝ́ baglǝ traŋsasíōŋ á mwán wɔ̄.",
      "phonetic_eto": "Protokól á bāng Safinum Innovate m mú akuda íbā ee mǝwóm bā ee samna utǝ́ baglǝ trangsasíōng á mwán wō.",
      "explain_eto": "Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
      "explain_eto_phonetic": "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."
    }
  },
  "dynamic_patterns": [
    {
      "id": "greeting_user",
      "regex": "^(?:Bonjour|Hello),\\s*(.+)$",
      "template_fub": "Jaɓɓaama, $1",
      "explain_fub": "Salaama e jaɓɓaago $1, joom limngal hisaabu.",
      "explain_fr": "Message d'accueil personnalisé du titulaire du compte ($1).",
      "category": "solde",
      "source": "02_safinum_wave_sponsor_corpus"
    },
    {
      "id": "account_number_line",
      "regex": "^(?:Numéro de compte\\s*:|Account number\\s*:)\\s*(.+)$",
      "template_fub": "Lambar limngal hisaabu : $1",
      "explain_fub": "Lambar limngal banki maa keeriido ($1). Lambar oo waylataako.",
      "explain_fr": "Identifiant unique de votre compte bancaire ($1), conservé intact sans aucune modification.",
      "category": "solde",
      "source": "01_aki_osc_financial_glossary"
    },
    {
      "id": "date_fr",
      "regex": "^(\\d{1,2})\\s+(nov\\.|oct\\.|déc\\.|janv\\.|févr\\.|mars|avr\\.|mai|juin|juil\\.|août|sept\\.)\\s+(\\d{4})$",
      "template_fub": "Ñalnde $1 lewru $2 $3",
      "explain_fub": "Ñalnde kuugal ceede ngal waɗaa ($1 $2 $3).",
      "explain_fr": "Date d'enregistrement de l'opération dans votre historique.",
      "category": "solde",
      "source": "03_tourneux_dictionary_csv"
    },
    {
      "id": "date_en",
      "regex": "^(Nov|Oct|Dec|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep)\\s+(\\d{1,2}),\\s*(\\d{4})$",
      "template_fub": "Ñalnde $2 lewru $1 $3",
      "explain_fub": "Ñalnde kuugal ceede ngal waɗaa ($2 $1 $3).",
      "explain_fr": "Date d'enregistrement de l'opération dans votre historique.",
      "category": "solde",
      "source": "03_tourneux_dictionary_csv"
    }
  ],
  "phrase_chunks": [
    {
      "fr": "ne partagez jamais votre code secret",
      "fub": "to hokku neɗɗo feere lambar maa cuuɗiido koo nde",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "ne communiquez jamais votre code",
      "fub": "to hokku neɗɗo feere lambar maa cuuɗiido koo nde",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "votre code secret est personnel",
      "fub": "lambar maa cuuɗiido ɗum huunde maa feere tan",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "plafond journalier de virement",
      "fub": "haaddi nelal ceede ñalnde fuu",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "le plafond journalier est fixé à",
      "fub": "haaddi ceede ñalnde fuu darnaama haa",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "au-delà de ce montant",
      "fub": "to ceede ɗe ɓurii limngal ngal",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "une pièce d'identité valide",
      "fub": "talkuru seedamku innde cahiindu",
      "src": "03_tourneux_dictionary_csv",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "vérification d'identité",
      "fub": "laartugo seedamku innde",
      "src": "03_tourneux_dictionary_csv",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "service client",
      "fub": "сервиs ballal kiliyan'en",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "frais supplémentaires",
      "fub": "coggu ɓeydaangu",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "aucun frais supplémentaire",
      "fub": "walaa coggu feere ɓeydete",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "sans frais",
      "fub": "meere (walaa coggu)",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "en toute sécurité",
      "fub": "bee kisal timmungal",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "votre compte sera bloqué",
      "fub": "limngal hisaabu maa maɓɓete",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "tentatives erronées",
      "fub": "jarribooji boofɗi",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "veuillez vérifier",
      "fub": "useni laartu booyma",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "avant de confirmer",
      "fub": "hidde a tabitina",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "avant de valider",
      "fub": "hidde a tabitina",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "numéro de téléphone du bénéficiaire",
      "fub": "lambar waya jaɓoowo ceede",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "nom du bénéficiaire",
      "fub": "innde jaɓoowo ceede",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "solde disponible",
      "fub": "ceede gonɗe nder limngal",
      "src": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "total débité",
      "fub": "ceede fuu ɗe ittete",
      "src": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "frais de transaction",
      "fub": "coggu nelal ceede",
      "src": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "frais de retrait",
      "fub": "coggu ittol ceede",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "frais d'envoi",
      "fub": "coggu nelal ceede",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "opérateur mobile money",
      "fub": "kampaniiru Mobile Money",
      "src": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "virement bancaire",
      "fub": "nelal ceede banki",
      "src": "18_waxal_unesco_bamako_orthography",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "compte bancaire",
      "fub": "limngal hisaabu banki",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "code de validation",
      "fub": "lambar tabitingol",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "envoyé par sms",
      "fub": "nelaaɗo bee SMS",
      "src": "02_safinum_wave_sponsor_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "en cas de problème",
      "fub": "to caɗeele ngoodi",
      "src": "04_akilang_conversational_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "veuillez patienter",
      "fub": "useni munyu seeɗa",
      "src": "04_akilang_conversational_corpus",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "opération irréversible",
      "fub": "kuugal ngal waawaa ruttineego",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    },
    {
      "fr": "ne peut pas être annulé",
      "fub": "waawaa haɗeego malla ruttineego",
      "src": "01_aki_osc_financial_glossary",
      "ewo": "Mɔni / Ésəle"
    }
  ],
  "word_lexicon": {
    "attention": {
      "fub": "reena",
      "src": "01_aki_osc_financial_glossary"
    },
    "alerte": {
      "fub": "reentinoore",
      "src": "01_aki_osc_financial_glossary"
    },
    "avertissement": {
      "fub": "reentinoore",
      "src": "01_aki_osc_financial_glossary"
    },
    "important": {
      "fub": "mawɗum",
      "src": "03_tourneux_dictionary_csv"
    },
    "information": {
      "fub": "kabaruuji",
      "src": "03_tourneux_dictionary_csv"
    },
    "informations": {
      "fub": "kabaruuji",
      "src": "03_tourneux_dictionary_csv"
    },
    "message": {
      "fub": "bataake",
      "src": "03_tourneux_dictionary_csv"
    },
    "client": {
      "fub": "kiliyanjo",
      "src": "01_aki_osc_financial_glossary"
    },
    "clients": {
      "fub": "kiliyan'en",
      "src": "01_aki_osc_financial_glossary"
    },
    "cher": {
      "fub": "tedduɗo",
      "src": "03_tourneux_dictionary_csv"
    },
    "chère": {
      "fub": "tedduɗo",
      "src": "03_tourneux_dictionary_csv"
    },
    "virement": {
      "fub": "nelal ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "virements": {
      "fub": "nele ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "transfert": {
      "fub": "nelal ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "transferts": {
      "fub": "nele ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "transaction": {
      "fub": "kuugal ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "transactions": {
      "fub": "kuugalji ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "opération": {
      "fub": "kuugal",
      "src": "01_aki_osc_financial_glossary"
    },
    "opérations": {
      "fub": "kuugalji",
      "src": "01_aki_osc_financial_glossary"
    },
    "montant": {
      "fub": "limngal ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "montants": {
      "fub": "limle ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "somme": {
      "fub": "ceede",
      "src": "03_tourneux_dictionary_csv"
    },
    "argent": {
      "fub": "ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "fonds": {
      "fub": "ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "solde": {
      "fub": "ceede gonɗe",
      "src": "01_aki_osc_financial_glossary"
    },
    "frais": {
      "fub": "coggu nelal",
      "src": "01_aki_osc_financial_glossary"
    },
    "commission": {
      "fub": "coggu",
      "src": "01_aki_osc_financial_glossary"
    },
    "commissions": {
      "fub": "cogguuji",
      "src": "01_aki_osc_financial_glossary"
    },
    "taxe": {
      "fub": "jomorgol",
      "src": "03_tourneux_dictionary_csv"
    },
    "taxes": {
      "fub": "jomorli",
      "src": "03_tourneux_dictionary_csv"
    },
    "tarif": {
      "fub": "coggu",
      "src": "03_tourneux_dictionary_csv"
    },
    "tarifs": {
      "fub": "cogguuji",
      "src": "03_tourneux_dictionary_csv"
    },
    "gratuit": {
      "fub": "meere (walaa coggu)",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "gratuite": {
      "fub": "meere (walaa coggu)",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "gratuits": {
      "fub": "meere (walaa coggu)",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "plafond": {
      "fub": "haaddi ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "limite": {
      "fub": "haaddi",
      "src": "03_tourneux_dictionary_csv"
    },
    "maximum": {
      "fub": "ko ɓuri ɗuuɗugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "minimum": {
      "fub": "famɗi fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "journalier": {
      "fub": "ñalnde fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "quotidien": {
      "fub": "ñalnde fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "hebdomadaire": {
      "fub": "asaweere fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "mensuel": {
      "fub": "lewru fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "supérieur": {
      "fub": "ɓurɗo",
      "src": "03_tourneux_dictionary_csv"
    },
    "inférieur": {
      "fub": "les",
      "src": "03_tourneux_dictionary_csv"
    },
    "dépasser": {
      "fub": "ɓurugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "dépasse": {
      "fub": "ɓuri",
      "src": "03_tourneux_dictionary_csv"
    },
    "compte": {
      "fub": "limngal hisaabu",
      "src": "01_aki_osc_financial_glossary"
    },
    "comptes": {
      "fub": "limle hisaabu",
      "src": "01_aki_osc_financial_glossary"
    },
    "bancaire": {
      "fub": "banki",
      "src": "01_aki_osc_financial_glossary"
    },
    "banque": {
      "fub": "banki",
      "src": "01_aki_osc_financial_glossary"
    },
    "agence": {
      "fub": "nokkuure banki",
      "src": "01_aki_osc_financial_glossary"
    },
    "guichet": {
      "fub": "nokkuure ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "bénéficiaire": {
      "fub": "jaɓoowo ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "destinataire": {
      "fub": "jaɓoowo ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "expéditeur": {
      "fub": "neldoowo",
      "src": "01_aki_osc_financial_glossary"
    },
    "titulaire": {
      "fub": "joom limngal",
      "src": "03_tourneux_dictionary_csv"
    },
    "numéro": {
      "fub": "lambar",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "téléphone": {
      "fub": "waya",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "mobile": {
      "fub": "waya",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "code": {
      "fub": "lambar cuuɗiido",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "secret": {
      "fub": "cuuɗiido",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "confidentiel": {
      "fub": "cuuɗiido",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "sécurité": {
      "fub": "kisal",
      "src": "01_aki_osc_financial_glossary"
    },
    "vérification": {
      "fub": "laartugo",
      "src": "01_aki_osc_financial_glossary"
    },
    "vérifier": {
      "fub": "laartugo",
      "src": "01_aki_osc_financial_glossary"
    },
    "vérifiez": {
      "fub": "laartu",
      "src": "01_aki_osc_financial_glossary"
    },
    "validation": {
      "fub": "tabitingol",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "valider": {
      "fub": "tabitingo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "validez": {
      "fub": "tabitinu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "confirmer": {
      "fub": "tabitingo",
      "src": "01_aki_osc_financial_glossary"
    },
    "confirmez": {
      "fub": "tabitinu",
      "src": "01_aki_osc_financial_glossary"
    },
    "confirmation": {
      "fub": "tabitingol",
      "src": "01_aki_osc_financial_glossary"
    },
    "envoyer": {
      "fub": "neldugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "envoyez": {
      "fub": "neldu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "envoi": {
      "fub": "nelal",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "recevoir": {
      "fub": "heɓugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "reçu": {
      "fub": "talkuru seedamku",
      "src": "18_waxal_unesco_bamako_orthography"
    },
    "retrait": {
      "fub": "ittol ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "retirer": {
      "fub": "ittugo ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "dépôt": {
      "fub": "resngo ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "déposer": {
      "fub": "resugo ceede",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "paiement": {
      "fub": "yoɓol",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "payer": {
      "fub": "yoɓugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "payez": {
      "fub": "yoɓu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "facture": {
      "fub": "talkuru hisaabu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "factures": {
      "fub": "talkuruuji hisaabu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "remboursement": {
      "fub": "yoɓitol",
      "src": "01_aki_osc_financial_glossary"
    },
    "annuler": {
      "fub": "haɗugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "annulé": {
      "fub": "haɗaama",
      "src": "03_tourneux_dictionary_csv"
    },
    "annulation": {
      "fub": "haɗgol",
      "src": "03_tourneux_dictionary_csv"
    },
    "bloqué": {
      "fub": "maɓɓaama",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "bloquer": {
      "fub": "maɓɓugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "suspendu": {
      "fub": "daraama",
      "src": "03_tourneux_dictionary_csv"
    },
    "erreur": {
      "fub": "boofol",
      "src": "01_aki_osc_financial_glossary"
    },
    "échec": {
      "fub": "waɗaayi",
      "src": "01_aki_osc_financial_glossary"
    },
    "échoué": {
      "fub": "waɗaayi",
      "src": "01_aki_osc_financial_glossary"
    },
    "succès": {
      "fub": "nasaraaku",
      "src": "01_aki_osc_financial_glossary"
    },
    "réseau": {
      "fub": "laawol enternet",
      "src": "18_waxal_unesco_bamako_orthography"
    },
    "connexion": {
      "fub": "jokkondiral",
      "src": "01_aki_osc_financial_glossary"
    },
    "indisponible": {
      "fub": "woodaa jooni",
      "src": "01_aki_osc_financial_glossary"
    },
    "disponible": {
      "fub": "woodi",
      "src": "01_aki_osc_financial_glossary"
    },
    "maintenance": {
      "fub": "feewnugo laawol",
      "src": "03_tourneux_dictionary_csv"
    },
    "service": {
      "fub": "kuugal",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "clientèle": {
      "fub": "ballal kiliyan'en",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "support": {
      "fub": "ballal",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "aide": {
      "fub": "ballal",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "identité": {
      "fub": "innde e seedamku",
      "src": "03_tourneux_dictionary_csv"
    },
    "pièce": {
      "fub": "talkuru",
      "src": "03_tourneux_dictionary_csv"
    },
    "carte": {
      "fub": "karti",
      "src": "03_tourneux_dictionary_csv"
    },
    "nationale": {
      "fub": "lesdi",
      "src": "03_tourneux_dictionary_csv"
    },
    "obligatoire": {
      "fub": "haani doole",
      "src": "03_tourneux_dictionary_csv"
    },
    "requis": {
      "fub": "haani",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "requise": {
      "fub": "haani",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "nécessaire": {
      "fub": "haani",
      "src": "03_tourneux_dictionary_csv"
    },
    "jamais": {
      "fub": "koo nde",
      "src": "03_tourneux_dictionary_csv"
    },
    "toujours": {
      "fub": "waktu fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "avant": {
      "fub": "hidde",
      "src": "03_tourneux_dictionary_csv"
    },
    "après": {
      "fub": "ɓaawo",
      "src": "03_tourneux_dictionary_csv"
    },
    "pendant": {
      "fub": "nder",
      "src": "03_tourneux_dictionary_csv"
    },
    "sans": {
      "fub": "walaa",
      "src": "03_tourneux_dictionary_csv"
    },
    "avec": {
      "fub": "bee",
      "src": "03_tourneux_dictionary_csv"
    },
    "pour": {
      "fub": "ngam",
      "src": "03_tourneux_dictionary_csv"
    },
    "dans": {
      "fub": "nder",
      "src": "03_tourneux_dictionary_csv"
    },
    "sur": {
      "fub": "dow",
      "src": "03_tourneux_dictionary_csv"
    },
    "sous": {
      "fub": "les",
      "src": "03_tourneux_dictionary_csv"
    },
    "vers": {
      "fub": "faa",
      "src": "03_tourneux_dictionary_csv"
    },
    "entre": {
      "fub": "hakkunde",
      "src": "03_tourneux_dictionary_csv"
    },
    "votre": {
      "fub": "maa",
      "src": "03_tourneux_dictionary_csv"
    },
    "vos": {
      "fub": "maa",
      "src": "03_tourneux_dictionary_csv"
    },
    "notre": {
      "fub": "amen",
      "src": "03_tourneux_dictionary_csv"
    },
    "nos": {
      "fub": "amen",
      "src": "03_tourneux_dictionary_csv"
    },
    "veuillez": {
      "fub": "useni",
      "src": "03_tourneux_dictionary_csv"
    },
    "merci": {
      "fub": "useko",
      "src": "03_tourneux_dictionary_csv"
    },
    "immédiatement": {
      "fub": "jooni-jooni",
      "src": "03_tourneux_dictionary_csv"
    },
    "automatiquement": {
      "fub": "bee hoore mum",
      "src": "03_tourneux_dictionary_csv"
    },
    "temporairement": {
      "fub": "nder saa'i seeɗa",
      "src": "03_tourneux_dictionary_csv"
    },
    "définitivement": {
      "fub": "haa abada",
      "src": "03_tourneux_dictionary_csv"
    },
    "partager": {
      "fub": "senndugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "partagez": {
      "fub": "to senndu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "communiquer": {
      "fub": "hokkugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "communiquez": {
      "fub": "hokkugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "personne": {
      "fub": "neɗɗo",
      "src": "03_tourneux_dictionary_csv"
    },
    "aucun": {
      "fub": "walaa",
      "src": "03_tourneux_dictionary_csv"
    },
    "aucune": {
      "fub": "walaa",
      "src": "03_tourneux_dictionary_csv"
    },
    "tout": {
      "fub": "fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "toute": {
      "fub": "fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "tous": {
      "fub": "fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "toutes": {
      "fub": "fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "chaque": {
      "fub": "fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "plusieurs": {
      "fub": "ɗuuɗɗum",
      "src": "03_tourneux_dictionary_csv"
    },
    "heures": {
      "fub": "saa'iiji",
      "src": "03_tourneux_dictionary_csv"
    },
    "heure": {
      "fub": "saa'i",
      "src": "03_tourneux_dictionary_csv"
    },
    "minutes": {
      "fub": "hojomaaji",
      "src": "03_tourneux_dictionary_csv"
    },
    "minute": {
      "fub": "hojom",
      "src": "03_tourneux_dictionary_csv"
    },
    "jour": {
      "fub": "ñalnde",
      "src": "03_tourneux_dictionary_csv"
    },
    "jours": {
      "fub": "balɗe",
      "src": "03_tourneux_dictionary_csv"
    },
    "mois": {
      "fub": "lewru",
      "src": "03_tourneux_dictionary_csv"
    },
    "année": {
      "fub": "hitaande",
      "src": "03_tourneux_dictionary_csv"
    },
    "aujourd'hui": {
      "fub": "hannde",
      "src": "03_tourneux_dictionary_csv"
    },
    "demain": {
      "fub": "jaango",
      "src": "03_tourneux_dictionary_csv"
    },
    "hier": {
      "fub": "keñi",
      "src": "03_tourneux_dictionary_csv"
    },
    "nouveau": {
      "fub": "keso",
      "src": "03_tourneux_dictionary_csv"
    },
    "nouvelle": {
      "fub": "kesal",
      "src": "03_tourneux_dictionary_csv"
    },
    "ancien": {
      "fub": "kiɗɗo",
      "src": "03_tourneux_dictionary_csv"
    },
    "total": {
      "fub": "fuu",
      "src": "01_aki_osc_financial_glossary"
    },
    "restant": {
      "fub": "keddiiɗo",
      "src": "01_aki_osc_financial_glossary"
    },
    "suffisant": {
      "fub": "heƴi",
      "src": "01_aki_osc_financial_glossary"
    },
    "insuffisant": {
      "fub": "heƴataa",
      "src": "01_aki_osc_financial_glossary"
    },
    "invalide": {
      "fub": "boofɗum",
      "src": "01_aki_osc_financial_glossary"
    },
    "valide": {
      "fub": "cahiidum",
      "src": "01_aki_osc_financial_glossary"
    },
    "incorrect": {
      "fub": "boofɗum",
      "src": "01_aki_osc_financial_glossary"
    },
    "correct": {
      "fub": "goonga",
      "src": "03_tourneux_dictionary_csv"
    },
    "tentative": {
      "fub": "jarribo",
      "src": "01_aki_osc_financial_glossary"
    },
    "tentatives": {
      "fub": "jarribooji",
      "src": "01_aki_osc_financial_glossary"
    },
    "essais": {
      "fub": "jarribooji",
      "src": "01_aki_osc_financial_glossary"
    },
    "essai": {
      "fub": "jarribo",
      "src": "01_aki_osc_financial_glossary"
    },
    "réessayer": {
      "fub": "jarribaago fahin",
      "src": "01_aki_osc_financial_glossary"
    },
    "réessayez": {
      "fub": "jarribu fahin",
      "src": "01_aki_osc_financial_glossary"
    },
    "continuer": {
      "fub": "jokkugo",
      "src": "01_aki_osc_financial_glossary"
    },
    "retour": {
      "fub": "ruttoraago",
      "src": "03_tourneux_dictionary_csv"
    },
    "modifier": {
      "fub": "waylugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "supprimer": {
      "fub": "momtugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "ajouter": {
      "fub": "ɓeydugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "choisir": {
      "fub": "suɓugo",
      "src": "03_tourneux_dictionary_csv"
    },
    "sélectionnez": {
      "fub": "suɓu",
      "src": "03_tourneux_dictionary_csv"
    },
    "saisir": {
      "fub": "winndugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "saisissez": {
      "fub": "winndu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "entrez": {
      "fub": "naatnu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "cocher": {
      "fub": "maantugo",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "cochez": {
      "fub": "maantu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "warning": {
      "fub": "reena",
      "src": "01_aki_osc_financial_glossary"
    },
    "please": {
      "fub": "useni",
      "src": "03_tourneux_dictionary_csv"
    },
    "transfer": {
      "fub": "nelal ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "amount": {
      "fub": "limngal ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "balance": {
      "fub": "ceede gonɗe",
      "src": "01_aki_osc_financial_glossary"
    },
    "fee": {
      "fub": "coggu nelal",
      "src": "01_aki_osc_financial_glossary"
    },
    "fees": {
      "fub": "cogguuji nelal",
      "src": "01_aki_osc_financial_glossary"
    },
    "account": {
      "fub": "limngal hisaabu",
      "src": "01_aki_osc_financial_glossary"
    },
    "beneficiary": {
      "fub": "jaɓoowo ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "recipient": {
      "fub": "jaɓoowo ceede",
      "src": "01_aki_osc_financial_glossary"
    },
    "phone": {
      "fub": "waya",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "number": {
      "fub": "lambar",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "security": {
      "fub": "kisal",
      "src": "01_aki_osc_financial_glossary"
    },
    "confirm": {
      "fub": "tabitinu",
      "src": "01_aki_osc_financial_glossary"
    },
    "verify": {
      "fub": "laartu",
      "src": "01_aki_osc_financial_glossary"
    },
    "limit": {
      "fub": "haaddi",
      "src": "03_tourneux_dictionary_csv"
    },
    "daily": {
      "fub": "ñalnde fuu",
      "src": "03_tourneux_dictionary_csv"
    },
    "exceeds": {
      "fub": "ɓuri",
      "src": "03_tourneux_dictionary_csv"
    },
    "failed": {
      "fub": "waɗaayi",
      "src": "01_aki_osc_financial_glossary"
    },
    "successful": {
      "fub": "timmii bee nasaraaku",
      "src": "01_aki_osc_financial_glossary"
    },
    "never": {
      "fub": "koo nde",
      "src": "03_tourneux_dictionary_csv"
    },
    "share": {
      "fub": "senndu",
      "src": "02_safinum_wave_sponsor_corpus"
    },
    "password": {
      "fub": "helmere suuɗiinde",
      "src": "01_aki_osc_financial_glossary"
    },
    "customers": {
      "fub": "kiliyan'en",
      "src": "01_aki_osc_financial_glossary"
    },
    "customer": {
      "fub": "kiliyanjo",
      "src": "01_aki_osc_financial_glossary"
    }
  },
  "rag_exemplars": [
    {
      "fr": "mon compte",
      "fub": "limngal am",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "votre compte",
      "fub": "limngal maa",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "code secret",
      "fub": "lambar cuuɗiido",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "code de validation",
      "fub": "lambar tabitingol",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "mon compte",
      "fub": "limngal am",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "votre compte",
      "fub": "limngal maa",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "code secret",
      "fub": "lambar cuuɗiido",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "code de validation",
      "fub": "lambar tabitingol",
      "src": "01_aki_osc_financial_glossary",
      "dom": "finance"
    },
    {
      "fr": "père de famille, homme marié qui a des enfants",
      "fub": "baaba-saare /baaba-saare'en - o/lJe",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "perfusion (litt. : injection d'eau) ; syn. perfuyog",
      "fub": "baatal ndiyam",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "« maraboutage » (litt. : travail de marabout magicien)",
      "fub": "kuugal buude",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "nouveau-né (litt. : enfant frais)",
      "fub": "I>inngel keccel / I>ikkon keccon",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "Culex spp., moustique des eaux usées (litt. : moustique de l'eau sale)",
      "fub": "cufu ndiyam salte",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "mère de famille",
      "fub": "daada-Ilikkon /daada-Ilikkon'en - o/IJe",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "maternité, fait de donner naissance à un enfant",
      "fub": "danygol- ngol",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "diabète (nom moderne de la maladie appelée couramment nyawu sukar); cf nyawu-sukar",
      "fub": "diyabet - nga",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "infinnier/médecin de garde (litt. : qui passe la nuit au travail)",
      "fub": "doktor baalanôo kuugal",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "donner un coup tranchant oblique ressentir une douleur analogue à celle que peut provoquer un coup de hache",
      "fub": "feyYa / peyy",
      "src": "03_tourneux_dictionary_csv",
      "dom": "lexicon_cameroon"
    },
    {
      "fr": "Je veux manger",
      "fub": "Mi yidi nyaamde",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Je veux partir",
      "fub": "Mi yidi yahude",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Je suis allé à la maison",
      "fub": "Mi yahii suudu",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Je veux boire de l'eau",
      "fub": "Mi yidi yarude ndiyam",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Veux-tu manger ?",
      "fub": "A yidi nyaamde?",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Je veux dormir",
      "fub": "Mi yidi daaɗe",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Je veux aller à la maison",
      "fub": "Mi yidi yahude suudu",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Comment vas-tu ?",
      "fub": "No mbaɗɗaa?",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Je veux te parler",
      "fub": "Mi yidi haalde e maa",
      "src": "04_akilang_conversational_corpus",
      "dom": "conversation"
    },
    {
      "fr": "Penchez le tronc vers l'avant (au niveau des hanches) en gardant le corps droit.",
      "fub": "Taadee goonga kama taadorde, ɓornee aadilaaku kama toggoore njamndi nde konu.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "En effet, vous ne pourrez pas recevoir ce que vous n'êtes pas en mesure de vous donner.\"",
      "fub": "Jittanan no wonɗaa gollirde, ko fii a waawataa wonude mbatulaajo an hande kadi.›",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "tous ceux qui l'ont reçu, à ceux qui croient en son nom, [il] a donné le pouvoir de devenir enfants de Dieu.",
      "fub": "12Ammaa fuu jaɓuɓemo kooliiɓe inde maako, o hokkiiɓe bawɗe wartuki ɓiɓɓe Allah.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Mais j'ai estimé qu'il était nécessaire de vous envoyer Epaphrodite mon frère, compagnon d'œuvre et d'armes avec moi, qui a été aussi envoyé de votre part pour m'administrer ce dont j'ai eu besoin.",
      "fub": "25 Amma mi tawi e haani mi lila banniraawo am Epaforoditus, gollodiiɗo am, e wallitammi hawre, kanko lilunoɗon to am gam o wallammi huuntugo haaje am.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "mangèrent avec lui dans sa maison.",
      "fub": "Ɓe nyaamdi bee maako nder saare maako.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Et ils lui dirent, Il n'y a aucun en ta parenté qui soit appelé de ce nom,",
      "fub": "Ɓe mbi'ataa: Jawmiraawo huuwi ɗum fuu.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "[25] Ses portes ne se fermeront point chaque jour, car il n'y aura point de nuit.",
      "fub": "25 Dammuɗe mayre maɓɓataako nyalooma, gam jemma walaa der mayre.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Elle enfantera un fils et tu lui donneras le nom de Jésus (C'est-à-dire Le-Seigneur-sauve), car c'est lui qui sauvera son peuple de ses péchés .\"",
      "fub": "O danyay ɓiɗɗo gorko nden a noddaymo Yeesu, ngam o hisnay yimɓe maako daga hakke maɓɓe.\"",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Et le tiers du soleil fut frappé, ainsi que le tiers de la lune, et le tiers des étoiles, afin que le tiers en soit obscurci; le jour perdit un tiers de sa clarté, et la nuit de même.",
      "fub": "12 Malaa'ika nayaɓo oo fuufi buututal mum, non tatoɓere naange e tatoɓere lewru e tatoɓere koode piyaa, faa gootel hen fuu tatoɓere mum niɓɓa, jemma e ɲalooma fuu mbaasa tatoɓere fooyre mum'en.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "11 Ensuite on me dit: \" Tu dois encore parler au nom de Dieu, au sujet de beaucoup de peuples et de pays, de beaucoup de gens de toutes langues et au sujet de beaucoup de rois. \"",
      "fub": "11 Ɓaawo majjum, bi'aami: \"Sey bataa kade ko Alla hollitin maa dow himɓe ɗuuɓɓe, e lenyi ɗuuɗɗi, e ɗelle ɗuuɗɗe, e laamiiɓe ɗuuɓɓe.\"",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Il a quatre filles qui ne sont pas mariées et qui parlent au nom de Dieu.",
      "fub": "9 O woodi ɓiɓɓe rewɓe nayo ɓe te'aaka, ɓe ɗon ngaajo wolde Allah.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Or, Moïse nous a ordonné dans la loi, de lapider de telles personnes; toi donc qu'en dis-tu?",
      "fub": "Haa e denndaangal muusallaaji, ɗi meeɗno-ɗen heɓde kadi ?...",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "29Rebecca avait un frère du nom de Laban.",
      "fub": "29 Rebekka woodi deerɗiraawo gorko, innde maako Laban.",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Ils t'interrogent au sujet de l'Heure: \"Quand va-t-elle jeter l'ancre ?\"",
      "fub": "Ɓe findini mo, ɓe wi'i: \"Karamoko'en, e on kippataa fii ko men woni mulude kon?\"",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "22 Nous est-il permis ou non de payer le tribut à l'empereur ? \"",
      "fub": "22E hara no haani ka men yoɓa lanɗo mawɗo Roomu on sagalle kaa haanaa?\"",
      "src": "06_bible_fulfulde_ebible_parallel",
      "dom": "bible_syntax"
    },
    {
      "fr": "Le travail des enfants au Burkina Faso",
      "fub": "Haɓugol golle sukaaɓe e nder Burkina Faso",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "L'école à l'heure des tablettes et d'Internet",
      "fub": "Alhaali janngingol e dow palleeji Internet",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "MISE À JOUR: L'accident a fait trois morts",
      "fub": "Wagadugu: Ciwlaaɓe ɓen tato maayi",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Elle s'occupe aussi de la recherche de nouvelles sources d'argent.",
      "fub": "Hino farlii mo kadi ɗaɓɓugol pehe kese wallayɗe heɓude seedeeji.",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Il y a un grand nombre de chiens à La Calamine.",
      "fub": "Haa woodi laana huɓɓuka heewɓe mbaasi heen pittaali mumen",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "l'eau dans la ville ?",
      "fub": "Holko seerndi ladde e wuro ?",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Il conduit également des études pour tout vérifier en bonne et due forme.",
      "fub": "O jangtiima kadi cadeele muusɗi ɗi o tawi e ɗiin laaɓi.",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Vous auriez préféré qu'on les jette à l'eau ?",
      "fub": "Holko haɗi enn calotaako so en tottaama buuñaa ?",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "- Conservation de l'eau et du sol dans la région du Sahel",
      "fub": "Caɗeele walla ŋakkere ndiyam laaɓuɗam e nder leyɗe sahel",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Etat des lieux: Nos problèmes économiques sont en train de s'aggraver de plus en plus chaque jour.",
      "fub": "Kamerun: Yanugol otooje torraaji mum no ɓeydaade ñannde kala",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "les jeunes et les marchés du travail",
      "fub": "Elto sukaaɓe e luumooji golle",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Avez-vous une idée de l'augmentation des prix sur la période de Noël ?",
      "fub": "Ko saabi ɓeyduugol cogguuji ñamri e saha balɗe juulde?",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Son autre nom, c'est Beijing.",
      "fub": "Inde makko burnde luttude noon woni inde Doyen Diop.",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Et puis, chaque jour vous pouvez discuter de cette expérience sur les réseaux sociaux Facebook, Twitter et Instagram, avec le hashtag #UnpackageYourself.",
      "fub": "Oɗon mbaawi heɓude ɗii kabaruji fuu e hello amen Facebook, Twitter e ka aplikasiyon \"PURE RADIO.\"",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Qu'est-ce que le home staging pour vendre sa maison ?",
      "fub": "Mate gollade fiirti welsindaade galle mum ?",
      "src": "07_rfi_fulfulde_news_parallel",
      "dom": "news_media"
    },
    {
      "fr": "Laissez-moi vous la donner. \"",
      "fub": "Mi hokki ma ɗum. \"",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Ils sont rentrés à la maison:",
      "fub": "Ɓe njaali wuro Asta:",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "L'eau est montée jusqu'à.",
      "fub": "Ndiyam wari haa daande.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Et l'eau est montée jusqu'ici.",
      "fub": "Ndiyam wari haa ɗoo.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Il a laissé une maison.",
      "fub": "O ɓenna wuro wonngo.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "\" Bois un peu d'eau, ça va te faire du bien. \"",
      "fub": "War yar ndiyam maa no ngiɗɗaa. \"",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "A quelle heure est-ce qu'on commence demain du coup, les gens ?",
      "fub": "En mbaalataa ɗoo haa subaka ndawen ?",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Je peux courir sur l'eau.",
      "fub": "Miin Waawi ladde ndee fof.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Le mystère pour moi est dans le nom.",
      "fub": "Yimɓe cuusaa sowtude innde am.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Il y avait beaucoup d'eau.",
      "fub": "Ngo ɗon heewi ndiyam.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Pour l'eau...dans mon cas j'opte plus pour de l'eau demineralise.",
      "fub": "Ɓurmi wonde ko nder ndiyam, ngam mi suusaa naange.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Il est venu terminer son travail, il est venu l'achever.",
      "fub": "O wari oon boo, kuugal timmi.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Ils m'ont mis de côté et m'ont demandé mon nom.",
      "fub": "Ɓe njiɗaa soowtude innde am, ɓe cuusaa sowtude innde am.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Ils entre dans la maison de la victime.",
      "fub": "Ɓe njehi to galle laamɗo.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Il marcha vers l'eau.",
      "fub": "Ɗon yaha nder ndiyam.",
      "src": "08_cnrs_lacito_ellaf_academic",
      "dom": "academic_literature"
    },
    {
      "fr": "Il est généralement associé à l' Université de Cambridge et le travail de Joan Robinson.",
      "fub": "Eɗum hauti be jami'are Cambridge be kuuɗe Joan Robinson.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Le livre axé sur les déterminants du revenu national à court terme lorsque les prix sont relativement rigides.",
      "fub": "Deftere nden ɗon laara yaccoɓe jawdi nastugol leydi be lau to ceedeji kareji wala daral.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "En revanche, l'Europe a été presque toujours divisé en un certain nombre d'Etats en guerre.",
      "fub": "Sai ni nder bolliɗe fere bo, naahiya Nasaara wooni luural hakkude dewalji ferefere.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Cependant, même si la direction de sélection ne inverse de cette manière, les traits qui ont été perdus dans le passé peut ne pas ré-évoluer dans une forme identique (voir La loi de Dollo).",
      "fub": "Seini, ko huushal subol ngol wiytiri ta atal nga'al, gikkuuji majjude e' baawo wiytata ummutuki nder tagaade nanndude (ndaaru Dollo's law).",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Depuis ce temps, le nombre total des périodiques actifs a augmenté de façon constante.",
      "fub": "Iga wakkati mai jimilla limgal wakkatiiji kemminiidi do besdo.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Comme l'argent, l'écriture a été rendue nécessaire par la taille de la population d'une ville et de la complexité de son commerce parmi les personnes qui ne sont pas tous personnellement familiarisés avec l'autre.",
      "fub": "Ba ceede, binndi ɗi ɗaɓɓitaaɗum on darnde ɗuuɗol yimɓe der birniwol be saɗirma coggu be filu caka yimɓe ɓe anda komoy.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "En conséquence, la Terre a commencé à recevoir plus de chaleur du soleil dans l'éon protérozoïque.",
      "fub": "Ɗo saggiti duuniyaaru fuɗɗi heɓugo nguleega naange nyaade walaama bana yebre dimbol kooseje walla lesdi andiraaɗum be 'Proterozoic eon'.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "En outre, les savants islamiques traduits et interprété les œuvres antérieures des Romains et Grecs et a établi le Maison de la Sagesse à Bagdad à cette fin.",
      "fub": "Haa yahugo yeeso, Mallum en Diina Islama fassiri nden tarjimi kuuɗe ko yimɓe Roma bee Girik waɗi nden ɓe Nyiɓi Saare Andal haa Baghdad ngam ɗo man.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Compte tenu de ses différentes formes, il existe différentes façons de représenter l'incertitude et la modélisation des réponses des agents économiques à elle.",
      "fub": "Hokkugo kalaji majji fere-fere, wodi laabi ɗuɗɗe je maganki shiya tabbas be moftowa jawdi tokkitaɗo be amsaji maɓɓe daw.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Il comprend l'idée de la somme d'un nombre unique, lui-même, et la somme vide, qui est zéro .",
      "fub": "Dun hawti e kawtal limgal gootal dun latti kawtal wala merewal e na how'nde.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "(Cette \"loi,\" cependant, est moins précise que les modèles plus récents, comme la loi de puissance de Stevens.)",
      "fub": "\"Ngo'ol \"\"keeriwol\",\" fuu e non, yo lest to goonga naa bano moodelji kesi, bano keeriwol hiite ngol Stevens.) \"",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Épiphénoménisme est une doctrine de la première formulée par Thomas Henry Huxley.",
      "fub": "Epiphenomenalism, yo miilo ngo Thomas Henry Huxley yaltini go'o fuh.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "En parfaitement marchés concurrentiels étudiés dans la théorie de l'offre et de la demande, il ya beaucoup de producteurs, dont aucun ne influencent significativement prix.",
      "fub": "To luumoji je mari gasa bo jannde to faamu waddanki be tefanki, wodi woɗoɓe ɗuɗɗe, wala mo chanjata ceede kare bo nder maɓɓe.",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Une loi de la psychologie des formes dit que les objets qui se déplacent dans la même direction sont perçus comme liés les uns aux autres.",
      "fub": "Raa'i hokkaa ɗun dow ilmu ɓernde yi;i huundeji dilloje dow laawol gootol woodi alaka e bandun",
      "src": "09_open_science_pressbooks_parallel",
      "dom": "education_science"
    },
    {
      "fr": "Une maison portant son nom existe d'ailleurs toujours dans la Ville Sainte.",
      "fub": "Galle mo o inniraa ina woodi ni haa jooni e wuro teddungo ngo.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Elle étudie également l'amharique, le droit, les affaires internationales et la politique[2].",
      "fub": "O jangi kadi amharique, ñaawooje , geɗe adunnayaŋkooje e politiki.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "En effet la famille de la future impératrice dispose d'un appui dans le nord, lieu d'origine des deux précédents empereurs, Téwodros II et Yohannes IV[5].",
      "fub": "Ko teeŋtini ɗum, ɓesngu kanko jogorɗo wonoyde laamuyaŋke, omo jogi ballal to rewo too, iwdi laamuyaŋkooɓe ɗiɗo ɓennuɓe ɓe, woni Téwodros II eYohannes IV[5].",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Descendant d'une ancienne famille noble du nord de l'Éthiopie, elle reçoit une éducation traditionnelle orthodoxe.",
      "fub": "Sabu iwdemo e ɓesngu rimɗungu ɓooyngu to rewo Ecopi, o heɓii nehdi ñiiɓndi e cosaan e aada.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Taytu Betul est la troisième d'une famille de quatre enfants, deux frères et deux sœurs, qui arrive tous à l'âge adulte, fait rare, étant donné la forte mortalité infantile en Ethiopie à cette époque.",
      "fub": "Taytu Betul ko kumbaajo ɓesngu ngu sukaaɓe nayo, ɗiɗo worɓe e ɗiɗo rewɓe, kamɓe fof ɓe keɓi cagataagal, ko heewaani, sabu kewgol maayirgol cukaaku keewnongol to Ecopi e oon jamaanu.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Bou El Mogdad est le nom du bateau qui assurait le transport de marchandises et de personnes sur le fleuve Sénégal entre 1950 et 1970.",
      "fub": "Buu El Mogdaad ko innde laana mbaɗatnooka rusooji marsandiis e yimɓe e maayo Senegaall hakkunde 1950 e 1970.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Tout est que ses agissements dérangent, de nombreuses accusations et rumeurs voient le jour, de la part des légations étrangères, mais également d'une partie de son peuple.",
      "fub": "Fof tan ko wiide darnde makko won ɓe muusi, tuumaamuyaaji keewɗi kam haalaluuji peeñii, ummoraade e ñaawooje koɗe, kadi wonndude e heen baŋnge yimɓe leudi makko.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Dans une mesure, on compte le nombre d'unités standard qui est égal à l'observation.",
      "fub": "Ha foondugo lambaaji dartiidi je laati fotan be ko laarete fu limtete.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Ainsi renforcé, Sahle Myriam devient roi des rois d'Éthiopie en 1889 sous le nom Menelik II.",
      "fub": "Ngaal ballital saabi Sahle Myriam jiimi e kala laamu e nder Ecopi e hitaande 1889 e nootitoraademo Menelik II.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Son petit-fils Lidj Iyasou, devenu empereur sous le nom Iyasou V, est déposé en septembre 1916 , la noblesse et l'église n'acceptant pas qu'un musulman dirige le pays[19].",
      "fub": "Taaniiko Lidj Iyasou, gontuɗo laamuyaŋke e dow innitoraade Iyasou V, fiiltaa e siilto 1916 sabu rimɓe ɓe e egiliis o njaɓaani juulɗo ardo leydi ndi[19].",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "La commune compte aujourd'hui 768 habitants (2015).",
      "fub": "Labe no jogii hannde 788 (2013) yimɓe.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Bou El Mogdad est issu d'une grande famille saint-louisienne proche de l'administration coloniale.",
      "fub": "Bou El Mogdad ummii ko e galle mawɗo ndarnaaɓe ɓadiiɗo laamu njiimaandi tuubakooɓe. .",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "En 2019 , elle est la lauréate du Prix littéraire des Rotary Clubs de langue Française pour son roman Les veilleurs de Sangomar.",
      "fub": "E hitaande 2019, o nawi raay Prix littéraire mo Rotary Clubs e ɗemŋgal farayse sabaabunde deftere makko wiiteende Les veilleurs de Sangomar.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "Taytu Betul descend d'une famille Oromos influente dans le nord de l'Abyssinie et revendiquant des liens avec la dynastie salomonide et l'empereur du XVIIe siècle Susneyos.",
      "fub": "Taytu Betul ummi ko e ɓesngu Oromos dowlungu e baŋnge rewo Abyssinie kadi foottungu jokkere e lasli salomonide kam e laamɗo mo teemidinol XVII ɓiwol, Susneyos.",
      "src": "10_wikipedia_parallel_aligned",
      "dom": "encyclopedia"
    },
    {
      "fr": "(bénédiction et salut soient sur lui) dit: \"certes, l'eau est pure et rien ne la rend impure.\"",
      "fub": "O wiyi \" ndiyam nduun ɗoon woyndu ina laaɓi hay huunde soɓnataa ɗum.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Toute famille dans les cieux et sur la terre.",
      "fub": "Ko kanko tagi Leydi e Asamaan.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Depuis 1984, il n'y a aucune loi.",
      "fub": "Gila 1984 ngal meeɗaa juumde.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Depuis 1998, le nombre de pays qualifiés est passé à 32.",
      "fub": "Gila 1998 noon kippuuji tawtorteeɗi kawgel ngel njettiima 32.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il a pour nom George Weah.",
      "fub": "Oon woni biyeteeɗo George Weah.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Ce qui compte, c'est notre \" oui .\"",
      "fub": "Ko ɗum waɗɗi mbiyɗen \"sinno\").",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Le soir nous sommes allées à la maison.",
      "fub": "Midi yoni en ko nder wuro Kita.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "L'inspection du travail et la politique du travail en PACA en 2013",
      "fub": "Jaɓɓorgo Kewuuji ngenndi Golle parlemaa e daawal sulyee 2007",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Lauréate du prix Nobel de la paix en 1991.",
      "fub": "Ko ndeen darnde maantinde addani mo heɓde njeenaari Nobel e hitaande 1991.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il avait reçu le Prix en 1992.",
      "fub": "Ko he hitaande 1992 ɓe cosi Ngatamaare.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Google est à l'heure actuelle une des plus grosses boites du web.",
      "fub": "Google jeyaa hannde ko kuutorɗe Enternet ɓurɗe mawnude.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Au début de l'année 2015, l'Unité de Gestion des Marchés a vu le jour.",
      "fub": "E hitaande 2015, peeñgol maalde ndimaagu Maasina",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il est devenu connu aujourd'hui sous le nom d'Al-Baka.",
      "fub": "Ɗoon anndiraa hannde ko Ksar Al Baka.",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Le juge tient compte de ce genre de chose?",
      "fub": "Hol miijo men e ɗuum ?",
      "src": "11_pulaar_org_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Elle est en prison depuis le jour des meurtres.",
      "fub": "Oo fitina ena ŋeñetenoo gila lewru maayndu nduu.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "- Est-ce que tu joues aussi à la maison ?",
      "fub": "Holi daartol wuro maa?",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Juste une somme d'argent !",
      "fub": "\"Min koɗi tan ko e huɗo!",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il y avait énormément de travail à la clinique.",
      "fub": "Ngaanumma heewii alaa ɗo yitere golle seedaa tawo.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Une cave coopérative a par ailleurs vu le jour en 1939.",
      "fub": "Ko kaŋngo kadi yeɓannde bonnde bonnunoo e hitaade 1939.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "\"Ils l'ont montré aujourd'hui et ils font un excellent travail.\"",
      "fub": "Kono haa hannde ko e eÉ\"É\"o ngoo É\"e ngoni nde wonnoo ena heewi golle haa É\"urti.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Aujourd'hui, elle est présente dans 14 pays européens et compte plus de 9000 adhérents.",
      "fub": "Hannde ende njogii 21 catal e Amerik e ko ɓuri 4000 tergal.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "C'est-à-dire que le processus j peut recevoir les",
      "fub": "Ko hikka waɗtata laabi j",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il peut tomber toute l'eau du ciel.",
      "fub": "Mo waawaa kala yoo abbo dow!",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Je le travail qu'il.",
      "fub": "Mi weltiima he golle maa.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "La maison Bleue est la deuxième maison.",
      "fub": "Ko toon Galle Laamorgo ɗiɗaɓo oo woni.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "La valeur de l'argent ?",
      "fub": "Hol kowaɗi ceede ŋakkude?",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Dans la mesure où le même nom peut être attribu...",
      "fub": "Ko ndee innde suundu nduu foti innireede ha...",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Indestructible Nokia 3310 est le nom donné à la s...",
      "fub": "Nokia 3310 woni baban cinnde e wiyde...",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il s'agit du code ASCII (American standard Code for Information Interchange) qui sert à la représentation interne des caractères.",
      "fub": "Ngol dokkol fawii ko e tuugnorgal ASCII (American Standard Code for Information Interchange) woni denndaangal kuule kuutorteeɗe ngam winndude ɗemngal engeleere.",
      "src": "12_pulaagu_com_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Le nom signifie-t-il quelque chose dans une autre langue ?",
      "fub": "Mbele durngol ina innde wonnde?",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Cependant il octroie un nom à chacun de ses produits.",
      "fub": "O, ɗum, kala fedde innde wonnde e teelal Ɓe Ɓe",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "matin du jour de l'exécution.",
      "fub": "Ƴiiwoonde arnde subaka law.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Il y avait beaucoup de monde sur les quais et sur l'eau .\"",
      "fub": "Ina heewi ñaamde kullmaayɗe e ladde.',",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "les montres et pendules à l'heure .",
      "fub": "Nate gabbiiɗe e Waktu",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "C'est un travail sur toi que tu feras.",
      "fub": "Omo ardoo gollal, Yeru: A waɗii.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Assez de la grandeur des gens à l'heure actuelle.",
      "fub": "Ko ɗum heɓtotoo yimɓe jooni ina heewi.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "l'eau ne coule pas.",
      "fub": "Ndiyam ɓolam lammataa..",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "le nom de Repentigny.",
      "fub": "Innde renndaande.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Les douches et l'eau chaude ne sont pas fournies.",
      "fub": "Jullaare ɓooyde ɗum e ndiyam addantaa ɗum wontude nooroo..",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Tous ces lieux portent le nom de l'ancien édile.",
      "fub": "Alluwal Alluwal Alluuje Innde renndinnde Jaŋde",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "de qui toute famille reçoit son nom dans les cieux et sur la terre.",
      "fub": "Hoɗorde kala ko woodi e aduna oo, ko e dow leydi kuɓeeje ndarii, leɗɗe puɗi.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Le verbe peut s'accorder avec le nom ou avec le complément du nom.",
      "fub": "Felde innde nafata ko e joofaade innde walla toɗɗaade ɗum.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Les parties s'enchaînaient, et les minutes commencèrent à défiler sans que l'on s'en rende compte.",
      "fub": "Ɗo ngelooba ñaamata ɗoo, mbeewa ina sooynoo kono heɓataa..",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Hélas, le nom est presque effacé, illisible.",
      "fub": "Innde aaynaande woni nde toɗɗaaka, joofaaka.",
      "src": "13_demeth_net_portal",
      "dom": "community_portal"
    },
    {
      "fr": "Cette période d'activité lui ouvre droit à l'ARE pendant quatre mois.",
      "fub": "Dartingol ngol maa duumo hakke lebbi 4.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Chaque mois de novembre, la fondation internationale du même nom convie les hommes à se laisser pousser la moustache.",
      "fub": "Kala goo lewru Me aduna oo fof ina mawnina ñalawma gollotooɓe.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Aujourd'hui, il continue un travail entrepris sur la France et ses mythes.",
      "fub": "Hannde o fuɗɗiima waylowaylo no feewi e yoga e mitiyelaaji.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "C'etait l'endroit qui lui avait manqué le plus pendant son séjour a Murat.",
      "fub": "Ko o wiɗtiyaŋke keɓtinaaɗo o wonnoo to Catal Wiɗto Muritani.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "On était au nombre de 11 personnes.",
      "fub": "Keewal suɓeteeɓe 11 lawake",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Au premier étage de la maison du [...]",
      "fub": "E wiyde gardiiɗo Galle Seek [...]",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "D'autres facteurs sont à prendre en compte comme la grande instabilité géopolitique internationale.",
      "fub": "Gammbi ina joginoo yaakaare mawnde e jahgol Yahyaa Jammee.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Il a visité bon nombre d'écoles durant toute sa scolarité.",
      "fub": "Kono noon kam o jannginii e duɗe keewɗe e nder Muritani.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "ils utilisaient du parfum à l'eau de rose.",
      "fub": "Ɓe mbaɗii batu kuuɓtodinngu baylugol yiilirde to bannge goomu kisnal ndiyam.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Ils appartenaient à une sépulture et, lors de leur mise au jour, auraient été au nombre de douze.",
      "fub": "Ko ɓe ƴamooɓe sappo e goo ɓe ngonnoo e suɓngoooji leydi Farayse... njeenayo ɗaftaama heddiima ɗiɗo.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Les résultats de ces recherchent commencent à voir le jour et envahiront nos [...]",
      "fub": "E nder ɗuum seppooji puɗɗiima heewde e ɓeen gubbitooɓe so on mbaɗanaani min, min [...]",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Mais le travail doit être fait correctement.",
      "fub": "Golle ɗe njahrii no haanirta nih.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "En 2010, un groupe de travail a été créé, qui a identifié les domaines les plus prometteurs du travail.",
      "fub": "E hitaande 2010 kamɓe ngoni hooreeɓe e kawgel rafi jontinooje tawii ko Yuusu Nduur joginoo ɗeen golle.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "Leur nombre est d'environ deux millions.",
      "fub": "Banndiiji ɗii nawi toon ko ina wona miliyonaaji ɗiɗi.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "C'est la maison des parents, la maison de famille.",
      "fub": "Ɗiin ngoni Nabbaaji, Oogo, wuro Siidi.",
      "src": "14_lewlewal_com_media",
      "dom": "community_media"
    },
    {
      "fr": "et à l'argent.",
      "fub": "Nden bee Ceede.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Isolez toutes les fuites dans la maison.",
      "fub": "Ngoɗɗoɗee jinngol faltaade kala fooyre wuro.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Cette étoile est toujours portée disparue à l'heure actuelle,",
      "fub": "hoodere nde fuɗan jom maa e jooni;",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Elle a aussi côtoyé de nombreux collègues de travail, certains depuis de nombreuses années.",
      "fub": "O aynii kadi golle moƴƴe ɗe adinooɓe mo accani neɗɗanke, goɗɗe e majje heɓii duuɓi teemeɗɗe.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "3- Nous devons faire du droit à la meilleure éducation du monde, à une très [...]",
      "fub": "2) Paama kona tefee nder duuniya fu wo anndal ɓuri teddeengal to Alla e to [...]",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "En effet d'après des recherches, on a retrouvé des descendants d'une certaine famille qu'on croyait disparue.",
      "fub": "Hay ko Seyku maayi ko koreeji maɓɓe ndonkii holleede ɗo ɓe ubba.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Elle n'est pas sans prix à payer.",
      "fub": "ndi nooɗaa ŋoottataad fey.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "La facturation nette agit comme un compte d'épargne.",
      "fub": "bayloowo mbaaki no muuyri ngooti jogaaki fey.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Mais ce n'est pas un phénomène de gangs de rue.\"",
      "fub": "ɗe woɗɗa ɓadaajo Kaydara fanndinoyoyaa. \"",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "des enfants et de leur famille .\"",
      "fub": "so doonii e ɓiɓɓe maɓɓe fiɓii. \"",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "L'eau ne peut être contrôlée.",
      "fub": "Ndiyam ɗam wuɗɗataa ɗum hakkille deeƴo.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Sandie est un prénom rare dont la cote est en forte baisse.",
      "fub": "mbele ina njaalɗa, innde mum tigi rigi.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Malheur à ceux qui ont été induits en erreur tandis que ce qu'ils détestent les aborde, ce qu'ils aiment les abandonne et il leur arrive ce qui leur avait été promis.",
      "fub": "Yo Alla junnu balɗe hedditiiɓe ɓen e maɓɓe, O newnana en nafitorgol ɓe. aamiin Siɗɓe e yiɗɓe toraama yarlagol.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Je compte sur vous pour commenter car j'apprécie les critiques.",
      "fub": "Kono mi tiiɗinaali, sabu ko haala ganndo.",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "en [2], ce nombre a été accepté",
      "fub": "[2] E hino nde ɗoo",
      "src": "15_webpulaaku_koode_archives",
      "dom": "cultural_archives"
    },
    {
      "fr": "Parmi celles-ci, il y a plus de 5.000 groupes différents dans plus de 70 pays.",
      "fub": "Ɗun hawti e yimɓe wala ko gakki 5,000 ferɗoodirɓe e lesɗe ko ɓuri 72.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Cependant, la proportion d'êtres humains souffrant de la faim semble diminuer dans le monde.",
      "fub": "Bano no ɗuuɗagal kala nooneeji digiri hokkaaɗun hollta, ilmu humanities ko deye ustoto.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Les gens qui ont [l'accès] à de telles armes ne sont pas des paysans.",
      "fub": "Fewjooɓe fewji no hewra jawle ɗe lannataa.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Aujourd'hui, il y a un approvisionnement en nourriture.",
      "fub": "Hannden wanaa nyaaƳo pulaaku wuuraali.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Au contraire, a plaidé le représentant, un tel texte pourrait causer du tort au Traité sur la non-prolifération des armes nucléaires (TNP).",
      "fub": "Konankooɓe sooje'en ngi'iraay balmol ngol saman, ammaa ngol fooɗii hakkiilo ummaatoore dow teroristeeku nuukiliya.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Au lieu de cela, ils m'ont violée, battue, ils ont pris mes vêtements et m'ont jetée dans une fosse commune.",
      "fub": "Nden ɓe ɓortan ma pat, ɓe njaɓtan fawne ma booɗɗe, ɓe accan ma a tembo.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "La loi contre le blanchiment d'argent permet-elle de confisquer les biens des personnes impliquées?",
      "fub": "• Jawdi wasiyiiɗo on hino waawi yeebaade e juuɗe halfinaaɗo wasuyee on?",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Mes amis me demandent parfois si je ne trouve pas démoralisant le fait de travailler dans un lieu où les personnes souffrent.",
      "fub": "Lomtin lontooji Nulaaɓe Ma'a to misiide amen haa huuɓa geɓal.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "À cette fin, il peut détenir des candidats à l'immigration.",
      "fub": "Gam majjum, o waawan wallugo jarbaaɓe.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Elle a récemment fait un nouveau déplacement mais, cette fois-ci, c'était avec joie, car ces derniers mois ont été les plus traumatisants de sa vie.",
      "fub": "Yimɓe ɓen juhaa, sabu si ɓe meemii furee, haray ɓe tuunintinike yeru balɗe buy.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Le Brésil a soutenu l'adoption du rapport de l'Ouganda.",
      "fub": "Lawyaen Uganda Tefraama fadda nufo Ardiido lesdi ndin",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "Il ne faut pas laisser de tels évènements entacher ces efforts.",
      "fub": "haanaa ka accen ɗii ɗi walta ɗi funnataa.",
      "src": "16_un_udhr_globalvoices_civic",
      "dom": "civic_human_rights"
    },
    {
      "fr": "[6:52] Et n'écarte pas ceux qui implorent leur Seigneur jour et nuit, se vouant à Lui seul.",
      "fub": "7 Kadi Allah waɗataa gooŋgaaku bee law haa suɓaaɓe muuɗum, wookananɓe mo jemma e naaŋge na? 8 Mi ɗon wi'a on, o waɗanan ɓe gooŋgaaku bee law.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "246 - \"Au nom d'Allah, et Allah est le Plus Grand.",
      "fub": "4 Ammaa enɗam Allah ɗuuɗi, yiide maako boo mawni masin.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Yune elle-même s'en rend compte.",
      "fub": "Yuhanna bee hoore muuɗum yi'i ɗum.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "C'est lui qui va ensuite mettre à jour les registres.",
      "fub": "Nden o ɓaditi nde, o lii'i kirsaaɗi dow maare.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "16 n'était pas un grand nombre de personnes.",
      "fub": "16 O ardoto yimɓe ɗuuɗɓe ɓe ngalaa limgal.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "D'autres se sont d'ailleurs déjà chargés de lui donner les étrivières; quant à nous, en vérité, nous lui faisons grâce.",
      "fub": "Ɗuuɗɓe ɗon ndo'ano min, Allah boo jaɓanan ɓe, woonanan min, ngam haa ɗuuɗɓe ngetta mo ngam amin.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Et il m'a dit: \" Ne scelle pas les mots de la prophétie, car l'heure est proche.",
      "fub": "Sujidan Allah!\" 10 Fahin, o wi'i yam: \"Taa maɓɓu bolle annabaaku nder deftere nde'e, ngam wakkatiire nde kuuje ɗe'e laatoto, ɓadake yottaago.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "17 trouver l'argent nécessaire.",
      "fub": "17 Taa nume mi ɗon ɗaɓɓa ceede mon.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Seigneur, pardonne-moi, ainsi qu'à mes enfants, aux fidèles qui entreront dans ma maison, aux hommes, aux femmes qui croient, et extermine les méchants.",
      "fub": "12 Ceye ton yeeso Allah Jawmiraawo mon, onon e ɓikkoy mon e maccuɓe mon e horɓe mon e Lewiŋko'en jooɗiiɓe nder gure mon, ngam Lewiŋko'en marataa lesdi caka mooɗon.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "22 Nous avons également apporté de l'argent supplémentaire pour acheter de la nourriture.",
      "fub": "22 Min ngaddi ceede feere boo ngam soodugo nyaamdu.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Moïse a frappé le rocher (Christ) dans le désert et il est sorti de l'eau en abondance...",
      "fub": "Muusa sakkini ngal nder ndiyam, ɗam laati mbelɗam.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Dieu a-t-il un nom ?",
      "fub": "Allah woodi innde na?",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Ce mal, vicieux, insidieux, s'insinuait en vous à chaque fois que la pénombre chassait le jour.",
      "fub": "To on itti toonyaare e sappaago bee kooli e bolle kalluɗe fuu caka mooɗon, 10 to on kaarni weelaaɓe, to on mballi laafuɓe, nden kam annoora mon fuɗan nder nyiɓre, jemma mon laatoto bana caka nyalawma.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Avant tout, aimez-vous ardemment les uns les autres, car l'amour efface un grand nombre de péchés.",
      "fub": "8 Ko ɓuri fuu, ngiɗindire bee yiide gooŋgaare, ngam yiide suddan hakkeeji ɗuuɗɗi.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Le troisième jour, Joseph vient leur dire: \" Moi, je crains Dieu.",
      "fub": "18 Nyande tataɓre Yusufu wi'i ɓe: \"Min boo mi kulɗo Allah.",
      "src": "17_hf_burkimbia_fub_adamawa_cameroon",
      "dom": "parallel_adamawa"
    },
    {
      "fr": "Les personnes qui n'ont pas obtenu au moins deux heures - même si elles ont dépassé une heure par semaine - n'ont pas touché les prestations.",
      "fub": "Yimɓe ko walaa keɓa ko famɗi fuu awaji ɗiɗi - ko to ɓe saali awa gootel haa asawere - walaa keɓa boteji man.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Beaucoup considèrent le profilage racial de facto comme un exemple de racisme institutionnel dans l'application de la loi.",
      "fub": "Dubbe hoositiri wadugo himbe nder gebe sanadu laral mabbe dum misalu on je hollata hukuma tabiti hollugo feeroritiral ngam nonde laral.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Avec 16 millions vétérans éligibles, la possibilité d'acheter une maison a été soudainement à la main.",
      "fub": "Bee nanta andaaɓe miliyonji 16, laawol suudugo saare ɗo dow koyɗum.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "C'est sur eux que se lèvera l'Heure.\"",
      "fub": "Ammaa ɗum woni wakkati mooɗon e baawɗe nyiɓre.\"",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Bien que les humains font partie de la nature, l'activité humaine est souvent comprise comme une catégorie distincte des autres phénomènes naturels.",
      "fub": "Non maa boo innu Aadama'en ko wakkere nder neesu, kuuɗe innu Aadama e faamiree dow neesu feerootirɗum gila neesuuji goɗɗi.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Si seulement quelques OGM ont été approuvés pour la culture dans l'UE, un certain nombre d'OGM ont été approuvés pour l'importation et la transformation.",
      "fub": "Ko nde ni tageefooji baylaaɗi seɗɗa tan ndemetee nder Kawtal Leyɗe Tuuranko'en (EU), ammaa ɗum jaɓii iri maaji ɗuuɗɗi nastinoyee ngam sarrafaago kujje.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Il n'y a pas d'accord universel sur le nombre de \" pays \" dans le monde puisque plusieurs États se sont disputés le statut de souveraineté .",
      "fub": "\"Walaa yerdol dow kuuje gootel dow \"\"lesɗe\"\" woni nder duniyaru nden jihaji ɗuɗɗum ɗo miija dow darnde joonde maɓɓe leydi.\"",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "En vertu du droit international, l' ONU et l' UNESCO tentent d'établir et d'appliquer des règles à cet effet.",
      "fub": "Les doka lesdi e lesdi, UN e UNESCO tiinake haro tigguki e semmbiɗinki doka ngam manufa ka'a.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "La maison dans ce contexte est synonyme de racines familiales.",
      "fub": "Cuuɗi e ɗo'o ɗon nanndi e ɗaɗi iyalji.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Cependant, un genre dans un royaume est autorisé à porter un nom scientifique utilisé comme nom générique (ou le nom d'un taxon d'un autre rang) dans un royaume régi par un code de nomenclature différent.",
      "fub": "Seini, dun don dala genus nder laamurde woore hoosha innde dun huwirta ba innde jenerik (ko bou innde tagzonwol nder darnde goddum) nder laamurde huwotoojum dou dooka inndinnki feere.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Un certain nombre de pays européens, dont la France et la Suisse , ne collectent pas d'informations sur l'origine ethnique de leur population résidente.",
      "fub": "Ɗuuɗal yimɓe lesɗe Tuubanko'en hawtidiri e Faransa e Siwizilan jaɓayi bayanuuji dow lanyolgu yimɓe lesdi maɓɓe.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Cependant, Pythagoras croyait au nombre absolu et ne pouvait accepter l'existence de nombres irrationnels.",
      "fub": "Fuu e non, Paytagorasɓe nuɗɗinii nder semmbe limɗe, kadin mbaawata njaɓa wonuki limɗe e ngalla nder hakkiilo.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "La Liberté des Anciens était une liberté républicaine participative, qui donnait aux citoyens le droit d'influencer directement la politique à travers des débats et des votes dans l'assemblée publique.",
      "fub": "Ndimu yimɓe nane saaliiɓe hawtidiri e huuduki nder leddi, hokkuɗun yimɓe daama ndimu ko moye sembiɗina siyaasa mun nder muhawara e suɓal e nder yimɓe.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "La construction du canal était un important travail d'ingénierie au cours des premières phases de la révolution industrielle.",
      "fub": "Maadi Canalwal laatakeno himminiindi kuugal injiiniyaarin sarde geɓe arane ɗe way.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    },
    {
      "fr": "Finances peut également être définie comme la science de la gestion de l'argent.",
      "fub": "Ɗum wawan wiigo Finansi ɗum science moftiki be anndugo ceede.",
      "src": "18_hf_burkimbia_fuv_central_fulfulde",
      "dom": "parallel_general"
    }
  ]
};
