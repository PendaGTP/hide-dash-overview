import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class HideDashInOverviewExtension extends Extension {
  enable() {
    Main.overview.dash.hide();
  }

  disable() {
    Main.overview.dash.show();
  }
}
