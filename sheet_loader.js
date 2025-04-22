
document.addEventListener("DOMContentLoaded", () => {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSELz_euopq3_6I8IS5PXpcYnLMqJN5P0lk4kMSy0KeGZR0tfjuPoYGRSmFmJWc_t4gqy2wfYoL6Zys/pub?output=csv";
  const typeSelector = document.getElementById("typeSelector");
  const sizeSelector = document.getElementById("sizeSelector");
  const postCountSelector = document.getElementById("postCount");

  let sheetData = [];

  fetch(SHEET_URL)
    .then(res => res.text())
    .then(csv => {
      sheetData = csv.trim().split("\n").slice(1).map(row => {
        const [type, size, post, l1, l2, l3] = row.split(",");
        return {
          type: type.trim(), size: size.trim(), post: post.trim(),
          l1: parseFloat(l1), l2: parseFloat(l2), l3: parseFloat(l3)
        };
      });

      const types = [...new Set(sheetData.map(d => d.type))];
      typeSelector.innerHTML = '<option value="">-- 選択 --</option>' + types.map(t => `<option value="${t}">${t}</option>`).join("");
    });

  typeSelector.addEventListener("change", () => {
    const selectedType = typeSelector.value;
    const sizes = [...new Set(sheetData.filter(d => d.type === selectedType).map(d => d.size))];
    sizeSelector.innerHTML = '<option value="">-- 選択 --</option>' + sizes.map(s => `<option value="${s}">${s}</option>`).join("");
    postCountSelector.innerHTML = '<option value="">-- 選択 --</option>';
  });

  sizeSelector.addEventListener("change", () => {
    const selectedType = typeSelector.value;
    const selectedSize = sizeSelector.value;
    const posts = [...new Set(sheetData.filter(d => d.type === selectedType && d.size === selectedSize).map(d => d.post))];
    postCountSelector.innerHTML = '<option value="">-- 選択 --</option>' + posts.map(p => `<option value="${p}">${p}本</option>`).join("");
  });

  postCountSelector.addEventListener("change", () => {
    const selectedType = typeSelector.value;
    const selectedSize = sizeSelector.value;
    const selectedPost = postCountSelector.value;
    const entry = sheetData.find(d => d.type === selectedType && d.size === selectedSize && d.post === selectedPost);
    if (entry) {
      document.getElementById("l1").value = entry.l1 || "";
      document.getElementById("l2").value = entry.l2 || "";
      document.getElementById("l3").value = entry.l3 || "";
    }
  });
});
