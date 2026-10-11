const form = document.getElementById("guideForm");
const need = document.getElementById("need");
const result = document.getElementById("result");
const emptyState = document.getElementById("emptyState");


// Example buttons fill the text area
document.querySelectorAll(".example").forEach(button => {
    button.addEventListener("click", () => {
        need.value = button.dataset.value;
        need.focus();
    });
});


// Generate the suggested guidance
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = need.value.trim().toLowerCase();

    if (!query) {
        return;
    }

    let title;
    let description;
    let checklist;

    if (
        query.includes("income") ||
        query.includes("salary") ||
        query.includes("earning") ||
        query.includes("financial") ||
        query.includes("scholarship")
    ) {
        title = "Income Certificate";

        description =
            "An income certificate may be relevant when an institution or scheme asks for proof of income. Confirm the exact certificate needed for your purpose.";

        checklist = [
            "Confirm the exact certificate name and purpose.",
            "Check eligibility with the relevant official government source.",
            "Verify which identity, address, and income documents are accepted.",
            "Check the official application process and any applicable fees.",
            "Keep copies of your documents and application acknowledgement."
        ];
    }

    else if (
        query.includes("residen") ||
        query.includes("domicile") ||
        query.includes("address") ||
        query.includes("college") ||
        query.includes("proof of living")
    ) {
        title = "Residence / Domicile Proof";

        description =
            "A residence certificate, domicile certificate, or another address proof may be relevant. The correct document depends on the purpose and the institution's requirements.";

        checklist = [
            "Ask the requesting institution which exact document it accepts.",
            "Check whether it requires residence proof, a domicile certificate, or another document.",
            "Verify eligibility and accepted supporting documents with an official source.",
            "Confirm where to apply, the process, and any applicable fees.",
            "Keep copies of submitted documents and the acknowledgement."
        ];
    }

    else {
        title = "Identify the Right Service";

        description =
            "Your request may relate to different services. First, confirm the exact certificate or proof required by the organisation asking for it.";

        checklist = [
            "Write down why you need the certificate or proof.",
            "Ask the requesting organisation for the exact document name.",
            "Check eligibility and requirements through an official source.",
            "Confirm the application method, fees, and expected processing time.",
            "Keep the official instructions for reference."
        ];
    }

    // Build the result using DOM elements
    result.replaceChildren();

    const tag = document.createElement("span");
    tag.className = "result-tag";
    tag.textContent = "SUGGESTED STARTING POINT · DEMO";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const intro = document.createElement("p");
    intro.textContent = description;

    const checklistHeading = document.createElement("h4");
    checklistHeading.textContent = "Preparation checklist";
    checklistHeading.style.marginTop = "18px";

    const list = document.createElement("ul");
    list.className = "checklist";

    checklist.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    const note = document.createElement("p");
    note.className = "result-note";
    note.textContent =
        "Important: This prototype uses sample, rule-based guidance. It does not access live government data or submit applications. Requirements can change, so verify all details with an official source.";

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "primary-button";
    resetButton.textContent = "← Try another request";

    resetButton.addEventListener("click", () => {
        need.value = "";
        result.classList.add("hidden");
        emptyState.classList.remove("hidden");
        need.focus();
    });

    result.append(
        tag,
        heading,
        intro,
        checklistHeading,
        list,
        note,
        resetButton
    );

    emptyState.classList.add("hidden");
    result.classList.remove("hidden");
});