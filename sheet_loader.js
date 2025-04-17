
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(loadSheet);

function loadSheet() {
  const query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/18YaM8kolenL2qpViiijBZ2sbsyLnI5IEuHh6u7_2wfQ/gviz/tq?sheet=Sheet1'
  );
  query.send(function(response) {
    const data = response.getDataTable();
    const rows = data.getNumberOfRows();
    const productMap = {};

    for (let i = 0; i < rows; i++) {
      const type = data.getValue(i, 0);
      const size = data.getValue(i, 1);
      const count = data.getValue(i, 2);
      const l1 = data.getValue(i, 3);
      const l2 = data.getValue(i, 4);
      const l3 = data.getValue(i, 5);

      if (!productMap[type]) productMap[type] = {};
      productMap[type][size] = { postCount: count, l1, l2, l3 };
    }

    const typeSelector = document.getElementById("typeSelector");
    const sizeSelector = document.getElementById("sizeSelector");
    const postCountSelect = document.getElementById("postCount");

    typeSelector.innerHTML = '<option value="">--選択--</option>';
    for (let type in productMap) {
      const opt = document.createElement("option");
      opt.value = type;
      opt.textContent = type;
      typeSelector.appendChild(opt);
    }

    typeSelector.addEventListener("change", () => {
      sizeSelector.innerHTML = '<option value="">--選択--</option>';
      const selectedType = typeSelector.value;
      if (productMap[selectedType]) {
        for (let size in productMap[selectedType]) {
          const opt = document.createElement("option");
          opt.value = size;
          opt.textContent = size;
          sizeSelector.appendChild(opt);
        }
      }
    });

    sizeSelector.addEventListener("change", () => {
      const item = productMap[typeSelector.value][sizeSelector.value];
      if (item) {
        postCountSelect.value = item.postCount.toString();
        document.getElementById("l1").value = item.l1;
        document.getElementById("l2").value = item.l2;
        document.getElementById("l3").value = item.l3;
      }
    });
  });
}
