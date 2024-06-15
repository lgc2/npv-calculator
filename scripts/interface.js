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

        if (!thereIsEmptyOrInvalidField()) {
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
        } else {
            resultElement.textContent = 'Há campo(s) com valor vazio ou inválido'
        }
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

    function thereIsEmptyOrInvalidField() {
        const monthlyIncomeValue = parseFloat(document.getElementById('monthlyIncome').value)
        if (isNaN(monthlyIncomeValue)) {
            return true
        }

        const installments = document.querySelectorAll('.installment')
        for (let i = 0; i < installments.length; i++) {
            const value = parseFloat(installments[i].querySelector('.installmentValue').value)
            const days = parseInt(installments[i].querySelector('.paymentDays').value)

            if (isNaN(value) || isNaN(days)) {
                return true
            }
        }
        return false
    }

    updateInstallments()
})
