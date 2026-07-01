import { Component, computed, DOCUMENT, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Buttons } from './buttons/buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Buttons],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected doc = inject(DOCUMENT);
  protected readonly title = signal('am-dark');
  
  public rootMode = signal('');
  public displayRootMode = computed(() => {
    if (this.rootMode().length) {
      return this.rootMode();
    }
    return '(no class)';
  });

    
  public rootTheme = signal('');
  public displayRootTheme = computed(() => {
    if (this.rootTheme().length) {
      return this.rootTheme();
    }
    return '(no theme - "azure" default)';
  });

  constructor() {
    effect(() => {
      const mode = this.rootMode();
      this.doc.documentElement.classList.remove('light');
      this.doc.documentElement.classList.remove('dark');
      if (mode?.length) {
        this.doc.documentElement.classList.add(mode);
      }
      // this.doc.documentElement.setAttribute('data-mode', mode);
    });
    effect(() => {
      const theme = this.rootTheme();
      const ele = this.doc.documentElement;
      ele.classList.remove('orange');
      ele.classList.remove('green');
      if (theme?.length) {
        ele.classList.add(`${theme}`);
      }
    });
  }
}
