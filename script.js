  function saveStudent() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!name || !email) {
        alert("Please fill in both name and email.");
        return;
      }

      const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      const cellName = newRow.insertCell(0);
      const cellEmail = newRow.insertCell(1);
      const cellAction = newRow.insertCell(2);

      cellName.textContent = name;
      cellEmail.textContent = email;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "btn-delete";
      deleteBtn.onclick = function () {
        table.deleteRow(newRow.rowIndex - 1);
      };

      cellAction.appendChild(deleteBtn);

      // Add responsive data-labels
      cellName.setAttribute("data-label", "Name");
      cellEmail.setAttribute("data-label", "Email");
      cellAction.setAttribute("data-label", "Action");

      // Clear inputs
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    }