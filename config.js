const CONFIG = {
    SUPABASE_URL: "https://tu-proyecto.supabase.co", // Reemplaza con tu URL real de Supabase
    SUPABASE_KEY: "tu-clave-anon-real",               // Reemplaza con tu Key real de Supabase
    TELEGRAM_CHAT_ID: "tu-chat-id",                   // Opcional
    TELEGRAM_TOKEN: "tu-token-de-telegram",           // Opcional
    TELEGRAM_BOT_TOKEN: "tu-token-de-telegram",       // Opcional
    DISCORD_WEBHOOK_URL: "",
    
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
    }
};