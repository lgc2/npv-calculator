document.addEventListener('DOMContentLoaded', function () {
    const numberOfInstallmentsInput = document.getElementById('numberOfInstallments')
    const installmentsContainer = document.getElementById('installmentsContainer')
    const calculateButton = document.getElementById('calculateButton')
    const resultElement = document.getElementById('result')

    numberOfInstallmentsInput.addEventListener('change', function () {
        updateInstallments()
    })

    calculateButton.addEventListener('click', function () {
        resetVariablesValues()

        monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value) / 100
        numberOfInstallments = parseInt(numberOfInstallmentsInput.value)

        document.querySelectorAll('.installment').forEach(installment => {
            const value = parseFloat(installment.querySelector('.installmentValue').value)
            const days = parseInt(installment.querySelector('.paymentDays').value)
            installmentsValues.push(value)
            installmentsPaymentDays.push(days)
        })

        npv = netPresentValueCalculate()
        resultElement.textContent = `Valor Presente Líquido: R$ ${nvp}`
    })

    function updateInstallments() {
        const numberOfInstallments = parseInt(numberOfInstallmentsInput.value)
        installmentsContainer.innerHTML = ''

        for (let i = 0; i < numberOfInstallments; i++) {
            const installmentDiv = document.createElement('div')
            installmentDiv.className = 'installment'

            const valueInput = document.createElement('input')
            valueInput.type = 'number'
            valueInput.className = 'installmentValue'
            valueInput.placeholder = `Valor da parcela ${i + 1}`
            valueInput.step = '0.01'
            valueInput.required = true

            const daysInput = document.createElement('input')
            daysInput.type = 'number'
            daysInput.className = 'paymentDays'
            daysInput.placeholder = 'Dias para pagamento'
            daysInput.required = true

            installmentDiv.appendChild(valueInput)
            installmentDiv.appendChild(daysInput)
            installmentsContainer.appendChild(installmentDiv)
        }
    }

    updateInstallments()
})
