    function openTab(index) {
      document.querySelectorAll(".tab").forEach((t,i)=> {
        t.classList.toggle("active", i === index);
      });
      document.querySelectorAll(".content").forEach((c,i)=> {
        c.classList.toggle("active", i === index);
      });
    }
