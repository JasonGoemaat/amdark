import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {}
