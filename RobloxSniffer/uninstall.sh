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
echo "[31mThis script will uninstall RobloxSniffer plugin for your bot.[0m"
echo ""
sleep 1

# Uninstall Plugin
echo "[36mUninstalling RobloxSniffer...[0m"
echo ""
sleep 1

echo "[36mRemoving RobloxSniffer.js...[0m"
rm -fv ./addons/RobloxSniffer.js
rm -fv ./fitur/Owner/RobloxSniffer.js
echo ""
sleep 1

echo "[36mUninstallation Complete![0m"