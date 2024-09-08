class bank{
    constructor(balance){
        this.balance = balance;
    }

    withdraw(amt){
        if(this.balance > 0)
            this.balance -= amt;
        else
            console.log("Your balance is zero");
    }

    deposit(amt){
        this.balance += amt;
    }

    balanceEnq(){
        console.log(this.balance);
    }
}


const person1 = new bank(500);

person1.balanceEnq();
person1.deposit(200);
person1.balanceEnq();
person1.withdraw(50);
person1.balanceEnq();
person1.withdraw(650);
person1.balanceEnq();
person1.withdraw(10);


