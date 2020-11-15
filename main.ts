import {
  App,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TFile
} from "obsidian";

const DEFAULT_PREAMBLE_PATH = "preamble.sty";

export default class MyPlugin extends Plugin {
  async reload_preamble() {
    const file = this.app.vault.getAbstractFileByPath(DEFAULT_PREAMBLE_PATH);
    const content = await this.app.vault.read(file);
    MathJax.tex2chtml(content);
  }

  onload() {
    console.log("loading obsidian-latex-preamble-plugin");

    this.addCommand({
      id: "obsidian-latex-preamble-plugin-reload-latex",
      name: "Reload latex preamble",
      callback: () => {
        this.reload_preamble();
        new Notice("Reloaded Latex preamble");
      }
    });

    this.reload_preamble();
  }

  onunload() {
    console.log("unloading obsidian-latex-preamble-plugin");
  }
}
