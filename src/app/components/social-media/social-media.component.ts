import {Component, Input, OnInit} from '@angular/core';
import {SocialMedia} from '../../classes/resort';

@Component({
  selector: 'hww-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  @Input() social: SocialMedia;

  constructor() { }

  ngOnInit() {
  }

}
