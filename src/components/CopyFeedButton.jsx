"use client";

export default function CopyFeedButton({ url, label, copiedLabel }) {
  const handleCopy = (e) => {
    const btn = e.currentTarget; // ✅ sync mein hi capture — async hone se pehle

    navigator.clipboard.writeText(url).then(() => {
      btn.innerText = copiedLabel;
      btn.classList.remove("bg-gray-100", "dark:bg-gray-800", "text-gray-700", "dark:text-gray-300");
      btn.classList.add("bg-green-600", "text-white");
      setTimeout(() => {
        btn.innerText = label;
        btn.classList.remove("bg-green-600", "text-white");
        btn.classList.add("bg-gray-100", "dark:bg-gray-800", "text-gray-700", "dark:text-gray-300");
      }, 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-btn px-3 py-1.5 text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white transition-all font-sans"
    >
      {label}
    </button>
  );
}