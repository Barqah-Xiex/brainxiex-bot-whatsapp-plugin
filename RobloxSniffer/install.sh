#!/usr/bin/env sh

# Banner
clear;
echo ""
echo ""
echo "[31m ____       _     _            ____        _  __  __           [0m"
echo "[31m|  _ \ ___ | |__ | | _____  __/ ___| _ __ (_)/ _|/ _| ___ _ __ [0m"
echo "[31m| |_) / _ \| '_ \| |/ _ \ \/ /\___ \| '_ \| | |_| |_ / _ \ '__|[0m"
echo "[31m|  _ < (_) | |_) | | (_) >  <  ___) | | | | |  _|  _|  __/ |   [0m"
echo "[31m|_| \_\___/|_.__/|_|\___/_/\_\|____/|_| |_|_|_| |_|  \___|_|   [0m"
echo "[31m                                                               [0m"
echo ""
echo ""
echo "[31mAuthor : Barqah-Xiex[0m"
echo "[31mThis script will install RobloxSniffer plugin for your bot.[0m"
echo ""
sleep 1

# Install Dependencies
echo "[36mInstalling Dependencies...[0m"
# npm install axios;
echo ""


# Function for installing
downloader() {
    local URL="$1"
    local NAMA_FILE="$2"

    mkdir -p "$(dirname "$NAMA_FILE")"
    echo "[RobloxSniffer Download] $URL $NAMA_FILE"
    curl -sSL "$URL" -o "$NAMA_FILE"
}

# Install Plugin
echo "[36mInstalling RobloxSniffer...[0m"
downloader "https://raw.githubusercontent.com/Barqah-Xiex/brainxiex-bot-whatsapp-plugin/refs/heads/main/RobloxSniffer/addons/RobloxSniffer.js" "./addons/RobloxSniffer.js"
downloader "https://raw.githubusercontent.com/Barqah-Xiex/brainxiex-bot-whatsapp-plugin/refs/heads/main/RobloxSniffer/fitur/Owner/RobloxSniffer.js" "./fitur/Owner/RobloxSniffer.js"
echo ""


# End of Installation
echo "[36mInstallation Complete![0m"
echo ""
echo "[31m-----------------------------------------------[0m"
echo "[33m==============================================="
echo "                     [33m[[0m [31m![0m [33m][0m"
echo "[33mFITURNYA SUDAH TERINSTALL DI MENU ![0m"
echo "[31mGunakan: [35m/robloxsniffer help[0m"
echo "Ganti Tanda (/) Dengan Prefix Bot Kamu !"
echo ""
echo "[33m===============================================[0m"
echo "[31m-----------------------------------------------[0m"
sleep 1;
echo ""
sleep 2;
echo ""
sleep 3;
