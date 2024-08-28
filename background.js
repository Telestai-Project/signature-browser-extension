chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.type === 'signMessage') {
        const rpcUser = request.rpcUser;
        const rpcPassword = request.rpcPassword;
        const rpcPort = request.rpcPort;
        const walletAddress = request.walletAddress;
        const message = request.message;

        const rpcUrl = `http://127.0.0.1:${rpcPort}/`;
        const auth = btoa(`${rpcUser}:${rpcPassword}`);  // Basic Auth for RPC

        // Build the RPC request to sign the message
        const rpcRequest = {
            jsonrpc: "1.0",
            id: "curltest",
            method: "signmessage",
            params: [walletAddress, message]
        };

        try {
            // Send the RPC request to the Telestai wallet
            const response = await fetch(rpcUrl, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + auth,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rpcRequest)
            });
            const data = await response.json();

            if (data.result) {
                sendResponse({ signedMessage: data.result });
            } else {
                sendResponse({ error: data.error.message });
            }
        } catch (error) {
            sendResponse({ error: error.message });
        }

        // Required to indicate an asynchronous response
        return true;
    }
});
