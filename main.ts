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
  get_preamble = async () => {
    const file = this.app.vault.getAbstractFileByPath(DEFAULT_PREAMBLE_PATH);
    const preamble = await this.app.vault.read(file);
    return preamble;
  }

  load_preamble = async () => {
    const preamble = await this.get_preamble();
    MathJax.startup.ready = () => {
      MathJax.startup.defaultReady();
      MathJax.tex2chtml(preamble);
    }
  }

  reload_preamble = async () => {
    const preamble = await this.get_preamble();
    MathJax.tex2chtml(preamble);
  }

  async onload() {
    console.log("loading obsidian-latex-preamble-plugin");

    this.addCommand({
      id: "obsidian-latex-preamble-plugin-reload-latex",
      name: "Reload latex preamble",
      callback: () => {
        this.reload_preamble();
        new Notice("Reloaded Latex preamble");
      }
    });

    this.app.workspace.on('layout-ready', this.load_preamble);
  }

  onunload() {
    console.log("unloading obsidian-latex-preamble-plugin");
  }
}
