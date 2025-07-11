import { Component, inject } from '@angular/core';
import { IssueItem } from 'src/app/modules/issues/components/issue-item/issue-item';
import { LabelsSelector } from 'src/app/modules/issues/components/labels-selector/labels-selector';
import { IssuesService } from 'src/app/modules/issues/services/issues.service';

@Component({
  selector: 'app-issues-list-page',
  imports: [LabelsSelector, IssueItem],
  templateUrl: './issues-list-page.html',
})
export default class IssuesListPage {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }
}
