window.onload = function() {
    let donation = document.getElementById('donate'),
        donationValue = document.getElementsByName('donate')[0];

    donation.addEventListener("click", function() {
        let value = donationValue.value;
        value = parseFloat(value) * 1000000;
        sendTransaction(value);
    });


    var sendTransaction = function(amount) {

        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== 'undefined') {
            var data = {
                to: '0x8C65f22B9Ce6c2D89A7941506aC86d14e53Af072',
                value: amount.toString() + '000000000000',
                gas: 30000,
                gasPrice: "50000000000"
            };

            console.log('transactionData ' + JSON.stringify(data));
            // Use Mist/MetaMask's provider
            web3.eth.sendTransaction(data, function() {});

        }
    };

};