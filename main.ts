import {
  App,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting
} from "obsidian";

export default class MyPlugin extends Plugin {
  onload() {
    console.log("loading obsidian-latex-header-plugin");

    this.addCommand({
      id: "obsidian-latex-header-plugin-reload-latex",
      name: "Reload latex header",
      callback: () => {
        new Notice("Simple Callback");
      }
    });

    this.addSettingTab(new SettingTab(this.app, this));

    MathJax.tex2chtml("\\def\\bongo{{\\mathbb Q}}\n");
  }

  onunload() {
    console.log("unloading obsidian-latex-header-plugin");
  }
}

class SettingTab extends PluginSettingTab {
  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    containerEl.createEl("h2", { text: "Settings for my awesome plugin." });

    new Setting(containerEl)
      .setName("Setting #1")
      .setDesc("It's a secret")
      .addText(text =>
        text
          .setPlaceholder("Enter your secret")
          .setValue("")
          .onChange(value => {
            console.log("Secret: " + value);
          })
      );
  }
}
