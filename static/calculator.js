function calculateRisk() {
    const severity = parseInt(document.getElementById("severity").value);
    const likelihood = parseInt(document.getElementById("likelihood").value);
    const exposure = parseInt(document.getElementById("exposure").value);

    const riskScore = severity * likelihood * exposure;

    let riskLevel = "";
    let recommendation = "";

    if (riskScore <= 10) {
        riskLevel = "Low Risk";
        recommendation = "No immediate action required. Monitor periodically.";
    } else if (riskScore > 10 && riskScore <= 20) {
        riskLevel = "Medium Risk";
        recommendation = "Consider implementing preventive measures.";
    } else if (riskScore > 20 && riskScore <= 30) {
        riskLevel = "High Risk";
        recommendation = "Immediate corrective action needed.";
    } else {
        riskLevel = "Critical Risk";
        recommendation = "Take urgent action and review safety protocols.";
    }

    document.getElementById("risk-score").textContent = riskScore;
    document.getElementById("risk-level").textContent = riskLevel;
    document.getElementById("risk-recommendation").textContent = recommendation;
}

function clearForm() {
    document.getElementById("severity").value = "1";
    document.getElementById("likelihood").value = "1";
    document.getElementById("exposure").value = "1";

    document.getElementById("risk-score").textContent = "--";
    document.getElementById("risk-level").textContent = "--";
    document.getElementById("risk-recommendation").textContent = "Select values above and calculate to see recommendations based on the risk level.";
}

document.getElementById("calculate-btn").addEventListener("click", calculateRisk);
document.getElementById("clear-btn").addEventListener("click", clearForm);
