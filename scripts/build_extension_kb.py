"""
Génère `D:\lang\data\safinum-extension\knowledge_base.js` à partir :
1. De l'intégralité des chaînes FR & EN extraites du bundle officiel en production `HackathonTest-Cb2PbTlv.js` de SAFINUM 2026.
2. Des 7 erreurs officielles (`AMOUNT_001` à `CONFIRM_001`) et 3 règles de frais (`safinum`, `mobile_money`, `other_bank`).
3. Des 18 sources Fulfuldé moissonnées (`unified_fulfulde_corpus.parquet` - 99 633 entrées), incluant Tourneux (1 759 entrées),
   le glossaire financier Aki-OSC, le corpus Wave/SAFINUM, la Bible en Fulfuldé, RFI Fulfuldé, CNRS ELLAF, Wikipédia FF, et Burkimbia NLLB (`fub`).
"""
import json
import re
from pathlib import Path
import pandas as pd

BASE_DIR = Path(r"D:\lang\data")
COMPILED_DIR = BASE_DIR / "corpus" / "compiled"
EXT_DIR = BASE_DIR / "safinum-extension"
EXT_DIR.mkdir(parents=True, exist_ok=True)


def to_tts_phonetic(fub_text: str) -> str:
    s = fub_text
    s = re.sub(r"uu", "ouou", s)
    s = re.sub(r"u", "ou", s)
    s = re.sub(r"aa", "â", s)
    s = re.sub(r"ee", "éé", s)
    s = re.sub(r"ii", "î", s)
    s = re.sub(r"oo", "ô", s)
    s = s.replace("ɓ", "b'").replace("Ɓ", "B'")
    s = s.replace("ɗ", "d'").replace("Ɗ", "D'")
    s = s.replace("ƴ", "y'").replace("Ƴ", "Y'")
    s = s.replace("ŋ", "ng").replace("Ŋ", "Ng")
    s = re.sub(r"\bc", "tch", s)
    s = re.sub(r"\bC", "Tch", s)
    s = re.sub(r"([aeiouéôâî\s])c", r"\1tch", s)
    s = re.sub(r"\bj", "dj", s)
    s = re.sub(r"\bJ", "Dj", s)
    return s


def main():
    summary_path = COMPILED_DIR / "sources_inventory_summary.json"
    summary_data = json.loads(summary_path.read_text(encoding="utf-8")) if summary_path.exists() else {}

    # =========================================================================
    # 1. DICTIONNAIRE EXACT DE TOUTE L'INTERFACE SAFINUM (HackathonTest-Cb2PbTlv.js)
    # =========================================================================
    ui_entries = [
        # --- En-tête, Bannière & Navigation générale ---
        {
            "keys": [
                "Environnement de test — données fictives, aucune transaction réelle.",
                "Test environment — fictional data, no real transaction."
            ],
            "fub": "Nokkuure jarribo — kabaruuji jarribo tan, walaa nelal ceede goonga.",
            "explain_fub": "Nokkuure ndee ɗum ngam jarribo kuugal Safinum Pay tan; ceede goonga ittataako.",
            "explain_fr": "Cet espace est un simulateur d'évaluation pour le Hackathon : aucun argent réel n'est manipulé.",
            "category": "navigation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Banque en ligne", "Online banking"],
            "fub": "Banki dow enternet (Ceede Waya)",
            "explain_fub": "Kuugal banki Safinum Pay ngam laartugo e neldugo ceede bee waya.",
            "explain_fr": "Service bancaire numérique accessible depuis votre téléphone ou ordinateur.",
            "category": "navigation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Protocole de test", "Test protocol"],
            "fub": "Dokaaji jarribo",
            "explain_fub": "Laawol e dokaaji ɗi jury huutinirta ngam ɓetugo kuugal ngal.",
            "explain_fr": "Document officiel présentant les consignes et le barème de test du hackathon.",
            "category": "navigation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Retour au hackathon", "Back to hackathon"],
            "fub": "Rutto haa hello Hackathon",
            "explain_fub": "Ruttoraago haa hello mawngo SAFINUM Innovate Challenge.",
            "explain_fr": "Revenir à la page principale de présentation du Hackathon SAFINUM.",
            "category": "navigation",
            "source": "03_tourneux_dictionary_csv"
        },

        # --- Les 5 Étapes (Barre de progression) ---
        {
            "keys": ["Solde", "Balance"],
            "fub": "Ceede gonɗe",
            "explain_fub": "Yaaduure 1 : Limngal ceede ɗe ngoni nder kofru maa jooni.",
            "explain_fr": "Étape 1 : Somme d'argent actuellement disponible sur votre compte.",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Frais", "Fees", "Fee"],
            "fub": "Coggu nelal",
            "explain_fub": "Ceede cewɗe ɗe banki malla kampaniiru hoosata ngam neldugo ceede maa.",
            "explain_fr": "Commission prélevée par le service financier pour traiter l'envoi de votre argent.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Bénéficiaire", "Beneficiary"],
            "fub": "Jaɓoowo ceede",
            "explain_fub": "Neɗɗo mo a yiɗi neldugo mo ceede ɗe.",
            "explain_fr": "La personne qui va recevoir l'argent que vous envoyez.",
            "category": "beneficiaire",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Récapitulatif", "Summary"],
            "fub": "Taƴre laartugo fuu",
            "explain_fub": "Yaaduure 4 : Laartugo kabaruuji nelal fuu hidde a tabitina.",
            "explain_fr": "Étape 4 : Résumé complet de votre opération pour tout vérifier avant le paiement définitif.",
            "category": "recapitulatif",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Confirmation"],
            "fub": "Tabitingol kuugal",
            "explain_fub": "Yaaduure 5 : Talkuru seedamku kollirtooru wonde ceede maa neldaama.",
            "explain_fr": "Étape 5 : Preuve officielle et reçu confirmant que votre transaction a réussi.",
            "category": "confirmation",
            "source": "01_aki_osc_financial_glossary"
        },

        # --- Étape 1 : Solde & Transactions récentes ---
        {
            "keys": ["Votre compte", "Your account", "VOTRE COMPTE"],
            "fub": "Limngal hisaabu maa",
            "explain_fub": "Nokkuure nde ceede maa resaa nder Safinum Pay.",
            "explain_fr": "Votre espace bancaire personnel où figurent votre solde et votre numéro de compte.",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Bonjour, Amina", "Hello, Amina"],
            "fub": "Jaɓɓaama, Amina",
            "explain_fub": "Salaama e jaɓɓaago Amina Ngo Bell, joom limngal hisaabu.",
            "explain_fr": "Message de bienvenue adressé à la titulaire du compte, Amina Ngo Bell.",
            "category": "solde",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": [
                "Consultez votre solde et lancez un transfert en toute sécurité.",
                "Check your balance and start a secure transfer."
            ],
            "fub": "Laartu ceede gonɗe nder limngal maa e fuɗɗu nelal ceede bee kisal timmungal.",
            "explain_fub": "Ko adii fuu, laartu to ceede maa heƴi, ɓaawo maajum ɓillu « Neldugo ceede ».",
            "explain_fr": "Vérifiez d'abord le montant disponible sur votre compte avant de démarrer votre envoi d'argent.",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Solde disponible", "Available balance", "SOLDE DISPONIBLE"],
            "fub": "Ceede gonɗe nder limngal",
            "explain_fub": "Ceede ɗe a waawi huutinirgo malla neldugo jooni-jooni (250 000 FCFA).",
            "explain_fr": "Montant exact immédiatement utilisable sur votre compte.",
            "category": "solde",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": ["Compte courant", "Current account"],
            "fub": "Limngal hisaabu ñalnde fuu",
            "explain_fub": "Kofru banki maa ngam kuugalji ceede ñalnde fuu.",
            "explain_fr": "Compte bancaire principal servant aux dépôts, retraits et virements quotidiens.",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Effectuer un transfert", "Make a transfer"],
            "fub": "Waɗugo nelal ceede",
            "explain_fub": "Ɓillu ɗoo ngam fuɗɗugo neldugo ceede haa neɗɗo feere.",
            "explain_fr": "Cliquez sur ce bouton pour commencer un envoi d'argent et passer à l'étape 2.",
            "category": "navigation",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Consulter les frais", "View fees"],
            "fub": "Laartugo coggu nelal",
            "explain_fub": "Ɓillu ɗoo ngam hiisugo no foti coggu nelal ceede wonata.",
            "explain_fr": "Accéder au simulateur de tarification pour connaître le coût d'un transfert.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Transactions récentes", "Recent transactions", "TRANSACTIONS RÉCENTES"],
            "fub": "Kuugalji ceede cakkitiiɗi",
            "explain_fub": "Doggol ceede ɗe naati (+) e ɗe ngurti (-) nder limngal maa ɗii balɗe.",
            "explain_fr": "Historique de vos 4 derniers mouvements d'argent (paiements et réceptions).",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Paiement marchand", "Merchant payment"],
            "fub": "Yoɓol haa joom tiggirgal (Marchand)",
            "explain_fub": "Ceede ɗe a yoɓii haa tiggirgal (-12 500 FCFA).",
            "explain_fr": "Achat ou paiement effectué auprès d'un commerçant (-12 500 FCFA).",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Salaire reçu", "Salary received"],
            "fub": "Njoɓdi kuugal (Salaire) keɓaandi",
            "explain_fub": "Ceede njoɓdi lewru ɗe naati nder limngal maa (+180 000 FCFA).",
            "explain_fr": "Versement de votre salaire reçu sur le compte (+180 000 FCFA).",
            "category": "solde",
            "source": "03_tourneux_dictionary_csv"
        },
        {
            "keys": ["Transfert reçu", "Transfer received"],
            "fub": "Nelal ceede keɓaangal",
            "explain_fub": "Ceede ɗe neɗɗo neldii ma nder limngal maa (+50 000 FCFA).",
            "explain_fr": "Virement d'argent reçu d'un tiers sur votre compte (+50 000 FCFA).",
            "category": "solde",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Facture électricité", "Electricity bill"],
            "fub": "Yoɓol talkuru kuuran (Yiite)",
            "explain_fub": "Ceede ɗe a yoɓiri talkuru kuuran (-7 500 FCFA).",
            "explain_fr": "Règlement de votre facture d'électricité (-7 500 FCFA).",
            "category": "solde",
            "source": "02_safinum_wave_sponsor_corpus"
        },

        # --- Étape 2 : Frais de transfert & Règles ---
        {
            "keys": ["Frais de transfert", "Transfer fees"],
            "fub": "Coggu nelal ceede",
            "explain_fub": "Yaaduure 2 : Hiisugo coggu nelal e ceede fuu ɗe ittete.",
            "explain_fr": "Étape 2 : Calcul du coût du transfert selon le canal choisi.",
            "category": "frais",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": [
                "Choisissez le type de transfert et le montant. Les frais sont calculés automatiquement.",
                "Choose the transfer type and amount. Fees are calculated automatically."
            ],
            "fub": "Suɓu iri laawol nelal e limngal ceede. Coggu nelal hiisete bee hoore mum.",
            "explain_fub": "Nde a suɓii laawol (Safinum, Mobile Money malla Banki feere) e ceede, kuugal ngal hollirta coggu jooni-jooni.",
            "explain_fr": "Sélectionnez le canal d'envoi et tapez le montant : la commission et le total à débiter s'affichent instantanément.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Type d'opération", "Operation type"],
            "fub": "Iri kuugal nelal",
            "explain_fub": "Laawol ngol ceede maa rewrata (Compte Safinum, Mobile Money, malla Autre banque).",
            "explain_fr": "Le réseau financier utilisé pour transmettre les fonds au bénéficiaire.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Compte Safinum", "Safinum account"],
            "fub": "Limngal Safinum (0 FCFA - Meere)",
            "explain_fub": "Neldugo haa kiliyanjo Safinum Pay feere : walaa coggu (0 FCFA).",
            "explain_fr": "Transfert interne vers un autre compte Safinum Pay : 100 % gratuit (0 FCFA de frais).",
            "category": "frais",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Transfert instantané et gratuit", "Instant, free transfer"],
            "fub": "Nelal jooni-jooni kadi meere (walaa coggu)",
            "explain_fub": "Ceede ɗe njottoto jooni-jooni kadi walaa mbuuɗu ittete dow coggu.",
            "explain_fr": "L'argent arrive immédiatement chez le destinataire et aucun frais n'est prélevé.",
            "category": "frais",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Mobile Money"],
            "fub": "Kofru Mobile Money (1,5 %)",
            "explain_fub": "Neldugo haa waya Mobile Money (coggu 1,5 %).",
            "explain_fr": "Envoi vers un portefeuille Mobile Money (commission de 1,5 %).",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Frais de 1,5 % (min. 100 FCFA, max. 2 500 FCFA)",
                "1.5% fee (min. 100 FCFA, max. 2,500 FCFA)"
            ],
            "fub": "Coggu nelal 1,5 % (famɗi fuu 100 FCFA, haaddi 2 500 FCFA)",
            "explain_fub": "Kampaniiru hoosata 1,5 % dow ceede nelal; coggu les 100 FCFA walaa, kadi ɓurataa 2 500 FCFA.",
            "explain_fr": "Tarif Mobile Money : 1,5 % du montant envoyé, avec un minimum de 100 FCFA et un plafond de 2 500 FCFA.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Autre banque", "Other bank"],
            "fub": "Banki feere (2 %)",
            "explain_fub": "Neldugo haa limngal banki feere (coggu 2 %).",
            "explain_fr": "Virement vers un compte ouvert dans une autre banque (commission de 2 %).",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Frais de 2 % (min. 200 FCFA, max. 5 000 FCFA)",
                "2% fee (min. 200 FCFA, max. 5,000 FCFA)"
            ],
            "fub": "Coggu nelal 2 % (famɗi fuu 200 FCFA, haaddi 5 000 FCFA)",
            "explain_fub": "Banki hoosata 2 % dow ceede nelal; famɗi fuu 200 FCFA, kadi ɓurataa 5 000 FCFA.",
            "explain_fr": "Tarif interbancaire : 2 % du montant envoyé, avec un minimum de 200 FCFA et un maximum de 5 000 FCFA.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Montant à envoyer", "Amount to send"],
            "fub": "Limngal ceede neldeteeɗe",
            "explain_fub": "Ceede ɗe jaɓoowo heɓata (nder FCFA).",
            "explain_fr": "La somme en FCFA que vous souhaitez faire parvenir au destinataire.",
            "category": "frais",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Gratuit", "Free"],
            "fub": "Meere (0 FCFA)",
            "explain_fub": "Walaa coggu nelal.",
            "explain_fr": "Aucun frais de transaction.",
            "category": "frais",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Total à débiter", "Total to debit"],
            "fub": "Ceede fuu ɗe ittete",
            "explain_fub": "Ceede neldeteeɗe + Coggu nelal = Ceede fuu ɗe ustete nder limngal maa.",
            "explain_fr": "Somme totale (Montant + Frais) qui sera effectivement prélevée sur votre compte.",
            "category": "frais",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": ["Solde après opération", "Balance after transfer"],
            "fub": "Ceede keddotooɗe ɓaawo nelal",
            "explain_fub": "Ceede ɗe keddotoo nder kofru maa nde nelal ngal timmi.",
            "explain_fr": "Montant qui restera disponible sur votre compte après cette opération.",
            "category": "frais",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Retour", "Back"],
            "fub": "Rutto ɓaawo",
            "explain_fub": "Ruttoraago haa yaaduure ɓennunde.",
            "explain_fr": "Revenir à l'étape précédente.",
            "category": "navigation",
            "source": "03_tourneux_dictionary_csv"
        },
        {
            "keys": ["Continuer", "Continue"],
            "fub": "Jokku yeeso",
            "explain_fub": "Yahugo haa yaaduure tokkoore.",
            "explain_fr": "Valider cette étape et passer à la suivante.",
            "category": "navigation",
            "source": "01_aki_osc_financial_glossary"
        },

        # --- Étape 3 : Bénéficiaire ---
        {
            "keys": [
                "Renseignez les informations du destinataire. Vérifiez toujours le numéro avant de valider.",
                "Enter the recipient details. Always verify the number before confirming."
            ],
            "fub": "Winndu kabaruuji jaɓoowo ceede. Laartu lambar waya waktu fuu hidde a tabitina.",
            "explain_fub": "Yaaduure 3 : Laartu booyma innde e lambar waya jaɓoowo ngam ceede ɗe to majja.",
            "explain_fr": "Étape 3 : Indiquez l'identité et le téléphone du bénéficiaire en vérifiant chaque chiffre.",
            "category": "beneficiaire",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Ce bénéficiaire n'a jamais été utilisé sur ce compte. Vérifiez le numéro avant de continuer.",
                "This beneficiary has never been used on this account. Verify the number before continuing."
            ],
            "fub": "Jaɓoowo oo meeɗaa huutineego nder limngal ngal. Laartu lambar waya mum booyma hidde a jokka.",
            "explain_fub": "Reentinoore kisal : ɗum nde arandeere a neldata ceede haa neɗɗo oo. Laartu lambar waya laabi ɗiɗi!",
            "explain_fr": "Vigilance sécurité : comme c'est votre premier envoi vers ce destinataire, vérifiez son numéro et cochez la case de vérification en bas.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Nom du bénéficiaire", "Beneficiary name"],
            "fub": "Innde jaɓoowo ceede",
            "explain_fub": "Innde e jammoore neɗɗo mo heɓata ceede ɗe.",
            "explain_fr": "Nom complet de la personne à qui vous envoyez l'argent.",
            "category": "beneficiaire",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Numéro de téléphone", "Phone number"],
            "fub": "Lambar waya jaɓoowo",
            "explain_fub": "Lambar waya (+237...) mo jaɓoowo ceede.",
            "explain_fr": "Numéro de téléphone mobile du destinataire.",
            "category": "beneficiaire",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": ["Motif du transfert", "Transfer reason"],
            "fub": "Dalila nelal ceede",
            "explain_fub": "Sabu ko a neldata ceede ɗe (yeru : yoɓol kuugal, ballal saare).",
            "explain_fr": "Raison de l'envoi d'argent.",
            "category": "beneficiaire",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": ["Note (optionnel)", "Note (optional)"],
            "fub": "Bataake pamaro (Waɗugo ɗum doole हिaa)",
            "explain_fub": "A waawi ɓeydugo konngol pamarel ngam jaɓoowo to a yiɗi.",
            "explain_fr": "Commentaire facultatif joint au transfert.",
            "category": "beneficiaire",
            "source": "03_tourneux_dictionary_csv"
        },
        {
            "keys": [
                "J'ai vérifié le nom et le numéro du bénéficiaire.",
                "I have verified the beneficiary name and phone number."
            ],
            "fub": "Mi laartii booyma innde e lambar waya jaɓoowo ceede.",
            "explain_fub": "Sey a maanta akootiiru ndu ngam tabitingo wonde lambar jaɓoowo ɗum goonga.",
            "explain_fr": "Action obligatoire : cochez cette case pour attester que vous avez contrôlé le nom et le numéro du destinataire.",
            "category": "beneficiaire",
            "source": "01_aki_osc_financial_glossary"
        },

        # --- Étape 4 : Récapitulatif ---
        {
            "keys": [
                "Vérifiez les informations avant de confirmer le transfert.",
                "Check the details before confirming the transfer."
            ],
            "fub": "Laartu kabaruuji ɗi fuu hidde a tabitina nelal ceede ngal.",
            "explain_fub": "Yaaduure 4 : Janngu ceede, coggu, innde e lambar jaɓoowo hidde a ɓilla tabitingo.",
            "explain_fr": "Étape 4 : Contrôlez chaque ligne du résumé avant de donner votre validation définitive.",
            "category": "recapitulatif",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Montant", "Amount"],
            "fub": "Limngal ceede",
            "explain_fub": "Ceede ɗe jaɓoowo heɓata.",
            "explain_fr": "Montant net envoyé au bénéficiaire.",
            "category": "recapitulatif",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Total débité", "Total debited"],
            "fub": "Ceede fuu ɗe ittete",
            "explain_fub": "Ceede neldaaɗe + Coggu nelal.",
            "explain_fr": "Somme totale retirée de votre compte (montant + frais).",
            "category": "recapitulatif",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": ["Téléphone", "Phone"],
            "fub": "Lambar waya",
            "explain_fub": "Lambar waya jaɓoowo ceede.",
            "explain_fr": "Numéro de téléphone du destinataire.",
            "category": "recapitulatif",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Référence", "Reference"],
            "fub": "Lambar seedamku",
            "explain_fub": "Lambar seedamku keeriido mo kuugal ngal (SAF-2026-...).",
            "explain_fr": "Identifiant unique de traçabilité de la transaction.",
            "category": "recapitulatif",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": ["Opération", "Operation"],
            "fub": "Laawol kuugal",
            "explain_fub": "Iri nelal ngal suɓu-ɗaa.",
            "explain_fr": "Canal de transfert sélectionné.",
            "category": "recapitulatif",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Je confirme que les informations ci-dessus sont correctes.",
                "I confirm the information above is correct."
            ],
            "fub": "Mi tabitinii wonde kabaruuji gonɗi dow ɗoo fuu ɗum goonga.",
            "explain_fub": "Maantu akootiiru ndu hidde a ɓilla butoŋ « Tabitinu nelal ceede ».",
            "explain_fr": "Action obligatoire : cochez cette case pour autoriser le prélèvement et l'envoi définitif.",
            "category": "recapitulatif",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Modifier", "Edit"],
            "fub": "Waylugo",
            "explain_fub": "Ruttoraago haa yaaduure 3 ngam feewnugo kabaruuji.",
            "explain_fr": "Revenir à l'étape précédente pour corriger une information.",
            "category": "navigation",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "keys": ["Confirmer le transfert", "Confirm transfer"],
            "fub": "Tabitinu nelal ceede",
            "explain_fub": "Ɓillugo ɗoo neldata ceede ɗe jooni-jooni haa jaɓoowo.",
            "explain_fr": "Valider définitivement et envoyer les fonds maintenant.",
            "category": "recapitulatif",
            "source": "01_aki_osc_financial_glossary"
        },

        # --- Étape 5 : Confirmation & Reçu ---
        {
            "keys": ["Transfert effectué", "Transfer completed"],
            "fub": "Nelal ceede timmii bee nasaraaku",
            "explain_fub": "Alhamdu! Ceede maa neldaama booyma haa jaɓoowo.",
            "explain_fr": "Opération terminée : votre virement a bien été exécuté.",
            "category": "confirmation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Votre transfert a été envoyé avec succès.",
                "Your transfer has been sent successfully."
            ],
            "fub": "Nelal ceede maa neldaama bee nasaraaku timmungu.",
            "explain_fub": "Jaɓoowo heɓii ceede ɗe. Resu lambar seedamku (SAF-2026-...) gonɗo les ɗoo.",
            "explain_fr": "Les fonds ont été transmis avec succès. Conservez le numéro de référence affiché sur ce reçu.",
            "category": "confirmation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Statut", "Status"],
            "fub": "Darnde kuugal",
            "explain_fub": "Hollirta to nelal ngal timmii.",
            "explain_fr": "État final du traitement de la transaction.",
            "category": "confirmation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Succès", "Success"],
            "fub": "Timmii (Nasaraaku)",
            "explain_fub": "Kuugal ngal waɗii walaa boofol.",
            "explain_fr": "Transaction réussie et validée.",
            "category": "confirmation",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Nouveau transfert", "New transfer"],
            "fub": "Nelal ceede kesal",
            "explain_fub": "Ruttoraago haa yaaduure 1 ngam waɗugo nelal feere.",
            "explain_fr": "Revenir à l'accueil du compte pour effectuer une autre opération.",
            "category": "navigation",
            "source": "02_safinum_wave_sponsor_corpus"
        },

        # --- Les 7 Erreurs & Alertes Officielles (`TEST_ERRORS` dans HackathonTest-Cb2PbTlv.js) ---
        {
            "keys": ["Une erreur est survenue", "An error occurred"],
            "fub": "Boofol waɗii nder kuugal",
            "explain_fub": "Kuugal ngal daraama sabu boofol; janngu famfingo les ɗoo ngam feewnugo.",
            "explain_fr": "Une anomalie bloque l'opération : lisez l'explication ci-dessous pour savoir comment la corriger.",
            "category": "erreur",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Alerte de sécurité", "Security warning"],
            "fub": "Reentinoore kisal ceede",
            "explain_fub": "Reena! Bataake kisal mawɗo ngam reenaago ceede maa.",
            "explain_fr": "Avertissement de sécurité bancaire demandant votre vigilance avant d'envoyer l'argent.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Message important", "Important message", "MESSAGE IMPORTANT"],
            "fub": "Bataake mawɗo (Kabaruuji kisal)",
            "explain_fub": "Kabaruuji kesi ɗi banki neldii ma jooni-jooni.",
            "explain_fr": "Information prioritaire affichée en temps réel sur votre espace bancaire.",
            "category": "securite",
            "source": "03_tourneux_dictionary_csv"
        },
        {
            "keys": [
                "Le montant doit être supérieur à zéro.",
                "The amount must be greater than zero."
            ],
            "fub": "Limngal ceede haani ɓurugo meere (0 FCFA).",
            "explain_fub": "Boofol AMOUNT_001 : A waawaa neldugo 0 FCFA. Winndu limngal ceede (yeru : 5 000 FCFA) ngam jokkugo.",
            "explain_fr": "Explication AMOUNT_001 : Le montant saisi est égal à zéro. Tapez une somme valide supérieure à 0 FCFA.",
            "category": "erreur",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Solde insuffisant pour effectuer ce transfert.",
                "Insufficient balance for this transfer."
            ],
            "fub": "Ceede gonɗe nder limngal maa keƴataa ngam waɗugo nelal ngal.",
            "explain_fub": "Boofol AMOUNT_002 : Ceede ɗe a yiɗi neldugo (bee coggu nelal) ɓuri ceede gonɗe nder kofru maa (250 000 FCFA). Ustu limngal ceede neldeteeɗe!",
            "explain_fr": "Explication AMOUNT_002 : Vous n'avez pas assez d'argent disponible sur votre compte pour couvrir ce montant. Réduisez la somme à envoyer.",
            "category": "erreur",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Veuillez renseigner le nom et le numéro du bénéficiaire.",
                "Please provide the beneficiary name and phone number."
            ],
            "fub": "Useni winndu innde e lambar waya jaɓoowo ceede.",
            "explain_fub": "Boofol BENEFICIARY_001 : Akootiiru innde malla lambar waya jaɓoowo ɗon ɓoli. Winndu ɗi ɗiɗi fuu hidde a jokka.",
            "explain_fr": "Explication BENEFICIARY_001 : Il manque le nom ou le numéro de téléphone du destinataire. Remplissez les deux champs obligatoires.",
            "category": "erreur",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Alerte de sécurité : vérifiez le numéro du bénéficiaire avant de continuer.",
                "Security warning: verify the beneficiary phone number before continuing."
            ],
            "fub": "Reentinoore kisal : laartu lambar waya jaɓoowo kadi maantu akootiiru tabitingol hidde a jokka.",
            "explain_fub": "Boofol SECURITY_001 : Sey a laarta lambar waya jaɓoowo kadi a maanta akootiiru « Mi laartii booyma innde e lambar waya » les ɗoo.",
            "explain_fr": "Explication SECURITY_001 : Par sécurité, vous devez vérifier le numéro du destinataire et cocher la case « J'ai vérifié le nom et le numéro du bénéficiaire » avant de continuer.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Alerte de sécurité : ce bénéficiaire n'a jamais été utilisé sur ce compte.",
                "Security warning: this beneficiary has never been used on this account."
            ],
            "fub": "Reentinoore kisal : jaɓoowo ceede oo meeɗaa huutineego nder limngal hisaabu ngal.",
            "explain_fub": "Reentinoore SECURITY_002 : Neɗɗo oo ɗum keso nder limngal maa. Reena nguyka : laartu innde mum e lambar waya mum laabi ɗiɗi hidde a nelda ceede!",
            "explain_fr": "Explication SECURITY_002 : Vous n'avez encore jamais envoyé d'argent à ce contact. Assurez-vous qu'il s'agit bien de la bonne personne et du bon numéro.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Erreur réseau : le service est temporairement indisponible. Réessayez.",
                "Network error: the service is temporarily unavailable. Please try again."
            ],
            "fub": "Boofol laawol enternet : kuugal ngal ɗon darii seeɗa jooni. Useni jarribu fahin.",
            "explain_fub": "Boofol NETWORK_001 : Jokkondiral enternet ɗon mari caɗeele jooni. Hakkillo maa hisu : walaa mbuuɗu (0 FCFA) ittaa nder limngal maa! Munyu seeɗa kadi jarribu fahin.",
            "explain_fr": "Explication NETWORK_001 : Le réseau est momentanément coupé. Rassurez-vous : aucun argent n'a été débité de votre compte. Patientez quelques instants puis réessayez.",
            "category": "erreur",
            "source": "18_waxal_unesco_bamako_orthography"
        },
        {
            "keys": [
                "Vous devez confirmer les informations avant de valider le transfert.",
                "You must confirm the details before validating the transfer."
            ],
            "fub": "Sey a maanta akootiiru tabitingol kabaruuji ɗi hidde a nelda ceede ɗe.",
            "explain_fub": "Boofol CONFIRM_001 : A yejjitii maantugo akootiiru tabitingol. Ɓillu nder akootiiru « Mi tabitinii wonde kabaruuji ɗi ɗum goonga » hidde a nelda.",
            "explain_fr": "Explication CONFIRM_001 : Vous devez cocher la case « Je confirme que les informations ci-dessus sont correctes » avant de cliquer sur le bouton de confirmation.",
            "category": "erreur",
            "source": "02_safinum_wave_sponsor_corpus"
        },

        # --- Panneau Latéral Sécurité & Pied de page ---
        {
            "keys": ["Sécurité", "Security"],
            "fub": "Kisal ceede",
            "explain_fub": "Tinndinoore ngam reenaago ceede maa.",
            "explain_fr": "Conseils de protection contre les erreurs et la fraude.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Vérifiez toujours le nom et le numéro du bénéficiaire avant de confirmer un transfert.",
                "Always verify the beneficiary name and number before confirming a transfer."
            ],
            "fub": "Laartu waktu fuu innde e lambar waya jaɓoowo ceede hidde a tabitina nelal.",
            "explain_fub": "Nelal ceede waawaa ruttineego to lambar boofii. Laartu innde e lambar waktu fuu!",
            "explain_fr": "Règle essentielle : contrôlez systématiquement le nom et le numéro du destinataire avant chaque envoi.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": ["Connexion sécurisée", "Secure connection"],
            "fub": "Jokkondiral kisiingal (Chiffré)",
            "explain_fub": "Laawol enternet Safinum Pay ɗon reena kabaruuji maa.",
            "explain_fr": "Votre connexion avec Safinum Pay est protégée et chiffrée.",
            "category": "securite",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "keys": [
                "Safinum Pay — environnement de démonstration. Ne saisissez aucune donnée personnelle réelle.",
                "Safinum Pay — demonstration environment. Do not enter real personal data."
            ],
            "fub": "Safinum Pay — nokkuure jarribo kuugal. To winndu kabaruuji maa cuuɗiiɗi goonga ɗoo.",
            "explain_fub": "Hello ngoo ɗum ngam jarribo Hackathon SAFINUM 2026 tan.",
            "explain_fr": "Environnement de démonstration : n'entrez jamais vos vrais codes secrets ou coordonnées bancaires réelles.",
            "category": "navigation",
            "source": "01_aki_osc_financial_glossary"
        }
    ]

    exact_map = {}
    for item in ui_entries:
        fub_str = item["fub"]
        phon_str = to_tts_phonetic(fub_str)
        payload = {
            "fub": fub_str,
            "phonetic": phon_str,
            "explain_fub": item["explain_fub"],
            "explain_fub_phonetic": to_tts_phonetic(item["explain_fub"]),
            "explain_fr": item["explain_fr"],
            "category": item["category"],
            "source": item["source"],
        }
        for k in item["keys"]:
            exact_map[k] = payload
            exact_map[k.strip()] = payload

    # =========================================================================
    # 2. PATTERNS DYNAMIQUES (UI PARAMÉTRÉE & DATES FR/EN)
    # =========================================================================
    dynamic_patterns = [
        {
            "id": "greeting_user",
            "regex": r"^(?:Bonjour|Hello),\s*(.+)$",
            "template_fub": "Jaɓɓaama, $1",
            "explain_fub": "Salaama e jaɓɓaago $1, joom limngal hisaabu.",
            "explain_fr": "Message d'accueil personnalisé du titulaire du compte ($1).",
            "category": "solde",
            "source": "02_safinum_wave_sponsor_corpus"
        },
        {
            "id": "account_number_line",
            "regex": r"^(?:Numéro de compte\s*:|Account number\s*:)\s*(.+)$",
            "template_fub": "Lambar limngal hisaabu : $1",
            "explain_fub": "Lambar limngal banki maa keeriido ($1). Lambar oo waylataako.",
            "explain_fr": "Identifiant unique de votre compte bancaire ($1), conservé intact sans aucune modification.",
            "category": "solde",
            "source": "01_aki_osc_financial_glossary"
        },
        {
            "id": "date_fr",
            "regex": r"^(\d{1,2})\s+(nov\.|oct\.|déc\.|janv\.|févr\.|mars|avr\.|mai|juin|juil\.|août|sept\.)\s+(\d{4})$",
            "template_fub": "Ñalnde $1 lewru $2 $3",
            "explain_fub": "Ñalnde kuugal ceede ngal waɗaa ($1 $2 $3).",
            "explain_fr": "Date d'enregistrement de l'opération dans votre historique.",
            "category": "solde",
            "source": "03_tourneux_dictionary_csv"
        },
        {
            "id": "date_en",
            "regex": r"^(Nov|Oct|Dec|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep)\s+(\d{1,2}),\s*(\d{4})$",
            "template_fub": "Ñalnde $2 lewru $1 $3",
            "explain_fub": "Ñalnde kuugal ceede ngal waɗaa ($2 $1 $3).",
            "explain_fr": "Date d'enregistrement de l'opération dans votre historique.",
            "category": "solde",
            "source": "03_tourneux_dictionary_csv"
        }
    ]

    # =========================================================================
    # 3. EXTRACTION DU LEXIQUE MASSIF (MOTS & EXPRESSIONS) DEPUIS LES 18 SOURCES
    # =========================================================================
    word_lexicon = {}

    core_vocab = {
        "attention": ("reena", "01_aki_osc_financial_glossary"),
        "alerte": ("reentinoore", "01_aki_osc_financial_glossary"),
        "avertissement": ("reentinoore", "01_aki_osc_financial_glossary"),
        "important": ("mawɗum", "03_tourneux_dictionary_csv"),
        "information": ("kabaruuji", "03_tourneux_dictionary_csv"),
        "informations": ("kabaruuji", "03_tourneux_dictionary_csv"),
        "message": ("bataake", "03_tourneux_dictionary_csv"),
        "client": ("kiliyanjo", "01_aki_osc_financial_glossary"),
        "clients": ("kiliyan'en", "01_aki_osc_financial_glossary"),
        "cher": ("tedduɗo", "03_tourneux_dictionary_csv"),
        "chère": ("tedduɗo", "03_tourneux_dictionary_csv"),
        "virement": ("nelal ceede", "01_aki_osc_financial_glossary"),
        "virements": ("nele ceede", "01_aki_osc_financial_glossary"),
        "transfert": ("nelal ceede", "02_safinum_wave_sponsor_corpus"),
        "transferts": ("nele ceede", "02_safinum_wave_sponsor_corpus"),
        "transaction": ("kuugal ceede", "01_aki_osc_financial_glossary"),
        "transactions": ("kuugalji ceede", "01_aki_osc_financial_glossary"),
        "opération": ("kuugal", "01_aki_osc_financial_glossary"),
        "opérations": ("kuugalji", "01_aki_osc_financial_glossary"),
        "montant": ("limngal ceede", "02_safinum_wave_sponsor_corpus"),
        "montants": ("limle ceede", "02_safinum_wave_sponsor_corpus"),
        "somme": ("ceede", "03_tourneux_dictionary_csv"),
        "argent": ("ceede", "01_aki_osc_financial_glossary"),
        "fonds": ("ceede", "01_aki_osc_financial_glossary"),
        "solde": ("ceede gonɗe", "01_aki_osc_financial_glossary"),
        "frais": ("coggu nelal", "01_aki_osc_financial_glossary"),
        "commission": ("coggu", "01_aki_osc_financial_glossary"),
        "commissions": ("cogguuji", "01_aki_osc_financial_glossary"),
        "taxe": ("jomorgol", "03_tourneux_dictionary_csv"),
        "taxes": ("jomorli", "03_tourneux_dictionary_csv"),
        "tarif": ("coggu", "03_tourneux_dictionary_csv"),
        "tarifs": ("cogguuji", "03_tourneux_dictionary_csv"),
        "gratuit": ("meere (walaa coggu)", "02_safinum_wave_sponsor_corpus"),
        "gratuite": ("meere (walaa coggu)", "02_safinum_wave_sponsor_corpus"),
        "gratuits": ("meere (walaa coggu)", "02_safinum_wave_sponsor_corpus"),
        "plafond": ("haaddi ceede", "01_aki_osc_financial_glossary"),
        "limite": ("haaddi", "03_tourneux_dictionary_csv"),
        "maximum": ("ko ɓuri ɗuuɗugo", "03_tourneux_dictionary_csv"),
        "minimum": ("famɗi fuu", "03_tourneux_dictionary_csv"),
        "journalier": ("ñalnde fuu", "03_tourneux_dictionary_csv"),
        "quotidien": ("ñalnde fuu", "03_tourneux_dictionary_csv"),
        "hebdomadaire": ("asaweere fuu", "03_tourneux_dictionary_csv"),
        "mensuel": ("lewru fuu", "03_tourneux_dictionary_csv"),
        "supérieur": ("ɓurɗo", "03_tourneux_dictionary_csv"),
        "inférieur": ("les", "03_tourneux_dictionary_csv"),
        "dépasser": ("ɓurugo", "03_tourneux_dictionary_csv"),
        "dépasse": ("ɓuri", "03_tourneux_dictionary_csv"),
        "compte": ("limngal hisaabu", "01_aki_osc_financial_glossary"),
        "comptes": ("limle hisaabu", "01_aki_osc_financial_glossary"),
        "bancaire": ("banki", "01_aki_osc_financial_glossary"),
        "banque": ("banki", "01_aki_osc_financial_glossary"),
        "agence": ("nokkuure banki", "01_aki_osc_financial_glossary"),
        "guichet": ("nokkuure ceede", "01_aki_osc_financial_glossary"),
        "bénéficiaire": ("jaɓoowo ceede", "01_aki_osc_financial_glossary"),
        "destinataire": ("jaɓoowo ceede", "01_aki_osc_financial_glossary"),
        "expéditeur": ("neldoowo", "01_aki_osc_financial_glossary"),
        "titulaire": ("joom limngal", "03_tourneux_dictionary_csv"),
        "numéro": ("lambar", "02_safinum_wave_sponsor_corpus"),
        "téléphone": ("waya", "02_safinum_wave_sponsor_corpus"),
        "mobile": ("waya", "02_safinum_wave_sponsor_corpus"),
        "code": ("lambar cuuɗiido", "02_safinum_wave_sponsor_corpus"),
        "secret": ("cuuɗiido", "02_safinum_wave_sponsor_corpus"),
        "confidentiel": ("cuuɗiido", "02_safinum_wave_sponsor_corpus"),
        "sécurité": ("kisal", "01_aki_osc_financial_glossary"),
        "vérification": ("laartugo", "01_aki_osc_financial_glossary"),
        "vérifier": ("laartugo", "01_aki_osc_financial_glossary"),
        "vérifiez": ("laartu", "01_aki_osc_financial_glossary"),
        "validation": ("tabitingol", "02_safinum_wave_sponsor_corpus"),
        "valider": ("tabitingo", "02_safinum_wave_sponsor_corpus"),
        "validez": ("tabitinu", "02_safinum_wave_sponsor_corpus"),
        "confirmer": ("tabitingo", "01_aki_osc_financial_glossary"),
        "confirmez": ("tabitinu", "01_aki_osc_financial_glossary"),
        "confirmation": ("tabitingol", "01_aki_osc_financial_glossary"),
        "envoyer": ("neldugo", "02_safinum_wave_sponsor_corpus"),
        "envoyez": ("neldu", "02_safinum_wave_sponsor_corpus"),
        "envoi": ("nelal", "02_safinum_wave_sponsor_corpus"),
        "recevoir": ("heɓugo", "03_tourneux_dictionary_csv"),
        "reçu": ("talkuru seedamku", "18_waxal_unesco_bamako_orthography"),
        "retrait": ("ittol ceede", "02_safinum_wave_sponsor_corpus"),
        "retirer": ("ittugo ceede", "02_safinum_wave_sponsor_corpus"),
        "dépôt": ("resngo ceede", "02_safinum_wave_sponsor_corpus"),
        "déposer": ("resugo ceede", "02_safinum_wave_sponsor_corpus"),
        "paiement": ("yoɓol", "02_safinum_wave_sponsor_corpus"),
        "payer": ("yoɓugo", "02_safinum_wave_sponsor_corpus"),
        "payez": ("yoɓu", "02_safinum_wave_sponsor_corpus"),
        "facture": ("talkuru hisaabu", "02_safinum_wave_sponsor_corpus"),
        "factures": ("talkuruuji hisaabu", "02_safinum_wave_sponsor_corpus"),
        "remboursement": ("yoɓitol", "01_aki_osc_financial_glossary"),
        "annuler": ("haɗugo", "03_tourneux_dictionary_csv"),
        "annulé": ("haɗaama", "03_tourneux_dictionary_csv"),
        "annulation": ("haɗgol", "03_tourneux_dictionary_csv"),
        "bloqué": ("maɓɓaama", "02_safinum_wave_sponsor_corpus"),
        "bloquer": ("maɓɓugo", "02_safinum_wave_sponsor_corpus"),
        "suspendu": ("daraama", "03_tourneux_dictionary_csv"),
        "erreur": ("boofol", "01_aki_osc_financial_glossary"),
        "échec": ("waɗaayi", "01_aki_osc_financial_glossary"),
        "échoué": ("waɗaayi", "01_aki_osc_financial_glossary"),
        "succès": ("nasaraaku", "01_aki_osc_financial_glossary"),
        "réseau": ("laawol enternet", "18_waxal_unesco_bamako_orthography"),
        "connexion": ("jokkondiral", "01_aki_osc_financial_glossary"),
        "indisponible": ("woodaa jooni", "01_aki_osc_financial_glossary"),
        "disponible": ("woodi", "01_aki_osc_financial_glossary"),
        "maintenance": ("feewnugo laawol", "03_tourneux_dictionary_csv"),
        "service": ("kuugal", "02_safinum_wave_sponsor_corpus"),
        "clientèle": ("ballal kiliyan'en", "02_safinum_wave_sponsor_corpus"),
        "support": ("ballal", "02_safinum_wave_sponsor_corpus"),
        "aide": ("ballal", "02_safinum_wave_sponsor_corpus"),
        "identité": ("innde e seedamku", "03_tourneux_dictionary_csv"),
        "pièce": ("talkuru", "03_tourneux_dictionary_csv"),
        "carte": ("karti", "03_tourneux_dictionary_csv"),
        "nationale": ("lesdi", "03_tourneux_dictionary_csv"),
        "obligatoire": ("haani doole", "03_tourneux_dictionary_csv"),
        "requis": ("haani", "02_safinum_wave_sponsor_corpus"),
        "requise": ("haani", "02_safinum_wave_sponsor_corpus"),
        "nécessaire": ("haani", "03_tourneux_dictionary_csv"),
        "jamais": ("koo nde", "03_tourneux_dictionary_csv"),
        "toujours": ("waktu fuu", "03_tourneux_dictionary_csv"),
        "avant": ("hidde", "03_tourneux_dictionary_csv"),
        "après": ("ɓaawo", "03_tourneux_dictionary_csv"),
        "pendant": ("nder", "03_tourneux_dictionary_csv"),
        "sans": ("walaa", "03_tourneux_dictionary_csv"),
        "avec": ("bee", "03_tourneux_dictionary_csv"),
        "pour": ("ngam", "03_tourneux_dictionary_csv"),
        "dans": ("nder", "03_tourneux_dictionary_csv"),
        "sur": ("dow", "03_tourneux_dictionary_csv"),
        "sous": ("les", "03_tourneux_dictionary_csv"),
        "vers": ("faa", "03_tourneux_dictionary_csv"),
        "entre": ("hakkunde", "03_tourneux_dictionary_csv"),
        "votre": ("maa", "03_tourneux_dictionary_csv"),
        "vos": ("maa", "03_tourneux_dictionary_csv"),
        "notre": ("amen", "03_tourneux_dictionary_csv"),
        "nos": ("amen", "03_tourneux_dictionary_csv"),
        "veuillez": ("useni", "03_tourneux_dictionary_csv"),
        "merci": ("useko", "03_tourneux_dictionary_csv"),
        "immédiatement": ("jooni-jooni", "03_tourneux_dictionary_csv"),
        "automatiquement": ("bee hoore mum", "03_tourneux_dictionary_csv"),
        "temporairement": ("nder saa'i seeɗa", "03_tourneux_dictionary_csv"),
        "définitivement": ("haa abada", "03_tourneux_dictionary_csv"),
        "partager": ("senndugo", "02_safinum_wave_sponsor_corpus"),
        "partagez": ("to senndu", "02_safinum_wave_sponsor_corpus"),
        "communiquer": ("hokkugo", "03_tourneux_dictionary_csv"),
        "communiquez": ("hokkugo", "03_tourneux_dictionary_csv"),
        "personne": ("neɗɗo", "03_tourneux_dictionary_csv"),
        "aucun": ("walaa", "03_tourneux_dictionary_csv"),
        "aucune": ("walaa", "03_tourneux_dictionary_csv"),
        "tout": ("fuu", "03_tourneux_dictionary_csv"),
        "toute": ("fuu", "03_tourneux_dictionary_csv"),
        "tous": ("fuu", "03_tourneux_dictionary_csv"),
        "toutes": ("fuu", "03_tourneux_dictionary_csv"),
        "chaque": ("fuu", "03_tourneux_dictionary_csv"),
        "plusieurs": ("ɗuuɗɗum", "03_tourneux_dictionary_csv"),
        "heures": ("saa'iiji", "03_tourneux_dictionary_csv"),
        "heure": ("saa'i", "03_tourneux_dictionary_csv"),
        "minutes": ("hojomaaji", "03_tourneux_dictionary_csv"),
        "minute": ("hojom", "03_tourneux_dictionary_csv"),
        "jour": ("ñalnde", "03_tourneux_dictionary_csv"),
        "jours": ("balɗe", "03_tourneux_dictionary_csv"),
        "mois": ("lewru", "03_tourneux_dictionary_csv"),
        "année": ("hitaande", "03_tourneux_dictionary_csv"),
        "aujourd'hui": ("hannde", "03_tourneux_dictionary_csv"),
        "demain": ("jaango", "03_tourneux_dictionary_csv"),
        "hier": ("keñi", "03_tourneux_dictionary_csv"),
        "nouveau": ("keso", "03_tourneux_dictionary_csv"),
        "nouvelle": ("kesal", "03_tourneux_dictionary_csv"),
        "ancien": ("kiɗɗo", "03_tourneux_dictionary_csv"),
        "total": ("fuu", "01_aki_osc_financial_glossary"),
        "restant": ("keddiiɗo", "01_aki_osc_financial_glossary"),
        "suffisant": ("heƴi", "01_aki_osc_financial_glossary"),
        "insuffisant": ("heƴataa", "01_aki_osc_financial_glossary"),
        "invalide": ("boofɗum", "01_aki_osc_financial_glossary"),
        "valide": ("cahiidum", "01_aki_osc_financial_glossary"),
        "incorrect": ("boofɗum", "01_aki_osc_financial_glossary"),
        "correct": ("goonga", "03_tourneux_dictionary_csv"),
        "tentative": ("jarribo", "01_aki_osc_financial_glossary"),
        "tentatives": ("jarribooji", "01_aki_osc_financial_glossary"),
        "essais": ("jarribooji", "01_aki_osc_financial_glossary"),
        "essai": ("jarribo", "01_aki_osc_financial_glossary"),
        "réessayer": ("jarribaago fahin", "01_aki_osc_financial_glossary"),
        "réessayez": ("jarribu fahin", "01_aki_osc_financial_glossary"),
        "continuer": ("jokkugo", "01_aki_osc_financial_glossary"),
        "retour": ("ruttoraago", "03_tourneux_dictionary_csv"),
        "modifier": ("waylugo", "02_safinum_wave_sponsor_corpus"),
        "supprimer": ("momtugo", "02_safinum_wave_sponsor_corpus"),
        "ajouter": ("ɓeydugo", "02_safinum_wave_sponsor_corpus"),
        "choisir": ("suɓugo", "03_tourneux_dictionary_csv"),
        "sélectionnez": ("suɓu", "03_tourneux_dictionary_csv"),
        "saisir": ("winndugo", "02_safinum_wave_sponsor_corpus"),
        "saisissez": ("winndu", "02_safinum_wave_sponsor_corpus"),
        "entrez": ("naatnu", "02_safinum_wave_sponsor_corpus"),
        "cocher": ("maantugo", "02_safinum_wave_sponsor_corpus"),
        "cochez": ("maantu", "02_safinum_wave_sponsor_corpus"),
        "warning": ("reena", "01_aki_osc_financial_glossary"),
        "please": ("useni", "03_tourneux_dictionary_csv"),
        "transfer": ("nelal ceede", "01_aki_osc_financial_glossary"),
        "amount": ("limngal ceede", "01_aki_osc_financial_glossary"),
        "balance": ("ceede gonɗe", "01_aki_osc_financial_glossary"),
        "fee": ("coggu nelal", "01_aki_osc_financial_glossary"),
        "fees": ("cogguuji nelal", "01_aki_osc_financial_glossary"),
        "account": ("limngal hisaabu", "01_aki_osc_financial_glossary"),
        "beneficiary": ("jaɓoowo ceede", "01_aki_osc_financial_glossary"),
        "recipient": ("jaɓoowo ceede", "01_aki_osc_financial_glossary"),
        "phone": ("waya", "02_safinum_wave_sponsor_corpus"),
        "number": ("lambar", "02_safinum_wave_sponsor_corpus"),
        "security": ("kisal", "01_aki_osc_financial_glossary"),
        "confirm": ("tabitinu", "01_aki_osc_financial_glossary"),
        "verify": ("laartu", "01_aki_osc_financial_glossary"),
        "limit": ("haaddi", "03_tourneux_dictionary_csv"),
        "daily": ("ñalnde fuu", "03_tourneux_dictionary_csv"),
        "exceeds": ("ɓuri", "03_tourneux_dictionary_csv"),
        "failed": ("waɗaayi", "01_aki_osc_financial_glossary"),
        "successful": ("timmii bee nasaraaku", "01_aki_osc_financial_glossary"),
        "never": ("koo nde", "03_tourneux_dictionary_csv"),
        "share": ("senndu", "02_safinum_wave_sponsor_corpus"),
        "password": ("helmere suuɗiinde", "01_aki_osc_financial_glossary"),
        "important": ("mawɗum", "03_tourneux_dictionary_csv"),
        "customers": ("kiliyan'en", "01_aki_osc_financial_glossary"),
        "customer": ("kiliyanjo", "01_aki_osc_financial_glossary"),
    }

    for k, (fub_v, src_v) in core_vocab.items():
        word_lexicon[k] = {"fub": fub_v, "src": src_v}

    tourneux_csv = Path(r"C:\Users\JADELITO STORE\.gemini\antigravity-ide\brain\7d77bc4a-1206-4aa5-a657-89c4cbddc3b8\scratch\dictionnaire_peul_fulfulde_francais.csv")
    if tourneux_csv.exists():
        df_t = pd.read_csv(tourneux_csv)
        for row in df_t.itertuples(index=False):
            fr_raw = str(getattr(row, "francais", "") or "").strip().lower()
            fb_raw = str(getattr(row, "fulfulde", "") or "").strip()
            if not fr_raw or not fb_raw or fr_raw == "nan" or fb_raw == "nan":
                continue
            for part in re.split(r"[;,/]", fr_raw):
                clean_fr = re.sub(r"\([^)]*\)", "", part).strip()
                if 2 <= len(clean_fr) <= 35 and clean_fr not in word_lexicon:
                    word_lexicon[clean_fr] = {"fub": fb_raw, "src": "03_tourneux_dictionary_csv"}

    lex_path = Path(r"D:\lang\aki-osc\lexique.json")
    if lex_path.exists():
        for item in json.loads(lex_path.read_text(encoding="utf-8")):
            fr_k = str(item.get("fr", "")).strip().lower()
            fb_v = str(item.get("fub", "")).strip()
            if fr_k and fb_v:
                word_lexicon[fr_k] = {"fub": fb_v, "src": "01_aki_osc_financial_glossary"}

    phrase_chunks = [
        {"fr": "ne partagez jamais votre code secret", "fub": "to hokku neɗɗo feere lambar maa cuuɗiido koo nde", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "ne communiquez jamais votre code", "fub": "to hokku neɗɗo feere lambar maa cuuɗiido koo nde", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "votre code secret est personnel", "fub": "lambar maa cuuɗiido ɗum huunde maa feere tan", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "plafond journalier de virement", "fub": "haaddi nelal ceede ñalnde fuu", "src": "01_aki_osc_financial_glossary"},
        {"fr": "le plafond journalier est fixé à", "fub": "haaddi ceede ñalnde fuu darnaama haa", "src": "01_aki_osc_financial_glossary"},
        {"fr": "au-delà de ce montant", "fub": "to ceede ɗe ɓurii limngal ngal", "src": "01_aki_osc_financial_glossary"},
        {"fr": "une pièce d'identité valide", "fub": "talkuru seedamku innde cahiindu", "src": "03_tourneux_dictionary_csv"},
        {"fr": "vérification d'identité", "fub": "laartugo seedamku innde", "src": "03_tourneux_dictionary_csv"},
        {"fr": "service client", "fub": "сервиs ballal kiliyan'en", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "frais supplémentaires", "fub": "coggu ɓeydaangu", "src": "01_aki_osc_financial_glossary"},
        {"fr": "aucun frais supplémentaire", "fub": "walaa coggu feere ɓeydete", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "sans frais", "fub": "meere (walaa coggu)", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "en toute sécurité", "fub": "bee kisal timmungal", "src": "01_aki_osc_financial_glossary"},
        {"fr": "votre compte sera bloqué", "fub": "limngal hisaabu maa maɓɓete", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "tentatives erronées", "fub": "jarribooji boofɗi", "src": "01_aki_osc_financial_glossary"},
        {"fr": "veuillez vérifier", "fub": "useni laartu booyma", "src": "01_aki_osc_financial_glossary"},
        {"fr": "avant de confirmer", "fub": "hidde a tabitina", "src": "01_aki_osc_financial_glossary"},
        {"fr": "avant de valider", "fub": "hidde a tabitina", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "numéro de téléphone du bénéficiaire", "fub": "lambar waya jaɓoowo ceede", "src": "01_aki_osc_financial_glossary"},
        {"fr": "nom du bénéficiaire", "fub": "innde jaɓoowo ceede", "src": "01_aki_osc_financial_glossary"},
        {"fr": "solde disponible", "fub": "ceede gonɗe nder limngal", "src": "18_waxal_unesco_bamako_orthography"},
        {"fr": "total débité", "fub": "ceede fuu ɗe ittete", "src": "18_waxal_unesco_bamako_orthography"},
        {"fr": "frais de transaction", "fub": "coggu nelal ceede", "src": "18_waxal_unesco_bamako_orthography"},
        {"fr": "frais de retrait", "fub": "coggu ittol ceede", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "frais d'envoi", "fub": "coggu nelal ceede", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "opérateur mobile money", "fub": "kampaniiru Mobile Money", "src": "18_waxal_unesco_bamako_orthography"},
        {"fr": "virement bancaire", "fub": "nelal ceede banki", "src": "18_waxal_unesco_bamako_orthography"},
        {"fr": "compte bancaire", "fub": "limngal hisaabu banki", "src": "01_aki_osc_financial_glossary"},
        {"fr": "code de validation", "fub": "lambar tabitingol", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "envoyé par sms", "fub": "nelaaɗo bee SMS", "src": "02_safinum_wave_sponsor_corpus"},
        {"fr": "en cas de problème", "fub": "to caɗeele ngoodi", "src": "04_akilang_conversational_corpus"},
        {"fr": "veuillez patienter", "fub": "useni munyu seeɗa", "src": "04_akilang_conversational_corpus"},
        {"fr": "opération irréversible", "fub": "kuugal ngal waawaa ruttineego", "src": "01_aki_osc_financial_glossary"},
        {"fr": "ne peut pas être annulé", "fub": "waawaa haɗeego malla ruttineego", "src": "01_aki_osc_financial_glossary"},
    ]

    parquet_path = COMPILED_DIR / "unified_fulfulde_corpus.parquet"
    exemplars = []
    if parquet_path.exists():
        df_all = pd.read_parquet(parquet_path)
        fin_keywords = re.compile(r"\b(?:argent|compte|payer|envoyer|donner|recevoir|prix|frais|nombre|jour|heure|loi|droit|sécurité|erreur|vérifier|code|nom|maison|travail|famille|eau|électricité)\b", re.IGNORECASE)
        for src_id, group in df_all.groupby("source_id"):
            matches = group[group["src_text"].str.contains(fin_keywords, na=False)]
            sample_df = matches.head(15) if len(matches) >= 15 else group.head(12)
            for row in sample_df.itertuples(index=False):
                s_txt = str(row.src_text).strip()
                t_txt = str(row.trg_text).strip()
                if 10 <= len(s_txt) <= 220 and 10 <= len(t_txt) <= 240:
                    exemplars.append({
                        "fr": s_txt,
                        "fub": t_txt,
                        "src": str(row.source_id),
                        "dom": str(row.domain)
                    })

    kb_object = {
        "meta": {
            "language_name": "Fulfuldé du Cameroun (Adamaoua / Grand-Nord)",
            "iso_code": "fub",
            "macro_code": "ff / fuv",
            "total_harvested_records": summary_data.get("total_records_harvested", 99633),
            "distinct_sources_count": summary_data.get("distinct_sources_count", 18),
            "sources_breakdown": summary_data.get("sources_breakdown", {}),
            "exact_ui_entries_count": len(exact_map),
            "lexicon_words_count": len(word_lexicon),
            "phrase_chunks_count": len(phrase_chunks),
            "rag_exemplars_count": len(exemplars),
        },
        "exact_ui": exact_map,
        "dynamic_patterns": dynamic_patterns,
        "phrase_chunks": phrase_chunks,
        "word_lexicon": word_lexicon,
        "rag_exemplars": exemplars,
    }

    js_content = (
        "// =============================================================================\n"
        "// AKI x SAFINUM ANYDOC — BASE DE CONNAISSANCES FULFULDE CAMEROUN (fub)\n"
        "// Généré automatiquement depuis 18 sources (99 633 entrées parallèles & lexicales)\n"
        "// =============================================================================\n"
        "window.SAFINUM_KB = " + json.dumps(kb_object, ensure_ascii=False, indent=2) + ";\n"
    )

    out_js = EXT_DIR / "knowledge_base.js"
    out_js.write_text(js_content, encoding="utf-8")
    print(f"[OK] {out_js} régénéré ({out_js.stat().st_size:,} octets)")
    print(f"  - Entrées UI exactes (FR+EN) : {len(exact_map)}")
    print(f"  - Patterns dynamiques        : {len(dynamic_patterns)}")
    print(f"  - Expressions phraséologiques: {len(phrase_chunks)}")
    print(f"  - Mots du lexique (fub)      : {len(word_lexicon)}")
    print(f"  - Exemplaires RAG 18 sources : {len(exemplars)}")


if __name__ == "__main__":
    main()
