/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 * 
 * @hint - Gunakan Destructing Object
 */
const {index, store, update, destroy} = require('./Controller/FruitController');

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 * - Jalankan program: node app.js
 */
const main = () => {
    console.log(`Method index - Menampilkan Buah`);
    index();

    store('Pisang');

    update(0, 'Kelapa');
    
    destroy(0);
}

main();