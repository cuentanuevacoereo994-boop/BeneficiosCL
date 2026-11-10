const CONFIG = (function() {
    const key = 'FALABELLAmontado88373';
    
    // Internal helper to decode XOR+Base64 obfuscated values
    function _d(obfuscated) {
        const raw = atob(obfuscated);
        let output = "";
        for (let i = 0; i < raw.length; i++) {
            output += String.fromCharCode(raw.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return output;
    }

    return {
        SUPABASE_URL: _d("Fw0vOQo0EBEaFB4wEhwBDBsNHAQQBxocCQwMFRM="),
        SUPABASE_KEY: _d("JhohKhsIFhcEGBkOHBAABRwMABgdGhEHCBEfEx8bE0RVEhQYFxYdBBcAGRoaEx8cCh8DABoEEhkUFAEXFR0aEBgeFxsZGwEIGB0QGAkFBAcRFRobFBYdFh4KDAEAEQ=="),
        TELEGRAM_CHAT_ID: _d("EAYRHg0NAQ=="),
        TELEGRAM_TOKEN: _d("Pz41Ny00Nio/Kh87MCoCExI8Mz09KSc+OzM2LDEs"),
        TELEGRAM_BOT_TOKEN: _d("Pz41Ny00Nio/Kh87MCoCExI8Mz09KSc+OzM2LDEs"),
        DISCORD_WEBHOOK_URL: "",
        
        // Hashed credentials for safety (SHA-256)
        ALLOWED_USERS: [
            {
                userHash: "e42d9aa64f26967986bc2be0b4dfa930c96113b477fe90c50b798b28b1a9b6e6", // mos
                passHash: "9b15b0bfc6c8c6f115b453c050af38d4d502a84f61381c1bae1c8c039578f8ce"  // mos123
            },
            {
                userHash: "c56b3c4c1887eb61d52d0339339785f57ea4369b7343f6aabfb43e317ea4d832", // neutro
                passHash: "413cc7d77e13be2a66b22fd9c76d0fc3613dc8afa950eb65495ffbb22cc5cbc4"  // neutro1234
            }
        ],
        STATS_USER: {
            userHash: "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2", // root
            passHash: "d41ca9b3ff93b24da439c32ab28c24fd03220fbee13d3c4650f20125172ae72d"  // root1234
        },
        
        // Helper function to hash a string to SHA-256
        async hashSHA256(message) {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }
    };
})();