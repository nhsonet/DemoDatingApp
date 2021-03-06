import { HomeComponent } from './home/home.component';
import { LikeListComponent } from './like-list/like-list.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MessageComponent } from './message/message.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

import { Routes } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';
import { PreventUnsavedChangesGuard } from './_guard/prevent-unsaved-changes.guard';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { LikeListResolver } from './_resolvers/like-list.resolver';
import { MessageResolver } from './_resolvers/message.resolver';

export const appRoutes: Routes = [
    // { path: '', component: HomeComponent },
    // {
    //     path: '',
    //     runGuardsAndResolvers: 'always',
    //     canActivate: [AuthGuard],
    //     children: [
    //         { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
    //         { path: 'members/:id', component: MemberDetailComponent, canDeactivate: [PreventUnsavedChangesGuard], resolve: { user: MemberDetailResolver } },
    //         { path: 'member/edit', component: MemberEditComponent, resolve: { user: MemberEditResolver } },
    //         { path: 'likes', component: LikeListComponent, resolve: { users: LikeListResolver } },
    //         { path: 'messages', component: MessageComponent, resolve: { messages: MessageResolver } },
    //         { path: 'admin', component: AdminPanelComponent },
    //     ]
    // },
    // { path: '**', redirectTo: '', pathMatch: 'full' }

    { path: 'home', component: HomeComponent },

    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard],
        resolve: { users: MemberListResolver } },

    { path: 'members/:id', component: MemberDetailComponent, canActivate: [AuthGuard],
        resolve: { user: MemberDetailResolver } },

    { path: 'member/edit', component: MemberEditComponent, canActivate: [AuthGuard], canDeactivate: [PreventUnsavedChangesGuard],
        resolve: { user: MemberEditResolver } },

    { path: 'likes', component: LikeListComponent, canActivate: [AuthGuard],
        resolve: { users: LikeListResolver } },

    { path: 'messages', component: MessageComponent, canActivate: [AuthGuard],
        resolve: { messages: MessageResolver } },

    { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard], data: {roles: ['Admin', 'Moderator']} },

    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
