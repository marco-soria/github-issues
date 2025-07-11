import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueComment } from 'src/app/modules/issues/components/issue-comment/issue-comment';
import { IssueService } from '../../services/issue.service';
@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueComment],
  templateUrl: './issue-page.html',
})
export default class IssuePage {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
}
