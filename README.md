Vue Slider
===
**Consegna:**
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
**Bonus:**
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
4- al doppio click sullo slider cambia la direzione dell’autoplay
**Consigli del giorno:**
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;

## STEP DA SEGUIRE
1. genero prima le immagini grandi, prendendo l'array images con un counter e le visualizzo
2. utilizzo un v-for per generare le thumbnails