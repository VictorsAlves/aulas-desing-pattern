class AppConfig {
    private static instance: AppConfig;
    private settings: { [key: string]: string } = {};

    private constructor() {
        console.log("carregando configuracoes iniciais ...")
        this.settings["apiUrl"] = "http://localhost:8080/api";
        this.settings["apiKey"] = "12345678";
        this.settings["timeout"] = "5000";
    }

    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }

    get(key: string): string {
        return this.settings[key];
    }

    set(key: string, value: string): void {
        this.settings[key] = key;
    }
}

//uso
const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

console.log(config1.get("apiUrl"));// http://localhost:8080/api"
console.log(config1 === config2);

