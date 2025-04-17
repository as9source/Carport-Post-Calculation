
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(loadSheet);

function loadSheet() {
  const query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/18YaM8kolenL2qpViiijBZ2sbsyLnI5IEuHh6u7_2wfQ/gviz/tq?sheet=Sheet1'
  );
  query.send(function(response) {
    const data = response.getDataTable();
    const rows = data.getNumberOfRows();
    const fullData = [];

    for (let i = 0; i < rows; i++) {
      fullData.push({
        type: data.getValue(i, 0),
        size: data.getValue(i, 1),
        postCount: data.getValue(i, 2),
        l1: data.getValue(i, 3),
        l2: data.getValue(i, 4),
        l3: data.getValue(i, 5)
      });
    }

    const typeSelector = document.getElementById("typeSelector");
    const sizeSelector = document.getElementById("sizeSelector");
    const postCountSelector = document.getElementById("postCount");

    typeSelector.innerHTML = '<option value="">--選択--</option>';
    [...new Set(fullData.map(d => d.type))].forEach(type => {
      const opt = document.createElement("option");
      opt.value = type;
      opt.textContent = type;
      typeSelector.appendChild(opt);
    });

    typeSelector.addEventListener("change", () => {
      sizeSelector.innerHTML = '<option value="">--選択--</option>';
      postCountSelector.innerHTML = '<option value="">--選択--</option>';
      clearLValues();

      const selectedType = typeSelector.value;
      const sizes = [
        ...new Set(fullData.filter(d => d.type === selectedType).map(d => d.size))
      ];
      sizes.forEach(size => {
        const opt = document.createElement("option");
        opt.value = size;
        opt.textContent = size;
        sizeSelector.appendChild(opt);
      });
    });

    sizeSelector.addEventListener("change", () => {
      postCountSelector.innerHTML = '<option value="">--選択--</option>';
      clearLValues();

      const selectedType = typeSelector.value;
      const selectedSize = sizeSelector.value;

      const counts = fullData
        .filter(d => d.type === selectedType && d.size === selectedSize)
        .map(d => d.postCount);

      [...new Set(counts)].forEach(count => {
        const opt = document.createElement("option");
        opt.value = count;
        opt.textContent = `${count}本`;
        postCountSelector.appendChild(opt);
      });
    });

    postCountSelector.addEventListener("change", () => {
      clearLValues();
      const selectedType = typeSelector.value;
      const selectedSize = sizeSelector.value;
      const selectedCount = parseInt(postCountSelector.value);

      const match = fullData.find(d =>
        d.type === selectedType &&
        d.size === selectedSize &&
        d.postCount === selectedCount
      );

      if (match) {
        document.getElementById("l1").value = match.l1;
        document.getElementById("l2").value = match.l2;
        document.getElementById("l3").value = match.l3;
      }
    });

    function clearLValues() {
      document.getElementById("l1").value = '';
      document.getElementById("l2").value = '';
      document.getElementById("l3").value = '';
    }
  });
}
