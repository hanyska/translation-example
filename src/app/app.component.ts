import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableLanguage;

  constructor(public translate: TranslateService,
              private langService: LanguageService) {
    this.getLingohubLangs();
  }

  private getPoEditorLangs() {
    this.langService.getPoEditorLangs().subscribe(data => {
      console.log(data.languages);
      this.availableLanguage = data.languages.map(lang => lang.code);
    }, err => {
      console.log(err);
    });
  }

  private getLingohubLangs() {
    this.langService.getLingohubLangs().subscribe((data: any) => {
      console.log(data.project_locales);
      this.availableLanguage = data.project_locales;
    }, err => {
      console.log(err);
    });
  }
}
