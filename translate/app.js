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
  try {
    const sourceLanguage = document.getElementById("source-language").value;
    const targetLanguage = document.getElementById("target-language").value;
    const inputValue = document.getElementById("orginalLang").value;
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${inputValue}&langpair=${sourceLanguage}|${targetLanguage}`
    );

    const data = await response.json();
    document.getElementById("translate-lang").innerText = data.responseData.translatedText;
  } catch (error) {
    console.error("Tarjima qilinmadi:", error.message);
    document.getElementById("translate-lang").innerText =
      "Tarjima muvaffaqiyatsiz.";
  }
};

document.getElementById("reaply").addEventListener("click", translate);
