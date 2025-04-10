function saveInput() {
  localStorage.setItem("postCount", document.getElementById("postCount").value);
  localStorage.setItem("l1", document.getElementById("l1").value);
  localStorage.setItem("l2", document.getElementById("l2").value);
  localStorage.setItem("l3", document.getElementById("l3").value);
  localStorage.setItem("newLength", document.getElementById("newLength").value);
}

function loadInput() {
  if (localStorage.getItem("postCount")) {
    document.getElementById("postCount").value = localStorage.getItem("postCount");
    document.getElementById("l1").value = localStorage.getItem("l1");
    document.getElementById("l2").value = localStorage.getItem("l2");
    document.getElementById("l3").value = localStorage.getItem("l3");
    document.getElementById("newLength").value = localStorage.getItem("newLength");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadInput();
  ["postCount", "l1", "l2", "l3", "newLength"].forEach(id => {
    document.getElementById(id).addEventListener("input", saveInput);
  });

  document.getElementById("calcBtn").addEventListener("click", () => {
    const postCount = parseInt(document.getElementById("postCount").value);
    const l1 = parseFloat(document.getElementById("l1").value) || 0;
    const l2 = parseFloat(document.getElementById("l2").value) || 0;
    const l3 = parseFloat(document.getElementById("l3").value) || 0;
    const newLength = parseFloat(document.getElementById("newLength").value) || 0;

    const l2Count = postCount - 1;
    const originalSum = l1 + l2 * l2Count + l3;

    let result = '';

    if (originalSum === 0 || newLength === 0) {
      result = '入力が正しくありません。';
    } else {
      const ratio = newLength / originalSum;
      const rL1 = Math.round(l1 * ratio);
      const rL2 = Math.round(l2 * ratio);
      const rL3 = Math.round(l3 * ratio);
      const calculatedSum = rL1 + rL2 * l2Count + rL3;

      result = `
        元の全長：${originalSum.toFixed(0)} mm　※全長寸法確認<br>
        加工後の合計：${calculatedSum.toFixed(0)} mm<br>
        <br>
        加工後のL1：${rL1} mm<br>
        加工後のL2（×${l2Count}）：${rL2} mm<br>
        加工後のL3：${rL3} mm
      `;
    }

    document.getElementById("result").innerHTML = result;
  });
});
