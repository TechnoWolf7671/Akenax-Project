(function() {
    if (window.location.href !== "https://puhfy.puhfy.repl.co") {
        alert("Please go to https://puhfy.puhfy.repl.co to generate an OTA key.");
        return;
    }

    var OTA_KEY_LENGTH = 12;
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var otaKey = Array.from({ length: OTA_KEY_LENGTH }, () => characters[Math.floor(Math.random() * characters.length)]).join("");

    var dbPromise = RxDB.createRxDatabase({
        name: "ota_keys",
        adapter: "idb"
    });

    dbPromise.then((db) => {
        db.collection("keys")
            .insert({
                key: otaKey,
                date: new Date().toISOString()
            })
            .then(() => {
                alert("Your OTA key is: " + otaKey + "\nPlease copy and save it somewhere safe.");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
})();
