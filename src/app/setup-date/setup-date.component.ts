import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _id: number;

  // tslint:disable-next-line:variable-name
  _pet: Pet;

  createDateForm = this.formBuilder.group({
      name: ''
    });

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) {
    this._id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPetById();
  }

  getPetById(): void {
    this.petService.getPetById(this._id).subscribe(pet => this._pet = pet);
  }

  // tslint:disable-next-line:typedef
  createPlayDate(id: number) {
    this.petService.increasePopularity(id).subscribe();
    // @ts-ignore
    this.petService.sendMessage(this.createDateForm.value).subscribe(() => this.router.navigate(['']));
  }
}
