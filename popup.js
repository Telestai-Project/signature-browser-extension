document.getElementById('walletForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const rpcUser = document.getElementById('rpcUser').value;
    const rpcPassword = document.getElementById('rpcPassword').value;
    const rpcPort = document.getElementById('rpcPort').value;
    const walletAddress = document.getElementById('walletAddress').value;
    const message = document.getElementById('message').value;

    // Send the credentials and message to background.js for RPC call
    chrome.runtime.sendMessage({
        type: 'signMessage',
        rpcUser: rpcUser,
        rpcPassword: rpcPassword,
        rpcPort: rpcPort,
        walletAddress: walletAddress,
        message: message
    }, function (response) {
        document.getElementById('result').innerText = response.signedMessage || `Error: ${response.error}`;
    });
});
