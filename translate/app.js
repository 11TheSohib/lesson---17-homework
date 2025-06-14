const updateReapy = () => {
  const updateBtn = document.getElementById("update");
  const sourceLanguage = document.getElementById("source-language");
  const targetLanguage = document.getElementById("target-language");
  const originalTextArea = document.getElementById("orginalLang");
  const translatedText = document.getElementById("translate-lang");

  updateBtn.addEventListener("click", function () {
    const sourceValue = sourceLanguage.value;
    const targetValue = targetLanguage.value;
    const originalText = originalTextArea.value;
    const translatedTextContent =
      translatedText.textContent || translatedText.innerText;

    sourceLanguage.value = targetValue;
    targetLanguage.value = sourceValue;

    originalTextArea.value = translatedTextContent;
    translatedText.textContent = originalText;

    updateBtn.style.transform = "rotate(180deg)";
    setTimeout(() => {
      updateBtn.style.transform = "rotate(0deg)";
    }, 300);
  });

  updateBtn.style.transition = "transform 0.3s ease";
};

updateReapy();

const translate = async () => {
  const sourceLanguage = document.getElementById("source-language");
  const targetLanguage = document.getElementById("target-language");
  const inputValue = document.getElementById("orginalLang");

  const translateWord = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: "Hello, how are you?",
      source: "en",
      target: "uz",
      format: "text",
    }),
  });
  console.log(translateWord);
};
document.getElementById("reaply").addEventListener("click", () => translate());
