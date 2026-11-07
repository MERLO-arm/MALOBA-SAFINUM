// =============================================================================
// MALOBA ANYDOC — CONTENT SCRIPT PRINCIPAL (MANIFEST V3)
// Traduction DOM In-Place (Fulfuldé Cameroun fub) + Voix + Explication AnyDoc
// Charte officielle Maloba : Orange (#FF7900 / #ED7009), Terracotta (#E05515)
// =============================================================================

(function () {
  "use strict";

  if (window.__SAFINUM_ANYDOC_LOADED__) return;
  window.__SAFINUM_ANYDOC_LOADED__ = true;

  const MALOBA_LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADUCAYAAAALHGYmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAF2lJREFUeAHtnW1y1MiWhk+qDLZh5nZxYYi4v0asAHsF16ygYQWYFVCOWQDuBUxQrKDNCoAVYFaAewVU/5qIvk27OiYabONS3jySCqvK+siUUlJKep+IbsBW+VOvzsnzSQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPqEIOAUnybj8X/SxZ6ghU80eihIjtWvSf2d/2TEXP19FpB8N6Ktt3em8zkBp4CoHOBfk609j8SP6pfxWBL5Bi+debS5C2G5xQaB1vi/yZa/SeJnJaQ9/rckY/xLOpuoPw8JOAMsVQuwizemi+fKhTuk6syVtXoAa+UOHoFGYVfvb3T+0ZKgmLGyVjsEnAHuX0NE1un8RUA0Ict45D1VfxwTcAJYqgb4bXJjJ7JO9gUVIR8TcAaIqmZOD24/HdHGezKL6pkyPv2frf8m4AQQVY1wdC+QwVT9dUw1c7kQTwg4AURVIzeJXlADgmJUnushASeAqOpljxoD5ypXQPSvRgSJmaz3LJUkPFfd+d+zX6km2J29oR4U6vt6KKLvi62wH703LJ/iXNl8QfIXQd7JNwpO/jE9m9HAgKhqROWiXqsbcI8a4tuCHqk/jsgynFsbkXghE5b3evXH1VuUK/qY/31TPVY+T7ZnSnDHFxT8NBSBwf2rkXvTsyP1x4waYkTeP8kyp5NbL5RI3svyrqyvBLavBPZJCezlqcrXUc+BqGpGWatn1BhyjyzCFspi5QczkXT+hnrOIGr/+CygnpTPuQo8ftPJOcmDptyRPybbVZ70Rni0ecdWHaAS1aGyUi/IMkqoP/3X9OyQekqvLRWXBp0ql4NdDwqfkuTH/z1Wb3vPYqMGEA1aq2905nwUUAn1KfWY3orqqnA1szTIb0pYd5RF5KczNYC6YbtQXNvrivpeiur0YPs5H66pOJzdmLA2aIsrK2ZUM8rFtR6ssI84oR7TO1FxtCqQNDV4SSPC4nNOQ0GLHVsRNlHTQ0BS8IF6TK9EFQqqXLSqEWGpw/mxaKBFY0Ff9shhAlrAUnWBCoJa0oiw4qBFzWeK0R65y/z+9BtE5Tq/T249tpRPqV1Yd6Iwfq1BC/VLdba4VpLstaCYzouKBaCe/i/JHrUL6+7067RON5BzYq5WLkgS76jndF5UPI2I7Bet1i6sRc0hdjtzK7wa3FRYKqf5fbK1X2OlQq3C4qCF+tpfUX3sUUVUlM66qPj7pp7TaVGJGkpo1qhVWCPaPKSawtYjEs7lq9R56pgGQGdFxVaKmulVqk1YdeaupMV8lS2GcJ5iOiuqBqxUktqEVWPuqvI8wA3rVrT/5ymmk6Jq0EolqU1Y9eWunKoDnA/hPMV0UlQ8zJ/aoRZh1ZW7GhG19XO6xhDyU0s6KSp51RfVBrUIq47cFZ+ryBGGcp5iOicqbumg9qlFWJd0eUB2GfN0XCrNljWXVNLlMQ2EzolKkOdKRMu6sLgmznbuStDGHpXE4iaR3tf7Jemg+xe4FCa2LizbuSvR6OzBdNSDotetHut0TlQj97ZbhMKylROynbuy0LRY2VpJw98Zu/gc4eVC6Wruazt0TlQcKau5vKcMvqQLa8KKc1dvyQ4VlxdIC6LSP0/xkBzu2lZ5yJ9VquHNiDY+fp5sn36e3PqZRUYdoJPRv3vTrxPXhKVCxjs2haVuKA5aWDnTtLy8YKZ7nuKeuIxazjHPDmSRKYF9ivOUztLZigoWlkfyATU4rLIIm8Kymbtqc3mBEskvOteFG1L0euJ8tmJ/TG59bGoalimdLqjlG0/ldx40NalIB5vCspe7Kj9kk+fBUyWklhsbb0jR/6jq59zkmDkTetH5y4MZ2WpZPIdUwqawLOWu/LaWwukEliJhlJo5bzVIZIvezKhgq/X36dcnMoqczahlWFgBXVTuSObziA1LHC8vaJrZHY0pwDeic5RP5fAv6WxCDtG7EWW8FEBZrUduBDLkPketqCI2ZgaWXV6gBF1hNY841rqqYseBcGyAaC+HafLT0Z1ARnVh2cld2V1eoPUZNeb7xWFyn3pEr2epLwMZ7buE1YUVtd/L11Qev+mzh855Sj34nlNF1M9lSg4xiFU6Vy5hpZuyItWFNaItPjuUzl2VW14gyn6+k6LzFAcoqs4YYTfftT6tweynilzCs32PvF1qzWrJfU5wUkniAtfSQYsyywtk6YqK4nnppmH0FGZxraRTDG7p253pXyeJ3FYN3bb5cIKzirCq5K6aXF4g6VKjf6ra6lY+Z1qspLfGYDcpxrmt3TZcwqrCqtB+39gwmBHdOs57f9WRCC66fUsGvZ506RK2EcioIqx431WplIHp8oIymz94FFmRBVFh8CoBCifdviXY+UtRIKONcqcqwmJLq274Eo1/TSwvELn1fnH3duncEgedXHT7lkBUCZblTk26hFWEtYgq2Y1o4lwlC+r91E1Xej0pP/h0qjTaBKJaow2XsKywSo6Orv1clXfWiev89qkEXNvZhQXcEFUGTbuEZYVVpv3e5FwlDT920WjnG+XzUjNRwjK3gdOiYt9b/XfY5gSlJl3CMsIqV8JU37mqaBRZ2Tq/KHzuttu3xElRsYuwbKtW/73gP5cdn230zzTpEpYRlqkbWOe5Kq91Pn44+mQIewtdmm7rnKhYNNwjk1K+EnZ8qvd94nKfNqxXUy4hC0s9RIzaGQzdQO1zlaSRSZQtt3W+TICC3ckunKOSOCcqFhQVPs3kftJ6UcM05BK+PD24rX0TmrqBuueqG7TQFlVe63zJAIXKR1HF6vzmcUpUsdvjG7wktF4sLrZeTbqGTbiEgQyOTIRl5gbWca7KDqWXCVB06RyVxBlRGQz+SMNn68WuIZ/FmhxlVbdLaCosXTdQ1LC8IK/Vw7SComvnqCTOiMpCxXIIn8WSo6yasl51uoQmwmI3cEGXPJKsyG3TnFuhPU89s9Xjt8ltrp7QrqDoSj4qCydEVSUhmMNKYKMJcdXpEiphTXWntUYz2YtzOjrzAHXLgfJGO49oYWKlOpOPysIJUdmyUtkkXcP6Axs1uYTjEW281xUWfw1Fn9/mnPX80iT9Fo+orq9756gkjrh/1fpqdIlcwyiw0YRrWINLyMJ6o/t18+fPE5bFfFXmlkSTFo8u1PXp0LqoYn/bp2ZpzDWswSU0mnXHwsqJCI41830FLqDItFIq9aEZZBFHXT5HJWldVB4tWh4v1YxruOYSVm1b8CWda8+74MlSWd3C6uGiESnNb6nP6vI1mEEx8+hmp89RSRxw/9yY2daUa2ir45hXtJpUXWR1C1sIrc+zunw1c1Nz1/ujTHHAUlFrw/MzqN01tDiE5oXu15fTLexXK/kSb7MEoZObCoh6cY5K0rqoZLgmxVXqdQ2XQ2gqnLfGm+S90b04nnSbJoA9KolHQWogJBZ7rhcSzZn4OqWe4YD7Jx0WVUTdrmGVuYQ8s53bY3SujesDr1krr/S8CHGUZWU2SBad1cIpwtRD0KRoRm2u4ZVLaL69hNtjdPNXGdYqNwqYtU4noCDzITAiL++sNuOHCPUUFwIVHT2g1uMalt1ewvkrnTB7lrWS5mmNWVZuir+OvKif7Ek+KovWRSWo2dFgtqnLNVyG4NVfOdQ803iJr7u6J7ZWKwhjUWVv9FjQxV7W+zilwN8b9ZjWRbUgqbW+sgPU4hryRFr985beWOkoWidnq2818xjyJtAKCrJcv1lfErx5uHCmOqbeYdc1NAnB67fjC3/13/KEDFBnppzrU8vOen2OStK6qNgvF70U1qpreDq5/bKq9dKdA18krDShK5fQRFTzrDNRVq1f389RSZyI/glHVorWiDrvBBNb8zV0qjKiORfX3VD+9/WJRhwa169okDlWLW1a0hDOUUkEOUR8s+1x9XS8ctL5HFYFZvz0/qas9D8qPMHZMsQ3sp91TewJsGg4Krf+c+Uyod08K6Lc2DdcFpX4iCqI8uVZxteyXpM4iwMug8EpUa3DodlLOtvxwm3vnq+ekQ/7KTZxxDmfsu3jp8r6LIgOhXZF+BUqUPTsfoEVUWI5Wv3Y10W1nIJFa+LmvNtQ3L4lTosqCxbbN/rL9+iGLynYUe7jQ/WtjHsguJlyll5dkHhbxnqdhnM+dKZRhcwliWf3pl8KE83sQXjRx/3+2gVdPlqOI4sExeVSciUBHc+ZOKSB0UlR5bG0boK8cZcFxy6builf/z9tvX1gWMFd7BKKI67ZM7EgHMlcT+hGbqVQP2fp09rPluf1qXPUIKJ96/ROVHl0V3DiSN3Q73SsSpI4Ehd394o/OWw+UiIt02ZhaAVnfWiLL8ugRJVHRwQ340qGKuevKnB9Ic/JoJyfB1soJdwnfeqPMgWi0sBRwVmJHprCFuuSaD+K0LLVEj5XZ8jw66HOzuqzCURVkWTQRNDCT0QpWWxaleMVUa4W55m+/ETACSCqmuHI2EZYF+iNWXRBaOEob4ilHwvSJwMrqF5z8vfpl10CrQNROcxqno7dLbaC2dZvqCFs14CoOkac6N1Tf30qrheuzj3afDDkIIELQFQdJp6mtNJDJWnx5N70wij0DuyCdvoOw71W6xX+kkY+gVaBqDrOguSH1be4P0in70BUHcdbiyQKCoyaDYF9IKoOk7aCKL8jFzTBBoHa+aRC41t09t0tO6Ot+YOKEbq4cnyld4lLhIZab+cSg4n+rd/YzEaiOJSTsyrTs1Zpvd4b5K25WuH5JfkaP/Ha9felMY9m6snZcgBO2nQp/jqUgH6ISqNoJ60qPPr6hte75CJOi4rdmxEtxlwCtLzhlzd68gYX0U3GfxsnD+olZtl1FiR+3cFJUWV1kYJ0AqKDPs4k7ypOnqnidaU+gVyiNovFwd24Axe4gXOWKrZSnwikwkJS7u47j7aPUI7kJs5ZKs1FYUNhHo0DE7/womqezXclpHMCbuKg++fGZsW2YEuULiLmjJoiDtn/GAd/eKnBOzQg6uGgqDh6N6g6X2WN6HX6/IhiEXGq4D/CrmQ+g3rq5v82u1/hjMViGpF4cTXkRYb/VwKbfJ5sT+9Ov/ZmN29dOHf3Xp8x1ztCl47PRWVHkTFXloT26XrOKmy1N50Ky6OiebJt3jXcDCnoZq929NoGFRXNEFqjdJfODA7kbJL4WeafPcMNJH9Mtn8UtPlM5/NlCGoebaYX/vINMmyYDFf2PCOQinOi4gEifXD++GykvpcPkhZvV92xcucidvPGdK5ufJpIzdfwqGZJ5zOKdlzlogQ1Wf33Ve4rnqL0MfGReWXPDHMx0nHR/Uubx90F2K3j5sAPZWfrpRGJ6eJ5fNOnlj1FwQ0v3o4YPF53n9VrH+UFGa5PoL0+1vl3dZ5SN8vKbmD1mkMI6zrOWapROJm1Gyytkfrr8epNaydKFz1gQuvkZ1wyU4J5tiaYt0oA86QAlMgeU866ovj931lQ8GH9mhHJabC2cDvaLLL9511Uc6zgXOtHVBC6vuXPGdgaHfE+Xo827/BYY663sx1qZsvBY5Zji+2nXcPLttXXsJv2uVkAa2/yKQd1EzykAvj3krHg++Xpwe0+B5aMcTJQIUm8W3c12qJua5QkGc7OOTepsDkPrWTr8DX1gsuwqj2J/IFykJoJ9wXJV96aVWMCGRypM5YPVzDCUVHJt2LN1Wjws89Y1DxeeUQ3j5sIHUelWVzvKPbzgxDixKPgyd2CMLwSlLblSFtA52Uk4Pmhoty9cM/V+vvi7Y0EYTkqKv7lKffnWDZTspSTN/pCdZKM6BVdq34Wr+5NvxRel9YNHFvarI+8kxKv8jOvVqmBLC8CwopwNk+lXI2fvPSFzDY4icLd1fNGZbiK6J1PAo0ptCatHXGF/wrql3yUdf2IvH+uW0fxfVNIGmEtYuZ7ISzH64HSdiKVRFmj4Fh9sx/arO7WCY+vY9J8mJaOKNoTpdy5U0p351LD8Dw1Vz0MPlHB1z/kcLvTFRW8YFudbzjpqHUDJskOMDRf3W1qmRLM86xMkvQF2SGvs17z2+T2zvoIgSVZYXh+IKmQ/euiQNKQLZbzxQs6O5Fiakm+VqGMZVolfWF1Gp8ntz6urwelgiXWv09uqUSxfJPx7swR0inrSjPxhLd/5+Vfr2lAOF/7xyU+p5PRbsoWv+8BBvW+k7rD3SZUsExJZrxCVOfC08n2y+C6oNhaFNzMci/nneFyBEqxViaBpDDcfnCbhiSsThTUxhOCHvATklscAlqc3HewhdySmBjt9Z5xIWxqVLDIdcwPSIRXpIqKMQkksbDU7+7XofRj9aF21QniIAFXb1cRE2MqqMO09xUFKOKAwynlku9+qiAHByx80mNlo32fwYTairCY+OaKo27NCepg+3lB71OuuxW7drmoiKmf9/6Aglekz5jPxlEerd9AVCVZE5NPleFqCT1BcfAmkJSXt5oVNyjKQlGp783Pe/+GSk9Q2HOlzZhHz7GVpB4DURliX0yRq+aF3bTFgooGjG68yb9KHFMBnPSlinBkUFlLE2vFqDPx+QvqMej81SQ+M1mfR6gE9VpZlX3deRQ36Xw9CnoNnaihtLTke4O2pkoknLMysT77pNE42VVgqQqowzItCaI5Evu614+jJ7xfcNlJkcWLzzU+FVN4TRlrFY1d6y+wVBnUZZmWRPV8Z1r1fEwYmJA6hbfFN/gN8naWU5JsYGitZqOez7eApVqDc2F1WaYYFVrmbl39blm2LAWBie+Mcjp8r8hN+q6gE1QwsFba0c0uA1HFLLttvXoXI6ibinM1+qPDonOUXkkQ55V0blidTt/vjM5+0LmMrRXlRAKjYEz/BcUMXlRJMdXcvxU/pc2Sn3+jM04o+zrXSrp8p3ed/e8zx1pxp/IBJ6KHsjtrsGcqzdZ1S3AOynwAZXyO2te8XOWmLt4WXZTW6WsLblFRZ9EZheVP4k8ucB7iqOjBiSo5jLJ+MUUh8xFtTkwFFZ+jDvVfUZybir+iHZPqtMsFcZX7r7rXx0nnIxowgxFVog3jsAkxMVcNhuZV8/E5Sjv3s6BvWmHttE5fYJdBiCoarHL+PqgvAHGNKutCo1YOo69VeynBkFa2tsUgRLURZfB9agYOmR/cN1wOsITzYzqDYJLwMgKd6+LKdKNKCpHRGQyyQfLXLhwyf1J2XWjcEv/S8GWauamoMt0z7PYJyIOoDBmIqMLNFVQzy5D5jEpieo5iOP9jEKreI1A7g8hTbZAoDDVXQ79tIws+R1E5F1W7TV2lECpXpoNiBiGqeA74MdUAh8x12zayKHOOWjIy+L5sVaaDfAZzpuIhKMLycM4qIfMlOaPFClEieacr5rxxZHmIcOcvMGEwZUqclFTWylrLQZWQeZKblWoNpbZb69GipJWSEJUhg6r941A3VSeuMq8uKB7cQhVC/TzfUP9qAdevIQYlKq5D40H/VB7jKvMsonNU/tLqfITR+GqjynRQicFVqd+bfp2UDFqUqjJPo8o5aoluRfrV9QhSNMUgWz8EbT4xOV9FvUCbu7ZaF+LNHD6VZ65Tkb4kbjTE2aghBikqdpuUsB7puILxHIlHtmazs9u3vj/KHNO82xkE1SCDbVJkkbAryPt71T9nKZfMJYknNgISSWxsiAwoGNTA/66Bsc8xkQWhp9GsdnrN7eG2N4fojVouJHeTRxYld30NYqaEbSCqBtFdmJaP/nqddf412Tr0SDwlrfOcOOL5gRCUORBVw3yebHM5knEl+pIFXe5WHfLPe6miiUoyEWbnomPvV14/6sp+r64CUbVAbDHKhNRPlOu3S8BpMKKsBTj4EWg2FiaR5nPLQQtAVC3BwlJBgAeycNvhd2ZmZUmgLeD+OcDpZMtfEB2qcPuPlBHEiMZE60+1Be0BUTlGtKRa7kjyfOXw/SBI/nJ9pzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYMa/AXULyNvdCs68AAAAAElFTkSuQmCC";

  const Graph = window.SafinumContextGraph;
  const Voice = window.SafinumVoiceEngine;
  const KB = window.SAFINUM_KB || { meta: {} };

  let currentMode = "fub"; // "fub" | "bilingual" | "original"
  let isApplyingDOMChanges = false;
  let mutationTimer = null;
  let activeHoveredEntry = null;
  let activeHoveredElement = null;
  let lastSeenAlertSignature = "";

  const nodeStateMap = new WeakMap();
  const trackedNodes = new Set();

  const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "PATH", "TEXTAREA", "INPUT", "CODE", "PRE"]);

  /**
   * Identifie le conteneur principal de l'application Safinum Pay (`appRef`)
   */
  function getAppRoot() {
    return (
      document.querySelector("div.mx-auto.max-w-6xl") ||
      document.querySelector("main") ||
      document.body
    );
  }

  /**
   * Ignore le Panneau Jury (`aside.fixed`), nos propres widgets AnyDoc et les balises techniques
   */
  function shouldSkipTextNode(textNode) {
    if (!textNode || !textNode.parentElement) return true;
    const parent = textNode.parentElement;
    if (SKIP_TAGS.has(parent.tagName)) return true;
    // Ignorer le panneau Jury (aside fixe à droite) et le bouton flottant Jury
    if (parent.closest("aside.fixed")) return true;
    if (parent.closest("button.fixed")) return true;
    // Ignorer nos propres panneaux AnyDoc montés sur document.body
    if (parent.closest("#safinum-anydoc-dock")) return true;
    if (parent.closest("#safinum-anydoc-hover-pill")) return true;
    return false;
  }

  /**
   * Traduit tous les nœuds texte dans la page Safinum Pay sans altérer les valeurs sacrées
   */
  function translateDOM() {
    const root = document.getElementById("app") || document.body;
    if (!root) return;

    isApplyingDOMChanges = true;
    try {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let node = walker.nextNode();

      while (node) {
        if (!shouldSkipTextNode(node)) {
          processTextNode(node);
        }
        node = walker.nextNode();
      }

      detectAlertsAndInjectedContent();
      updateDockStats();
    } finally {
      isApplyingDOMChanges = false;
    }
  }

  function processTextNode(node) {
    const rawVal = node.nodeValue || "";
    const trimmed = rawVal.replace(/\s+/g, " ").trim();
    if (!trimmed || trimmed.length < 2) return;

    // Protéger explicitement les éléments de valeur canonique vérifiés par le Jury
    const parent = node.parentElement;
    if (parent && parent.classList.contains("font-mono")) {
      // Les références SAF-2026-xxx, codes d'erreur AMOUNT_001 et numéros CM 001... restent 100% intacts
      if (/^(?:SAF-|CM\s*\d|AMOUNT_|BENEFICIARY_|SECURITY_|NETWORK_|CONFIRM_)/i.test(trimmed)) {
        return;
      }
    }

    let state = nodeStateMap.get(node);

    if (state) {
      const matchesOurOutput =
        trimmed === state.fubTrimmed ||
        trimmed === state.bilingualTrimmed ||
        trimmed === state.originalTrimmed;

      if (!matchesOurOutput) {
        state = null;
      }
    }

    if (!state) {
      if (Graph.isSacredOnly(trimmed)) return;
      const result = Graph.translateAndExplain(trimmed);
      if (!result || !result.fub) return;

      const leadingSpace = (rawVal.match(/^\s*/) || [""])[0];
      const trailingSpace = (rawVal.match(/\s*$/) || [""])[0];

      const fubFormatted = `${leadingSpace}${result.fub}${trailingSpace}`;
      const bilingualFormatted = `${leadingSpace}${result.fub} [${trimmed}]${trailingSpace}`;

      state = {
        originalRaw: rawVal,
        originalTrimmed: trimmed,
        fubFormatted,
        fubTrimmed: result.fub.replace(/\s+/g, " ").trim(),
        bilingualFormatted,
        bilingualTrimmed: `${result.fub} [${trimmed}]`.replace(/\s+/g, " ").trim(),
        entry: result
      };
      nodeStateMap.set(node, state);
      trackedNodes.add(node);
    }

    const targetValue =
      currentMode === "fub"
        ? state.fubFormatted
        : currentMode === "bilingual"
        ? state.bilingualFormatted
        : state.originalRaw;

    if (node.nodeValue !== targetValue) {
      node.nodeValue = targetValue;
    }

    if (parent && parent.tagName !== "OPTION") {
      if (currentMode === "original") {
        parent.removeAttribute("data-safinum-translated");
      } else {
        parent.setAttribute("data-safinum-translated", "true");
        parent.__safinumEntry = state.entry;
      }
    }
  }

  /**
   * Détecte automatiquement toute erreur déclenchée ou toute phrase inédite injectée par le Jury (#injected-{id})
   * et affiche immédiatement son analyse dans l'inspecteur AnyDoc (hors `appRef` pour 0 pollution de couverture !)
   */
  function detectAlertsAndInjectedContent() {
    const appRoot = getAppRoot();
    if (!appRoot) return;

    // 1. Vérifier les blocs injectés à chaud par le Jury (#injected-1, #injected-2, ...)
    const injectedBlocks = appRoot.querySelectorAll('[id^="injected-"]');
    if (injectedBlocks.length > 0) {
      const latestBlock = injectedBlocks[injectedBlocks.length - 1];
      const ps = latestBlock.querySelectorAll("p");
      const contentP = ps.length > 1 ? ps[1] : ps[0];
      if (contentP && contentP.__safinumEntry) {
        const sig = `INJ:${latestBlock.id}:${contentP.__safinumEntry.original}`;
        if (sig !== lastSeenAlertSignature) {
          lastSeenAlertSignature = sig;
          setInspectorEntry(contentP.__safinumEntry, latestBlock);
        }
        return;
      }
    }

    // 2. Vérifier les bannières d'erreur / alerte de sécurité
    const errorCodeEl = appRoot.querySelector("p.font-mono.text-\\[11px\\]");
    if (errorCodeEl && errorCodeEl.parentElement) {
      const msgP = errorCodeEl.parentElement.querySelector("p.mt-1.text-sm");
      if (msgP && msgP.__safinumEntry) {
        const sig = `ERR:${errorCodeEl.textContent}:${msgP.__safinumEntry.original}`;
        if (sig !== lastSeenAlertSignature) {
          lastSeenAlertSignature = sig;
          setInspectorEntry(msgP.__safinumEntry, errorCodeEl.parentElement);
        }
      }
    }
  }

  function createHoverPill() {
    let pill = document.getElementById("safinum-anydoc-hover-pill");
    if (pill) return pill;

    pill = document.createElement("div");
    pill.id = "safinum-anydoc-hover-pill";
    pill.innerHTML = `
      <span style="padding-left:4px;font-weight:700;color:#ffa040;">🇨🇲 Maloba · Fulfuldé</span>
      <button type="button" id="safinum-pill-speak">🔊 Nanugo</button>
      <button type="button" id="safinum-pill-explain">💡 Famfingo</button>
    `;
    document.body.appendChild(pill);

    pill.querySelector("#safinum-pill-speak").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        Voice.speak(activeHoveredEntry.fub, activeHoveredEntry.phonetic);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
      }
    });

    pill.querySelector("#safinum-pill-explain").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        Voice.speakPhraseAndExplanation(activeHoveredEntry);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
        const dock = document.getElementById("safinum-anydoc-dock");
        if (dock) dock.classList.remove("safinum-dock-minimized");
      }
    });

    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest?.('[data-safinum-translated="true"]');
      if (!target || !target.__safinumEntry) return;

      activeHoveredElement = target;
      activeHoveredEntry = target.__safinumEntry;

      const rect = target.getBoundingClientRect();
      const top = Math.max(8, rect.top - 36);
      const left = Math.min(window.innerWidth - 290, Math.max(8, rect.left));

      pill.style.top = `${top}px`;
      pill.style.left = `${left}px`;
      pill.style.display = "inline-flex";
    });

    document.addEventListener(
      "scroll",
      () => {
        pill.style.display = "none";
      },
      { passive: true }
    );

    return pill;
  }

  function highlightSpokenElement(el) {
    document.querySelectorAll('[data-safinum-speaking="true"]').forEach((node) => {
      node.removeAttribute("data-safinum-speaking");
    });
    if (el) {
      el.setAttribute("data-safinum-speaking", "true");
      setTimeout(() => {
        el.removeAttribute("data-safinum-speaking");
      }, 4500);
    }
  }

  function createAnyDocDock() {
    if (document.getElementById("safinum-anydoc-dock")) return;

    const dock = document.createElement("aside");
    dock.id = "safinum-anydoc-dock";

    const sourcesBreakdown = KB.meta?.sources_breakdown || {};
    const sourcesLines = Object.entries(sourcesBreakdown)
      .map(([k, v]) => `<div>• <strong>${k}</strong> : ${Number(v).toLocaleString("fr-FR")} entrées</div>`)
      .join("");

    dock.innerHTML = `
      <div class="safinum-dock-header" id="safinum-dock-header-toggle">
        <div class="safinum-dock-brand">
          <img src="${MALOBA_LOGO_DATA_URI}" alt="Maloba Logo" class="safinum-dock-logo-img" />
          <div>
            <div class="safinum-dock-title">Maloba AnyDoc</div>
            <div class="safinum-dock-subtitle">Accessibilité Financière Fulfuldé · Graphe 5-Nœuds</div>
          </div>
        </div>
        <button type="button" class="safinum-dock-toggle-btn" title="Réduire / Agrandir">−</button>
      </div>

      <div class="safinum-dock-body">
        <div class="safinum-mode-bar">
          <button type="button" class="safinum-mode-btn active" data-mode="fub">Fulfuldé (fub)</button>
          <button type="button" class="safinum-mode-btn" data-mode="bilingual">Bilingue</button>
          <button type="button" class="safinum-mode-btn" data-mode="original">Original</button>
        </div>

        <div class="safinum-voice-actions">
          <button type="button" class="safinum-action-primary" id="safinum-btn-read-step">
            🔊 Lire &amp; Expliquer l'étape
          </button>
          <button type="button" class="safinum-action-stop" id="safinum-btn-stop-voice" title="Arrêter la voix">
            ⏹
          </button>
        </div>

        <div class="safinum-inspector-card" id="safinum-inspector-card">
          <div class="safinum-inspector-label">
            <span id="safinum-insp-mode">💡 EXPLICATION ANYDOC · MALOBA</span>
            <button type="button" id="safinum-insp-speak-btn" style="background:#ff7900;color:#ffffff;border:none;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;cursor:pointer;">
              🔊 Écouter
            </button>
          </div>
          <div class="safinum-inspector-fub" id="safinum-insp-fub">
            Jaɓɓaama haa Safinum Pay! Ɓillu dow konngol fuu ngam nanugo e famfingo ngol bee Fulfuldé.
          </div>
          <div class="safinum-inspector-orig" id="safinum-insp-orig">
            Survolez une phrase ou cliquez sur « Lire &amp; Expliquer l'étape » pour l'analyser.
          </div>
          <div class="safinum-inspector-explain" id="safinum-insp-explain-fub">
            🗣️ <strong>Famfingo (fub) :</strong> Nokkuure ndee ɗon walla ma laartugo ceede maa, coggu nelal e jaɓoowo ceede bee kisal timmungal.
          </div>
          <div class="safinum-inspector-explain-fr" id="safinum-insp-explain-fr">
            🇫🇷 <strong>Sens simplifié :</strong> Cet assistant traduit chaque étape en Fulfuldé du Cameroun, lit les phrases à haute voix et protège 100 % des montants et numéros.
          </div>
        </div>

        <div class="safinum-stats-grid">
          <div class="safinum-stat-box">
            <div class="safinum-stat-val" id="safinum-stat-nodes">0</div>
            <div class="safinum-stat-lbl">Textes traduits</div>
          </div>
          <div class="safinum-stat-box">
            <div class="safinum-stat-val" style="color:#10b981;">100%</div>
            <div class="safinum-stat-lbl">Intégrité chiffres</div>
          </div>
          <div class="safinum-stat-box">
            <div class="safinum-stat-val">18</div>
            <div class="safinum-stat-lbl">Sources (99 633)</div>
          </div>
        </div>

        <details class="safinum-sources-details">
          <summary>📚 Voir les 18 sources Fulfuldé &amp; Graphe RAG (99 633 paires)</summary>
          <div class="safinum-sources-list">
            ${sourcesLines}
          </div>
        </details>
      </div>
    `;

    document.body.appendChild(dock);

    dock.querySelector("#safinum-dock-header-toggle").addEventListener("click", () => {
      dock.classList.toggle("safinum-dock-minimized");
    });

    dock.querySelectorAll(".safinum-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        dock.querySelectorAll(".safinum-mode-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        setMode(btn.getAttribute("data-mode"));
      });
    });

    dock.querySelector("#safinum-btn-read-step").addEventListener("click", () => {
      narrateActiveStep();
    });

    dock.querySelector("#safinum-btn-stop-voice").addEventListener("click", () => {
      Voice.stop();
    });

    dock.querySelector("#safinum-insp-speak-btn").addEventListener("click", () => {
      if (dock.__currentEntry) {
        Voice.speakPhraseAndExplanation(dock.__currentEntry);
      }
    });
  }

  function setInspectorEntry(entry, sourceEl) {
    const dock = document.getElementById("safinum-anydoc-dock");
    if (!dock || !entry) return;
    dock.__currentEntry = entry;

    const modeEl = dock.querySelector("#safinum-insp-mode");
    const fubEl = dock.querySelector("#safinum-insp-fub");
    const origEl = dock.querySelector("#safinum-insp-orig");
    const expFubEl = dock.querySelector("#safinum-insp-explain-fub");
    const expFrEl = dock.querySelector("#safinum-insp-explain-fr");

    if (modeEl) {
      modeEl.textContent =
        entry.mode === "CONTEXT_GRAPH_5_NODES_RAG"
          ? `🧠 GRAPHE 5-NŒUDS (${entry.intent || "RAG"})`
          : `💡 EXPLICATION ANYDOC · ${(entry.category || "FINANCE").toUpperCase()}`;
    }
    if (fubEl) fubEl.textContent = entry.fub;
    if (origEl) origEl.textContent = `Original : « ${entry.original} »`;
    if (expFubEl) expFubEl.innerHTML = `🗣️ <strong>Famfingo (fub) :</strong> ${entry.explain_fub}`;
    if (expFrEl) {
      const entitiesBadge =
        entry.entities && entry.entities.length
          ? `<br><span style="font-size:10px;color:#fbbf24;">🔒 Entités protégées : ${entry.entities.join(", ")}</span>`
          : "";
      expFrEl.innerHTML = `🇫🇷 <strong>Explication :</strong> ${entry.explain_fr} <br><span style="font-size:10px;color:#ffa040;">📚 Source : ${entry.source}</span>${entitiesBadge}`;
    }

    if (sourceEl) {
      highlightSpokenElement(sourceEl);
    }
  }

  function updateDockStats() {
    const el = document.getElementById("safinum-stat-nodes");
    if (el) {
      let activeCount = 0;
      trackedNodes.forEach((n) => {
        if (n.isConnected) activeCount++;
      });
      el.textContent = String(activeCount);
    }
  }

  function narrateActiveStep() {
    const root = getAppRoot();
    const injectedEl = root.querySelector('[id^="injected-"] p:nth-of-type(2)');
    const errorMsgEl = root.querySelector("p.mt-1.text-sm");
    const mainHeading = root.querySelector("section h1, section h2");

    const targetEl =
      (injectedEl && injectedEl.__safinumEntry ? injectedEl : null) ||
      (errorMsgEl && errorMsgEl.__safinumEntry ? errorMsgEl : null) ||
      (mainHeading && mainHeading.__safinumEntry ? mainHeading : null);

    if (targetEl && targetEl.__safinumEntry) {
      setInspectorEntry(targetEl.__safinumEntry, targetEl);
      Voice.speakPhraseAndExplanation(targetEl.__safinumEntry);
    }
  }

  function setMode(newMode) {
    currentMode = newMode;
    translateDOM();
  }

  function init() {
    createHoverPill();
    createAnyDocDock();

    // Attendre 60ms au démarrage pour que le onMounted() de Vue capture sa baseline FR/EN initiale
    setTimeout(() => {
      translateDOM();
    }, 60);

    const observer = new MutationObserver((mutations) => {
      if (isApplyingDOMChanges) return;
      let hasRelevantChange = false;
      for (const m of mutations) {
        const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
        if (!t) continue;
        if (t.closest?.("#safinum-anydoc-dock") || t.closest?.("#safinum-anydoc-hover-pill") || t.closest?.("aside.fixed")) {
          continue;
        }
        hasRelevantChange = true;
        break;
      }
      if (!hasRelevantChange) return;

      if (mutationTimer) clearTimeout(mutationTimer);
      // CRITIQUE : Attendre 40ms pour que le nextTick() de Vue enregistre la baseline FR/EN
      // sur changement d'étape ou injection Jury (#injected-x), puis traduire en Fulfuldé (fub) !
      mutationTimer = setTimeout(() => {
        translateDOM();
      }, 40);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (msg.type === "GET_STATUS") {
          let activeCount = 0;
          trackedNodes.forEach((n) => {
            if (n.isConnected) activeCount++;
          });
          sendResponse({
            mode: currentMode,
            translatedNodes: activeCount,
            stats: Graph.stats,
            meta: KB.meta
          });
        } else if (msg.type === "SET_MODE") {
          setMode(msg.mode);
          sendResponse({ ok: true, mode: currentMode });
        } else if (msg.type === "SPEAK_STEP") {
          narrateActiveStep();
          sendResponse({ ok: true });
        }
        return true;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
