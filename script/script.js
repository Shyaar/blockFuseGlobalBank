// { // the User bio generator
//   const userBio = {
//     firstName: "",
//     lastName: "",
//     fullName: "",
//     accountType: "",
//     accountNumber: "",

//     bio: (document.getElementById("mySubmit").onclick = function (event) {
//       event.preventDefault();

//       firstName = document.getElementById("firstName").value;
//       console.log(firstName);

//       lastName = document.getElementById("lastName").value;
//       console.log(lastName);

//       fullName = `${firstName} ${lastName}`;
//       console.log(fullName);

//       accountType = document.getElementById("selectAccount").value;
//       console.log(accountType);

//       accountNumber = "01" + Math.floor(Math.random() * 90000000000);
//       console.log(accountNumber);

//       document.getElementById(
//         "greeting"
//       ).innerHTML = `Welcome ${fullName} to the Blockfuse Global Bank family. Your Account Number is ${accountNumber}. please continue to perform transactions on your Account. Thank you!!`;

//       document.getElementById("Welcome").style.display = "block";
//     }),
//   };
// }

// //login button
// document.getElementById("continue").onclick = function(){
//   window.location.href = "transaction.html";
// };

// this are the transactions codes 
    let bankAccount = {
      accountHolder: 'jam',
      accountNumber: 23445009123,
      accountBalance: 0,

      check_balance: function () {
        console.log(this.accountBalance);
      },

      deposit: function (amount) {
        this.accountBalance += amount;
      },

      withdraw: function (amount) {
        this.accountBalance -= amount
      },

      transfer: function (amount) {
        this.accountBalance -= amount;
        bankAccount2.accountBalance += amount;
      },

      getLoan: function (amount){
        loanLimit = 500000;

        if (amount <= 500000){
          this.accountBalance += amount;
          console.log(`Hello ${this.accountHolder}, Your loan of ${amount} has been granted`)
        } else
          console.log(
            `Hello ${this.accountHolder}, your loan limit is ${loanLimit}. Your loan request for ${amount} has been denied. You can still borrow ${loanLimit}. Thank you for using Blockfuse Global Bank!!`
          );
      }
    };

    const customerData = [
        {
            
        }
    ] 


document.getElementById("welcomeMessage").innerHTML = `Welcome ${fullName} your Account balance is ${accountBalance}`;

console.log(bankAccount)
bankAccount.deposit(50000)
bankAccount.check_balance()
bankAccount.getLoan(50000000000)