
document.addEventListener("DOMContentLoaded", function () {
  const tabAuto = document.getElementById("tabAuto");
  const tabManual = document.getElementById("tabManual");
  const autoSection = document.getElementById("autoSection");
  const manualSection = document.getElementById("manualSection");
  const postCountAuto = document.getElementById("postCount");
  const postCountManual = document.getElementById("manualPostCount");

  function switchTab(mode) {
    if (mode === "auto") {
      autoSection.style.display = "block";
      manualSection.style.display = "none";
      tabAuto.classList.add("active");
      tabManual.classList.remove("active");
    } else {
      autoSection.style.display = "none";
      manualSection.style.display = "block";
      tabAuto.classList.remove("active");
      tabManual.classList.add("active");
    }
  }

  tabAuto.addEventListener("click", () => switchTab("auto"));
  tabManual.addEventListener("click", () => switchTab("manual"));

  switchTab("auto");

  const calcBtn = document.getElementById("calcBtn");
  const resultDiv = document.getElementById("result");

  calcBtn.addEventListener("click", () => {
    const l1 = parseFloat(document.getElementById("l1").value) || 0;
    const l2 = parseFloat(document.getElementById("l2").value) || 0;
    const l3 = parseFloat(document.getElementById("l3").value) || 0;
    const newLength = parseFloat(document.getElementById("newLength").value) || 0;

    const isManual = manualSection.style.display !== "none";
    const postCount = parseInt(isManual ? postCountManual.value : postCountAuto.value) || 0;
    const l2Count = postCount - 1;
    const originalSum = l1 + l2 * l2Count + l3;

    if (originalSum === 0 || newLength === 0 || postCount < 2) {
      resultDiv.innerHTML = "<p style='color:red;'>すべての数値を正しく入力してください。</p>";
      return;
    }

    const ratio = newLength / originalSum;
    const resultL1 = Math.round(l1 * ratio);
    const resultL2 = Math.round(l2 * ratio);
    const resultL3 = Math.round(l3 * ratio);
    const calculatedSum = resultL1 + resultL2 * l2Count + resultL3;

    resultDiv.innerHTML = `
      <div><strong>元の全長：</strong>${originalSum} mm　※全長寸法確認</div>
      <div><strong>加工後の合計：</strong>${calculatedSum} mm　<small style="color:#666;">※全長の最小寸法は、都度確認してください。</small></div>
      <div style="margin-top:10px; padding:10px; border:1px solid #f33; border-radius:8px;">
        <strong>加工後のL1：</strong>${resultL1} mm<br>
        <strong>加工後のL2（×${l2Count}）：</strong>${resultL2} mm<br>
        <strong>加工後のL3：</strong>${resultL3} mm
      </div>`;
  });
});
