import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-token-configuration',
  templateUrl: './token-configuration.component.html',
  styleUrls: ['./token-configuration.component.css']
})
export class TokenConfigurationComponent implements OnInit{
  tokenForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tokenForm = this.fb.group({
      apiToken: ['', Validators.required],
    });
  }

  saveToken() {
    const apiTokenControl = this.tokenForm.get('apiToken');
    if (apiTokenControl) {
      const token = apiTokenControl.value;
      localStorage.setItem('apiToken', token);
    }
  }

  ngOnInit(): void {
  }
}
