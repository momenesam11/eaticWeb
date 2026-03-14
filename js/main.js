function increaseBranches() {
    const input = document.getElementById("branches");

    // لو فاضي نبدأ من 0
    const value = input.value === "" ? 0 : Number(input.value);

    input.value = value + 1;
  }

  function decreaseBranches() {
    const input = document.getElementById("branches");

    const value = input.value === "" ? 0 : Number(input.value);

    if (value > 1) {
      input.value = value - 1;
    } else {
      // لما نوصل للصفر نخليه فاضي
      input.value = "";
    }
  }