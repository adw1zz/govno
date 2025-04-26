import cc from "cc";

class Application {
  constructor() {
    this.settingsPath = "src/settings.json";
    this.showFPS = false;
  }

  init(engine) {
    cc = engine;
    cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
    cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
  }

  onPostInitBase() {
    // cc.settings.overrideSettings('assets', 'server', '');
    // Можно добавить логику инициализации
  }

  onPostSystemInit() {
    // Можно добавить логику системной инициализации
  }

  start() {
    return cc.game
      .init({
        debugMode: false ? cc.DebugMode.INFO : cc.DebugMode.ERROR,
        settingsPath: this.settingsPath,
        overrideSettings: {
          profiling: {
            showFPS: this.showFPS,
          },
        },
      })
      .then(() => cc.game.run());
  }
}

export default Application;
