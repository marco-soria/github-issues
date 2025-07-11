import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GitHubIssue, State } from 'src/app/modules/issues/interfaces';

@Component({
  selector: 'app-issue-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-item.html',
})
export class IssueItem {
  issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
