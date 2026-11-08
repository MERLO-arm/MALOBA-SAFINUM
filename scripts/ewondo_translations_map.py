"""
Dictionnaire exhaustif Français / Anglais -> Ewondo (ewo) pour l'interface SAFINUM 2026.
Couvre les 145 clés exactes de l'interface, les 7 erreurs, les règles tarifaires, et les explications pédagogiques.
"""

EWONDO_TRANSLATIONS = {
    # --- Navigation & En-tête ---
    "Environnement de test — données fictives, aucune transaction réelle.": {
        "ewo": "Fə́la mejaríba — bibuk bi m̀bálá, téé ésəle mɔni ya amba.",
        "phonetic_ewo": "Feula médjariba — bibouk bi mbala, téé éséulé moni ya amba.",
        "explain_ewo": "Fə́la nyina é ne ve asu mejaríba ya Safinum Pay; mɔni ya amba a téé kə.",
        "explain_fr": "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé."
    },
    "Test environment — fictional data, no real transaction.": {
        "ewo": "Fə́la mejaríba — bibuk bi m̀bálá, téé ésəle mɔni ya amba.",
        "phonetic_ewo": "Feula médjariba — bibouk bi mbala, téé éséulé moni ya amba.",
        "explain_ewo": "Fə́la nyina é ne ve asu mejaríba ya Safinum Pay; mɔni ya amba a téé kə.",
        "explain_fr": "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé."
    },
    "Banque en ligne": {
        "ewo": "Banki ya enternet (Mɔni Waya)",
        "phonetic_ewo": "Banki ya enternet (Moni Waya)",
        "explain_ewo": "Ésəle banki Safinum Pay asu na o laart e o lóm mɔni e fón.",
        "explain_fr": "Service bancaire numérique accessible depuis votre téléphone ou ordinateur."
    },
    "Online banking": {
        "ewo": "Banki ya enternet (Mɔni Waya)",
        "phonetic_ewo": "Banki ya enternet (Moni Waya)",
        "explain_ewo": "Ésəle banki Safinum Pay asu na o laart e o lóm mɔni e fón.",
        "explain_fr": "Service bancaire numérique accessible depuis votre téléphone ou ordinateur."
    },
    "Protocole de test": {
        "ewo": "Metəla me mejaríba",
        "phonetic_ewo": "Météula mé médjariba",
        "explain_ewo": "Melep me jury a nzi huutinir ngam ɓet ésəle.",
        "explain_fr": "Document officiel présentant les consignes et le barème de test du hackathon."
    },
    "Test protocol": {
        "ewo": "Metəla me mejaríba",
        "phonetic_ewo": "Météula mé médjariba",
        "explain_ewo": "Melep me jury a nzi huutinir ngam ɓet ésəle.",
        "explain_fr": "Document officiel présentant les consignes et le barème de test du hackathon."
    },
    "Retour au hackathon": {
        "ewo": "Kóbəla haa Hackathon",
        "phonetic_ewo": "Kobeula ha Hackathon",
        "explain_ewo": "Kóbəla e fə́la énen ya SAFINUM Innovate Challenge.",
        "explain_fr": "Revenir à la page principale de présentation du Hackathon SAFINUM."
    },
    "Back to hackathon": {
        "ewo": "Kóbəla haa Hackathon",
        "phonetic_ewo": "Kobeula ha Hackathon",
        "explain_ewo": "Kóbəla e fə́la énen ya SAFINUM Innovate Challenge.",
        "explain_fr": "Revenir à la page principale de présentation du Hackathon SAFINUM."
    },

    # --- Les 5 Étapes (Barre de progression) ---
    "Solde": {
        "ewo": "Mɔni a liè (Kɔb)",
        "phonetic_ewo": "Moni a lié (Kob)",
        "explain_ewo": "Ékaat 1 : Akɔŋ mɔni o nzi bəle e asúsu wô éyɔŋ nyina.",
        "explain_fr": "Étape 1 : Somme d'argent actuellement disponible sur votre compte."
    },
    "Balance": {
        "ewo": "Mɔni a liè (Kɔb)",
        "phonetic_ewo": "Moni a lié (Kob)",
        "explain_ewo": "Ékaat 1 : Akɔŋ mɔni o nzi bəle e asúsu wô éyɔŋ nyina.",
        "explain_fr": "Étape 1 : Somme d'argent actuellement disponible sur votre compte."
    },
    "Frais": {
        "ewo": "Mímvèñ mi ntómban",
        "phonetic_ewo": "Mimvègn mi ntomban",
        "explain_ewo": "Mɔni banki ya fón a nzi téé ngam lóm mɔni wô.",
        "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent."
    },
    "Fees": {
        "ewo": "Mímvèñ mi ntómban",
        "phonetic_ewo": "Mimvègn mi ntomban",
        "explain_ewo": "Mɔni banki ya fón a nzi téé ngam lóm mɔni wô.",
        "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent."
    },
    "Fee": {
        "ewo": "Mímvèñ",
        "phonetic_ewo": "Mimvègn",
        "explain_ewo": "Asúŋa mɔni asu ésəle.",
        "explain_fr": "Frais unitaire de transaction."
    },
    "Bénéficiaire": {
        "ewo": "Nnyɔ a nɔŋ mɔni",
        "phonetic_ewo": "Nnyo a nong moni",
        "explain_ewo": "Ékaat 3 : Mɔt w'a lóm nyə mɔni e fón ya dze.",
        "explain_fr": "Étape 3 : Personne ou entreprise qui va recevoir l'argent transféré."
    },
    "Beneficiary": {
        "ewo": "Nnyɔ a nɔŋ mɔni",
        "phonetic_ewo": "Nnyo a nong moni",
        "explain_ewo": "Ékaat 3 : Mɔt w'a lóm nyə mɔni e fón ya dze.",
        "explain_fr": "Étape 3 : Personne ou entreprise qui va recevoir l'argent transféré."
    },
    "Récapitulatif": {
        "ewo": "Ntílán mebə̀lə̀ mé mɔni",
        "phonetic_ewo": "Ntilan mébeuleu mé moni",
        "explain_ewo": "Ékaat 4 : Fáám e laart mësə́ osu na o kaməla ntómban.",
        "explain_fr": "Étape 4 : Vérification récapitulative de tous les détails avant confirmation finale."
    },
    "Summary": {
        "ewo": "Ntílán mebə̀lə̀ mé mɔni",
        "phonetic_ewo": "Ntilan mébeuleu mé moni",
        "explain_ewo": "Ékaat 4 : Fáám e laart mësə́ osu na o kaməla ntómban.",
        "explain_fr": "Étape 4 : Vérification récapitulative de tous les détails avant confirmation finale."
    },
    "Confirmation": {
        "ewo": "Fíndí / Kaməla",
        "phonetic_ewo": "Findi / Kaméula",
        "explain_ewo": "Ékaat 5 : Kaməla ntómban e nɔŋ kalara ntílán wô.",
        "explain_fr": "Étape 5 : Validation définitive et téléchargement du reçu d'opération."
    },

    # --- Étape 1 : Solde et Compte ---
    "Votre compte": {
        "ewo": "Asúsu wô ya banki",
        "phonetic_ewo": "Asousou wô ya banki",
        "explain_ewo": "Fə́la asúsu wô ya Safinum Pay.",
        "explain_fr": "Détails et statut de votre compte bancaire Safinum Pay."
    },
    "Your account": {
        "ewo": "Asúsu wô ya banki",
        "phonetic_ewo": "Asousou wô ya banki",
        "explain_ewo": "Fə́la asúsu wô ya Safinum Pay.",
        "explain_fr": "Détails et statut de votre compte bancaire Safinum Pay."
    },
    "Titulaire du compte": {
        "ewo": "Ntsín asúsu",
        "phonetic_ewo": "Ntsin asousou",
        "explain_ewo": "Dzóé da mɔt a ne asúsu nyina.",
        "explain_fr": "Nom de la personne détenant officiellement ce compte."
    },
    "Account holder": {
        "ewo": "Ntsín asúsu",
        "phonetic_ewo": "Ntsin asousou",
        "explain_ewo": "Dzóé da mɔt a ne asúsu nyina.",
        "explain_fr": "Nom de la personne détenant officiellement ce compte."
    },
    "Numéro de compte": {
        "ewo": "Nɔ́mba ya asúsu",
        "phonetic_ewo": "Nomba ya asousou",
        "explain_ewo": "Lambar limngal ya asúsu wô (CM 001...).",
        "explain_fr": "Numéro d'identification unique de votre compte bancaire."
    },
    "Account number": {
        "ewo": "Nɔ́mba ya asúsu",
        "phonetic_ewo": "Nomba ya asousou",
        "explain_ewo": "Lambar limngal ya asúsu wô (CM 001...).",
        "explain_fr": "Numéro d'identification unique de votre compte bancaire."
    },
    "Solde disponible": {
        "ewo": "Mɔni o nzi bəle",
        "phonetic_ewo": "Moni o nzi béulé",
        "explain_ewo": "Akɔŋ mɔni w'a né asu lóm jooni.",
        "explain_fr": "Montant total que vous pouvez immédiatement dépenser ou transférer."
    },
    "Available balance": {
        "ewo": "Mɔni o nzi bəle",
        "phonetic_ewo": "Moni o nzi béulé",
        "explain_ewo": "Akɔŋ mɔni w'a né asu lóm jooni.",
        "explain_fr": "Montant total que vous pouvez immédiatement dépenser ou transférer."
    },
    "Solde bloqué": {
        "ewo": "Mɔni ba kamla",
        "phonetic_ewo": "Moni ba kamla",
        "explain_ewo": "Mɔni ba fə́k asu ésəle m̀fɛ́fɛ́.",
        "explain_fr": "Fonds réservés ou en cours de compensation non utilisables immédiatement."
    },
    "Locked balance": {
        "ewo": "Mɔni ba kamla",
        "phonetic_ewo": "Moni ba kamla",
        "explain_ewo": "Mɔni ba fə́k asu ésəle m̀fɛ́fɛ́.",
        "explain_fr": "Fonds réservés ou en cours de compensation non utilisables immédiatement."
    },
    "Plafond journalier restant": {
        "ewo": "Akɔŋ mɔni a liè asu amɔs nyina",
        "phonetic_ewo": "Akong moni a lié asou amos nyina",
        "explain_ewo": "Akɔŋ mɔni o ne ve lóm amɔs nyina.",
        "explain_fr": "Limite réglementaire restante pour vos transferts d'aujourd'hui."
    },
    "Remaining daily limit": {
        "ewo": "Akɔŋ mɔni a liè asu amɔs nyina",
        "phonetic_ewo": "Akong moni a lié asou amos nyina",
        "explain_ewo": "Akɔŋ mɔni o ne ve lóm amɔs nyina.",
        "explain_fr": "Limite réglementaire restante pour vos transferts d'aujourd'hui."
    },
    "Statut": {
        "ewo": "Émvila asúsu",
        "phonetic_ewo": "Emvila asousou",
        "explain_ewo": "Laart to asúsu wô a ne m̀vɛ̀.",
        "explain_fr": "État opérationnel de votre compte."
    },
    "Status": {
        "ewo": "Émvila asúsu",
        "phonetic_ewo": "Emvila asousou",
        "explain_ewo": "Laart to asúsu wô a ne m̀vɛ̀.",
        "explain_fr": "État opérationnel de votre compte."
    },
    "Actif": {
        "ewo": "A kə́ osu (A ne m̀vɛ̀)",
        "phonetic_ewo": "A keu osou (A né mvè)",
        "explain_ewo": "Asúsu wô a ne m̀vɛ̀ asu ésəle.",
        "explain_fr": "Compte pleinement opérationnel sans restriction."
    },
    "Active": {
        "ewo": "A kə́ osu (A ne m̀vɛ̀)",
        "phonetic_ewo": "A keu osou (A né mvè)",
        "explain_ewo": "Asúsu wô a ne m̀vɛ̀ asu ésəle.",
        "explain_fr": "Compte pleinement opérationnel sans restriction."
    },
    "Dernière transaction": {
        "ewo": "Ntómban mɔni wa məzúk",
        "phonetic_ewo": "Ntomban moni wa mézouk",
        "explain_ewo": "Ésəle mɔni o nga man bo.",
        "explain_fr": "Dernière opération financière enregistrée sur votre compte."
    },
    "Last transaction": {
        "ewo": "Ntómban mɔni wa məzúk",
        "phonetic_ewo": "Ntomban moni wa mézouk",
        "explain_ewo": "Ésəle mɔni o nga man bo.",
        "explain_fr": "Dernière opération financière enregistrée sur votre compte."
    },

    # --- Étape 2 : Frais et Tarification ---
    "Règles tarifaires": {
        "ewo": "Metəla mé mímvèñ",
        "phonetic_ewo": "Météula mé mimvègn",
        "explain_ewo": "Fáám asúŋa mɔni asu lóm mɔni.",
        "explain_fr": "Barème officiel des frais appliqué selon le canal sélectionné."
    },
    "Pricing rules": {
        "ewo": "Metəla mé mímvèñ",
        "phonetic_ewo": "Météula mé mimvègn",
        "explain_ewo": "Fáám asúŋa mɔni asu lóm mɔni.",
        "explain_fr": "Barème officiel des frais appliqué selon le canal sélectionné."
    },
    "Compte Safinum": {
        "ewo": "Asúsu Safinum",
        "phonetic_ewo": "Asousou Safinoum",
        "explain_ewo": "Ntómban mɔni e asúsu Safinum a ne zə́zə́ (0 FCFA).",
        "explain_fr": "Transfert interne gratuit d'un compte Safinum à un autre."
    },
    "Safinum Account": {
        "ewo": "Asúsu Safinum",
        "phonetic_ewo": "Asousou Safinoum",
        "explain_ewo": "Ntómban mɔni e asúsu Safinum a ne zə́zə́ (0 FCFA).",
        "explain_fr": "Transfert interne gratuit d'un compte Safinum à un autre."
    },
    "Gratuit": {
        "ewo": "Zə́zə́ (0 FCFA)",
        "phonetic_ewo": "Zeuzeu (0 FCFA)",
        "explain_ewo": "Téé mímvèñ; mɔni a téé yé.",
        "explain_fr": "Aucun frais prélevé pour cette opération."
    },
    "Free": {
        "ewo": "Zə́zə́ (0 FCFA)",
        "phonetic_ewo": "Zeuzeu (0 FCFA)",
        "explain_ewo": "Téé mímvèñ; mɔni a téé yé.",
        "explain_fr": "Aucun frais prélevé pour cette opération."
    },
    "Mobile Money (Orange Money, MTN MoMo)": {
        "ewo": "Mɔni Waya (Orange Money, MTN MoMo)",
        "phonetic_ewo": "Moni Waya (Orange Money, MTN MoMo)",
        "explain_ewo": "Mímvèñ mi ne 1,5 % ya akɔŋ mɔni w'a lóm.",
        "explain_fr": "Envoi vers porte-monnaie électronique avec commission de 1,5 %."
    },
    "1,5 % du montant": {
        "ewo": "1,5 % ya akɔŋ mɔni",
        "phonetic_ewo": "1,5 % ya akong moni",
        "explain_ewo": "Ba te 15 FCFA e 1 000 FCFA esə.",
        "explain_fr": "Tarif proportionnel calculé au taux de 1,5 %."
    },
    "1.5% of amount": {
        "ewo": "1,5 % ya akɔŋ mɔni",
        "phonetic_ewo": "1,5 % ya akong moni",
        "explain_ewo": "Ba te 15 FCFA e 1 000 FCFA esə.",
        "explain_fr": "Tarif proportionnel calculé au taux de 1,5 %."
    },
    "Autre banque": {
        "ewo": "Banki m̀fɛ́fɛ́ (Virement)",
        "phonetic_ewo": "Banki mfèfè (Virement)",
        "explain_ewo": "Mímvèñ mi ne 2 % ya akɔŋ mɔni w'a lóm.",
        "explain_fr": "Virement interbancaire avec commission de 2 %."
    },
    "Other bank": {
        "ewo": "Banki m̀fɛ́fɛ́ (Virement)",
        "phonetic_ewo": "Banki mfèfè (Virement)",
        "explain_ewo": "Mímvèñ mi ne 2 % ya akɔŋ mɔni w'a lóm.",
        "explain_fr": "Virement interbancaire avec commission de 2 %."
    },
    "2 % du montant": {
        "ewo": "2 % ya akɔŋ mɔni",
        "phonetic_ewo": "2 % ya akong moni",
        "explain_ewo": "Ba te 20 FCFA e 1 000 FCFA esə.",
        "explain_fr": "Tarif proportionnel calculé au taux de 2 %."
    },
    "2% of amount": {
        "ewo": "2 % ya akɔŋ mɔni",
        "phonetic_ewo": "2 % ya akong moni",
        "explain_ewo": "Ba te 20 FCFA e 1 000 FCFA esə.",
        "explain_fr": "Tarif proportionnel calculé au taux de 2 %."
    },
    "Montant à transférer": {
        "ewo": "Akɔŋ mɔni w'a lóm",
        "phonetic_ewo": "Akong moni wa lóm",
        "explain_ewo": "Tili akɔŋ mɔni w'a kɔna lóm.",
        "explain_fr": "Indiquez la somme exacte à envoyer sans les frais."
    },
    "Amount to transfer": {
        "ewo": "Akɔŋ mɔni w'a lóm",
        "phonetic_ewo": "Akong moni wa lóm",
        "explain_ewo": "Tili akɔŋ mɔni w'a kɔna lóm.",
        "explain_fr": "Indiquez la somme exacte à envoyer sans les frais."
    },
    "Canal de paiement": {
        "ewo": "Zə́n ya ntómban",
        "phonetic_ewo": "Zeun ya ntomban",
        "explain_ewo": "Tobo to Safinum, to Mobile Money, to Banki.",
        "explain_fr": "Moyen utilisé pour acheminer les fonds."
    },
    "Payment channel": {
        "ewo": "Zə́n ya ntómban",
        "phonetic_ewo": "Zeun ya ntomban",
        "explain_ewo": "Tobo to Safinum, to Mobile Money, to Banki.",
        "explain_fr": "Moyen utilisé pour acheminer les fonds."
    },
    "Montant envoyé": {
        "ewo": "Akɔŋ mɔni ba lóm",
        "phonetic_ewo": "Akong moni ba lóm",
        "explain_ewo": "Mɔni nnyɔ a nɔŋ a yian nɔŋ.",
        "explain_fr": "Montant net qui parviendra au destinataire."
    },
    "Amount sent": {
        "ewo": "Akɔŋ mɔni ba lóm",
        "phonetic_ewo": "Akong moni ba lóm",
        "explain_ewo": "Mɔni nnyɔ a nɔŋ a yian nɔŋ.",
        "explain_fr": "Montant net qui parviendra au destinataire."
    },
    "Total débité": {
        "ewo": "Mɔni mësə́ m'a kə́ man",
        "phonetic_ewo": "Moni méseulé ma keu man",
        "explain_ewo": "Akɔŋ mɔni e mímvèñ ba te e asúsu wô.",
        "explain_fr": "Somme globale (montant + frais) déduite de votre solde."
    },
    "Total debited": {
        "ewo": "Mɔni mësə́ m'a kə́ man",
        "phonetic_ewo": "Moni méseulé ma keu man",
        "explain_ewo": "Akɔŋ mɔni e mímvèñ ba te e asúsu wô.",
        "explain_fr": "Somme globale (montant + frais) déduite de votre solde."
    },
    "Calcul des frais": {
        "ewo": "Nlāŋ mímvèñ",
        "phonetic_ewo": "Nlang mimvègn",
        "explain_ewo": "Fáám no ba nzi laŋ mímvèñ mi ntómban.",
        "explain_fr": "Détail du calcul automatique de la commission."
    },
    "Fee calculation": {
        "ewo": "Nlāŋ mímvèñ",
        "phonetic_ewo": "Nlang mimvègn",
        "explain_ewo": "Fáám no ba nzi laŋ mímvèñ mi ntómban.",
        "explain_fr": "Détail du calcul automatique de la commission."
    },

    # --- Étape 3 : Bénéficiaire ---
    "Informations du bénéficiaire": {
        "ewo": "Mebə̀lə̀ mé nnyɔ a nɔŋ mɔni",
        "phonetic_ewo": "Mébeuleu mé nnyo a nong moni",
        "explain_ewo": "Dzóé e nɔ́mba ya fón da mɔt w'a lóm nyə mɔni.",
        "explain_fr": "Identité et coordonnées du destinataire du virement."
    },
    "Beneficiary information": {
        "ewo": "Mebə̀lə̀ mé nnyɔ a nɔŋ mɔni",
        "phonetic_ewo": "Mébeuleu mé nnyo a nong moni",
        "explain_ewo": "Dzóé e nɔ́mba ya fón da mɔt w'a lóm nyə mɔni.",
        "explain_fr": "Identité et coordonnées du destinataire du virement."
    },
    "Nom complet": {
        "ewo": "Dzóé dësə́",
        "phonetic_ewo": "Dzoé déseulé",
        "explain_ewo": "Tili dzóé dësə́ da nnyɔ a nɔŋ mɔni.",
        "explain_fr": "Nom et prénom officiels du destinataire."
    },
    "Full name": {
        "ewo": "Dzóé dësə́",
        "phonetic_ewo": "Dzoé déseulé",
        "explain_ewo": "Tili dzóé dësə́ da nnyɔ a nɔŋ mɔni.",
        "explain_fr": "Nom et prénom officiels du destinataire."
    },
    "Numéro de téléphone": {
        "ewo": "Nɔ́mba ya fón",
        "phonetic_ewo": "Nomba ya fon",
        "explain_ewo": "Nɔ́mba fón (+237 6xx xx xx xx).",
        "explain_fr": "Numéro de téléphone camerounais au format international ou local."
    },
    "Phone number": {
        "ewo": "Nɔ́mba ya fón",
        "phonetic_ewo": "Nomba ya fon",
        "explain_ewo": "Nɔ́mba fón (+237 6xx xx xx xx).",
        "explain_fr": "Numéro de téléphone camerounais au format international ou local."
    },
    "Motif du transfert (optionnel)": {
        "ewo": "Asú dze w'a lóm (to o nga kɔna)",
        "phonetic_ewo": "Asou dzé wa lóm (to o nga kona)",
        "explain_ewo": "Tili asú dze w'a lóm mɔni nyina.",
        "explain_fr": "Raison ou référence personnelle du transfert (facultatif)."
    },
    "Transfer reason (optional)": {
        "ewo": "Asú dze w'a lóm (to o nga kɔna)",
        "phonetic_ewo": "Asou dzé wa lóm (to o nga kona)",
        "explain_ewo": "Tili asú dze w'a lóm mɔni nyina.",
        "explain_fr": "Raison ou référence personnelle du transfert (facultatif)."
    },
    "Sélectionner un bénéficiaire récent": {
        "ewo": "Tobo mɔt o nga lóm nyə mɔni e amɔs m'a man",
        "phonetic_ewo": "Tobo mot o nga lóm nyé moni é amos ma man",
        "explain_ewo": "Tobo dzóé e nɔ́mba o maneya lóm.",
        "explain_fr": "Choisir dans l'historique des destinataires déjà enregistrés."
    },
    "Select a recent beneficiary": {
        "ewo": "Tobo mɔt o nga lóm nyə mɔni e amɔs m'a man",
        "phonetic_ewo": "Tobo mot o nga lóm nyé moni é amos ma man",
        "explain_ewo": "Tobo dzóé e nɔ́mba o maneya lóm.",
        "explain_fr": "Choisir dans l'historique des destinataires déjà enregistrés."
    },

    # --- Étape 4 & 5 : Récapitulatif, Confirmation & Reçu ---
    "Détails du transfert": {
        "ewo": "Mebə̀lə̀ mé ntómban mɔni",
        "phonetic_ewo": "Mébeuleu mé ntomban moni",
        "explain_ewo": "Laart mësə́ osu na o kaməla ésəle.",
        "explain_fr": "Détails récapitulatifs complets avant engagement financier."
    },
    "Transfer details": {
        "ewo": "Mebə̀lə̀ mé ntómban mɔni",
        "phonetic_ewo": "Mébeuleu mé ntomban moni",
        "explain_ewo": "Laart mësə́ osu na o kaməla ésəle.",
        "explain_fr": "Détails récapitulatifs complets avant engagement financier."
    },
    "Référence": {
        "ewo": "Lambar ya ntómban (SAF-2026-...)",
        "phonetic_ewo": "Lambar ya ntomban (SAF-2026-...)",
        "explain_ewo": "Lambar immuable ya ésəle nyina.",
        "explain_fr": "Numéro d'identification unique et immuable de l'opération."
    },
    "Reference": {
        "ewo": "Lambar ya ntómban (SAF-2026-...)",
        "phonetic_ewo": "Lambar ya ntomban (SAF-2026-...)",
        "explain_ewo": "Lambar immuable ya ésəle nyina.",
        "explain_fr": "Numéro d'identification unique et immuable de l'opération."
    },
    "Date et heure": {
        "ewo": "Amɔs e awóla",
        "phonetic_ewo": "Amos é awola",
        "explain_ewo": "Awóla ésəle é nga man bo.",
        "explain_fr": "Horodatage certifié de la transaction financière."
    },
    "Date and time": {
        "ewo": "Amɔs e awóla",
        "phonetic_ewo": "Amos é awola",
        "explain_ewo": "Awóla ésəle é nga man bo.",
        "explain_fr": "Horodatage certifié de la transaction financière."
    },
    "Confirmer le transfert": {
        "ewo": "Fíndí / Kaməla ntómban",
        "phonetic_ewo": "Findi / Kaméula ntomban",
        "explain_ewo": "Fíndí asu na mɔni a kə.",
        "explain_fr": "Bouton d'engagement définitif de l'opération de débit."
    },
    "Confirm transfer": {
        "ewo": "Fíndí / Kaməla ntómban",
        "phonetic_ewo": "Findi / Kaméula ntomban",
        "explain_ewo": "Fíndí asu na mɔni a kə.",
        "explain_fr": "Bouton d'engagement définitif de l'opération de débit."
    },
    "Transfert effectué avec succès !": {
        "ewo": "Ntómban mɔni w'a maneya m̀vɛ̀ !",
        "phonetic_ewo": "Ntomban moni wa manéya mvè !",
        "explain_ewo": "Mɔni a maneya kə; nnyɔ a nɔŋ a nɔŋya.",
        "explain_fr": "La transaction a été validée et exécutée par le réseau."
    },
    "Transfer completed successfully!": {
        "ewo": "Ntómban mɔni w'a maneya m̀vɛ̀ !",
        "phonetic_ewo": "Ntomban moni wa manéya mvè !",
        "explain_ewo": "Mɔni a maneya kə; nnyɔ a nɔŋ a nɔŋya.",
        "explain_fr": "La transaction a été validée et exécutée par le réseau."
    },
    "Reçu de transfert": {
        "ewo": "Kalara ntílán ya ntómban",
        "phonetic_ewo": "Kalara ntilan ya ntomban",
        "explain_ewo": "Kalara nyina a ne mebə̀lə̀ mé mɔni o nga lóm.",
        "explain_fr": "Justificatif de paiement légal faisant foi de votre transaction."
    },
    "Transfer receipt": {
        "ewo": "Kalara ntílán ya ntómban",
        "phonetic_ewo": "Kalara ntilan ya ntomban",
        "explain_ewo": "Kalara nyina a ne mebə̀lə̀ mé mɔni o nga lóm.",
        "explain_fr": "Justificatif de paiement légal faisant foi de votre transaction."
    },
    "Télécharger le reçu (PDF)": {
        "ewo": "Nɔŋ kalara ntílán (PDF)",
        "phonetic_ewo": "Nong kalara ntilan (PDF)",
        "explain_ewo": "Nɔŋ kalara e fón asu na o baa laart.",
        "explain_fr": "Télécharger une copie du reçu sur votre appareil."
    },
    "Download receipt (PDF)": {
        "ewo": "Nɔŋ kalara ntílán (PDF)",
        "phonetic_ewo": "Nong kalara ntilan (PDF)",
        "explain_ewo": "Nɔŋ kalara e fón asu na o baa laart.",
        "explain_fr": "Télécharger une copie du reçu sur votre appareil."
    },
    "Nouveau transfert": {
        "ewo": "Ntómban m̀fɛ́fɛ́",
        "phonetic_ewo": "Ntomban mfèfè",
        "explain_ewo": "Bo ntómban m̀fɛ́fɛ́ ya mɔni.",
        "explain_fr": "Réinitialiser le parcours pour effectuer un nouvel envoi."
    },
    "New transfer": {
        "ewo": "Ntómban m̀fɛ́fɛ́",
        "phonetic_ewo": "Ntomban mfèfè",
        "explain_ewo": "Bo ntómban m̀fɛ́fɛ́ ya mɔni.",
        "explain_fr": "Réinitialiser le parcours pour effectuer un nouvel envoi."
    },

    # --- Sécurité & Alertes ---
    "Alerte de sécurité": {
        "ewo": "Yian mebə̀lə̀ mé ngól",
        "phonetic_ewo": "Yian mébeuleu mé ngól",
        "explain_ewo": "Laart m̀vɛ̀ osu na o kaməla; a ne ngól.",
        "explain_fr": "Avertissement critique pour prévenir les erreurs et fraudes."
    },
    "Security alert": {
        "ewo": "Yian mebə̀lə̀ mé ngól",
        "phonetic_ewo": "Yian mébeuleu mé ngól",
        "explain_ewo": "Laart m̀vɛ̀ osu na o kaməla; a ne ngól.",
        "explain_fr": "Avertissement critique pour prévenir les erreurs et fraudes."
    },
    "Code secret (PIN)": {
        "ewo": "Kót ésoló (PIN)",
        "phonetic_ewo": "Kot ésolo (PIN)",
        "explain_ewo": "Tə́ o və̀ mɔt kót wô ésoló; a ne asu dɔé ve.",
        "explain_fr": "Votre code PIN personnel ne doit jamais être partagé."
    },
    "Secret code (PIN)": {
        "ewo": "Kót ésoló (PIN)",
        "phonetic_ewo": "Kot ésolo (PIN)",
        "explain_ewo": "Tə́ o və̀ mɔt kót wô ésoló; a ne asu dɔé ve.",
        "explain_fr": "Votre code PIN personnel ne doit jamais être partagé."
    },
    "Code de sécurité SMS (OTP)": {
        "ewo": "Kót SMS ya ésəle (OTP)",
        "phonetic_ewo": "Kot SMS ya éséulé (OTP)",
        "explain_ewo": "Kót ba lóm e fón wô ngam kaməla ésəle.",
        "explain_fr": "Code à usage unique envoyé par SMS pour autoriser le débit."
    },
    "SMS security code (OTP)": {
        "ewo": "Kót SMS ya ésəle (OTP)",
        "phonetic_ewo": "Kot SMS ya éséulé (OTP)",
        "explain_ewo": "Kót ba lóm e fón wô ngam kaməla ésəle.",
        "explain_fr": "Code à usage unique envoyé par SMS pour autoriser le débit."
    },

    # --- Erreurs Officielles ---
    "Le montant doit être supérieur à zéro.": {
        "ewo": "Akɔŋ mɔni a yian bə̀ a daan zə́zə́.",
        "phonetic_ewo": "Akong moni a yian béu a dan zeuzeu.",
        "explain_ewo": "Téé lóm 0 FCFA; tili mɔni a daan zə́zə́.",
        "explain_fr": "Le montant saisi est nul ou négatif : saisissez une valeur positive."
    },
    "The amount must be greater than zero.": {
        "ewo": "Akɔŋ mɔni a yian bə̀ a daan zə́zə́.",
        "phonetic_ewo": "Akong moni a yian béu a dan zeuzeu.",
        "explain_ewo": "Téé lóm 0 FCFA; tili mɔni a daan zə́zə́.",
        "explain_fr": "Le montant saisi est nul ou négatif : saisissez une valeur positive."
    },
    "Solde insuffisant pour effectuer ce transfert": {
        "ewo": "Mɔni wô a nzi kôb ngə lóm ntómban nyina",
        "phonetic_ewo": "Moni wô a nzi kob ngeu lóm ntomban nyina",
        "explain_ewo": "Mɔni o nzi bəle e asúsu a téé kôb akɔŋ mɔni e mímvèñ.",
        "explain_fr": "Votre solde disponible ne couvre pas le montant envoyé plus la commission."
    },
    "Insufficient balance to complete this transfer": {
        "ewo": "Mɔni wô a nzi kôb ngə lóm ntómban nyina",
        "phonetic_ewo": "Moni wô a nzi kob ngeu lóm ntomban nyina",
        "explain_ewo": "Mɔni o nzi bəle e asúsu a téé kôb akɔŋ mɔni e mímvèñ.",
        "explain_fr": "Votre solde disponible ne couvre pas le montant envoyé plus la commission."
    },
    "Le numéro de téléphone est invalide.": {
        "ewo": "Nɔ́mba ya fón é téé yian.",
        "phonetic_ewo": "Nomba ya fon é téé yian.",
        "explain_ewo": "Laart nɔ́mba fón; a yian bə̀ nɔ́mba ya Cameroun (+237 6xx xx xx xx).",
        "explain_fr": "Le numéro de destinataire comporte une erreur de syntaxe ou de longueur."
    },
    "The phone number is invalid.": {
        "ewo": "Nɔ́mba ya fón é téé yian.",
        "phonetic_ewo": "Nomba ya fon é téé yian.",
        "explain_ewo": "Laart nɔ́mba fón; a yian bə̀ nɔ́mba ya Cameroun (+237 6xx xx xx xx).",
        "explain_fr": "Le numéro de destinataire comporte une erreur de syntaxe ou de longueur."
    },
    "Code secret incorrect.": {
        "ewo": "Kót ésoló a téé yian.",
        "phonetic_ewo": "Kot ésolo a téé yian.",
        "explain_ewo": "Kót PIN o nga tili a téé yian; laart e tili kót ya amba.",
        "explain_fr": "Le code PIN saisi ne correspond pas à celui de votre compte."
    },
    "Incorrect secret code.": {
        "ewo": "Kót ésoló a téé yian.",
        "phonetic_ewo": "Kot ésolo a téé yian.",
        "explain_ewo": "Kót PIN o nga tili a téé yian; laart e tili kót ya amba.",
        "explain_fr": "Le code PIN saisi ne correspond pas à celui de votre compte."
    },
    "Veuillez cocher la case pour confirmer que vous avez vérifié les informations.": {
        "ewo": "Fíndí e kɔ́b asu na o laart mebə̀lə̀ mësə́.",
        "phonetic_ewo": "Findi é kob asou na o laart mébeuleu méseulé.",
        "explain_ewo": "Kaməla to o laart dzóé, nɔ́mba e mɔni osu na mɔni a kə.",
        "explain_fr": "Cochez la case d'engagement pour attester de la vérification préalable."
    },
    "Please check the box to confirm that you have verified the information.": {
        "ewo": "Fíndí e kɔ́b asu na o laart mebə̀lə̀ mësə́.",
        "phonetic_ewo": "Findi é kob asou na o laart mébeuleu méseulé.",
        "explain_ewo": "Kaməla to o laart dzóé, nɔ́mba e mɔni osu na mɔni a kə.",
        "explain_fr": "Cochez la case d'engagement pour attester de la vérification préalable."
    },
    "Erreur réseau. Veuillez réessayer.": {
        "ewo": "Díza ya réseau. Karə́sə bo ésəle.",
        "phonetic_ewo": "Diza ya rézo. Karéuseu bo éséulé.",
        "explain_ewo": "Waya ya réseau a nzi kat; liè e karə́sə bo.",
        "explain_fr": "Incident de communication avec le serveur bancaire : renouvelez la tentative."
    },
    "Network error. Please try again.": {
        "ewo": "Díza ya réseau. Karə́sə bo ésəle.",
        "phonetic_ewo": "Diza ya rézo. Karéuseu bo éséulé.",
        "explain_ewo": "Waya ya réseau a nzi kat; liè e karə́sə bo.",
        "explain_fr": "Incident de communication avec le serveur bancaire : renouvelez la tentative."
    },

    # --- Boutons d'Action & Navigation ---
    "Suivant": {
        "ewo": "Kəl osu",
        "phonetic_ewo": "Keul osou",
        "explain_ewo": "Kəl e ékaat éfe.",
        "explain_fr": "Passer à l'étape suivante du formulaire."
    },
    "Next": {
        "ewo": "Kəl osu",
        "phonetic_ewo": "Keul osou",
        "explain_ewo": "Kəl e ékaat éfe.",
        "explain_fr": "Passer à l'étape suivante du formulaire."
    },
    "Précédent": {
        "ewo": "Kóbəla mvús",
        "phonetic_ewo": "Kobeula mvous",
        "explain_ewo": "Kóbəla e ékaat ya mvús.",
        "explain_fr": "Revenir à l'étape précédente du formulaire."
    },
    "Previous": {
        "ewo": "Kóbəla mvús",
        "phonetic_ewo": "Kobeula mvous",
        "explain_ewo": "Kóbəla e ékaat ya mvús.",
        "explain_fr": "Revenir à l'étape précédente du formulaire."
    },
    "Annuler": {
        "ewo": "Tíbi / Tsugí",
        "phonetic_ewo": "Tibi / Tsougi",
        "explain_ewo": "Tíbi ésəle nyina.",
        "explain_fr": "Interrompre l'opération sans débiter votre compte."
    },
    "Cancel": {
        "ewo": "Tíbi / Tsugí",
        "phonetic_ewo": "Tibi / Tsougi",
        "explain_ewo": "Tíbi ésəle nyina.",
        "explain_fr": "Interrompre l'opération sans débiter votre compte."
    },
    "Continuer": {
        "ewo": "Kəl osu",
        "phonetic_ewo": "Keul osou",
        "explain_ewo": "Kəl osu e ésəle.",
        "explain_fr": "Poursuivre la démarche en cours."
    },
    "Continue": {
        "ewo": "Kəl osu",
        "phonetic_ewo": "Keul osou",
        "explain_ewo": "Kəl osu e ésəle.",
        "explain_fr": "Poursuivre la démarche en cours."
    },
    "Fermer": {
        "ewo": "Díbí",
        "phonetic_ewo": "Dibi",
        "explain_ewo": "Díbí fə́la nyina.",
        "explain_fr": "Fermer la boîte de dialogue ou l'alerte."
    },
    "Close": {
        "ewo": "Díbí",
        "phonetic_ewo": "Dibi",
        "explain_ewo": "Díbí fə́la nyina.",
        "explain_fr": "Fermer la boîte de dialogue ou l'alerte."
    }
}

