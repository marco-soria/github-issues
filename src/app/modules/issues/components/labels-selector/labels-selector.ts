import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GitHubLabel } from 'src/app/modules/issues/interfaces';

@Component({
  selector: 'app-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.html',
})
export class LabelsSelector {
  labels = input.required<GitHubLabel[]>();
}
