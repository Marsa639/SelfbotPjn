<div align="center">
<img src="https://i.ibb.co/nQg9908/1617265528105.jpg" alt="SelfbotPjn" width="300" />

# SelfbotPjn

>
>
>

<p align="center">
  <a href="https://github.com/Marsa639"><img title="Author" src="https://img.shields.io/badge/Author-Marsa639-red.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/Marsa639/SelfbotPjn#requirements">Requirements</a> •
  <a href="https://github.com/Marsa639/SelfbotPjn#instalasi">Installation</a> •
  <a href="https://github.com/Marsa639/SelfbotPjn#features">Features</a> •
  <a href="https://trakteer.id/Marsa">Buy Me A Coffe</a> •
  <a href="https://github.com/Marsa639/SelfbotPjn#thanks-to">Thanks to</a>
</p>
</div>


---



# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor

# Instalasi
## Clone Repo & Instalasi dependencies
```bash
> git clone https://github.com/Marsa639/SelfbotPjn.git
> cd SelfbotPjn
> npm install
> node amoy
```
## For Termux
```bash
> termux-setup-storage
> apt update && apt upgrade
> pkg install nodejs
> pkg install git
> pkg install bash
> git clone https://github.com/Marsa639/SelfbotPjn.git
> cd SelfbotPjn
> bash install.sh
> npm install
> node amoy
```



## Installing the FFmpeg
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```


## Installing the libwebp
* Unduh salah satu versi libwebp yang tersedia dengan mengklik [di sini](https://developers.google.com/speed/webp/download).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `libwebp`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal libwebp, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> webpmux -version
```

## Menjalankan bot
```bash
> node amoy
atau bisa juga
> npm start
```

 Setelah itu, akan ada QR-CODE, buka WhatsApp-mu yg ingin dijadikan bot, lalu scan code-qr nya!

## Bot Tidak jalan
- Jika bot tidak jalan, coba ganti versi baileys
```bash
> npm i @adiwajshing/baileys@3.4.1
> atau
> npm i @adiwajshing/baileys@3.3.0
```
- Serah aja 

# Features

| Menu Seadanya |✅|
| ------------- | ------------- |
| Sticker WM|✅|
| Costum WM|✅|
| TakeSticker|✅|
| Switch Self Public|✅|
| Hidetag|✅|
| Runtime|✅|
| Speed|✅|
| Set Reply|✅|
| Set Prefix|✅|
| Set Name|✅|
| Set Bio|✅|
| Fake Deface|✅|
| Fake Thumbnail|✅|
| Set thumb|✅|
| Get pic|✅|
| Sticker Tag|✅|
| Image Tag|✅|
| Kontak Tag|✅|
| Forwarded Message|✅|
| Promote|✅|
| Demote|✅|
| Kick|✅|
| Add|✅|
| Eval|✅|

| MAKER |✅|
| --------- | --------- |
| tahta|✅|
| pubg|✅|

# Thanks to
* [`Baileys`](https://github.com/adiwajshing/Baileys)
* [`MhankBarBar`](https://github.com/MhankBarBar)
* [`Aqulzz`](https://github.com/zennn08) 
