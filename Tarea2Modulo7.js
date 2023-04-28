
class personAccount{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [] //ingresos //[20,45,67]
        this.expenses = [] //gastos
    }
   //* [{2,'pago por la quincena'},{100, 'pago por el arreglo de la impresona'}]

    //TotalIngresos
    totalIncome(){
        let sum = 0
        for(let income of this.incomes){
            sum +=income.amount
        }
        return sum
    }

    //totalEgresos
    totalExpense(){
        let sum = 0
        for(let expense of this.expenses){
            sum += expense.amount
        }
        return sum
    }


    //añadirIngresos
    addIncome(amount, descripcion){
        this.incomes.push({amount, descripcion});
    }

    //añadirGastos
    addExpense(amount, descripcion){
        this.expenses.push({amount, descripcion});

    }

    
    
    //cuentaBalance
    accountBalance(){
        return this.totalIncome - this.totalExpense   //ingresos menos gastos

        
    }
    //cuentaInformación
    accountInfo(){
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income: ${this.totalIncome()}`);
    console.log(`Total Expense: ${this.totalExpense()}`);
    console.log(`Total Balance: ${this.accountBalance()}`);
    }
}
const persona1 = new personAccount('Esteban', 'Carrillo')
persona1.addIncome(2000, 'Salary')
persona1.addExpense(1000, 'Rent')
persona1.accountInfo()