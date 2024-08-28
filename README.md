# Telestai Signature Browser Extension

**WARNING**: This is a proof-of-concept extension and should only be used by developers who understand the risks involved. **Do not run this extension if you are unfamiliar with the Telestai core wallet, RPC configurations, or the security implications of exposing your wallet.**

## Introduction

The Telestai Signature Browser Extension demonstrates the feasibility of interacting directly with the Telestai core wallet via RPC. It allows users to sign messages using their Telestai wallet from a browser extension.

**In its current state, this extension could open your wallet to potential exploits. Running it in a secure environment is absolutely essential.**

## Security Disclaimer

- **Do not use this extension on a wallet containing real funds** unless you fully understand the risks.
- **Ensure your RPC interface is restricted to `localhost`** and never exposed to external networks.
- **Run the extension in a secure, isolated environment** such as a virtual machine or a dedicated development machine to avoid any compromise of your wallet.
- **If you don't know what you're doing**, do not run this extension. It is strictly intended for developers and should not be used in production environments.

## Features

- Connects to a Telestai core wallet running locally via RPC.
- Signs messages using the wallet's private keys securely through local RPC communication.

## Usage

1. **Configure your Telestai wallet** to enable RPC by modifying your `telestai.conf` file. The file should include the following lines:

   ```bash
   rpcuser=your_rpc_username
   rpcpassword=your_rpc_password
   rpcallowip=127.0.0.1  # Only allow connections from localhost
   rpcport=YOUR_TELESTAI_PORT  # Replace with your Telestai RPC port
