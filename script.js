
    document.getElementById("button").addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const year = document.getElementById("year").value.trim();
      let url = "https://localhost:8080/";

      const params = new URLSearchParams();

      if (name !== "") params.append("name", name);
      if (year !== "") params.append("year", year);

      if ([...params].length > 0) {
        url += "?" + params.toString();
      }

      document.getElementById("url").textContent = url;
    });
 