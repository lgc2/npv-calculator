let numberOfInstallments
let installmentsValues = []
let installmentsPaymentDays = []
let monthlyIncome
let dailyIncome
let nvp

function netPresentValueCalculate() {
    nvp = 0
    dailyIncome = monthlyIncome / 30

    for (let i = 0; i < numberOfInstallments; i++) {
        let divisor = Math.pow(1 + dailyIncome, installmentsPaymentDays[i])
        nvp += ((installmentsValues[i] * 100) / divisor)
    }
    nvp = (Math.round(nvp) / 100).toFixed(2)

    return nvp
}

function resetVariablesValues() {
    numberOfInstallments = 0
    installmentsValues = []
    installmentsPaymentDays = []
    monthlyIncome = 0
    dailyIncome = 0
    nvp = 0
}